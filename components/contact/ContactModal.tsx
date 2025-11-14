'use client';

import { useContactForm } from './ContactFormContext';
import { useEffect } from 'react';
import { ContactFormStepper } from './ContactFormStepper';
import { Step1CustomerType } from './steps/Step1CustomerType';
import { Step2EnquiryType } from './steps/Step2EnquiryType';
import { Step3ServiceSelection } from './steps/Step3ServiceSelection';
import { Step4IndustrySector } from './steps/Step4IndustrySector';
import { Step5ContactDetails } from './steps/Step5ContactDetails';
import { Step6AdditionalInfo } from './steps/Step6AdditionalInfo';
import { Step7Confirmation } from './steps/Step7Confirmation';

export function ContactModal() {
  const { isOpen, closeModal, currentStep, previousStep, nextStep, formData, submitForm, isSubmitted } = useContactForm();

  // Validation for each step
  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return !!formData.customerType;
      case 2:
        return !!formData.enquiryType;
      case 3:
        return !!formData.service;
      case 4:
        return !!formData.sector;
      case 5:
        return !!(formData.fullName && formData.email && formData.phone);
      case 6:
        return !!(formData.message && formData.preferredContact && formData.bestTime);
      default:
        return true;
    }
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ease-out"
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl pointer-events-auto transform transition-all duration-300 ease-out animate-modal-enter max-h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative border-b border-gray-200 px-8 py-6">
            <h2 className="text-2xl font-light italic text-gray-900 tracking-tight">
              Get in Touch
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Tell us about your enquiry and we'll get back to you shortly
            </p>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Progress Stepper */}
          <div className="px-8 py-4 bg-gray-50 border-b border-gray-200">
            <ContactFormStepper />
          </div>

          {/* Form Content - Scrollable */}
          <div className="flex-1 overflow-y-auto px-8 py-6">
            {/* Step content will be rendered here */}
            <div className="min-h-[300px]">
              {currentStep === 1 && <Step1CustomerType />}
              {currentStep === 2 && <Step2EnquiryType />}
              {currentStep === 3 && <Step3ServiceSelection />}
              {currentStep === 4 && <Step4IndustrySector />}
              {currentStep === 5 && <Step5ContactDetails />}
              {currentStep === 6 && <Step6AdditionalInfo />}
              {currentStep === 7 && <Step7Confirmation />}
            </div>
          </div>

          {/* Footer - Navigation Buttons */}
          <div className="border-t border-gray-200 px-8 py-4 bg-gray-50">
            <div className="flex items-center justify-between">
              {/* Back Button - Hide when form is submitted */}
              {currentStep > 1 && !isSubmitted && (
                <button
                  onClick={previousStep}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              )}

              {/* Spacer - Show when there's no Back button */}
              {(currentStep === 1 || isSubmitted) && <div />}

              {/* Next Button */}
              {currentStep < 7 && (
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium text-[#01458f] bg-white border-2 border-[#01458f] hover:bg-[#01458f]/5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* Submit Button (Step 7) - Only show if not yet submitted */}
              {currentStep === 7 && !isSubmitted && (
                <button
                  onClick={submitForm}
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-all duration-200"
                >
                  Submit Enquiry
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
