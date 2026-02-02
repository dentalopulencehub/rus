'use client';

import { useState, useEffect } from 'react';
import {
  generatePremiumAdminEmail,
  generatePremiumUserConfirmationEmail,
} from '@/lib/email-templates-premium';

// Sample data for preview
const sampleContactData = {
  customerType: 'new' as const,
  enquiryType: 'corporate' as const,
  services: [
    'Accounting & Bookkeeping',
    'Audit & Assurance',
    'Taxation Services',
  ],
  sector: 'Information Technology',
  fullName: 'John Smith',
  email: 'john.smith@example.com',
  phone: '0121 777 1234',
  companyName: 'Tech Innovations Ltd',
  clientReference: '',
  message: 'We are looking for a new accountant to help with our quarterly reports and tax planning. Our business has grown significantly this year and we need expert advice.',
  preferredContact: 'email' as const,
  bestTime: 'morning' as const,
};

export default function EmailPreviewPage() {
  const [emailType, setEmailType] = useState<'admin' | 'user'>('admin');
  const [customerType, setCustomerType] = useState<'new' | 'existing'>('new');
  const [enquiryType, setEnquiryType] = useState<'corporate' | 'individual'>('corporate');
  const [emails, setEmails] = useState<{
    admin: { subject: string; html: string; text: string };
    user: { subject: string; html: string; text: string };
  } | null>(null);

  const currentData = {
    ...sampleContactData,
    customerType,
    enquiryType,
  };

  // Generate emails only on client side to avoid hydration mismatch
  useEffect(() => {
    const adminEmail = generatePremiumAdminEmail(currentData);
    const userEmail = generatePremiumUserConfirmationEmail(currentData);
    setEmails({ admin: adminEmail, user: userEmail });
  }, [customerType, enquiryType]);

  if (!emails) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-600">Loading preview...</div>
      </div>
    );
  }

  const currentEmail = emailType === 'admin' ? emails.admin : emails.user;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Control Panel */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">📧 Email Preview</h1>
              <p className="text-sm text-gray-600 mt-1">
                Visual preview of your email templates
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Email Type Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setEmailType('admin')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    emailType === 'admin'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Admin Email
                </button>
                <button
                  onClick={() => setEmailType('user')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    emailType === 'user'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  User Confirmation
                </button>
              </div>

              {/* Customer Type */}
              <select
                value={customerType}
                onChange={(e) => setCustomerType(e.target.value as 'new' | 'existing')}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="new">New Client</option>
                <option value="existing">Existing Client</option>
              </select>

              {/* Enquiry Type */}
              <select
                value={enquiryType}
                onChange={(e) => setEnquiryType(e.target.value as 'corporate' | 'individual')}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="corporate">Corporate</option>
                <option value="individual">Individual</option>
              </select>

              {/* Copy HTML Button */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(currentEmail.html);
                  alert('HTML copied to clipboard!');
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Copy HTML
              </button>
            </div>
          </div>

          {/* Subject Line */}
          <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-3">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              Subject Line
            </div>
            <div className="text-sm font-medium text-gray-900">{currentEmail.subject}</div>
          </div>
        </div>
      </div>

      {/* Email Preview */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Preview Header */}
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  {emailType === 'admin' ? 'To: info@rus.co.uk' : `To: ${sampleContactData.email}`}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">
                  Preview Mode
                </span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Email Content */}
          <div
            className="email-preview-content"
            style={{
              minHeight: '600px',
              maxHeight: '80vh',
              overflowY: 'auto',
            }}
            dangerouslySetInnerHTML={{ __html: currentEmail.html }}
          />
        </div>

        {/* Plain Text Version */}
        <div className="mt-6 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
            <h3 className="text-sm font-semibold text-gray-700">Plain Text Version</h3>
          </div>
          <div className="p-6">
            <pre className="text-xs text-gray-700 font-mono whitespace-pre-wrap leading-relaxed">
              {currentEmail.text}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
