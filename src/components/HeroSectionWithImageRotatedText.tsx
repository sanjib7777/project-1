import React from 'react';

const HeroSectionWithImageRotatedText = ({ imageUrl, textContent, buttonText, buttonLink }) => {
  return (
    <div className="relative w-full h-[500px] mt-1">
      <img
        src={imageUrl}
        className="w-full h-full object-cover"
        alt="Hero"
      />
      <div className="absolute inset-0 flex justify-center items-center text-center text-white bg-opacity-50">
        <div className="w-full sm:w-[90%] md:w-[700px] p-8 rounded-lg flex justify-start items-center transform -rotate-12 ">
          <p className="text-blue-400 text-xl sm:text-2xl md:text-2xl">
            {textContent}
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSectionWithImageRotatedText;
