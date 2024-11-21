import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BusinessAngelsProps {
  language: 'en' | 'fr';
  t: {
    [key: string]: string;
  };
}

const BusinessAngels: React.FC<BusinessAngelsProps> = ({ language, t }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const translations = {
    en: {
      investments: 'investments'
    },
    fr: {
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

  const totalPages = Math.ceil(angels.length / 4);
  const displayedAngels = angels.slice(currentPage * 4, (currentPage + 1) * 4);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={prevPage}
          className="flex-none flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 hover:scale-110 transition-all duration-300 shadow-md"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="flex-1 flex justify-between gap-4 overflow-hidden">
          {displayedAngels.map((angel) => (
            <div
              key={angel.id}
              className="relative w-full aspect-square bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-4"
              style={{ maxWidth: 'calc((100% - 3rem) / 4)' }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                <img
                  src={angel.image}
                  alt={angel.name}
                  className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-gray-100 shadow-sm"
                />
                <h3 className="font-semibold text-sm mb-1 line-clamp-1">{angel.name}</h3>
                <p className="text-gray-600 text-xs mb-1 line-clamp-1">{angel.expertise}</p>
                <p className="text-xs text-blue-600">
                  {angel.investments} {translations[language].investments}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextPage}
          className="flex-none flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 hover:scale-110 transition-all duration-300 shadow-md"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default BusinessAngels;