import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  language: 'en' | 'fr';
  t: {
    faq: string;
    [key: string]: string;
  };
}

const FAQ: React.FC<FAQProps> = ({ language, t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = {
    en: [
      {
        question: 'What is the minimum investment amount?',
        answer:
          'The minimum investment amount varies depending on the specific investment opportunity and your investor classification. Please contact us for detailed information.',
      },
      {
        question: 'How are investments protected?',
        answer:
          'We implement multiple layers of security and risk management protocols to protect investments. This includes diversification strategies, regular audits, and compliance with regulatory requirements.',
      },
      {
        question: 'What is the investment process?',
        answer:
          "The investment process begins with submitting an invitation request. Once approved, you'll gain access to our platform where you can review opportunities, perform due diligence, and make investment decisions.",
      },
      {
        question: 'How long is the approval process?',
        answer:
          'The approval process typically takes 5-7 business days, during which we verify your information and assess your investment profile.',
      },
      {
        question: 'What types of investments are available?',
        answer:
          'We offer a diverse range of investment opportunities including private equity, venture capital, real estate, and other alternative investments.',
      },
    ],
    fr: [
      {
        question: 'Quel est le montant minimum d\'investissement ?',
        answer:
          'Le montant minimum d\'investissement varie selon l\'opportunité d\'investissement spécifique et votre classification d\'investisseur. Veuillez nous contacter pour des informations détaillées.',
      },
      {
        question: 'Comment les investissements sont-ils protégés ?',
        answer:
          'Nous mettons en œuvre plusieurs niveaux de sécurité et de protocoles de gestion des risques pour protéger les investissements. Cela inclut des stratégies de diversification, des audits réguliers et la conformité aux exigences réglementaires.',
      },
      {
        question: 'Quel est le processus d\'investissement ?',
        answer:
          'Le processus d\'investissement commence par la soumission d\'une demande d\'invitation. Une fois approuvé, vous aurez accès à notre plateforme où vous pourrez examiner les opportunités, effectuer une due diligence et prendre des décisions d\'investissement.',
      },
      {
        question: 'Quelle est la durée du processus d\'approbation ?',
        answer:
          'Le processus d\'approbation prend généralement 5 à 7 jours ouvrables, pendant lesquels nous vérifions vos informations et évaluons votre profil d\'investisseur.',
      },
      {
        question: 'Quels types d\'investissements sont disponibles ?',
        answer:
          'Nous proposons une gamme diversifiée d\'opportunités d\'investissement, notamment en private equity, capital-risque, immobilier et autres investissements alternatifs.',
      },
    ]
  };

  return (
    <div className="max-w-3xl mx-auto">
      {faqs[language].map((faq, index) => (
        <div key={index} className="mb-4 ">
          <button
            className={`w-full flex justify-between items-center p-4 ${openIndex === index ? ' bg-gray-500 rounded-t-lg' : 'bg-white rounded-lg'} shadow-sm hover:shadow-md transition`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-medium text-left">{faq.question}</span>
            <ChevronDown
              className={`h-5 w-5 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''
                }`}
            />
          </button>
          {openIndex === index && (
            <div className="p-4 bg-gray-50 rounded-b-lg mt-1">
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
