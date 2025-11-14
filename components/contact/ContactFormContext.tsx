'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export interface ContactFormData {
  // Step 1: Customer Type
  customerType: 'new' | 'existing' | null;

  // Step 2: Enquiry Type
  enquiryType: 'corporate' | 'individual' | null;

  // Step 3: Service Selection
  service: string | null;

  // Step 4: Industry/Sector
  sector: string | null;

  // Step 5: Contact Details
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  clientReference: string;

  // Step 6: Additional Information
  message: string;
  preferredContact: 'email' | 'phone' | null;
  bestTime: 'morning' | 'afternoon' | 'anytime' | null;
}

interface ContactFormContextType {
  formData: ContactFormData;
  currentStep: number;
  isOpen: boolean;
  isSubmitted: boolean;
  updateFormData: (data: Partial<ContactFormData>) => void;
  nextStep: () => void;
  previousStep: () => void;
  goToStep: (step: number) => void;
  openModal: () => void;
  closeModal: () => void;
  resetForm: () => void;
  submitForm: () => void;
}

const initialFormData: ContactFormData = {
  customerType: null,
  enquiryType: null,
  service: null,
  sector: null,
  fullName: '',
  email: '',
  phone: '',
  companyName: '',
  clientReference: '',
  message: '',
  preferredContact: null,
  bestTime: null,
};

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (data: Partial<ContactFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 7));
  };

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const goToStep = (step: number) => {
    setCurrentStep(Math.max(1, Math.min(step, 7)));
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Reset after animation completes
    setTimeout(() => {
      resetForm();
    }, 300);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  const submitForm = () => {
    // Handle form submission (API call would go here)
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <ContactFormContext.Provider
      value={{
        formData,
        currentStep,
        isOpen,
        isSubmitted,
        updateFormData,
        nextStep,
        previousStep,
        goToStep,
        openModal,
        closeModal,
        resetForm,
        submitForm,
      }}
    >
      {children}
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  const context = useContext(ContactFormContext);
  if (context === undefined) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }
  return context;
}
