import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BusinessAngelsProps {
  language: 'en' | 'fr';
  t: any;
  isDarkMode: boolean;
}

const BusinessAngels: React.FC<BusinessAngelsProps> = ({ language, t, isDarkMode }) => {
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

  const itemsPerPage = window.innerWidth < 768 ? 3 : 4;
  const totalPages = Math.ceil(angels.length / itemsPerPage);
  const displayedAngels = angels.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

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
          className={`flex-none flex items-center justify-center w-10 h-10 md:w-12 md:h-12 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'} border rounded-full hover:scale-110 transition-all duration-300 shadow-md`}
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        <div className="flex-1 flex justify-between gap-2 md:gap-4 overflow-hidden">
          {displayedAngels.map((angel) => (
            <div
              key={angel.id}
              className={`relative w-full aspect-square rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-2 md:p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
              style={{ maxWidth: window.innerWidth < 768 ? 'calc((100% - 2rem) / 3)' : 'calc((100% - 3rem) / 4)' }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2 md:p-3 text-center">
                <img
                  src={angel.image}
                  alt={angel.name}
                  className={`w-12 h-12 md:w-20 md:h-20 rounded-full object-cover mb-1 md:mb-2 border-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-100'} shadow-sm`}
                />
                <h3 className={`font-semibold text-xs md:text-sm line-clamp-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>{angel.name}</h3>
                <div className="hidden md:block">
                  <p className={`text-xs mb-1 line-clamp-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{angel.expertise}</p>
                  <p className={`text-xs ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {angel.investments} {translations[language].investments}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextPage}
          className={`flex-none flex items-center justify-center w-10 h-10 md:w-12 md:h-12 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'} border rounded-full hover:scale-110 transition-all duration-300 shadow-md`}
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>
    </div>
  );
};

export default BusinessAngels;