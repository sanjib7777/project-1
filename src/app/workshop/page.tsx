import React from "react";
import Card from "@/components/Card";
import Header from "@/components/header";
import Footer from "@/components/footer"; 
import WorkshopCard from "@/components/WorkshopCard";

const BackgroundImageWithOverlay = () => {
  return (
    <div>
      <Header />
      <WorkshopCard/>
    </div>
  );
};

export default BackgroundImageWithOverlay;
