import React from 'react';

interface PartnersProps {
  language: 'en' | 'fr';
  t: {
    [key: string]: string;
  };
}

const Partners: React.FC<PartnersProps> = ({ language, t }) => {
  const partners = {
    en: [
      {
        id: 1,
        name: 'Global Investment Bank',
        logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Leading international investment bank',
      },
      {
        id: 2,
        name: 'Tech Ventures Capital',
        logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Specialized technology investment firm',
      },
      {
        id: 3,
        name: 'Asset Management Pro',
        logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Expert asset management services',
      },
      {
        id: 4,
        name: 'Financial Solutions Group',
        logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Comprehensive financial services',
      },
      {
        id: 5,
        name: 'Wealth Partners LLC',
        logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Private wealth management experts',
      },
      {
        id: 6,
        name: 'Innovation Capital Fund',
        logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Funding tomorrow\'s innovations',
      },
      {
        id: 7,
        name: 'Strategic Investments Co',
        logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Strategic investment solutions',
      },
      {
        id: 8,
        name: 'Global Growth Partners',
        logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'International growth investments',
      },
      {
        id: 9,
        name: 'Future Fund Management',
        logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Forward-thinking fund management',
      },
      {
        id: 10,
        name: 'Elite Investment Group',
        logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Premium investment services',
      }
    ],
    fr: [
      {
        id: 1,
        name: 'Banque d\'Investissement Mondiale',
        logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Banque d\'investissement internationale de premier plan',
      },
      {
        id: 2,
        name: 'Tech Ventures Capital',
        logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Société d\'investissement spécialisée en technologie',
      },
      {
        id: 3,
        name: 'Asset Management Pro',
        logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Services experts de gestion d\'actifs',
      },
      {
        id: 4,
        name: 'Groupe Solutions Financières',
        logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Services financiers complets',
      },
      {
        id: 5,
        name: 'Partenaires Patrimoine SARL',
        logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Experts en gestion de patrimoine privé',
      },
      {
        id: 6,
        name: 'Fonds Capital Innovation',
        logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Financement des innovations de demain',
      },
      {
        id: 7,
        name: 'Investissements Stratégiques SA',
        logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Solutions d\'investissement stratégique',
      },
      {
        id: 8,
        name: 'Partenaires Croissance Mondiale',
        logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Investissements de croissance internationale',
      },
      {
        id: 9,
        name: 'Gestion Fonds Futur',
        logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Gestion de fonds avant-gardiste',
      },
      {
        id: 10,
        name: 'Groupe Investissement Elite',
        logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Services d\'investissement premium',
      }
    ]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {partners[language].map((partner) => (
        <div
          key={partner.id}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center"
        >
          <img
            src={partner.logo}
            alt={partner.name}
            className="w-32 h-32 object-contain mb-4"
          />
          <h3 className="font-semibold text-lg mb-2 text-center">{partner.name}</h3>
          <p className="text-gray-600 text-sm text-center">{partner.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Partners;