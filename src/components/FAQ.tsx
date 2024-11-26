import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  language: 'en' | 'fr';
  t: any;
  isDarkMode: boolean;
}

const FAQ: React.FC<FAQProps> = ({ language, t, isDarkMode }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
    <div className={`max-w-3xl mx-auto ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} p-6 rounded-xl`}>
      {faqs[language].map((faq, index) => (
        <div
          key={index}
          className={`mb-4 rounded-lg ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
            } shadow-sm transition-all duration-300`}
        >
          <button
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className={`w-full px-6 py-4 text-left flex justify-between items-center rounded-lg focus:outline-none ${isDarkMode
                ? 'text-gray-100 hover:text-white'
                : 'text-gray-800 hover:text-gray-900'
              }`}
          >
            <span className="font-medium">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180' : ''
                } ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
            />
          </button>
          {activeIndex === index && (
            <div
              className={`px-6 pb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
