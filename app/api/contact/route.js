import { Resend } from "resend";
import { NextResponse } from "next/server";

let resend = null;
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
}

const rateLimitMap = new Map();

export async function POST(req) {
  if (!resend) {
    return NextResponse.json(
      { success: false, message: "Email service is not configured (missing API key)." },
      { status: 500 }
    );
  }

  // Rate Limiting Logic (In-Memory per instance)
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
  } else {
    const data = rateLimitMap.get(ip);
    if (now - data.firstRequest > windowMs) {
      rateLimitMap.set(ip, { count: 1, firstRequest: now });
    } else {
      data.count += 1;
      if (data.count > 3) {
        return NextResponse.json(
          { success: false, message: "Too many requests. Please try again later." },
          { status: 429 }
        );
      }
      rateLimitMap.set(ip, data);
    }
  }

  const body = await req.json().catch(() => ({}));
  const { name, email, phone, company, message } = body;

  const nameStr = typeof name === "string" ? name.trim() : "";
  const emailStr = typeof email === "string" ? email.trim() : "";
  const phoneStr = typeof phone === "string" ? phone.trim() : "";
  const messageStr = typeof message === "string" ? message.trim() : "";
  const companyStr = typeof company === "string" ? company.trim() : "";

  if (!nameStr || !emailStr || !phoneStr || !messageStr) {
    return NextResponse.json(
      { success: false, message: "Name, email, phone, and message are required." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailStr)) {
    return NextResponse.json(
      { success: false, message: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL || "Credence Lighting <onboarding@resend.dev>";
  const toEmail = process.env.RESEND_TO_EMAIL || "info@credencelighting.com";

  try {
    const adminEmail = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: emailStr,
      subject: "New Website Inquiry",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333;">
          <h2 style="border-bottom:2px solid #c8a96b;padding-bottom:10px;color:#1a1a1a;">
            New Contact Form Submission
          </h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;font-weight:bold;width:120px;">Name:</td><td>${nameStr}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Email:</td><td><a href="mailto:${emailStr}">${emailStr}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Phone:</td><td>${phoneStr}</td></tr>
            <tr><td style="padding:8px 0;font-weight:bold;">Company:</td><td>${companyStr || "N/A"}</td></tr>
          </table>
          <h3 style="margin-top:20px;color:#1a1a1a;">Message:</h3>
          <p style="background:#f9f9f9;padding:16px;border-left:4px solid #c8a96b;line-height:1.6;">
            ${messageStr.replace(/\n/g, "<br />")}
          </p>
          <p style="color:#888;font-size:12px;margin-top:24px;">
            Sent via credencelighting.com contact form
          </p>
        </div>
      `,
    });

    if (adminEmail.error) {
      console.error("Admin Email Error:", adminEmail.error);
      throw new Error(adminEmail.error.message);
    }

    try {
      const visitorEmail = await resend.emails.send({
        from: fromEmail,
        to: emailStr,
        subject: "Thank you for contacting Credence Lighting",
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333;">
            <h2 style="border-bottom:2px solid #c8a96b;padding-bottom:10px;color:#1a1a1a;">
              Thank You, ${nameStr}
            </h2>
            <p>Thank you for reaching out to <strong>Credence Lighting</strong>. We have received your inquiry and our team will get back to you shortly.</p>
            <p style="margin-top:24px;">Warm regards,<br /><strong>Credence Lighting Team</strong><br />
            <a href="mailto:info@credencelighting.com">info@credencelighting.com</a></p>
          </div>
        `,
      });

      if (visitorEmail.error) {
        console.warn("Visitor Email Warning:", visitorEmail.error.message);
      }
    } catch (visitorErr) {
      console.warn("Failed to send auto-reply to visitor:", visitorErr.message);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
