import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { validateConsentAndSpam } from "../_lib/antiSpam";

const DEFAULT_SENDER_EMAIL = "websitesaccessively@gmail.com";
const DEFAULT_RECEIVER_EMAIL = "solutions@accessivelybpo.com";
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;

type HelpCenterSubmission = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  inquiryType: string;
  subject: string;
  message: string;
  photoFileName: string;
  photoStoredPath: string;
};

const toText = (value: FormDataEntryValue | null) =>
  typeof value === "string" ? value.trim() : "";

const optional = (value: string) => (value ? value : "Not provided");

const buildEmailText = (submission: HelpCenterSubmission) => {
  return [
    "Help Center Message Submission",
    "",
    `Submission ID: ${submission.id}`,
    `Submitted At: ${submission.createdAt}`,
    "",
    `Name: ${optional(submission.name)}`,
    `Email: ${optional(submission.email)}`,
    `Inquiry Type: ${optional(submission.inquiryType)}`,
    `Subject: ${optional(submission.subject)}`,
    `Message: ${optional(submission.message)}`,
    `Photo File Name: ${optional(submission.photoFileName)}`,
    `Stored Photo Path: ${optional(submission.photoStoredPath)}`,
  ].join("\n");
};

const sendHelpCenterEmail = async (submission: HelpCenterSubmission) => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const sender = process.env.SMTP_FROM || DEFAULT_SENDER_EMAIL;
  const recipient = process.env.FORM_RECEIVER_EMAIL || DEFAULT_RECEIVER_EMAIL;

  if (!host || !user || !pass) {
    return false;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const attachments = [];
  if (submission.photoStoredPath) {
    attachments.push({
      filename: submission.photoFileName,
      path: submission.photoStoredPath,
    });
  }

  await transporter.sendMail({
    from: sender,
    to: recipient,
    subject: `Help Center Message - ${optional(submission.subject)} - ${submission.name}`.trim(),
    text: buildEmailText(submission),
    attachments,
  });

  return true;
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const guardError = validateConsentAndSpam(request, formData, "help-center");
    if (guardError) {
      return NextResponse.json({ ok: false, message: guardError }, { status: 400 });
    }

    const name = toText(formData.get("name"));
    const email = toText(formData.get("email"));
    const inquiryType = toText(formData.get("inquiryType"));
    const subject = toText(formData.get("subject"));
    const message = toText(formData.get("message"));

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const id = `help-${Date.now()}`;
    const createdAt = new Date().toISOString();

    const photoEntry = formData.get("photo");
    let photoFileName = "";
    let photoStoredPath = "";

    if (photoEntry instanceof File && photoEntry.size > 0) {
      if (!photoEntry.type.startsWith("image/")) {
        return NextResponse.json(
          { ok: false, message: "Only image files are allowed." },
          { status: 400 }
        );
      }

      if (photoEntry.size > MAX_FILE_SIZE_BYTES) {
        return NextResponse.json(
          { ok: false, message: "Image must be 5MB or smaller." },
          { status: 400 }
        );
      }

      const uploadDir = path.join(process.cwd(), "data", "uploads");
      await fs.mkdir(uploadDir, { recursive: true });

      const sanitizedName = photoEntry.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const fileName = `${id}-${sanitizedName}`;
      const filePath = path.join(uploadDir, fileName);
      const buffer = Buffer.from(await photoEntry.arrayBuffer());

      await fs.writeFile(filePath, buffer);
      photoFileName = photoEntry.name;
      photoStoredPath = filePath;
    }

    const submission: HelpCenterSubmission = {
      id,
      createdAt,
      name,
      email,
      inquiryType,
      subject,
      message,
      photoFileName,
      photoStoredPath,
    };

    const dataDir = path.join(process.cwd(), "data", "submissions");
    await fs.mkdir(dataDir, { recursive: true });
    await fs.appendFile(
      path.join(dataDir, "help-center.ndjson"),
      `${JSON.stringify(submission)}\n`,
      "utf8"
    );

    let emailed = false;
    let emailError = "";

    try {
      emailed = await sendHelpCenterEmail(submission);
    } catch (error) {
      emailed = false;
      emailError = error instanceof Error ? error.message : "Email delivery failed.";
    }

    return NextResponse.json({ ok: true, id, stored: true, emailed, emailError });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Submission failed.";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
