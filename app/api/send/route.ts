// import { NextResponse } from "next/server";
// import { sendEmail } from "@/lib/mail";

// export async function POST(req: Request) {
//   try {
//     const { formType, data } = await req.json();

//     let subject = "";
//     let html = "";

//     switch (formType) {
//       case "contact":
//         subject = "New Contact Form Submission";
//         html = `
//           <h3>Contact Form</h3>
//           <p><strong>Name:</strong> ${data.name}</p>
//           <p><strong>Email:</strong> ${data.email}</p>
//           <p><strong>Subject:</strong> ${data.subject}</p>
//           <p><strong>Message:</strong><br/>${data.message}</p>
//         `;
//         break;

//       case "quote":
//         subject = "New Quote Request";
//         html = `
//           <h3>Quote Request</h3>
//           <p><strong>Name:</strong> ${data.name}</p>
//           <p><strong>Phone:</strong> ${data.phone}</p>
//           <p><strong>Details:</strong><br/>${data.details}</p>
//         `;
//         break;

//       case "apply":
//         subject = "New Job Application";
//         html = `
//           <h3>Job Application</h3>
//           <p><strong>Name:</strong> ${data.name}</p>
//           <p><strong>Email:</strong> ${data.email}</p>
//           <p><strong>Phone:</strong> ${data.phone}</p>
//         `;
//         break;

//       default:
//         return NextResponse.json(
//           { error: "Invalid form type" },
//           { status: 400 }
//         );
//     }

//     const attachments: any[] = [];

//     if (formType === "apply" && data.resume) {
//       attachments.push({
//         filename: `resume-${data.name.replace(/\s+/g, "_")}.pdf`,
//         content: Buffer.from(data.resume, "base64"),
//         contentType: "application/pdf",
//       });
//     }

//     await sendEmail({
//       to: process.env.RECEIVER_EMAIL!,
//       cc: process.env.CC_EMAIL,
//       bcc: process.env.BCC_EMAIL,
//       subject,
//       html,
//       replyTo: data.email,
//       attachments,
//     });

//     return NextResponse.json({ success: true });

//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       { success: false, message: "Email sending failed" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const { formType, data } = await req.json();

    let subject = "";
    let html = "";
    let autoReplyMessage = "";

    switch (formType) {
      case "contact":
        subject = "New Contact Form Submission";
        autoReplyMessage =
          "Thank you for contacting Platinum Home Services. Our renovation team will get back to you shortly.";
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
        autoReplyMessage =
          "Thank you for requesting a free quote. Our experts will review your requirements and share an estimate within 24 hours.";
        html = `
          <h3>Quote Request</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Details:</strong><br/>${data.details}</p>
        `;
        break;

      case "apply":
        subject = "New Job Application";
        autoReplyMessage =
          "Thank you for applying to Platinum Home Services. Our hiring team will review your profile and contact you soon.";
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

    // ✅ Resume attachment for apply form
    if (formType === "apply" && data.resume) {
      attachments.push({
        filename: `resume-${data.name.replace(/\s+/g, "_")}.pdf`,
        content: Buffer.from(data.resume, "base64"),
        contentType: "application/pdf",
      });
    }

    // ✅ 1) Send email to admin
    await sendEmail({
      to: process.env.RECEIVER_EMAIL!,
      cc: process.env.CC_EMAIL,
      bcc: process.env.BCC_EMAIL,
      subject,
      html,
      replyTo: data.email,
      attachments,
    });

    // ✅ 2) Send auto reply to customer
    if (data.email) {
      await sendEmail({
        to: data.email,
        subject: "Thank you for contacting Platinum Home Services",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; border: 1px solid #e5e5e5; border-radius: 10px; overflow: hidden;">
            
            <!-- Header -->
            <div style="background: #111827; padding: 25px; text-align: center;">
              <img 
                src="https://platinumhomeservices.ca/logo.png" 
                alt="Platinum Home Services"
                style="height: 60px; max-width: 220px; object-fit: contain;"
              />
            </div>

            <!-- Body -->
            <div style="padding: 30px; color: #333;">
              <h2 style="margin-top: 0; color: #111827;">
                Hello ${data.name},
              </h2>

              <p style="font-size: 15px; line-height: 1.7;">
                ${autoReplyMessage}
              </p>

              <p style="font-size: 15px; line-height: 1.7;">
                Our trusted renovation specialists proudly serve homeowners across Ontario with premium remodeling, basement finishing, and interior renovation solutions.
              </p>

              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <h3 style="margin-top: 0;">Why Homeowners Choose Us</h3>
                <ul style="padding-left: 18px; line-height: 1.8;">
                  <li>Licensed & Insured Professionals</li>
                  <li>Transparent Pricing</li>
                  <li>350+ Successful Projects</li>
                  <li>Dedicated Project Support</li>
                </ul>
              </div>

              <p style="font-size: 15px;">
                📞 <strong>Phone:</strong> +1 (647) 990-0064 <br/>
                📍 <strong>Location:</strong> Kitchener, Ontario <br/>
                ✉️ <strong>Email:</strong> platinumhomeservices01@gmail.com
              </p>

              <p style="margin-top: 25px;">
                Best Regards,<br/>
                <strong>Platinum Home Services Team</strong>
              </p>
            </div>

            <!-- Footer -->
            <div style="background: #f3f4f6; padding: 15px; text-align: center; font-size: 13px; color: #666;">
              Basement Renovation • Home Improvements • Interior Remodeling
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Email sending failed",
      },
      { status: 500 }
    );
  }
}