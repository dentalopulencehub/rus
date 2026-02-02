'use client';

import { useContactForm } from '../ContactFormContext';
import { useEffect } from 'react';

export function Step7Confirmation() {
  const { formData, isSubmitted, isSubmitting, submitError, closeModal } = useContactForm();

  // Auto-close modal after showing success message
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        closeModal();
      }, 3000); // Close after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, closeModal]);

  // If form is submitting, show loading state
  if (isSubmitting) {
    return (
      <div className="space-y-6 text-center py-8">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-10 h-10 text-[#01458f] animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-light italic text-gray-900 mb-3">
            Submitting your enquiry...
          </h3>
          <p className="text-base text-gray-600">
            Please wait while we process your information
          </p>
        </div>
      </div>
    );
  }

  // If form is submitted, show success message
  if (isSubmitted) {
    return (
      <div className="space-y-6 text-center py-8">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center animate-bounce">
            <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <div>
          <h3 className="text-3xl font-light italic text-gray-900 mb-3">
            Thank you for your enquiry!
          </h3>
          <p className="text-base text-gray-600 mb-4">
            We've received your information and will get back to you shortly
          </p>
          <p className="text-sm text-gray-500">
            This window will close automatically...
          </p>
        </div>

        {/* Success Info */}
        <div className="bg-green-50 border border-green-100 rounded-lg p-5 max-w-md mx-auto">
          <h4 className="font-medium text-green-800 text-sm mb-2">
            What happens next?
          </h4>
          <ul className="space-y-2 text-sm text-green-700 text-left">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>One of our chartered accountants will review your enquiry</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>We'll contact you within 1 business day</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>You'll receive a confirmation email shortly</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  // Otherwise, show review screen

  return (
    <div className="space-y-6">
      {/* Success Icon */}
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Confirmation Message */}
      <div className="text-center">
        <h3 className="text-2xl font-light italic text-gray-900 mb-2">
          Review your enquiry
        </h3>
        <p className="text-sm text-gray-600">
          Please review your details below and click Submit to send your enquiry
        </p>
      </div>

      {/* Summary Card */}
      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <h4 className="font-medium text-gray-900 text-sm uppercase tracking-wide">
          Enquiry Summary
        </h4>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Customer Type:</span>
            <span className="font-medium text-gray-900 capitalize">{formData.customerType}</span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Enquiry Type:</span>
            <span className="font-medium text-gray-900 capitalize">{formData.enquiryType}</span>
          </div>

          <div className="py-2 border-b border-gray-200">
            <span className="text-gray-600 block mb-1">Services:</span>
            <div className="flex flex-wrap gap-2">
              {formData.services && formData.services.map((service) => (
                <span key={service} className="inline-flex items-center px-2 py-1 rounded bg-[#01458f]/10 text-[#01458f] text-sm font-medium">
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Sector:</span>
            <span className="font-medium text-gray-900">{formData.sector}</span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Contact:</span>
            <span className="font-medium text-gray-900">{formData.fullName}</span>
          </div>

          <div className="flex justify-between py-2 border-b border-gray-200">
            <span className="text-gray-600">Email:</span>
            <span className="font-medium text-gray-900">{formData.email}</span>
          </div>

          <div className="flex justify-between py-2">
            <span className="text-gray-600">Phone:</span>
            <span className="font-medium text-gray-900">{formData.phone}</span>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-5">
          <h4 className="font-medium text-red-800 text-sm mb-2 flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            Submission Error
          </h4>
          <p className="text-sm text-red-700">{submitError}</p>
          <p className="text-sm text-red-600 mt-2">
            Please try again or contact us directly at <a href="mailto:info@rus.co.uk" className="underline">info@rus.co.uk</a>
          </p>
        </div>
      )}

      {/* What Happens Next */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
        <h4 className="font-medium text-[#01458f] text-sm mb-2 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          What happens next?
        </h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 text-[#01458f] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>One of our chartered accountants will review your enquiry</span>
          </li>
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 text-[#01458f] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>We'll contact you within 1 business day</span>
          </li>
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 text-[#01458f] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>You'll receive a confirmation email shortly</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
