import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

interface BusinessAngelsProps {
  language: 'en' | 'fr';
  t: {
    [key: string]: string;
  };
}

const BusinessAngels: React.FC<BusinessAngelsProps> = ({ language, t }) => {
  const [showAll, setShowAll] = useState(false);

  const translations = {
    en: {
      showMore: 'Show More',
      showLess: 'Show Less',
      investments: 'investments'
    },
    fr: {
      showMore: 'Voir Plus',
      showLess: 'Voir Moins',
      investments: 'investissements'
    }
  };

  const angels = Array.from({ length: 33 }, (_, i) => ({
    id: i + 1,
    name: `Angel ${i + 1}`,
    image: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80`,
    expertise: ['Finance', 'Technology', 'Real Estate'][i % 3],
    investments: Math.floor(Math.random() * 20) + 5,
  }));

  const displayedAngels = showAll ? angels : angels.slice(0, 4);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedAngels.map((angel) => (
          <div
            key={angel.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col items-center"
          >
            <img
              src={angel.image}
              alt={angel.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h3 className="font-semibold text-lg mb-1">{angel.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{angel.expertise}</p>
            <p className="text-sm text-blue-600">{angel.investments} {translations[language].investments}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-8 mx-auto flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
      >
        <ChevronLeft className={`h-5 w-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
        {showAll ? translations[language].showLess : translations[language].showMore}
      </button>
    </div>
  );
};

export default BusinessAngels;