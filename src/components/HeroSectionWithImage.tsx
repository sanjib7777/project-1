import React from 'react';

const HeroSectionWithImage = ({ imageUrl, textContent, buttonText, buttonLink }) => {
  return (
    <div className="relative w-full h-[500px] mt-1">
      <img
        src={imageUrl}
        className="w-full h-full object-cover"
        alt="Hero"
      />
      <div className="absolute inset-0 flex justify-center items-center text-center text-white bg-opacity-50">
        <div className="w-full sm:w-[90%] md:w-[700px] p-8 rounded-lg">
          <p className="mt-4 text-blue-400 text-xl sm:text-2xl md:text-3xl">
            {textContent}
          </p>
          <div className="flex justify-end mt-4">
            <a
              href={buttonLink}
              className="bg-pink-600 text-white py-2 px-6 rounded-lg hover:bg-pink-600 cursor-pointer"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionWithImage;
