// Card.js
import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="w-full sm:w-80 bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <a href="#" className="text-blue-600 font-semibold">Learn More</a>
      </div>
    </div>
  );
};

export default Card;
