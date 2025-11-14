'use client';

import { useContactForm } from '../ContactFormContext';

export function Step6AdditionalInfo() {
  const { formData, updateFormData } = useContactForm();

  const handleChange = (field: string, value: string) => {
    updateFormData({ [field]: value });
  };

  const selectPreferredContact = (method: 'email' | 'phone') => {
    updateFormData({ preferredContact: method });
  };

  const selectBestTime = (time: 'morning' | 'afternoon' | 'anytime') => {
    updateFormData({ bestTime: time });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Tell us more about your enquiry
        </h3>
        <p className="text-sm text-gray-600">
          Provide any additional details that will help us assist you
        </p>
      </div>

      <div className="space-y-5">
        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            rows={5}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#01458f] focus:border-transparent transition-all duration-200 resize-none"
            placeholder="Please provide details about your enquiry..."
            required
          />
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Contact Method
          </label>
          <div className="flex gap-3">
            <button
              onClick={() => selectPreferredContact('email')}
              className={`
                flex-1 py-2.5 px-4 rounded-lg border-2 transition-all duration-200 text-sm font-medium
                ${formData.preferredContact === 'email'
                  ? 'border-[#01458f] bg-[#01458f]/5 text-[#01458f]'
                  : 'border-gray-200 text-gray-700 hover:border-[#01458f]/50'
                }
              `}
            >
              Email
            </button>
            <button
              onClick={() => selectPreferredContact('phone')}
              className={`
                flex-1 py-2.5 px-4 rounded-lg border-2 transition-all duration-200 text-sm font-medium
                ${formData.preferredContact === 'phone'
                  ? 'border-[#01458f] bg-[#01458f]/5 text-[#01458f]'
                  : 'border-gray-200 text-gray-700 hover:border-[#01458f]/50'
                }
              `}
            >
              Phone
            </button>
          </div>
        </div>

        {/* Best Time to Contact */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Best Time to Contact
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => selectBestTime('morning')}
              className={`
                py-2.5 px-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium
                ${formData.bestTime === 'morning'
                  ? 'border-[#01458f] bg-[#01458f]/5 text-[#01458f]'
                  : 'border-gray-200 text-gray-700 hover:border-[#01458f]/50'
                }
              `}
            >
              Morning
              <span className="block text-xs text-gray-500 mt-0.5">9am-12pm</span>
            </button>
            <button
              onClick={() => selectBestTime('afternoon')}
              className={`
                py-2.5 px-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium
                ${formData.bestTime === 'afternoon'
                  ? 'border-[#01458f] bg-[#01458f]/5 text-[#01458f]'
                  : 'border-gray-200 text-gray-700 hover:border-[#01458f]/50'
                }
              `}
            >
              Afternoon
              <span className="block text-xs text-gray-500 mt-0.5">12pm-5pm</span>
            </button>
            <button
              onClick={() => selectBestTime('anytime')}
              className={`
                py-2.5 px-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium
                ${formData.bestTime === 'anytime'
                  ? 'border-[#01458f] bg-[#01458f]/5 text-[#01458f]'
                  : 'border-gray-200 text-gray-700 hover:border-[#01458f]/50'
                }
              `}
            >
              Any time
              <span className="block text-xs text-gray-500 mt-0.5">Flexible</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
