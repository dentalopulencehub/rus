'use client';

import { useContactForm } from '../ContactFormContext';

const sectors = [
  'Charities & Not-for-profit',
  'Contractors & Professional Services',
  'Corporate',
  'Creative & Media',
  'Education & Academies',
  'Healthcare',
  'Owner Managed Businesses',
  'Property Services',
  'Retail',
  'Solicitors',
  'Other',
];

export function Step4IndustrySector() {
  const { formData, updateFormData, nextStep } = useContactForm();

  const selectSector = (sector: string) => {
    updateFormData({ sector });
    setTimeout(() => {
      nextStep();
    }, 300);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Which industry/sector does this relate to?
        </h3>
        <p className="text-sm text-gray-600">
          This helps us provide industry-specific advice
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2">
        {sectors.map((sector) => (
          <button
            key={sector}
            onClick={() => selectSector(sector)}
            className={`
              relative p-4 rounded-lg border-2 transition-all duration-200 text-left
              ${formData.sector === sector
                ? 'border-[#01458f] bg-[#01458f]/5 shadow-md'
                : 'border-gray-200 hover:border-[#01458f]/50 hover:bg-gray-50'
              }
            `}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-medium text-sm text-gray-900">{sector}</span>

              {formData.sector === sector && (
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
