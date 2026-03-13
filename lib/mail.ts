import nodemailer from "nodemailer";

let transporter: nodemailer.Transporter;

export function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  return transporter;
}

export async function sendEmail({
  to,
  cc,
  bcc,
  subject,
  html,
  replyTo,
  attachments,
}: {
  to: string | string[];
  cc?: string | string[];
  bcc?: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: any[];
}) {
  const transporter = getTransporter();

  return transporter.sendMail({
    from: `"Website" <${process.env.SMTP_USER}>`,
    to,
    cc,
    bcc,
    subject,
    html,
    replyTo,
    attachments,
  });
}