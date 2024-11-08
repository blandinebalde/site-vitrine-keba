import React from 'react';

const Partners = () => {
  const partners = [
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
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {partners.map((partner) => (
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