'use client';

import { useContactForm } from '../ContactFormContext';

export function Step2EnquiryType() {
  const { formData, updateFormData, nextStep } = useContactForm();

  const selectOption = (type: 'corporate' | 'individual') => {
    updateFormData({ enquiryType: type });
    setTimeout(() => {
      nextStep();
    }, 300);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          What type of enquiry is this?
        </h3>
        <p className="text-sm text-gray-600">
          This helps us direct your enquiry to the right team
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Corporate Option */}
        <button
          onClick={() => selectOption('corporate')}
          className={`
            relative p-10 rounded-lg border-2 transition-all duration-200 text-center
            ${formData.enquiryType === 'corporate'
              ? 'border-[#01458f] bg-[#01458f]/5'
              : 'border-gray-200 hover:border-[#01458f]/50 hover:bg-gray-50'
            }
          `}
        >
          <div className="space-y-3">
            <h4 className="font-medium text-lg text-gray-900">Corporate Services</h4>
            <p className="text-sm text-gray-600">
              Business accounting & advisory
            </p>
          </div>

          {formData.enquiryType === 'corporate' && (
            <div className="absolute top-3 right-3">
              <div className="w-5 h-5 rounded-full bg-[#01458f] flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          )}
        </button>

        {/* Individual Option */}
        <button
          onClick={() => selectOption('individual')}
          className={`
            relative p-10 rounded-lg border-2 transition-all duration-200 text-center
            ${formData.enquiryType === 'individual'
              ? 'border-[#01458f] bg-[#01458f]/5'
              : 'border-gray-200 hover:border-[#01458f]/50 hover:bg-gray-50'
            }
          `}
        >
          <div className="space-y-3">
            <h4 className="font-medium text-lg text-gray-900">Individual Services</h4>
            <p className="text-sm text-gray-600">
              Personal tax & planning
            </p>
          </div>

          {formData.enquiryType === 'individual' && (
            <div className="absolute top-3 right-3">
              <div className="w-5 h-5 rounded-full bg-[#01458f] flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
