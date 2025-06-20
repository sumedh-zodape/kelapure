import { useState } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['Home', 'About Us', 'Product','Contact'];
  const navigation = ['/', '/about','/products', '/contact']; // Fixed navigation paths
  const location = useLocation();

  const isActivePath = (path: string) => {
    // Check if current path matches exactly or is root path
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header>
      {/* ---------- Topbar ---------- */}
      <div className="bg-black text-white text-sm px-4 py-2 flex flex-col sm:flex-row justify-between items-center flex-wrap">
        {/* Left - Contact Info */}
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-5 mb-2 sm:mb-0 px-4 ">
          <span className="flex items-center gap-2 ">
            <FaPhoneAlt className="text-xs" />
            <span>+91-8484872498</span>
          </span>
          <div className="h-4 w-px bg-gray-500 hidden sm:block"></div>
          <span className="flex items-center gap-2">
            <FaEnvelope className="text-xs" />
            <span>infokelapurefood@gmail.com</span>
          </span>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4">
          <FaFacebookF className="cursor-pointer hover:text-red-500" />
          <FaYoutube className="cursor-pointer hover:text-red-500" />
          <FaInstagram className="cursor-pointer hover:text-red-500" />
        </div>
      </div>

      {/* ---------- Main Navbar ---------- */}
      <nav className="w-full border-b border-gray-300 h-120">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo.png" alt="Kelapure Logo" className="h-16" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-20 font-medium text-black h-25">
            {navItems.map((item, index) => {
              const isActive = isActivePath(navigation[index]);
              return (
                <li
                  key={item}
                  className={`cursor-pointer transition border-b-2 ${
                    isActive
                      ? 'text-red-600 border-red-600'
                      : 'text-black border-transparent'
                  }`}
                >
                  <Link to={navigation[index]}>{item}</Link>
                </li>
              );
            })}
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            {/* <CiHeart className="text-red-800 cursor-pointer text-xl hidden sm:inline-block" />
            <div className="relative cursor-pointer hidden sm:inline-block">
              <FaShoppingCart className="text-black text-lg" />
              <span className="absolute -top-2 -right-2 bg-red-700 text-white text-xs rounded-full px-1">
                0
              </span>
            </div>
            <button className="hidden sm:inline-block bg-red-700 text-white rounded-full px-4 py-2 text-sm hover:bg-red-800">
              Login / Register
            </button> */}

            {/* Hamburger Menu Icon */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-2xl focus:outline-none"
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="flex flex-col items-center gap-4 py-4 md:hidden text-black font-medium">
            {navItems.map((item, index) => {
              const isActive = isActivePath(navigation[index]);
              return (
                <li key={item}>
                  <Link
                    to={navigation[index]}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`transition block ${
                      isActive
                        ? 'text-red-600 underline underline-offset-4'
                        : 'hover:text-red-500'
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}

            {/* <div className="flex gap-4 mt-2">
              <CiHeart className="text-red-700 cursor-pointer text-lg" />
              <div className="relative cursor-pointer">
                <FaShoppingCart className="text-black text-lg" />
                <span className="absolute -top-2 -right-2 bg-red-700 text-white text-xs rounded-full px-1">
                  0
                </span>
              </div>
              <button className="bg-red-700 text-white rounded-full px-4 py-1 text-sm hover:bg-red-800">
                Login / Register
              </button>
            </div> */}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;