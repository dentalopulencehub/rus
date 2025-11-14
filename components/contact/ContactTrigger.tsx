'use client';

import { useContactForm } from './ContactFormContext';

interface ContactTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function ContactTrigger({ children, className = '' }: ContactTriggerProps) {
  const { openModal } = useContactForm();

  return (
    <button onClick={openModal} className={className}>
      {children}
    </button>
  );
}
