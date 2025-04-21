import React from 'react';

const HeroImage = ({ imageUrl, height = '600px', altText = 'hero image' }) => {
  return (
    <div className="relative w-full bg-cover bg-center z-0 mt-[60px]">
      <img
        src={imageUrl}
        className={`w-full h-[${height}] object-cover`}
        alt={altText}
      />
    </div>
  );
};

export default HeroImage;
