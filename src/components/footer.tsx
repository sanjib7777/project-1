import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('/images/footer-bg.jpg')",
        backgroundSize: "auto 100%",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto px-6">
        {/* Footer Content - Two Sections */}
        <div className=" flex justify-between items-start space-x-16">
          {/* Left Section: Logo and Description */}
          <div className=" flex flex-col items-start w-1/5">
            <img
              src="/images/logo.svg"
              alt="Creative Cubs Logo"
              className="h-50"
            />
          </div>

          <div className="flex flex-col w-1/5">
            <p className="text-black text-lg">
              Creative Cubs connects kids with fun, engaging workshops that
              inspire imagination, learning, and growth. Join us to spark
              creativity!
            </p>
            
            <img
              src="/images/unleas 1.svg"
              alt="Creative Cubs Logo"
              className=" h-50"
            />
          
          </div>
          {/* Middle Section: Useful Links */}
          <div className="flex flex-col items-start space-y-2 w-1/5">
            <h3 className="text-black text-xl font-semibold">Useful Links</h3>
            <ul className="text-black space-y-1">
              <li>
                <a href="#blog" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:underline">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#contact-page" className="hover:underline">
                  Contact Page
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section: Social Media and Parent Resources */}
          <div className="flex flex-col items-start w-1/5">
            <h3 className="text-black text-xl font-semibold">
              Parent Resources
            </h3>
            <ul className="text-black space-y-1">
              <li>
                <a href="#creative-tips" className="hover:underline">
                  Creative Tips
                </a>
              </li>
              <li>
                <a href="#parent-reviews" className="hover:underline">
                  Parent Reviews
                </a>
              </li>
              <li>
                <a href="#newsletter" className="hover:underline">
                  Newsletter Sign-Up
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start w-1/5">
          <h3 className="text-black text-xl font-semibold">
            Copyright & Privacy
          </h3>
          <p className="text-black">
            © 2025 Creative Cubs. All rights reserved.
          </p>
        </div>
        </div>
        

        {/* Bottom Section: Contact Section */}
        <div className="text-center mt-8">
          <p className="text-black">Get in touch with us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
