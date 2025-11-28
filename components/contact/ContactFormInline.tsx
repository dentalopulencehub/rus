'use client';

import { useContactForm } from './ContactFormContext';
import { ContactFormStepper } from './ContactFormStepper';
import { Step1CustomerType } from './steps/Step1CustomerType';
import { Step2EnquiryType } from './steps/Step2EnquiryType';
import { Step3ServiceSelection } from './steps/Step3ServiceSelection';
import { Step4IndustrySector } from './steps/Step4IndustrySector';
import { Step5ContactDetails } from './steps/Step5ContactDetails';
import { Step6AdditionalInfo } from './steps/Step6AdditionalInfo';
import { Step7Confirmation } from './steps/Step7Confirmation';

export function ContactFormInline() {
  const { currentStep, previousStep, nextStep, formData, submitForm, isSubmitted } = useContactForm();

  // Validation for each step
  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return !!formData.customerType;
      case 2:
        return !!formData.enquiryType;
      case 3:
        return formData.services && formData.services.length > 0;
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

  return (
    <div className="w-full">
      {/* Progress Stepper */}
      <div className="mb-8">
        <ContactFormStepper />
      </div>

      {/* Form Content */}
      <div className="min-h-[300px] mb-8">
        {currentStep === 1 && <Step1CustomerType />}
        {currentStep === 2 && <Step2EnquiryType />}
        {currentStep === 3 && <Step3ServiceSelection />}
        {currentStep === 4 && <Step4IndustrySector />}
        {currentStep === 5 && <Step5ContactDetails />}
        {currentStep === 6 && <Step6AdditionalInfo />}
        {currentStep === 7 && <Step7Confirmation />}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between border-t border-gray-200 pt-6">
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
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium text-white bg-[#01458f] hover:bg-[#013a75] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
  );
}
