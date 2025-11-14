'use client';

import { useContactForm } from './ContactFormContext';

const steps = [
  { number: 1, label: 'Customer' },
  { number: 2, label: 'Enquiry' },
  { number: 3, label: 'Service' },
  { number: 4, label: 'Sector' },
  { number: 5, label: 'Contact' },
  { number: 6, label: 'Details' },
  { number: 7, label: 'Confirm' },
];

export function ContactFormStepper() {
  const { currentStep } = useContactForm();
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="relative h-1 bg-gray-200 rounded-full mb-4">
        <div
          className="absolute top-0 left-0 h-full bg-[#01458f] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Step Indicators */}
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isComplete = currentStep > step.number;
          const isCurrent = currentStep === step.number;
          const isUpcoming = currentStep < step.number;

          return (
            <div key={step.number} className="flex flex-col items-center flex-1">
              {/* Step Circle */}
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300
                  ${isCurrent ? 'bg-[#01458f] text-white scale-110 shadow-lg' : ''}
                  ${isComplete ? 'bg-[#01458f] text-white' : ''}
                  ${isUpcoming ? 'bg-gray-200 text-gray-400' : ''}
                `}
              >
                {isComplete ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  step.number
                )}
              </div>

              {/* Step Label */}
              <span
                className={`
                  text-xs mt-1 transition-colors duration-300 hidden sm:block
                  ${isCurrent ? 'text-[#01458f] font-medium' : ''}
                  ${isComplete ? 'text-gray-600' : ''}
                  ${isUpcoming ? 'text-gray-400' : ''}
                `}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
