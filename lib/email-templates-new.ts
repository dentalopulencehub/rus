// World-class email templates for RUS Chartered Accountants
// Inspired by the premium footer design

export const RUS_LOGO_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1587 265' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M75.7353 26.0718H230.44L197.011 231.444H42.3066L75.7353 26.0718Z' fill='%2301458f'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M248.264 26.0718H402.969L369.54 231.444H214.835L248.264 26.0718Z' fill='%2301458f'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M420.793 26.0718H575.497L542.068 231.444H387.364L420.793 26.0718Z' fill='%2301458f'/%3E%3C/svg%3E`;

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

export function generateAdminEmail(data: ContactFormData) {
  const customerTypeLabel = data.customerType === 'new' ? 'New Client' : 'Existing Client';
  const enquiryTypeLabel = data.enquiryType === 'corporate' ? 'Corporate' : 'Individual';
  const preferredContactLabel = data.preferredContact === 'email' ? 'Email' : 'Phone';
  const bestTimeLabel =
    data.bestTime === 'morning' ? 'Morning' :
    data.bestTime === 'afternoon' ? 'Afternoon' : 'Anytime';

  return {
    subject: `New Enquiry from ${data.fullName} - ${enquiryTypeLabel} (${customerTypeLabel})`,
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
      -webkit-font-smoothing: antialiased;
    }
    .email-wrapper { background: #f3f4f6; padding: 40px 20px; }
    .email-container { max-width: 680px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }

    /* Header with gradient */
    .header {
      background: linear-gradient(135deg, #01458f 0%, #002d5c 100%);
      padding: 40px 40px 36px;
      text-align: center;
      position: relative;
    }
    .header::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    }
    .logo-container { margin-bottom: 16px; }
    .logo { height: 48px; width: auto; filter: brightness(0) invert(1); }
    .header-title {
      font-size: 24px;
      font-weight: 300;
      color: #ffffff;
      letter-spacing: -0.5px;
      margin-bottom: 8px;
    }
    .header-subtitle {
      font-size: 13px;
      color: rgba(255,255,255,0.8);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-weight: 500;
    }

    /* Content */
    .content { padding: 40px; }
    .priority-badge {
      display: inline-block;
      background: #fee2e2;
      color: #991b1b;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 24px;
    }

    /* Summary Card */
    .summary-card {
      background: linear-gradient(to bottom, #f9fafb, #ffffff);
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 28px;
      margin-bottom: 32px;
    }
    .summary-title {
      font-size: 11px;
      font-weight: 700;
      color: #6b7280;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 2px solid #01458f;
    }
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .summary-item {
      padding: 12px 0;
    }
    .summary-label {
      font-size: 12px;
      color: #6b7280;
      font-weight: 500;
      margin-bottom: 6px;
      letter-spacing: 0.02em;
    }
    .summary-value {
      font-size: 15px;
      color: #111827;
      font-weight: 600;
    }
    .summary-item-full {
      grid-column: 1 / -1;
    }

    /* Services List */
    .services-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 8px;
    }
    .service-tag {
      background: #dbeafe;
      color: #1e3a8a;
      padding: 6px 14px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 500;
    }

    /* Contact Details Section */
    .contact-section {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 28px;
      margin-bottom: 24px;
    }
    .section-title {
      font-size: 16px;
      font-weight: 600;
      color: #111827;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .section-icon {
      width: 20px;
      height: 20px;
      background: #01458f;
      border-radius: 4px;
    }
    .detail-row {
      padding: 14px 0;
      border-bottom: 1px solid #f3f4f6;
    }
    .detail-row:last-child { border-bottom: none; }
    .detail-label {
      font-size: 12px;
      color: #6b7280;
      font-weight: 500;
      margin-bottom: 6px;
    }
    .detail-value {
      font-size: 15px;
      color: #111827;
    }
    .detail-value a {
      color: #01458f;
      text-decoration: none;
      font-weight: 500;
    }
    .detail-value a:hover {
      text-decoration: underline;
    }

    /* Message Box */
    .message-box {
      background: #f9fafb;
      border-left: 4px solid #01458f;
      border-radius: 4px;
      padding: 20px;
      margin: 24px 0;
    }
    .message-label {
      font-size: 12px;
      font-weight: 600;
      color: #374151;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .message-text {
      font-size: 14px;
      color: #4b5563;
      line-height: 1.7;
      white-space: pre-wrap;
    }

    /* Footer */
    .footer {
      background: #f9fafb;
      padding: 32px 40px;
      text-align: center;
      border-top: 1px solid #e5e7eb;
    }
    .footer-text {
      font-size: 13px;
      color: #6b7280;
      line-height: 1.7;
    }
    .footer-company {
      font-weight: 600;
      color: #111827;
    }
    .footer-timestamp {
      margin-top: 12px;
      font-size: 12px;
      color: #9ca3af;
    }

    /* Responsive */
    @media only screen and (max-width: 600px) {
      .email-wrapper { padding: 20px 0; }
      .content { padding: 24px 20px; }
      .summary-card { padding: 20px; }
      .contact-section { padding: 20px; }
      .summary-grid { grid-template-columns: 1fr; gap: 16px; }
      .services-list { gap: 6px; }
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="email-container">
      <!-- Header -->
      <div class="header">
        <div class="logo-container">
          <img src="${RUS_LOGO_SVG}" alt="RUS" class="logo" />
        </div>
        <h1 class="header-title">New Client Enquiry</h1>
        <div class="header-subtitle">Chartered Accountants</div>
      </div>

      <!-- Content -->
      <div class="content">
        <div class="priority-badge">${customerTypeLabel} • ${enquiryTypeLabel}</div>

        <!-- Enquiry Summary -->
        <div class="summary-card">
          <div class="summary-title">Enquiry Summary</div>
          <div class="summary-grid">
            <div class="summary-item">
              <div class="summary-label">Customer Type</div>
              <div class="summary-value">${customerTypeLabel}</div>
            </div>
            <div class="summary-item">
              <div class="summary-label">Enquiry Type</div>
              <div class="summary-value">${enquiryTypeLabel}</div>
            </div>
            <div class="summary-item summary-item-full">
              <div class="summary-label">Industry Sector</div>
              <div class="summary-value">${data.sector || 'Not specified'}</div>
            </div>
            <div class="summary-item summary-item-full">
              <div class="summary-label">Services Requested</div>
              <div class="services-list">
                ${data.services.map(service => `<span class="service-tag">${service}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Details -->
        <div class="contact-section">
          <div class="section-title">
            <div class="section-icon"></div>
            Contact Information
          </div>
          <div class="detail-row">
            <div class="detail-label">Full Name</div>
            <div class="detail-value">${data.fullName}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Email Address</div>
            <div class="detail-value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Phone Number</div>
            <div class="detail-value">${data.phone || 'Not provided'}</div>
          </div>
          ${data.companyName ? `
          <div class="detail-row">
            <div class="detail-label">Company Name</div>
            <div class="detail-value">${data.companyName}</div>
          </div>
          ` : ''}
          ${data.clientReference ? `
          <div class="detail-row">
            <div class="detail-label">Client Reference</div>
            <div class="detail-value">${data.clientReference}</div>
          </div>
          ` : ''}
          <div class="detail-row">
            <div class="detail-label">Preferred Contact Method</div>
            <div class="detail-value">${preferredContactLabel || 'Not specified'}</div>
          </div>
          <div class="detail-row">
            <div class="detail-label">Best Time to Contact</div>
            <div class="detail-value">${bestTimeLabel}</div>
          </div>
        </div>

        <!-- Message -->
        ${data.message ? `
        <div class="message-box">
          <div class="message-label">Message</div>
          <div class="message-text">${data.message}</div>
        </div>
        ` : ''}
      </div>

      <!-- Footer -->
      <div class="footer">
        <div class="footer-text">
          Submitted via <span class="footer-company">RUS Chartered Accountants</span> website contact form
        </div>
        <div class="footer-timestamp">
          ${new Date().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short' })}
        </div>
      </div>
    </div>
  </div>
</body>
</html>
    `,
    text: `
RUS CHARTERED ACCOUNTANTS
New Client Enquiry

${customerTypeLabel} • ${enquiryTypeLabel}

ENQUIRY SUMMARY
Customer Type: ${customerTypeLabel}
Enquiry Type: ${enquiryTypeLabel}
Industry Sector: ${data.sector || 'Not specified'}
Services: ${data.services.join(', ')}

CONTACT INFORMATION
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
${data.companyName ? `Company: ${data.companyName}\n` : ''}${data.clientReference ? `Client Reference: ${data.clientReference}\n` : ''}Preferred Contact: ${preferredContactLabel || 'Not specified'}
Best Time: ${bestTimeLabel}

${data.message ? `MESSAGE\n${data.message}\n\n` : ''}Submitted: ${new Date().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short' })}
    `,
  };
}

export function generateUserConfirmationEmail(data: ContactFormData) {
  const customerTypeLabel = data.customerType === 'new' ? 'New Client' : 'Existing Client';
  const enquiryTypeLabel = data.enquiryType === 'corporate' ? 'Corporate' : 'Individual';

  return {
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
      -webkit-font-smoothing: antialiased;
    }
    .email-wrapper { background: #f3f4f6; padding: 40px 20px; }
    .email-container { max-width: 680px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }

    /* Header with gradient */
    .header {
      background: linear-gradient(135deg, #01458f 0%, #002d5c 100%);
      padding: 48px 40px;
      text-align: center;
      position: relative;
    }
    .header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
      background-size: 50px 50px;
      opacity: 0.3;
    }
    .logo-container { position: relative; margin-bottom: 20px; }
    .logo { height: 56px; width: auto; filter: brightness(0) invert(1); }
    .header-title {
      position: relative;
      font-size: 28px;
      font-weight: 300;
      color: #ffffff;
      letter-spacing: -0.5px;
      margin-bottom: 8px;
    }
    .header-subtitle {
      position: relative;
      font-size: 13px;
      color: rgba(255,255,255,0.85);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: 500;
    }
    .header-divider {
      position: relative;
      width: 60px;
      height: 2px;
      background: rgba(255,255,255,0.3);
      margin: 24px auto 0;
    }

    /* Content */
    .content { padding: 48px 40px; }
    .greeting {
      font-size: 18px;
      color: #111827;
      margin-bottom: 24px;
      font-weight: 400;
    }
    .message-text {
      font-size: 15px;
      color: #4b5563;
      line-height: 1.8;
      margin-bottom: 32px;
    }

    /* Summary Card */
    .summary-card {
      background: linear-gradient(to bottom, #f9fafb, #ffffff);
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 32px;
      margin: 32px 0;
    }
    .summary-title {
      font-size: 11px;
      font-weight: 700;
      color: #6b7280;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 24px;
      padding-bottom: 12px;
      border-bottom: 2px solid #01458f;
    }
    .summary-grid {
      display: grid;
      gap: 16px;
    }
    .summary-item {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 12px 0;
      border-bottom: 1px solid #f3f4f6;
    }
    .summary-item:last-child { border-bottom: none; }
    .summary-label {
      font-size: 13px;
      color: #6b7280;
      font-weight: 500;
    }
    .summary-value {
      font-size: 14px;
      color: #111827;
      font-weight: 600;
      text-align: right;
    }
    .services-list {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      justify-content: flex-end;
      max-width: 65%;
    }
    .service-tag {
      background: #dbeafe;
      color: #1e3a8a;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
    }

    /* Next Steps */
    .next-steps {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-radius: 8px;
      padding: 28px;
      margin: 32px 0;
    }
    .next-steps-title {
      font-size: 16px;
      font-weight: 600;
      color: #1e3a8a;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .steps-list {
      list-style: none;
      padding: 0;
    }
    .step-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 12px 0;
    }
    .step-icon {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      background: #01458f;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 10px;
      font-weight: 700;
      margin-top: 2px;
    }
    .step-text {
      font-size: 14px;
      color: #1e40af;
      line-height: 1.6;
    }

    /* CTA Button */
    .cta-section {
      text-align: center;
      margin: 40px 0;
    }
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #01458f 0%, #002d5c 100%);
      color: #ffffff;
      padding: 14px 32px;
      border-radius: 6px;
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.02em;
      box-shadow: 0 4px 6px -1px rgb(1 69 143 / 0.2);
      transition: all 0.3s;
    }
    .cta-button:hover {
      box-shadow: 0 10px 15px -3px rgb(1 69 143 / 0.3);
    }

    /* Footer */
    .footer {
      background: linear-gradient(to bottom, #f9fafb, #f3f4f6);
      padding: 40px 40px 48px;
      text-align: center;
      border-top: 1px solid #e5e7eb;
    }
    .footer-company {
      font-size: 18px;
      font-weight: 600;
      color: #01458f;
      margin-bottom: 16px;
    }
    .footer-tagline {
      font-size: 12px;
      color: #6b7280;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 24px;
    }
    .footer-contact {
      font-size: 13px;
      color: #4b5563;
      line-height: 1.8;
      margin-bottom: 8px;
    }
    .footer-contact a {
      color: #01458f;
      text-decoration: none;
      font-weight: 500;
    }
    .footer-contact a:hover {
      text-decoration: underline;
    }
    .footer-divider {
      width: 60px;
      height: 1px;
      background: #d1d5db;
      margin: 24px auto;
    }
    .footer-timestamp {
      font-size: 11px;
      color: #9ca3af;
    }

    /* Responsive */
    @media only screen and (max-width: 600px) {
      .email-wrapper { padding: 20px 0; }
      .content { padding: 32px 24px; }
      .summary-card { padding: 24px 20px; }
      .next-steps { padding: 24px 20px; }
      .summary-item { flex-direction: column; gap: 6px; }
      .summary-label, .summary-value { text-align: left; }
      .services-list { justify-content: flex-start; max-width: 100%; }
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="email-container">
      <!-- Header -->
      <div class="header">
        <div class="logo-container">
          <img src="${RUS_LOGO_SVG}" alt="RUS" class="logo" />
        </div>
        <h1 class="header-title">Thank You for Your Enquiry</h1>
        <div class="header-subtitle">Chartered Accountants • Registered Auditors • Tax Advisors</div>
        <div class="header-divider"></div>
      </div>

      <!-- Content -->
      <div class="content">
        <div class="greeting">Dear ${data.fullName},</div>

        <div class="message-text">
          Thank you for contacting RUS Chartered Accountants. We have received your enquiry and one of our chartered accountants will review it carefully and be in touch with you shortly.
        </div>

        <!-- Enquiry Summary -->
        <div class="summary-card">
          <div class="summary-title">Your Enquiry Summary</div>
          <div class="summary-grid">
            <div class="summary-item">
              <span class="summary-label">Customer Type</span>
              <span class="summary-value">${customerTypeLabel}</span>
            </div>
            <div class="summary-item">
              <span class="summary-label">Enquiry Type</span>
              <span class="summary-value">${enquiryTypeLabel}</span>
            </div>
            ${data.sector ? `
            <div class="summary-item">
              <span class="summary-label">Industry Sector</span>
              <span class="summary-value">${data.sector}</span>
            </div>
            ` : ''}
            ${data.companyName ? `
            <div class="summary-item">
              <span class="summary-label">Company</span>
              <span class="summary-value">${data.companyName}</span>
            </div>
            ` : ''}
            <div class="summary-item">
              <span class="summary-label">Services</span>
              <div class="services-list">
                ${data.services.map(service => `<span class="service-tag">${service}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- Next Steps -->
        <div class="next-steps">
          <div class="next-steps-title">
            <span>✓</span>
            What Happens Next
          </div>
          <ul class="steps-list">
            <li class="step-item">
              <div class="step-icon">1</div>
              <div class="step-text">One of our chartered accountants will review your enquiry</div>
            </li>
            <li class="step-item">
              <div class="step-icon">2</div>
              <div class="step-text">We'll contact you within 1-2 business days</div>
            </li>
            <li class="step-item">
              <div class="step-icon">3</div>
              <div class="step-text">We'll discuss your requirements and how we can help</div>
            </li>
          </ul>
        </div>

        <div class="message-text" style="margin-top: 32px;">
          If your enquiry is urgent, please feel free to call us directly on <strong>0121 777 1200</strong>.
        </div>

        <!-- CTA -->
        <div class="cta-section">
          <a href="https://rus.co.uk" class="cta-button">Visit Our Website</a>
        </div>

        <div class="message-text" style="margin-top: 40px; margin-bottom: 0;">
          Best regards,<br>
          <strong>The RUS Team</strong>
        </div>
      </div>

      <!-- Footer -->
      <div class="footer">
        <div class="footer-company">RUS Chartered Accountants</div>
        <div class="footer-tagline">Est. 1995 • Over 30 Years of Excellence</div>
        <div class="footer-contact">1190A-1194 Stratford Road, Hall Green, Birmingham, B28 8AB</div>
        <div class="footer-contact">Tel: <a href="tel:01217771200">0121 777 1200</a> | Email: <a href="mailto:info@rus.co.uk">info@rus.co.uk</a></div>
        <div class="footer-contact"><a href="https://rus.co.uk">www.rus.co.uk</a></div>
        <div class="footer-divider"></div>
        <div class="footer-timestamp">
          This email was sent in response to your enquiry submitted on ${new Date().toLocaleString('en-GB', { dateStyle: 'long' })}
        </div>
      </div>
    </div>
  </div>
</body>
</html>
    `,
    text: `
RUS CHARTERED ACCOUNTANTS
Chartered Accountants • Registered Auditors • Tax Advisors

Dear ${data.fullName},

Thank you for contacting RUS Chartered Accountants. We have received your enquiry and one of our chartered accountants will review it carefully and be in touch with you shortly.

YOUR ENQUIRY SUMMARY
Customer Type: ${customerTypeLabel}
Enquiry Type: ${enquiryTypeLabel}
${data.sector ? `Industry Sector: ${data.sector}\n` : ''}${data.companyName ? `Company: ${data.companyName}\n` : ''}Services: ${data.services.join(', ')}

WHAT HAPPENS NEXT
1. One of our chartered accountants will review your enquiry
2. We'll contact you within 1-2 business days
3. We'll discuss your requirements and how we can help

If your enquiry is urgent, please feel free to call us directly on 0121 777 1200.

Best regards,
The RUS Team

---
RUS Chartered Accountants
Est. 1995 • Over 30 Years of Excellence
1190A-1194 Stratford Road, Hall Green, Birmingham, B28 8AB
Tel: 0121 777 1200 | Email: info@rus.co.uk
Web: www.rus.co.uk

This email was sent in response to your enquiry submitted on ${new Date().toLocaleString('en-GB', { dateStyle: 'long' })}
    `,
  };
}
