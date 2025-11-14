# Contact Form System - Planning Document

## Overview
A reusable, step-by-step conditional contact form that can be triggered from:
- Contact button in header
- Contact links throughout the site
- CTA sections
- Any page requiring enquiry

## Design Style
- **Modal/Pop-up**: Overlay on current page
- **Styling**: Match existing service dropdown cards
  - White/light background
  - Blue accents (#01458f)
  - Rounded corners
  - Clean, minimal aesthetic
  - Smooth transitions

## Form Logic Flow

### Step 1: Customer Type
**Question**: "Are you a new or existing customer?"

**Options**:
- [ ] New Customer
- [ ] Existing Customer

**Logic**:
- If **Existing Customer** → Skip to Step 4 (Service Selection) and collect client reference
- If **New Customer** → Continue to Step 2

---

### Step 2: Enquiry Type
**Question**: "What type of enquiry is this?"

**Options**:
- [ ] Corporate Services
- [ ] Individual Services

**Logic**:
- Store selection
- Continue to Step 3

---

### Step 3: Service Selection
**Question**: "Which service are you interested in?"

**For Corporate**:
- [ ] Taxation Services
- [ ] Accounting & Bookkeeping
- [ ] Audit & Assurance
- [ ] Payroll Services
- [ ] Business Advisory
- [ ] Company Formation

**For Individual**:
- [ ] Personal Tax Returns
- [ ] Self-Assessment
- [ ] Tax Planning
- [ ] Estate Planning
- [ ] Other Personal Services

**Logic**:
- Store selection
- Continue to Step 4

---

### Step 4: Industry/Sector
**Question**: "Which industry/sector does this relate to?"

**Options**:
- [ ] Charities & Not-for-profit
- [ ] Contractors & Professional Services
- [ ] Corporate
- [ ] Creative & Media
- [ ] Education & Academies
- [ ] Healthcare
- [ ] Owner Managed Businesses
- [ ] Property Services
- [ ] Retail
- [ ] Solicitors
- [ ] Other

**Logic**:
- Store selection
- Continue to Step 5

---

### Step 5: Contact Details
**Question**: "Please provide your contact information"

**Fields**:
- Full Name* (required)
- Email Address* (required)
- Phone Number* (required)
- Company Name (if Corporate)
- Client Reference (if Existing Customer)

**Logic**:
- Validate required fields
- Continue to Step 6

---

### Step 6: Additional Information
**Question**: "Tell us more about your enquiry"

**Fields**:
- Message/Details* (required, textarea)
- Preferred Contact Method:
  - [ ] Email
  - [ ] Phone
- Best Time to Contact:
  - [ ] Morning (9am-12pm)
  - [ ] Afternoon (12pm-5pm)
  - [ ] Any time

**Logic**:
- Store all information
- Continue to Step 7

---

### Step 7: Confirmation
**Display**:
- Summary of all provided information
- "Thank you" message
- "What happens next" information
- Expected response time

---

## Technical Implementation Plan

### Phase 1: Component Structure
1. **ContactModal.tsx** - Main modal wrapper
2. **ContactFormStepper.tsx** - Step navigation component
3. **ContactFormSteps/** - Individual step components
   - Step1CustomerType.tsx
   - Step2EnquiryType.tsx
   - Step3ServiceSelection.tsx
   - Step4IndustrySector.tsx
   - Step5ContactDetails.tsx
   - Step6AdditionalInfo.tsx
   - Step7Confirmation.tsx
4. **ContactFormContext.tsx** - State management for form data

### Phase 2: State Management
```typescript
interface ContactFormData {
  customerType: 'new' | 'existing' | null;
  enquiryType: 'corporate' | 'individual' | null;
  service: string | null;
  sector: string | null;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  clientReference?: string;
  message: string;
  preferredContact: 'email' | 'phone' | null;
  bestTime: 'morning' | 'afternoon' | 'anytime' | null;
}
```

### Phase 3: Validation
- Required fields per step
- Email format validation
- Phone number format validation (UK)
- Prevent progression until step is complete

### Phase 4: Integration Points
1. Header "Contact" button
2. CTA section buttons ("Enquiry Now", "Book Consultation")
3. Service dropdown "Book Consultation"
4. Integration section "Find out more" / "Enquiry Now"
5. Any future contact links

### Phase 5: Backend/Submission
- Form submission endpoint
- Email notification system
- Store enquiries in database (future)
- Integration with CRM (future consideration)

---

## User Experience Flow

### Visual Progress Indicator
```
[●]―[○]―[○]―[○]―[○]―[○]―[○]
 1   2   3   4   5   6   7
```

### Navigation
- **Next** button (bottom right) - Proceeds to next step
- **Back** button (bottom left) - Returns to previous step
- **Close** (X) button (top right) - Closes modal with confirmation
- **Progress bar** showing completion percentage

### Responsive Design
- Desktop: 600px wide modal
- Tablet: 90% width
- Mobile: Full screen overlay

---

## Design Specifications

### Colors
- Primary Blue: #01458f
- White Background: #ffffff
- Light Grey: #f9fafb
- Border: #e5e7eb
- Text: #111827
- Text Subtle: #6b7280

### Typography
- Headings: font-medium, text-lg
- Body: text-sm
- Labels: text-xs, font-medium, uppercase

### Spacing
- Modal padding: 32px (desktop), 24px (mobile)
- Between elements: 24px
- Input padding: 12px

### Animations
- Modal entrance: fade + scale (200ms)
- Step transitions: slide (150ms)
- Button hover: smooth (100ms)

---

## Accessibility
- Keyboard navigation (Tab, Enter, Escape)
- ARIA labels for all inputs
- Focus management (trap focus in modal)
- Screen reader announcements for step changes
- Error messages associated with inputs

---

## File Structure
```
components/
  contact/
    ContactModal.tsx           // Main modal component
    ContactFormStepper.tsx     // Progress indicator
    ContactFormContext.tsx     // Form state management
    steps/
      Step1CustomerType.tsx
      Step2EnquiryType.tsx
      Step3ServiceSelection.tsx
      Step4IndustrySector.tsx
      Step5ContactDetails.tsx
      Step6AdditionalInfo.tsx
      Step7Confirmation.tsx
    ContactTrigger.tsx         // Reusable trigger component
```

---

## Execution Plan

### Task 1: Create Context & Types
- Define TypeScript interfaces
- Create ContactFormContext
- Setup state management

### Task 2: Build Modal Shell
- Create ContactModal component
- Add open/close functionality
- Implement backdrop
- Add animations

### Task 3: Create Stepper Component
- Progress indicator
- Navigation buttons
- Step validation logic

### Task 4: Build Individual Steps (in order)
1. Step 1: Customer Type
2. Step 2: Enquiry Type
3. Step 3: Service Selection (conditional based on Step 2)
4. Step 4: Industry/Sector
5. Step 5: Contact Details (conditional fields based on Step 1)
6. Step 6: Additional Information
7. Step 7: Confirmation

### Task 5: Form Validation
- Required field validation
- Format validation (email, phone)
- Error messaging

### Task 6: Integration
- Create ContactTrigger component
- Replace existing contact buttons
- Test from all trigger points

### Task 7: Submission Handler
- Create API endpoint
- Handle form submission
- Email notifications
- Success/error handling

### Task 8: Testing & Polish
- Test all conditional paths
- Mobile responsiveness
- Accessibility audit
- Browser compatibility

---

## Success Criteria
- [ ] Form works on all devices
- [ ] All conditional logic flows correctly
- [ ] Validation works properly
- [ ] Can be triggered from any page
- [ ] Matches design aesthetic
- [ ] Accessible (WCAG AA)
- [ ] Form submissions received successfully
- [ ] Email notifications sent

---

## Future Enhancements
- Save form progress (if user closes modal)
- Integration with CRM system
- Dashboard to view enquiries
- Automated response emails
- Calendar integration for consultation booking
- File upload capability (for documents)
