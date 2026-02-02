# Email Configuration - Mailtrap Setup

Complete documentation for the RUS Chartered Accountants email system using Mailtrap SMTP.

## Overview

All contact form submissions now send emails through Mailtrap's live SMTP service:
- **Admin notifications** → info@rus.co.uk
- **User confirmations** → Customer's email (branded with RUS branding)

## Mailtrap Configuration

### SMTP Credentials

```env
Host: live.smtp.mailtrap.io
Port: 587 (recommended), 465, 2525, or 25
Username: api
Password: <API_TOKEN>
Auth: PLAIN, LOGIN
TLS: Required (STARTTLS on 587, 2525, 25 | Forced TLS on 465)
```

### Environment Variables (.env.local)

```env
# Email Configuration (Mailtrap)
SMTP_HOST=live.smtp.mailtrap.io
SMTP_PORT=587
SMTP_USER=api
SMTP_PASS=f9e3b1a10a0d08a895c99c3266fe1539
SMTP_FROM_EMAIL=info@rus.co.uk
SMTP_FROM_NAME=RUS Chartered Accountants
ADMIN_EMAIL=info@rus.co.uk
```

**SECURITY NOTE:** The .env.local file is gitignored and will NOT be committed to the repository.

## Contact Forms Mapped

### 1. Main Contact Form (7-Step Modal/Popup)

**Location:** Available site-wide via modal popup

**Trigger Points:**
- Header "Contact" button
- CTA buttons throughout site
- Service pages
- All "Get in Touch" / "Contact Us" buttons

**Form Fields Captured:**
```typescript
{
  customerType: 'new' | 'existing'
  enquiryType: 'corporate' | 'individual'
  services: string[]  // Multi-select services
  sector: string      // Industry sector
  fullName: string
  email: string
  phone: string
  companyName: string
  clientReference: string
  message: string
  preferredContact: 'email' | 'phone'
  bestTime: 'morning' | 'afternoon' | 'anytime'
}
```

**API Endpoint:** `/api/contact` (POST)

**Files:**
- Context: `/components/contact/ContactFormContext.tsx` (lines 108-136)
- API Route: `/app/api/contact/route.ts`
- Steps: `/components/contact/steps/Step1-7*.tsx`

### 2. Quick Contact Form (Contact Page)

**Location:** `/contact` page → "Quick Contact" tab

**Form Fields Captured:**
```typescript
{
  name: string
  email: string
  phone?: string     // Optional
  message: string
}
```

**API Endpoint:** `/api/contact-quick` (POST)

**Files:**
- Page: `/app/contact/page.tsx` (lines 1-60, 173-256)
- API Route: `/app/api/contact-quick/route.ts`

## Email Templates

### Admin Notification Emails

**Recipient:** info@rus.co.uk

**Templates:**
1. **Main Form Admin Email** - Full enquiry details with:
   - Customer type, enquiry type, services, sector
   - Contact information
   - Company details
   - Message and preferences
   - Formatted as professional business email

2. **Quick Contact Admin Email** - Simple message with:
   - Name, email, phone (if provided)
   - Message content
   - Submission timestamp

### User Confirmation Emails

**Recipient:** User's email address

**Templates:**
1. **Main Form Confirmation** - Branded email with:
   - RUS logo and branding colors (#01458f)
   - Enquiry summary showing what they submitted
   - "What happens next" section
   - Response time expectation (1-2 business days)
   - Contact information
   - CTA button to visit website

2. **Quick Contact Confirmation** - Simple branded thank you with:
   - RUS branding
   - Thank you message
   - Response time expectation
   - Direct contact information
   - CTA button to visit website

**Branding Elements:**
- Primary Color: #01458f (RUS blue)
- Company Name: RUS Chartered Accountants
- Tagline: Chartered Accountants | Registered Auditors | Tax Advisors
- Location: Hall Green, West Midlands, Birmingham
- Phone: 0121 777 7045
- Email: info@rus.co.uk
- Website: www.rus.co.uk

## Email Functionality

### Email Library

**Package:** nodemailer
**Version:** Latest (installed via npm)

**Configuration File:** `/lib/email.ts`
- Transporter setup with Mailtrap SMTP
- Email template functions
- Send email functions

### API Routes

#### Main Contact Form API

**File:** `/app/api/contact/route.ts`

**Validation:**
- Required fields: fullName, email, customerType, enquiryType, services
- Email format validation
- Services must be array with at least one item

**Process:**
1. Validate incoming data
2. Format contact form data
3. Send admin notification to info@rus.co.uk
4. Send confirmation email to user
5. Return success/error response

#### Quick Contact API

**File:** `/app/api/contact-quick/route.ts`

**Validation:**
- Required fields: name, email, message
- Email format validation
- Phone is optional

**Process:**
1. Validate incoming data
2. Format quick contact data
3. Send admin notification to info@rus.co.uk
4. Send confirmation email to user
5. Return success/error response

## Frontend Integration

### Main Contact Form

**State Management:** React Context API
- Location: `/components/contact/ContactFormContext.tsx`
- Provides: formData, submission state, error handling

**Submission Flow:**
1. User completes 7-step form
2. Step 7 shows review/summary
3. User clicks "Submit"
4. `submitForm()` calls `/api/contact` endpoint
5. Shows loading spinner
6. On success: Shows success message, auto-closes modal after 3s
7. On error: Shows error message with retry option

**Error Handling:**
- Network errors caught and displayed
- API validation errors shown to user
- Fallback contact info provided (info@rus.co.uk)

### Quick Contact Form

**State Management:** Local component state
- Location: `/app/contact/page.tsx`

**Submission Flow:**
1. User fills form fields
2. Clicks "Send Message"
3. `handleQuickContactSubmit()` calls `/api/contact-quick`
4. Shows loading state on button
5. On success: Shows success message, form clears, auto-hides after 5s
6. On error: Shows error message inline

**Error Handling:**
- Form validation (required fields, email format)
- Network errors caught and displayed
- Fallback contact info provided

## Testing in Mailtrap

### Viewing Sent Emails

1. Log into Mailtrap dashboard
2. Navigate to "Email Sending" → "Streams"
3. Select your stream (default or custom)
4. View sent emails with full details:
   - HTML preview
   - Plain text preview
   - Email headers
   - Delivery status
   - Recipient info

### Test Scenarios

**Test 1: Main Contact Form Submission**
1. Click any "Contact Us" button on site
2. Complete all 7 steps:
   - Step 1: Select "New Client"
   - Step 2: Select "Corporate"
   - Step 3: Select services (e.g., "Accounting & Bookkeeping")
   - Step 4: Select sector (e.g., "Information Technology")
   - Step 5: Enter contact details
   - Step 6: Add message and preferences
   - Step 7: Review and submit
3. Check Mailtrap for 2 emails:
   - Admin email to info@rus.co.uk (detailed enquiry)
   - User confirmation to your test email (branded)

**Test 2: Quick Contact Form**
1. Go to `/contact` page
2. Toggle to "Quick Contact" view
3. Fill in name, email, message
4. Submit
5. Check Mailtrap for 2 emails:
   - Admin email to info@rus.co.uk (simple message)
   - User confirmation to your test email (branded)

## Email Content Mapping

### Main Contact Form → Email Content

| Form Field | Admin Email | User Confirmation |
|------------|-------------|-------------------|
| customerType | ✓ Displayed | ✓ Summary |
| enquiryType | ✓ Displayed | ✓ Summary |
| services | ✓ List | ✓ List |
| sector | ✓ Displayed | ✓ Summary |
| fullName | ✓ Displayed | ✓ Greeting |
| email | ✓ Clickable link | N/A |
| phone | ✓ Displayed | N/A |
| companyName | ✓ Displayed (if provided) | ✓ Summary (if provided) |
| clientReference | ✓ Displayed (if provided) | N/A |
| message | ✓ Full text | ✓ Summary (if provided) |
| preferredContact | ✓ Displayed | N/A |
| bestTime | ✓ Displayed | N/A |
| Submission time | ✓ Timestamp | ✓ Date |

### Quick Contact Form → Email Content

| Form Field | Admin Email | User Confirmation |
|------------|-------------|-------------------|
| name | ✓ Displayed | ✓ Greeting |
| email | ✓ Clickable link | N/A |
| phone | ✓ Displayed (if provided) | N/A |
| message | ✓ Full text | N/A |
| Submission time | ✓ Timestamp | ✓ Date |

## Security & Best Practices

### Environment Variables
- All sensitive credentials in `.env.local`
- File is gitignored (protected)
- Never commit API tokens to repository

### Email Validation
- Frontend: HTML5 email input validation
- Backend: Regex pattern matching
- Format: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

### Error Handling
- Try-catch blocks on all API calls
- User-friendly error messages
- Fallback contact information provided
- Errors logged to console for debugging

### Rate Limiting
- **TODO:** Consider implementing rate limiting on API routes
- **TODO:** Add CAPTCHA for production to prevent spam

## File Structure

```
lib/
  └── email.ts                          # Email configuration & templates

app/
  ├── api/
  │   ├── contact/
  │   │   └── route.ts                  # Main form API endpoint
  │   └── contact-quick/
  │       └── route.ts                  # Quick contact API endpoint
  └── contact/
      └── page.tsx                      # Contact page with quick form

components/
  └── contact/
      ├── ContactFormContext.tsx        # Main form state & submission
      ├── ContactModal.tsx              # Modal wrapper
      ├── ContactFormInline.tsx         # Inline form variant
      ├── ContactFormStepper.tsx        # Progress indicator
      ├── ContactTrigger.tsx            # Trigger button
      └── steps/
          ├── Step1CustomerType.tsx
          ├── Step2EnquiryType.tsx
          ├── Step3ServiceSelection.tsx
          ├── Step4IndustrySector.tsx
          ├── Step5ContactDetails.tsx
          ├── Step6AdditionalInfo.tsx
          └── Step7Confirmation.tsx     # Submit & success state

.env.local                              # Environment variables (gitignored)
```

## Troubleshooting

### Emails Not Sending

**Check:**
1. Environment variables are set in `.env.local`
2. Mailtrap API token is valid
3. Server is restarted after env changes
4. Check browser console for API errors
5. Check Next.js server logs

**Debug:**
```bash
# Check if env vars are loaded
console.log('SMTP configured:', !!process.env.SMTP_PASS);

# Test API endpoint directly
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test","email":"test@example.com",...}'
```

### Form Validation Errors

**Frontend Validation:**
- Check browser console for React errors
- Verify all required fields are filled
- Check email format

**Backend Validation:**
- Check Network tab in browser DevTools
- Look for 400 errors with validation details
- Review API response message

### Email Not Arriving in Mailtrap

**Check:**
1. Mailtrap account is active
2. Using correct stream/inbox
3. Check "Spam" or "Rejected" folders in Mailtrap
4. Verify API token has sending permissions
5. Check Mailtrap logs for delivery issues

## Production Deployment Checklist

- [ ] Update SMTP_FROM_EMAIL to verified sending domain
- [ ] Configure proper DNS records (SPF, DKIM, DMARC)
- [ ] Test email deliverability
- [ ] Add rate limiting to API routes
- [ ] Implement CAPTCHA (reCAPTCHA or hCaptcha)
- [ ] Set up email monitoring/alerts
- [ ] Configure email analytics
- [ ] Update response time SLAs in confirmation emails
- [ ] Test on mobile devices
- [ ] Verify email templates render correctly in major email clients
- [ ] Update privacy policy with email handling info

## Additional Information

### Service Options (Corporate)
- Accounting & Bookkeeping
- Audit & Assurance
- Business Advisory
- Company Secretarial
- HMRC & NCA Investigations
- Payroll Services
- Taxation Services
- Other

### Service Options (Individual)
- Estate Planning
- Personal Tax Returns
- Self-Assessment
- Tax Planning
- Other

### Sector Options
- Charities & Not-for-profit
- Construction
- Contractors & Professional Services
- Creative & Media
- Education & Academies
- Healthcare
- Hospitality & Leisure
- Information Technology
- Property Services
- Retail
- Solicitors
- Other

## Support

For issues or questions about the email system:
- Check this documentation first
- Review browser console and Network tab
- Check Next.js server logs
- Test with curl/Postman for API debugging
- Contact Mailtrap support for SMTP issues

---

**Last Updated:** February 2, 2026
**Version:** 1.0.0
