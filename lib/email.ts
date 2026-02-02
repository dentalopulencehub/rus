import nodemailer from 'nodemailer';
import {
  generatePremiumAdminEmail,
  generatePremiumUserConfirmationEmail,
} from './email-templates-premium';

// Email configuration using Mailtrap
export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'live.smtp.mailtrap.io',
  port: Number(process.env.SMTP_PORT) || 587,
  auth: {
    user: process.env.SMTP_USER || 'api',
    pass: process.env.SMTP_PASS,
  },
});

// TypeScript interfaces for form data
export interface ContactFormData {
  customerType: 'new' | 'existing' | null;
  enquiryType: 'corporate' | 'individual' | null;
  services: string[];
  sector: string | null;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  clientReference: string;
  message: string;
  preferredContact: 'email' | 'phone' | null;
  bestTime: 'morning' | 'afternoon' | 'anytime' | null;
}

export interface QuickContactData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// Email templates - using premium Mailchimp-style designs
export const emailTemplates = {
  adminNotification: (data: ContactFormData) => generatePremiumAdminEmail(data),
  userConfirmation: (data: ContactFormData) => generatePremiumUserConfirmationEmail(data),

  // Quick contact form email templates
  quickContactAdmin: (data: QuickContactData) => ({
    subject: `Quick Contact - ${data.name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background: #f3f4f6;
          }
          .email-wrapper { background: #f3f4f6; padding: 40px 20px; }
          .email-container { max-width: 680px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
          .header {
            background: linear-gradient(135deg, #01458f 0%, #002d5c 100%);
            padding: 30px 40px;
            text-align: center;
          }
          .header-title { font-size: 22px; font-weight: 300; color: #ffffff; letter-spacing: -0.5px; }
          .content { padding: 40px; }
          .field { padding: 14px 0; border-bottom: 1px solid #f3f4f6; }
          .field:last-child { border-bottom: none; }
          .label { font-size: 12px; color: #6b7280; font-weight: 500; margin-bottom: 6px; }
          .value { font-size: 15px; color: #111827; }
          .value a { color: #01458f; text-decoration: none; font-weight: 500; }
          .footer { background: #f9fafb; padding: 24px 40px; text-align: center; border-top: 1px solid #e5e7eb; }
          .footer-text { font-size: 13px; color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="email-container">
            <div class="header">
              <h1 class="header-title">Quick Contact Form</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              ${data.phone ? `
              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value">${data.phone}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Message</div>
                <div class="value" style="white-space: pre-wrap;">${data.message}</div>
              </div>
            </div>
            <div class="footer">
              <div class="footer-text">
                Submitted via RUS Chartered Accountants quick contact form
              </div>
              <div class="footer-text" style="margin-top: 8px; font-size: 12px; color: #9ca3af;">
                ${new Date().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short' })}
              </div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Quick Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}

Message:
${data.message}

Submitted: ${new Date().toLocaleString('en-GB')}
    `,
  }),

  quickContactUser: (data: QuickContactData) => ({
    subject: 'Thank you for contacting RUS Chartered Accountants',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background: #f3f4f6;
          }
          .email-wrapper { background: #f3f4f6; padding: 40px 20px; }
          .email-container { max-width: 680px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
          .header {
            background: linear-gradient(135deg, #01458f 0%, #002d5c 100%);
            padding: 40px 40px;
            text-align: center;
          }
          .header-title { font-size: 24px; font-weight: 300; color: #ffffff; letter-spacing: -0.5px; margin-bottom: 8px; }
          .header-subtitle { font-size: 13px; color: rgba(255,255,255,0.85); letter-spacing: 0.1em; text-transform: uppercase; font-weight: 500; }
          .content { padding: 40px; }
          .greeting { font-size: 18px; color: #111827; margin-bottom: 20px; font-weight: 400; }
          .message-text { font-size: 15px; color: #4b5563; line-height: 1.8; margin-bottom: 24px; }
          .cta-section { text-align: center; margin: 32px 0; }
          .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #01458f 0%, #002d5c 100%);
            color: #ffffff;
            padding: 12px 28px;
            border-radius: 6px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
          }
          .footer { background: #f9fafb; padding: 32px 40px; text-align: center; border-top: 1px solid #e5e7eb; }
          .footer-company { font-size: 16px; font-weight: 600; color: #01458f; margin-bottom: 12px; }
          .footer-tagline { font-size: 12px; color: #6b7280; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 16px; }
          .footer-contact { font-size: 13px; color: #4b5563; margin-bottom: 4px; }
          .footer-contact a { color: #01458f; text-decoration: none; font-weight: 500; }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="email-container">
            <div class="header">
              <h1 class="header-title">Thank You for Your Message</h1>
              <div class="header-subtitle">Chartered Accountants • Registered Auditors • Tax Advisors</div>
            </div>
            <div class="content">
              <div class="greeting">Dear ${data.name},</div>
              <div class="message-text">
                Thank you for contacting RUS Chartered Accountants. We have received your message and will respond as soon as possible.
              </div>
              <div class="message-text">
                Our typical response time is within 1-2 business days. If your enquiry is urgent, please feel free to call us directly on <strong>0121 777 7045</strong>.
              </div>
              <div class="cta-section">
                <a href="https://rus.co.uk" class="cta-button">Visit Our Website</a>
              </div>
              <div class="message-text" style="margin-top: 32px; margin-bottom: 0;">
                Best regards,<br>
                <strong>The RUS Team</strong>
              </div>
            </div>
            <div class="footer">
              <div class="footer-company">RUS Chartered Accountants</div>
              <div class="footer-tagline">Est. 1995 • Over 30 Years of Excellence</div>
              <div class="footer-contact">1190A-1194 Stratford Road, Hall Green, Birmingham, B28 8AB</div>
              <div class="footer-contact">Tel: <a href="tel:01217777045">0121 777 7045</a> | Email: <a href="mailto:info@rus.co.uk">info@rus.co.uk</a></div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
RUS CHARTERED ACCOUNTANTS
Chartered Accountants • Registered Auditors • Tax Advisors

Dear ${data.name},

Thank you for contacting RUS Chartered Accountants. We have received your message and will respond as soon as possible.

Our typical response time is within 1-2 business days. If your enquiry is urgent, please feel free to call us directly on 0121 777 7045.

Best regards,
The RUS Team

---
RUS Chartered Accountants
Est. 1995 • Over 30 Years of Excellence
1190A-1194 Stratford Road, Hall Green, Birmingham, B28 8AB
Tel: 0121 777 7045 | Email: info@rus.co.uk
    `,
  }),
};

// Function to send emails
export async function sendContactEmails(formData: ContactFormData) {
  try {
    const adminEmail = emailTemplates.adminNotification(formData);
    const userEmail = emailTemplates.userConfirmation(formData);

    // Send admin notification to info@rus.co.uk
    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: adminEmail.subject,
      html: adminEmail.html,
      text: adminEmail.text,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: formData.email,
      subject: userEmail.subject,
      html: userEmail.html,
      text: userEmail.text,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending emails:', error);
    throw error;
  }
}

export async function sendQuickContactEmails(formData: QuickContactData) {
  try {
    const adminEmail = emailTemplates.quickContactAdmin(formData);
    const userEmail = emailTemplates.quickContactUser(formData);

    // Send admin notification to info@rus.co.uk
    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: adminEmail.subject,
      html: adminEmail.html,
      text: adminEmail.text,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: formData.email,
      subject: userEmail.subject,
      html: userEmail.html,
      text: userEmail.text,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending quick contact emails:', error);
    throw error;
  }
}
