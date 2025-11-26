import { ReactNode } from 'react';

interface FAQItem {
  question: string;
  answer: string | ReactNode;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  // Convert ReactNode answers to plain text for schema
  const getAnswerText = (answer: string | ReactNode): string => {
    if (typeof answer === 'string') {
      return answer;
    }
    // For ReactNode, extract text content (simplified)
    return String(answer);
  };

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: getAnswerText(faq.answer)
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
    />
  );
}
