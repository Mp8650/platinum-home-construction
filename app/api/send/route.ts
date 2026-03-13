import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const { formType, data } = await req.json();

    let subject = "";
    let html = "";

    switch (formType) {
      case "contact":
        subject = "New Contact Form Submission";
        html = `
          <h3>Contact Form</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong><br/>${data.message}</p>
        `;
        break;

      case "quote":
        subject = "New Quote Request";
        html = `
          <h3>Quote Request</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Details:</strong><br/>${data.details}</p>
        `;
        break;

      case "apply":
        subject = "New Job Application";
        html = `
          <h3>Job Application</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
        `;
        break;

      default:
        return NextResponse.json(
          { error: "Invalid form type" },
          { status: 400 }
        );
    }

    const attachments: any[] = [];

    if (formType === "apply" && data.resume) {
      attachments.push({
        filename: `resume-${data.name.replace(/\s+/g, "_")}.pdf`,
        content: Buffer.from(data.resume, "base64"),
        contentType: "application/pdf",
      });
    }

    await sendEmail({
      to: process.env.RECEIVER_EMAIL!,
      cc: process.env.CC_EMAIL,
      bcc: process.env.BCC_EMAIL,
      subject,
      html,
      replyTo: data.email,
      attachments,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: "Email sending failed" },
      { status: 500 }
    );
  }
}