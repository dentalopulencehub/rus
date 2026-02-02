import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmails, ContactFormData } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['fullName', 'email', 'customerType', 'enquiryType', 'services'];
    const missingFields = requiredFields.filter(field => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: 'Missing required fields', fields: missingFields },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate services array
    if (!Array.isArray(body.services) || body.services.length === 0) {
      return NextResponse.json(
        { error: 'At least one service must be selected' },
        { status: 400 }
      );
    }

    // Prepare form data
    const formData: ContactFormData = {
      customerType: body.customerType,
      enquiryType: body.enquiryType,
      services: body.services,
      sector: body.sector || null,
      fullName: body.fullName,
      email: body.email,
      phone: body.phone || '',
      companyName: body.companyName || '',
      clientReference: body.clientReference || '',
      message: body.message || '',
      preferredContact: body.preferredContact || null,
      bestTime: body.bestTime || null,
    };

    // Send emails via Mailtrap
    await sendContactEmails(formData);

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully. Check your email for confirmation.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      {
        error: 'Failed to submit form. Please try again or contact us directly.',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
