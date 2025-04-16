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
          <img src="/images/logo.svg" alt="Logo" className="h-50" />
        </div>

        {/* Navbar (Home, Contact, Blog) */}
        <div className="flex space-x-8 absolute top-8 right-10 gap-4 ml-auto text-black z-10">
          <a
            href="/"
            className="text-pink-500 text-lg font-bold hover:bg-sky-500 hover:text-white"
          >
            HOME
          </a>
          <a
            href="../workshop"
            className="text-pink-500 text-lg font-bold hover:bg-sky-500 hover:text-white"
          >
            WORKSHOPS
          </a>
          <a
            href="../about_us"
            className="text-pink-500 text-lg font-bold hover:bg-sky-500 hover:text-white"
          >
            ABOUT US
          </a>
          <a
            href="../resource"
            className="text-pink-500 text-lg font-bold hover:bg-sky-500 hover:text-white"
          >
            RESOURCES
          </a>
          <a
            href="../login"
            className="text-pink-500 text-lg font-bold hover:bg-sky-500 hover:text-white"
          >
            LOGIN/REGISTER
          </a>
        </div>



      </div>


      <div className="absolute top-0 left-0 right-0 flex items-center w-full p-0 gap-0">
        {/* Center Image */}
        <div className="flex-1 text-center">
          <img
            src="/images/unleas 1.svg"
            alt="Center Image"
            className="w-2/3 h-auto mx-auto"
          />
        </div>

        {/* Right Image */}
        <div className="flex- text-right">
          <img
            src="/images/reading.svg"
            alt="Right Image"
            className="w-3/3 h-auto"
          />
        </div>
      </div>

    </header>
  );
};

export default Header;
