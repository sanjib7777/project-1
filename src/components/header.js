import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 


const Header = () => {
    return (
      <header className="w-full h-[300px] bg-cover bg-no-repeat bg-center relative" style={{ backgroundImage: 'url(/images/background.svg)' }}>
        {/* Flex container to align logo on left and navigation on right */}
        <div className="flex justify-between items-center w-full h-full px-4">
          {/* Logo positioned at the left */}
          <div>
            <img src="/images/logo.svg" alt="Logo" className="h-12" /> {/* Adjust logo size here */}
          </div>
  
          {/* Navigation menu aligned to the right with gap between items */}
          <nav className="flex gap-3 v space-x-6 text-white">
            <a href="#home" className="text-lg hover:underline">Home</a>
            <a href="#contact" className="text-lg hover:underline">Contact</a>
            <a href="#blog" className="text-lg hover:underline">Blog</a>
          </nav>
        </div>
      </header>
    );
  };

export default Header;