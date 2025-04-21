import React from 'react';
import Card from '@/components/Card'; // Adjust the import path as necessary
// Card component

const WorkshopCard = () => {
  return (
    <div>
    
      
    <div className="relative w-full h-screen">
      <img
        src="images/Vector.svg"
        alt="Background"
        className="w-full object-contain"
      />

      <div className="absolute inset-0 flex justify-center text-white text-black z-10">
        <h1 className="text-4xl mt-8 md:text-4xl font-bold">
          “EXPLORE CREATIVE ADVENTURES FOR EVERY KID !“
        </h1>
      </div>
      <div className="absolute inset-0 text-white z-10 ml-4 mt-30">
        <h3 className="text-2xl mt-8 md:text-2xl font-bold">
          Discover workshops tailored to spark your child’s imagination and
          growth.
        </h3>
        <div className="mt-6 relative">
          <input
            type="text"
            placeholder="Search Workshops by Name or Keyword"
            className="w-1/3 px-4 py-2 mt-4 text-lg rounded-lg border-2 border-gray-300 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Search Icon */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ></svg>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto px-4 py-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Card
              image="images/artimage 1.png"
              title="ARTS"
              description="Explore painting, drawing, and crafting techniques, guided by expert instructors. Perfect for nurturing imagination and self-expression."
            />
            <Card
              image="images/artimage 1 (4).png"
              title="DIY CRAFTS"
              description=" From paper crafts to clay modeling, these workshops inspire imagination and develop crafting skills in a fun, interactive environment."
            />
          </div>
        </div>

<div className="max-w-screen-lg mx-auto px-4 py-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-60">
    <Card
      image="images/artimage 1 (3).png"
      title="Storytelling/Drama"
      description="Unleash your child's imagination through engaging storytelling and role-play! Spark creativity, build confidence, and develop communication skills in a fun, interactive environment."
    />
    <Card
      image="images/artimage 1 (2).png"
      title="Stem & creativity"
      description="From building gadgets to experimenting with fun science projects, these workshops inspire curiosity and creativity in young minds!"
    />
    <Card
      image="images/artimage 1 (1).png"
      title="Music & entertainment"
      description="Discover the joy of music and movement! Explore workshops in singing, dancing, and playing instruments, designed to spark creativity and build confidence in every child."
    />
  </div>
</div>
      </div>

      <div className="absolute w-[400px] right-20 top-40 mt-8 mr-8 flex flex-col items-center ">
        <div className="w-[100px] flex flex-col items-center mb-4">
          <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center">
            Choose Your Creative category
          </h2>
        </div>
        <img
          src="images/openart-image_aVrZI_gJ_1742630488268_raw 1.png"
          alt="Inspiring"
          className="w- h-auto md:w-80"
        />
      </div>
    </div>
    </div>
  );
};

export default WorkshopCard ;
    
