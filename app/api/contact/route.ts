import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { validateConsentAndSpam } from "../_lib/antiSpam";

const DEFAULT_SENDER_EMAIL = "websitesaccessively@gmail.com";
const DEFAULT_RECEIVER_EMAIL = "solutions@accessivelybpo.com";

type ContactRecord = {
  id: string;
  createdAt: string;
  contactType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  availabilityDate: string;
  availabilityTime: string;
  availabilityTimeZone: string;
  businessType: string;
  message: string;
  imageFileName: string;
  imageStoredPath: string;
};

const toText = (value: FormDataEntryValue | null) => (typeof value === "string" ? value.trim() : "");

const optional = (value: string) => (value ? value : "Not provided");

const formatContactType = (value: string) => {
  if (value === "sales") return "Contact Sales";
  if (value === "consultation") return "Book a Consultation";
  return value ? value : "General Inquiry";
};

const buildEmailText = (contact: ContactRecord) => {
  return [
    "Contact Form Submission",
    "",
    `Contact ID: ${contact.id}`,
    `Submitted At: ${contact.createdAt}`,
    "",
    `First Name: ${optional(contact.firstName)}`,
    `Last Name: ${optional(contact.lastName)}`,
    `Email: ${optional(contact.email)}`,
    `Number: ${optional(contact.phone)}`,
    `Availability Date: ${optional(contact.availabilityDate)}`,
    `Availability Time: ${optional(contact.availabilityTime)}`,
    `Availability Time Zone: ${optional(contact.availabilityTimeZone)}`,
    `Business Type: ${optional(contact.businessType)}`,
    `Contact Type: ${optional(contact.contactType)}`,
    "",
    `Message:`,
    `${optional(contact.message)}`,
    "",
    `Image File Name: ${optional(contact.imageFileName)}`,
    `Stored Image Path: ${optional(contact.imageStoredPath)}`,
  ].join("\n");
};

const sendContactEmail = async (contact: ContactRecord) => {
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
  if (contact.imageStoredPath) {
    try {
      attachments.push({
        filename: contact.imageFileName,
        path: contact.imageStoredPath,
      });
    } catch (error) {
      console.error("Failed to attach image:", error);
    }
  }

  await transporter.sendMail({
    from: sender,
    to: recipient,
    subject: `[${formatContactType(contact.contactType)}] Contact Form - ${contact.firstName} ${contact.lastName}`.trim(),
    text: buildEmailText(contact),
    attachments,
  });

  return true;
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const guardError = validateConsentAndSpam(request, formData, "contact");
    if (guardError) {
      return NextResponse.json({ ok: false, message: guardError }, { status: 400 });
    }

    const firstName = toText(formData.get("firstName"));
    const lastName = toText(formData.get("lastName"));
    const email = toText(formData.get("email"));
    const phone = toText(formData.get("phone"));
    const availabilityDate = toText(formData.get("availabilityDate"));
    const availabilityTime = toText(formData.get("availabilityTime"));
    const availabilityTimeZone = toText(formData.get("availabilityTimeZone"));
    const businessType = toText(formData.get("businessType"));
    const contactType = toText(formData.get("contactType"));
    const message = toText(formData.get("message"));

    if (!firstName || !lastName || !email || !phone || !availabilityDate || !availabilityTime || !availabilityTimeZone || !message) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const id = `contact-${Date.now()}`;
    const createdAt = new Date().toISOString();

    const imageEntry = formData.get("image");
    let imageFileName = "";
    let imageStoredPath = "";

    if (imageEntry instanceof File && imageEntry.size > 0) {
      const uploadDir = path.join(process.cwd(), "data", "uploads");
      await fs.mkdir(uploadDir, { recursive: true });

      const sanitizedName = imageEntry.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const fileName = `${id}-${sanitizedName}`;
      const filePath = path.join(uploadDir, fileName);
      const buffer = Buffer.from(await imageEntry.arrayBuffer());

      await fs.writeFile(filePath, buffer);
      imageFileName = imageEntry.name;
      imageStoredPath = filePath;
    }

    const contact: ContactRecord = {
      id,
      createdAt,
      contactType,
      firstName,
      lastName,
      email,
      phone,
      availabilityDate,
      availabilityTime,
      availabilityTimeZone,
      businessType,
      message,
      imageFileName,
      imageStoredPath,
    };

    const dataDir = path.join(process.cwd(), "data", "submissions");
    await fs.mkdir(dataDir, { recursive: true });
    await fs.appendFile(
      path.join(dataDir, "contacts.ndjson"),
      `${JSON.stringify(contact)}\n`,
      "utf8"
    );

    let emailed = false;
    let emailError = "";

    try {
      emailed = await sendContactEmail(contact);
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
