import { NextRequest, NextResponse } from 'next/server';
import { sendQuickContactEmails, QuickContactData } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'message'];
    const missingFields = requiredFields.filter(field => !body[field] || body[field].trim() === '');

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

    // Prepare form data
    const formData: QuickContactData = {
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone?.trim() || undefined,
      message: body.message.trim(),
    };

    // Send emails via Mailtrap
    await sendQuickContactEmails(formData);

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully. Check your email for confirmation.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Quick contact form submission error:', error);
    return NextResponse.json(
      {
        error: 'Failed to send message. Please try again or contact us directly.',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
