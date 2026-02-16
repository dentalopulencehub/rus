// Premium Mailchimp-style email templates for RUS Chartered Accountants

// RUS Logo - Hosted PNG on Cloudflare Images for universal email client support
const RUS_LOGO_INLINE = `
<div style="margin: 0 auto; text-align: center; padding: 0;">
  <img src="https://imagedelivery.net/W93NbEGaswuledAsk5GMeA/85daba7e-8f6f-42ea-772c-15a7bea6dd00/public" alt="RUS Chartered Accountants" width="500" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
</div>
`;

interface ContactFormData {
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

export function generatePremiumAdminEmail(data: ContactFormData) {
  const customerTypeLabel = data.customerType === 'new' ? 'New Client' : 'Existing Client';
  const enquiryTypeLabel = data.enquiryType === 'corporate' ? 'Corporate' : 'Individual';
  const preferredContactLabel = data.preferredContact === 'email' ? 'Email' : 'Phone';
  const bestTimeLabel =
    data.bestTime === 'morning' ? 'Morning' :
    data.bestTime === 'afternoon' ? 'Afternoon' : 'Anytime';

  // Format current date
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

  return {
    subject: `New ${enquiryTypeLabel} Enquiry from ${data.fullName}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      background-color: #fafafa;
    }
    table { border-collapse: collapse; }

    /* Header - Clean light grey with logo */
    .header {
      background: #f5f5f5;
      padding: 24px 40px;
      text-align: center;
    }

    /* Main heading with inline tags */
    .heading-section {
      padding: 32px 40px 24px;
      border-bottom: 1px solid #e5e5e5;
    }
    .main-heading {
      font-size: 24px;
      font-weight: 600;
      color: #000;
      margin: 0 0 8px 0;
    }
    .inline-tags {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: #666;
    }
    .tag {
      display: inline-block;
      padding: 4px 10px;
      background: #f4f4f4;
      border-radius: 4px;
      font-weight: 500;
    }

    /* Meta info */
    .meta-info {
      padding: 16px 40px;
      font-size: 13px;
      color: #666;
      border-bottom: 1px solid #e5e5e5;
    }

    /* Content sections */
    .content-section {
      padding: 24px 40px;
      border-bottom: 1px solid #e5e5e5;
    }
    .section-label {
      font-size: 11px;
      font-weight: 600;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }
    .section-value {
      font-size: 14px;
      color: #000;
      line-height: 1.5;
    }
    .service-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 8px;
    }
    .pill {
      padding: 8px 14px;
      background: #01458f;
      border-radius: 16px;
      font-size: 12px;
      color: #fff;
      font-weight: 500;
    }

    /* Footer */
    .footer {
      padding: 32px 40px;
      text-align: center;
      background: #fafafa;
      font-size: 12px;
      color: #666;
      line-height: 1.6;
    }
    .footer-company {
      font-weight: 600;
      color: #000;
      margin-bottom: 8px;
    }

    /* Priority Badge */
    .priority-section {
      background: linear-gradient(to bottom, #ffffff, #f8f9fb);
      padding: 32px 40px 24px;
      border-bottom: 1px solid #e8ecf1;
    }
    .priority-badge {
      display: inline-block;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      color: #92400e;
      padding: 10px 20px;
      border-radius: 24px;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      box-shadow: 0 2px 8px rgba(251, 191, 36, 0.2);
    }

    /* Content */
    .content { padding: 0; }

    /* Info Grid */
    .info-grid {
      background: #ffffff;
      padding: 32px 40px;
    }
    .section-title {
      font-size: 11px;
      font-weight: 700;
      color: #64748b;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 24px;
      padding-bottom: 12px;
      border-bottom: 3px solid #01458f;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      margin-bottom: 24px;
    }
    .grid-item {
      background: #f8f9fb;
      padding: 20px;
      border-radius: 12px;
      border: 1px solid #e8ecf1;
    }
    .grid-label {
      font-size: 11px;
      color: #64748b;
      font-weight: 600;
      margin-bottom: 8px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    .grid-value {
      font-size: 16px;
      color: #0f172a;
      font-weight: 600;
      line-height: 1.4;
    }

    /* Services */
    .services-section {
      grid-column: 1 / -1;
    }
    .services-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 12px;
    }
    .service-pill {
      background: linear-gradient(135deg, #01458f 0%, #002d5c 100%);
      color: #ffffff;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.3px;
      box-shadow: 0 2px 8px rgba(1, 69, 143, 0.15);
    }

    /* Contact Card */
    .contact-card {
      background: linear-gradient(135deg, #f8f9fb 0%, #ffffff 100%);
      padding: 32px 40px;
      border-top: 1px solid #e8ecf1;
      border-bottom: 1px solid #e8ecf1;
    }
    .contact-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0;
      border-bottom: 1px solid #e8ecf1;
    }
    .contact-row:last-child { border-bottom: none; }
    .contact-label {
      font-size: 13px;
      color: #64748b;
      font-weight: 500;
    }
    .contact-value {
      font-size: 15px;
      color: #0f172a;
      font-weight: 600;
      text-align: right;
    }
    .contact-value a {
      color: #01458f;
      text-decoration: none;
    }
    .contact-value a:hover {
      text-decoration: underline;
    }

    /* Message Box */
    .message-section {
      background: #f8f9fb;
      padding: 32px 40px;
    }
    .message-box {
      background: #ffffff;
      border: 1px solid #e8ecf1;
      border-left: 4px solid #01458f;
      border-radius: 8px;
      padding: 24px;
    }
    .message-label {
      font-size: 11px;
      font-weight: 700;
      color: #64748b;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .message-text {
      font-size: 15px;
      color: #334155;
      line-height: 1.7;
      white-space: pre-wrap;
    }

    /* Footer */
    .footer {
      background: linear-gradient(to bottom, #0f172a, #1e293b);
      padding: 40px 40px 32px;
      text-align: center;
    }
    .footer-text {
      font-size: 13px;
      color: #94a3b8;
      line-height: 1.6;
    }
    .footer-company {
      font-weight: 600;
      color: #ffffff;
    }
    .footer-divider {
      width: 60px;
      height: 2px;
      background: linear-gradient(90deg, transparent, #475569, transparent);
      margin: 24px auto;
    }
    .footer-timestamp {
      font-size: 12px;
      color: #64748b;
      margin-top: 16px;
    }

    /* Responsive */
    @media only screen and (max-width: 600px) {
      .header { padding: 32px 24px; }
      .priority-section { padding: 24px; }
      .info-grid { padding: 24px; }
      .grid { grid-template-columns: 1fr; gap: 16px; }
      .contact-card { padding: 24px; }
      .message-section { padding: 24px; }
      .footer { padding: 32px 24px; }
      .contact-row { flex-direction: column; align-items: flex-start; gap: 4px; }
      .contact-value { text-align: left; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #fafafa;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding: 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header - Clean Light Grey -->
          <tr>
            <td class="header" style="background: #f5f5f5; padding: 40px 40px; text-align: center;">
              ${RUS_LOGO_INLINE}
            </td>
          </tr>

          <!-- Main Heading with Inline Tags -->
          <tr>
            <td class="heading-section" style="padding: 32px 40px 24px; border-bottom: 1px solid #e5e5e5;">
              <h1 class="main-heading" style="font-size: 24px; font-weight: 600; color: #000; margin: 0 0 8px 0;">
                New Client Enquiry
              </h1>
              <div class="inline-tags" style="font-size: 13px; color: #666;">
                <span class="tag" style="display: inline-block; padding: 4px 10px; background: #f4f4f4; border-radius: 4px; font-weight: 500;">${customerTypeLabel}</span>
                <span style="color: #ccc;">•</span>
                <span class="tag" style="display: inline-block; padding: 4px 10px; background: #f4f4f4; border-radius: 4px; font-weight: 500;">${enquiryTypeLabel}</span>
              </div>
            </td>
          </tr>

          <!-- Meta Info -->
          <tr>
            <td class="meta-info" style="padding: 16px 40px; font-size: 13px; color: #666; border-bottom: 1px solid #e5e5e5;">
              Submitted via RUS Chartered Accountants website<br>
              ${dateStr} at ${timeStr}
            </td>
          </tr>

          <!-- Contact Information -->
          <tr>
            <td class="content-section" style="padding: 24px 40px; border-bottom: 1px solid #e5e5e5;">
              <div class="section-label" style="font-size: 11px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                Contact Information
              </div>
              <div class="section-value" style="font-size: 14px; color: #000; line-height: 1.5;">
                <strong>${data.fullName}</strong><br>
                <a href="mailto:${data.email}" style="color: #01458f; text-decoration: none;">${data.email}</a><br>
                ${data.phone}<br>
                ${data.clientReference ? `Client Ref: ${data.clientReference}<br>` : ''}
              </div>
            </td>
          </tr>

          <!-- Services Requested -->
          <tr>
            <td class="content-section" style="padding: 24px 40px; border-bottom: 1px solid #e5e5e5;">
              <div class="section-label" style="font-size: 11px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                Services Requested
              </div>
              <div class="service-pills" style="display: flex; flex-wrap: wrap; gap: 6px;">
                ${data.services.map(service => `<span class="pill" style="padding: 8px 14px; background: #01458f; border-radius: 16px; font-size: 12px; color: #fff; font-weight: 500;">${service}</span>`).join('')}
              </div>
            </td>
          </tr>

          <!-- Sector & Preferences -->
          ${data.sector || data.preferredContact || data.bestTime ? `
          <tr>
            <td class="content-section" style="padding: 24px 40px; border-bottom: 1px solid #e5e5e5;">
              ${data.sector ? `
              <div style="margin-bottom: 16px;">
                <div class="section-label" style="font-size: 11px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                  Industry Sector
                </div>
                <div class="section-value" style="font-size: 14px; color: #000;">
                  ${data.sector}
                </div>
              </div>
              ` : ''}
              ${data.preferredContact || data.bestTime ? `
              <div>
                <div class="section-label" style="font-size: 11px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                  Contact Preferences
                </div>
                <div class="section-value" style="font-size: 14px; color: #000;">
                  ${data.preferredContact ? `Preferred: ${preferredContactLabel}<br>` : ''}
                  ${data.bestTime ? `Best time: ${bestTimeLabel}` : ''}
                </div>
              </div>
              ` : ''}
            </td>
          </tr>
          ` : ''}

          <!-- Message -->
          ${data.message ? `
          <tr>
            <td class="content-section" style="padding: 24px 40px; border-bottom: 1px solid #e5e5e5;">
              <div class="section-label" style="font-size: 11px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                Message
              </div>
              <div class="section-value" style="font-size: 14px; color: #000; line-height: 1.5; white-space: pre-wrap;">
                ${data.message}
              </div>
            </td>
          </tr>
          ` : ''}

          <!-- Footer -->
          <tr>
            <td class="footer" style="padding: 32px 40px; text-align: center; background: #fafafa; font-size: 12px; color: #666; line-height: 1.6;">
              <div class="footer-company" style="font-weight: 600; color: #000; margin-bottom: 8px;">
                © 2026 RUS & Company (UK) Ltd.
              </div>
              <div style="margin-bottom: 4px;">
                Company No: 3833778 • VAT Reg: GB 754 1385 28
              </div>
              <div>
                Registered to carry out company Audit work in the UK by<br>
                The Institute of Chartered Accountants in England & Wales (ICAEW)
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
    text: `
RUS CHARTERED ACCOUNTANTS
New Client Enquiry

${customerTypeLabel} • ${enquiryTypeLabel}

Submitted via RUS Chartered Accountants website
${dateStr} at ${timeStr}

CONTACT INFORMATION
${data.fullName}
${data.email}
${data.phone}
${data.companyName ? `${data.companyName}\n` : ''}${data.clientReference ? `Client Ref: ${data.clientReference}\n` : ''}
SERVICES REQUESTED
${data.services.join(', ')}

${data.sector ? `INDUSTRY SECTOR\n${data.sector}\n\n` : ''}${data.preferredContact || data.bestTime ? `CONTACT PREFERENCES\n${data.preferredContact ? `Preferred: ${preferredContactLabel}\n` : ''}${data.bestTime ? `Best time: ${bestTimeLabel}\n` : ''}\n` : ''}${data.message ? `MESSAGE\n${data.message}\n\n` : ''}---
© 2026 RUS & Company (UK) Ltd.
Company No: 3833778 • VAT Reg: GB 754 1385 28
Registered to carry out company Audit work in the UK by The Institute of Chartered Accountants in England & Wales (ICAEW)
    `,
  };
}

export function generatePremiumUserConfirmationEmail(data: ContactFormData) {
  const customerTypeLabel = data.customerType === 'new' ? 'New Client' : 'Existing Client';
  const enquiryTypeLabel = data.enquiryType === 'corporate' ? 'Corporate' : 'Individual';

  // Format current date
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

  return {
    subject: 'Thank you for contacting RUS Chartered Accountants',
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      background-color: #fafafa;
    }
    table { border-collapse: collapse; }

    /* Header */
    .header {
      background: #01458f;
      padding: 32px 40px;
      text-align: center;
    }

    /* Main heading with inline tags */
    .heading-section {
      padding: 32px 40px 24px;
      border-bottom: 1px solid #e5e5e5;
    }
    .main-heading {
      font-size: 24px;
      font-weight: 600;
      color: #000;
      margin: 0 0 8px 0;
    }
    .inline-tags {
      font-size: 13px;
      color: #666;
    }
    .tag {
      display: inline-block;
      padding: 4px 10px;
      background: #f4f4f4;
      border-radius: 4px;
      font-weight: 500;
    }

    /* Meta info */
    .meta-info {
      padding: 16px 40px;
      font-size: 13px;
      color: #666;
      border-bottom: 1px solid #e5e5e5;
    }

    /* Content sections */
    .content-section {
      padding: 24px 40px;
      border-bottom: 1px solid #e5e5e5;
    }
    .section-label {
      font-size: 11px;
      font-weight: 600;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }
    .section-value {
      font-size: 14px;
      color: #000;
      line-height: 1.5;
    }
    .message-text {
      font-size: 15px;
      color: #333;
      line-height: 1.7;
      margin-bottom: 20px;
    }
    .service-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 8px;
    }
    .pill {
      padding: 8px 14px;
      background: #01458f;
      border-radius: 16px;
      font-size: 12px;
      color: #fff;
      font-weight: 500;
    }
    .next-steps {
      margin-top: 24px;
      padding: 20px;
      background: #f8f9fa;
      border-radius: 6px;
      border-left: 3px solid #01458f;
    }
    .next-steps-title {
      font-size: 13px;
      font-weight: 600;
      color: #000;
      margin-bottom: 12px;
    }
    .next-steps-list {
      font-size: 14px;
      color: #333;
      line-height: 1.7;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .next-steps-list li {
      padding-left: 20px;
      position: relative;
      margin-bottom: 8px;
    }
    .next-steps-list li:before {
      content: "→";
      position: absolute;
      left: 0;
      color: #01458f;
      font-weight: 600;
    }

    /* Footer */
    .footer {
      padding: 32px 40px;
      text-align: center;
      background: #fafafa;
      font-size: 12px;
      color: #666;
      line-height: 1.6;
    }
    .footer-company {
      font-weight: 600;
      color: #000;
      margin-bottom: 8px;
    }
      font-weight: 600;
      text-align: right;
    }
    .services-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: flex-end;
      max-width: 65%;
    }
    .service-tag {
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
      color: #1e3a8a;
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 12px;
      font-weight: 500;
    }

    /* Next Steps */
    .next-steps {
      background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
      border: 1px solid #bfdbfe;
      border-radius: 12px;
      padding: 32px;
      margin: 32px 0;
    }
    .next-steps-title {
      font-size: 18px;
      font-weight: 600;
      color: #1e3a8a;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .checkmark {
      width: 24px;
      height: 24px;
      background: #01458f;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 14px;
    }
    .step-item {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      padding: 16px 0;
    }
    .step-icon {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, #01458f 0%, #002d5c 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-center;
      color: white;
      font-size: 14px;
      font-weight: 700;
      box-shadow: 0 2px 8px rgba(1, 69, 143, 0.2);
    }
    .step-text {
      font-size: 15px;
      color: #1e40af;
      line-height: 1.6;
      padding-top: 4px;
    }

    /* CTA */
    .cta-section {
      text-align: center;
      margin: 40px 0;
    }
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #01458f 0%, #002d5c 100%);
      color: #ffffff !important;
      padding: 16px 40px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 15px;
      font-weight: 600;
      letter-spacing: 0.3px;
      box-shadow: 0 4px 16px rgba(1, 69, 143, 0.25);
      transition: all 0.3s;
    }

    /* Footer */
    .footer {
      background: linear-gradient(to bottom, #0f172a, #1e293b);
      padding: 48px 40px;
      text-align: center;
    }
    .footer-company {
      font-size: 20px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 8px;
    }
    .footer-tagline {
      font-size: 12px;
      color: #94a3b8;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      margin-bottom: 24px;
    }
    .footer-divider {
      width: 60px;
      height: 2px;
      background: linear-gradient(90deg, transparent, #475569, transparent);
      margin: 24px auto;
    }
    .footer-contact {
      font-size: 14px;
      color: #cbd5e1;
      margin: 8px 0;
    }
    .footer-contact a {
      color: #60a5fa;
      text-decoration: none;
      font-weight: 500;
    }

    /* Responsive */
    @media only screen and (max-width: 600px) {
      .header { padding: 40px 24px; }
      .content { padding: 32px 24px; }
      .summary-card { padding: 24px 20px; }
      .next-steps { padding: 24px 20px; }
      .footer { padding: 40px 24px; }
      .summary-item { flex-direction: column; gap: 8px; }
      .summary-label, .summary-value { text-align: left; }
      .services-list { justify-content: flex-start; max-width: 100%; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #fafafa;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding: 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header - Clean Light Grey -->
          <tr>
            <td class="header" style="background: #f5f5f5; padding: 40px 40px; text-align: center;">
              ${RUS_LOGO_INLINE}
            </td>
          </tr>

          <!-- Main Heading with Inline Tags -->
          <tr>
            <td class="heading-section" style="padding: 32px 40px 24px; border-bottom: 1px solid #e5e5e5;">
              <h1 class="main-heading" style="font-size: 24px; font-weight: 600; color: #000; margin: 0 0 8px 0;">
                Thank you for your enquiry
              </h1>
              <div class="inline-tags" style="font-size: 13px; color: #666;">
                <span class="tag" style="display: inline-block; padding: 4px 10px; background: #f4f4f4; border-radius: 4px; font-weight: 500;">${customerTypeLabel}</span>
                <span style="color: #ccc;">•</span>
                <span class="tag" style="display: inline-block; padding: 4px 10px; background: #f4f4f4; border-radius: 4px; font-weight: 500;">${enquiryTypeLabel}</span>
              </div>
            </td>
          </tr>

          <!-- Meta Info -->
          <tr>
            <td class="meta-info" style="padding: 16px 40px; font-size: 13px; color: #666; border-bottom: 1px solid #e5e5e5;">
              Submitted via RUS Chartered Accountants website<br>
              ${dateStr} at ${timeStr}
            </td>
          </tr>

          <!-- Main Message -->
          <tr>
            <td class="content-section" style="padding: 24px 40px; border-bottom: 1px solid #e5e5e5;">
              <div class="message-text" style="font-size: 15px; color: #333; line-height: 1.7; margin-bottom: 20px;">
                Dear ${data.fullName},
              </div>
              <div class="message-text" style="font-size: 15px; color: #333; line-height: 1.7; margin-bottom: 20px;">
                Thank you for contacting RUS Chartered Accountants. We have received your enquiry and one of our team members will review it carefully and be in touch with you shortly.
              </div>

              <!-- Next Steps -->
              <div class="next-steps" style="margin-top: 24px; padding: 20px; background: #f8f9fa; border-radius: 6px; border-left: 3px solid #01458f;">
                <div class="next-steps-title" style="font-size: 13px; font-weight: 600; color: #000; margin-bottom: 12px;">
                  What Happens Next
                </div>
                <ul class="next-steps-list" style="font-size: 14px; color: #333; line-height: 1.7; list-style: none; padding: 0; margin: 0;">
                  <li style="padding-left: 20px; position: relative; margin-bottom: 8px;">One of our team members will review your enquiry</li>
                  <li style="padding-left: 20px; position: relative; margin-bottom: 8px;">We'll contact you within 1-2 business days</li>
                  <li style="padding-left: 20px; position: relative;">We'll discuss your requirements and how we can help</li>
                </ul>
              </div>
            </td>
          </tr>

          <!-- Services Summary -->
          <tr>
            <td class="content-section" style="padding: 24px 40px; border-bottom: 1px solid #e5e5e5;">
              <div class="section-label" style="font-size: 11px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                Services You're Interested In
              </div>
              <div class="service-pills" style="display: flex; flex-wrap: wrap; gap: 6px;">
                ${data.services.map(service => `<span class="pill" style="padding: 8px 14px; background: #01458f; border-radius: 16px; font-size: 12px; color: #fff; font-weight: 500;">${service}</span>`).join('')}
              </div>
            </td>
          </tr>

          <!-- Contact Info -->
          <tr>
            <td class="content-section" style="padding: 24px 40px; border-bottom: 1px solid #e5e5e5;">
              <div class="message-text" style="font-size: 15px; color: #333; line-height: 1.7;">
                If your enquiry is urgent, please call us on <strong>0121 777 7045</strong>.
              </div>
              <div class="message-text" style="font-size: 15px; color: #333; line-height: 1.7; margin-top: 20px;">
                Best regards,<br>
                <strong>The RUS Team</strong>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="footer" style="padding: 32px 40px; text-align: center; background: #fafafa; font-size: 12px; color: #666; line-height: 1.6;">
              <div class="footer-company" style="font-weight: 600; color: #000; margin-bottom: 8px;">
                © 2026 RUS & Company (UK) Ltd.
              </div>
              <div style="margin-bottom: 4px;">
                Company No: 3833778 • VAT Reg: GB 754 1385 28
              </div>
              <div>
                Registered to carry out company Audit work in the UK by<br>
                The Institute of Chartered Accountants in England & Wales (ICAEW)
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
    text: `
RUS CHARTERED ACCOUNTANTS
Thank you for your enquiry

${customerTypeLabel} • ${enquiryTypeLabel}

Submitted via RUS Chartered Accountants website
${dateStr} at ${timeStr}

Dear ${data.fullName},

Thank you for contacting RUS Chartered Accountants. We have received your enquiry and one of our team members will review it carefully and be in touch with you shortly.

WHAT HAPPENS NEXT
→ One of our team members will review your enquiry
→ We'll contact you within 1-2 business days
→ We'll discuss your requirements and how we can help

SERVICES YOU'RE INTERESTED IN
${data.services.join(', ')}

If your enquiry is urgent, please call us on 0121 777 7045.

Best regards,
The RUS Team

---
© 2026 RUS & Company (UK) Ltd.
Company No: 3833778 • VAT Reg: GB 754 1385 28
Registered to carry out company Audit work in the UK by The Institute of Chartered Accountants in England & Wales (ICAEW)
3. We'll discuss your requirements and how we can help

If your enquiry is urgent, please feel free to call us directly on 0121 777 7045.

Best regards,
The RUS Team

---
RUS Chartered Accountants
Est. 1995 • Over 30 Years of Excellence
1190A-1194 Stratford Road, Hall Green, Birmingham, B28 8AB
Tel: 0121 777 7045 | Email: info@rus.co.uk
Web: www.rus.co.uk
    `,
  };
}
