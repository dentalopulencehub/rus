'use client';

import { useContactForm } from '../ContactFormContext';

const corporateServices = [
  'Accounting & Bookkeeping',
  'Audit & Assurance',
  'Business Advisory',
  'Company Secretarial',
  'HMRC & NCA Investigations',
  'Payroll Services',
  'Taxation Services',
  'Other',
];

const individualServices = [
  'Estate Planning',
  'Personal Tax Returns',
  'Self-Assessment',
  'Tax Planning',
  'Other',
];

export function Step3ServiceSelection() {
  const { formData, updateFormData, nextStep } = useContactForm();

  const servicesList = formData.enquiryType === 'corporate' ? corporateServices : individualServices;

  const toggleService = (service: string) => {
    const currentServices = formData.services || [];
    const isSelected = currentServices.includes(service);

    const newServices = isSelected
      ? currentServices.filter(s => s !== service)
      : [...currentServices, service];

    updateFormData({ services: newServices });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Which services are you interested in?
        </h3>
        <p className="text-sm text-gray-600">
          Select all that apply
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {servicesList.map((service, index) => {
          const isSelected = formData.services?.includes(service);
          return (
            <button
              key={service}
              onClick={() => toggleService(service)}
              className={`
                relative p-4 rounded-lg border-2 transition-all duration-200 text-left
                ${isSelected
                  ? 'border-[#01458f] bg-[#01458f]/5 shadow-md'
                  : 'border-gray-200 hover:border-[#01458f]/50 hover:bg-gray-50'
                }
                ${service === 'Other' && servicesList.length % 2 !== 0 ? 'sm:col-span-2' : ''}
              `}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-medium text-sm text-gray-900">{service}</span>

                <div className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                  isSelected ? 'bg-[#01458f] border-[#01458f]' : 'border-gray-300'
                }`}>
                  {isSelected && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
