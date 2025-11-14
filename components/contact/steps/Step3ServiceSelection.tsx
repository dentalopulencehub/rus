'use client';

import { useContactForm } from '../ContactFormContext';

const corporateServices = [
  'Taxation Services',
  'Accounting & Bookkeeping',
  'Audit & Assurance',
  'Payroll Services',
  'Business Advisory',
  'Company Formation',
];

const individualServices = [
  'Personal Tax Returns',
  'Self-Assessment',
  'Tax Planning',
  'Estate Planning',
  'Other Personal Services',
];

export function Step3ServiceSelection() {
  const { formData, updateFormData, nextStep } = useContactForm();

  const services = formData.enquiryType === 'corporate' ? corporateServices : individualServices;

  const selectService = (service: string) => {
    updateFormData({ service });
    setTimeout(() => {
      nextStep();
    }, 300);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Which service are you interested in?
        </h3>
        <p className="text-sm text-gray-600">
          Select the service that best matches your needs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {services.map((service) => (
          <button
            key={service}
            onClick={() => selectService(service)}
            className={`
              relative p-4 rounded-lg border-2 transition-all duration-200 text-left
              ${formData.service === service
                ? 'border-[#01458f] bg-[#01458f]/5 shadow-md'
                : 'border-gray-200 hover:border-[#01458f]/50 hover:bg-gray-50'
              }
            `}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-medium text-sm text-gray-900">{service}</span>

              {formData.service === service && (
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#01458f] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
