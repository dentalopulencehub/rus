'use client';

import { useContactForm } from '../ContactFormContext';

export function Step5ContactDetails() {
  const { formData, updateFormData } = useContactForm();

  const handleChange = (field: string, value: string) => {
    updateFormData({ [field]: value });
  };

  const isExisting = formData.customerType === 'existing';
  const isCorporate = formData.enquiryType === 'corporate';

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Please provide your contact details
        </h3>
        <p className="text-sm text-gray-600">
          We'll use these contact details to get back to you
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#01458f] focus:border-transparent transition-all duration-200"
            placeholder="John Smith"
            required
          />
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#01458f] focus:border-transparent transition-all duration-200"
            placeholder="john@example.com"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#01458f] focus:border-transparent transition-all duration-200"
            placeholder="07XXX XXXXXX"
            required
          />
        </div>

        {/* Company Name (if Corporate) */}
        {isCorporate && (
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1.5">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              value={formData.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#01458f] focus:border-transparent transition-all duration-200"
              placeholder="Your Company Ltd"
            />
          </div>
        )}

        {/* Client Reference (if Existing Customer) */}
        {isExisting && (
          <div>
            <label htmlFor="clientReference" className="block text-sm font-medium text-gray-700 mb-1.5">
              Client Reference
            </label>
            <input
              type="text"
              id="clientReference"
              value={formData.clientReference}
              onChange={(e) => handleChange('clientReference', e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#01458f] focus:border-transparent transition-all duration-200"
              placeholder="Your client reference number"
            />
            <p className="text-xs text-gray-500 mt-1">Optional - helps us locate your account faster</p>
          </div>
        )}
      </div>
    </div>
  );
}
