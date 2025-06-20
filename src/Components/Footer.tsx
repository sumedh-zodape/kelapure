import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <footer
      className="w-full bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/footerbg.png')" }} // Ensure images are in public folder
    >
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3 text-left">

        {/* Logo & About */}
        <div className="space-y-6">
          <img src="/footerLogo.png" alt="Footer Logo" className="w-40" />
          <p className="text-sm text-gray-200">
            Kelapure Satvik Food LLP is dedicated to delivering authentic, high-quality spices and food products that bring the true taste of tradition to your kitchen. Experience purity, freshness, and a passion for excellence in every blend we offer.
          </p>
          <div className="flex gap-4 text-lg">
            <a href="#"><FaFacebookF className="hover:text-blue-400" /></a>
            <a href="#"><FaYoutube className="hover:text-red-500" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-400" /></a>
          </div>
        </div>

        {/* Navigation & Links */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-3">Navigation</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-200">
              <li><Link to="/" className="hover:underline" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
              <li><Link to="/about" className="hover:underline" onClick={() => window.scrollTo(0, 0)}>About Us</Link></li>
              <li><Link to="/products" className="hover:underline" onClick={() => window.scrollTo(0, 0)}>Products</Link></li>
              <li><Link to="/contact" className="hover:underline" onClick={() => window.scrollTo(0, 0)}>Contacts</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">Links</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-200">
              <li><Link to="/terms" className="hover:underline" onClick={() => window.scrollTo(0, 0)}>Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:underline" onClick={() => window.scrollTo(0, 0)}>Privacy Policy</Link></li>
              <li><Link to="/shipping" className="hover:underline" onClick={() => window.scrollTo(0, 0)}>Shipping Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact & Subscription */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Kelapure Satvik Food LLP</h2>
          <div className="space-y-1 text-sm text-gray-200">
            <p className="mb-3">15, Gedam Layout, Trimurti Nagar</p>
            <p className="mb-3">Nagpur - 440022</p>
            <p className="mb-3"><strong>Phone:</strong> +91-8484872498</p>
            <p className="mb-3"><strong>Email:</strong> infokelapurefood@gmail.com</p>
          </div>

          <form className="flex flex-col gap-3 mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="text-sm text-gray-200 mt-4">
              Enter your email above to be the first to know about new collections and product launches.
            </p>
          </form>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 py-4 border-t border-gray-700 bg-black bg-opacity-60">
        {/* <h3 className="font-semibold text-sm md:text-base text-white flex items-center gap-2">
          Product of Bharat <span role="img" aria-label="India">🇮🇳</span>
        </h3> */}
        {/* <span className="hidden md:inline-block text-gray-400">|</span> */}
        <p className="text-xs md:text-sm text-gray-300 flex items-center gap-1">
          &copy; 2025 <span className="font-semibold">Kelapure </span>. All rights reserved.
          <span className="hidden md:inline-block mx-2">|</span>
          <span>Maintained by <a href="https://vitric.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-semibold">ViTric Business Solution</a></span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
