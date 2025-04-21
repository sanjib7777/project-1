import React from "react";

const ImageWithOverlay = ({ mainImage, smallImage, largeImage }) => {
  return (
    <div className="relative w-full ">
      {/* Main Image */}
      <img src={mainImage} alt="Main" className="w-full  object-cover" />

      {/* Small Overlay Image */}
      <div className="absolute top-25 left-30 z-10">
        <img
          src={smallImage}
          alt="Overlay"
          className="w-80 h-80 object-cover  "
        />
      </div>

      {/* Large Image positioned over the main image, but below the small image */}
      <div className="absolute w-full p-30 mt-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <p className="text-blue-500 text-center mb-20">
          We would love to show you just how good our Creative cubs really is,
          please fill out the form below to join our waitlist or book{" "}
        </p>
        <img src={largeImage} alt="Large" className="object-cover w-full h-full" />
      </div>
    </div>

  );
};

export default ImageWithOverlay;
