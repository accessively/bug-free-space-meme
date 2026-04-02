import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { validateConsentAndSpam } from "../_lib/antiSpam";

const DEFAULT_SENDER_EMAIL = "websitesaccessively@gmail.com";
const DEFAULT_RECEIVER_EMAIL = "solutions@accessivelybpo.com";

type SubmissionRecord = {
  id: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  skills: string;
  availability: string;
  coverLetter: string;
  portfolio: string;
  references: string;
  additionalInfo: string;
  resumeFileName: string;
  resumeStoredPath: string;
};

const toText = (value: FormDataEntryValue | null) => (typeof value === "string" ? value.trim() : "");

const optional = (value: string) => (value ? value : "Not provided");

const getPositionName = (positionValue: string) => {
  const positionMap: { [key: string]: string } = {
    "information-technology-technical-support": "Virtual Assistant - Information Technology & Technical Support",
    "social-media-digital-marketing-content-strategy": "Sales & Marketing Specialist - Social Media & Digital Marketing",
    "graphic-design-visual-media-creative-services": "Graphic Designer - Visual Media & Creative Services",
    "video-editing-multimedia-production-content-creation": "Web Developer - Video Editing & Multimedia Production",
    "customer-support-technical-support-sales-client-services": "Customer Service Representative - Customer Support & Sales",
    "virtual-assistant-administrative-support": "Virtual Assistant - Administrative Support",
  };
  return positionMap[positionValue] || positionValue;
};

const buildEmailText = (submission: SubmissionRecord) => {
  return [
    "Accessively Application Submission",
    "",
    `Submission ID: ${submission.id}`,
    `Submitted At: ${submission.createdAt}`,
    "",
    `First Name: ${optional(submission.firstName)}`,
    `Last Name: ${optional(submission.lastName)}`,
    `Email: ${optional(submission.email)}`,
    `Phone: ${optional(submission.phone)}`,
    `Position Applied For: ${optional(submission.position)}`,
    `Years of Experience: ${optional(submission.experience)}`,
    `Relevant Skills: ${optional(submission.skills)}`,
    `Availability: ${optional(submission.availability)}`,
    `Cover Letter: ${optional(submission.coverLetter)}`,
    `Portfolio/LinkedIn/GitHub: ${optional(submission.portfolio)}`,
    `References: ${optional(submission.references)}`,
    `Additional Information: ${optional(submission.additionalInfo)}`,
    `Resume File Name: ${optional(submission.resumeFileName)}`,
    `Stored Resume Path: ${optional(submission.resumeStoredPath)}`,
  ].join("\n");
};

const sendSubmissionEmail = async (submission: SubmissionRecord) => {
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
  if (submission.resumeStoredPath) {
    try {
      attachments.push({
        filename: submission.resumeFileName,
        path: submission.resumeStoredPath,
      });
    } catch (error) {
      console.error("Failed to attach resume:", error);
    }
  }

  await transporter.sendMail({
    from: sender,
    to: recipient,
    subject: `Application for Employment - ${getPositionName(submission.position)} - ${submission.firstName} ${submission.lastName}`.trim(),
    text: buildEmailText(submission),
    attachments,
  });

  return true;
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const guardError = validateConsentAndSpam(request, formData, "applications");
    if (guardError) {
      return NextResponse.json({ ok: false, message: guardError }, { status: 400 });
    }

    const firstName = toText(formData.get("firstName"));
    const lastName = toText(formData.get("lastName"));
    const email = toText(formData.get("email"));
    const phone = toText(formData.get("phone"));
    const position = toText(formData.get("position"));
    const experience = toText(formData.get("experience"));
    const skills = toText(formData.get("skills"));
    const availability = toText(formData.get("availability"));
    const coverLetter = toText(formData.get("coverLetter"));
    const portfolio = toText(formData.get("portfolio"));
    const references = toText(formData.get("references"));
    const additionalInfo = toText(formData.get("additionalInfo"));

    if (!firstName || !lastName || !email || !position) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const id = `app-${Date.now()}`;
    const createdAt = new Date().toISOString();

    const resumeEntry = formData.get("resume");
    let resumeFileName = "";
    let resumeStoredPath = "";

    if (resumeEntry instanceof File && resumeEntry.size > 0) {
      const uploadDir = path.join(process.cwd(), "data", "uploads");
      await fs.mkdir(uploadDir, { recursive: true });

      const sanitizedName = resumeEntry.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const fileName = `${id}-${sanitizedName}`;
      const filePath = path.join(uploadDir, fileName);
      const buffer = Buffer.from(await resumeEntry.arrayBuffer());

      await fs.writeFile(filePath, buffer);
      resumeFileName = resumeEntry.name;
      resumeStoredPath = filePath;
    }

    const submission: SubmissionRecord = {
      id,
      createdAt,
      firstName,
      lastName,
      email,
      phone,
      position,
      experience,
      skills,
      availability,
      coverLetter,
      portfolio,
      references,
      additionalInfo,
      resumeFileName,
      resumeStoredPath,
    };

    const dataDir = path.join(process.cwd(), "data", "submissions");
    await fs.mkdir(dataDir, { recursive: true });
    await fs.appendFile(
      path.join(dataDir, "applications.ndjson"),
      `${JSON.stringify(submission)}\n`,
      "utf8"
    );

    let emailed = false;
    let emailError = "";

    try {
      emailed = await sendSubmissionEmail(submission);
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
