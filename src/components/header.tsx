// components/Header.tsx
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header
      className="relative w-full h-[600px] bg-cover bg-center z-0"
      style={{ backgroundImage: "url('/images/background.svg')" }}
    >
      {/* Logo and Navigation Section */}
      <div className="absolute top-0 left-10 right-0 flex items-center justify-between p-6 bg-opacity-70 ">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <img src="/images/logo.svg" alt="Logo" className="h-40" />
        </div>

        {/* Navbar (Home, Contact, Blog) */}
        <div className="flex space-x-8 absolute top-8 right-10 gap-4 ml-auto text-black z-10">
          <a
            href="/"
            className="text-black text-lg hover:cursor-pointer hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="../workshop"
            className="text-black text-lg hover:cursor-pointer hover:text-blue-500"
          >
            Workshop
          </a>
          <a
            href="../about_us"
            className="text-black text-lg hover:cursor-pointer hover:text-blue-500"
          >
            About Us
          </a>
          <a
            href="../resource"
            className="text-black text-lg hover:cursor-pointer hover:text-blue-500"
          >
            Resources
          </a>
          <a
            href="../login"
            className="text-black text-lg hover:cursor-pointer hover:text-blue-500"
          >
            Login/Register
          </a>
        </div>
      </div>

      {/* Center Image and Right Image Section */}
      <div className="absolute bottom-0 flex items-center w-full p-6">
        {/* Center Image */}
        <div className="flex-1 text-center">
          <img
            src="/images/unleas 1.svg"
            alt="Center Image"
            className="w-2/3 h-auto mx-auto"
          />{" "}
          {/* Centered Image */}
        </div>

        {/* Right Image */}
        <div className="flex-none text-right ml-auto">
          <img
            src="/images/reading.svg"
            alt="Right Image"
            className="w-2/3 h-auto"
          />{" "}
          {/* Right-aligned Image */}
        </div>
      </div>
    </header>
  );
};

export default Header;
