import { Link } from "react-router-dom";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full max-w-screen mx-auto px-5 my-5">
      {/* Main Container (with relative position for absolute children) */}
      <div className="w-full h-[266px] relative overflow-hidden rounded-xl shadow-lg">

        {/* Background Image */}
        <img
          src="/spices.png"
          alt="Spices"
          className="w-full h-full object-cover"
        />

        {/* Centered Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Contact Us</h2>
          <div className="text-sm">
            <Link to="/" className="hover:underline hover:text-yellow-300">
              Home
            </Link>{" "}
            /
            <Link
              to="/contact"
              className="hover:underline hover:text-yellow-300"
            >
              {" "}Contact
            </Link>
          </div>
        </div>

        {/* Social Media Icons - Right Side Vertical */}
        <div className="absolute top-1/2 right-3 md:right-5 transform -translate-y-1/2 flex flex-col gap-3 text-white">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-blue-800 transition"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-red-800 transition"
          >
            <FaYoutube className="text-xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-[#f73abe] transition"
          >
            <FaInstagram className="text-xl" />
          </a>
        </div>

        {/* Call to Action Button */}
        <div className="absolute bottom-2 right-4 md:right-20 lg:right-64 bg-[#E3000F] text-white rounded-full px-3 sm:px-4 py-1.5 flex items-center gap-2 shadow-lg hover:bg-red-700 transition duration-300">
          <div className="bg-white p-1 rounded-full flex items-center justify-center">
            <MdOutlineWifiCalling3 className="text-[#E3000F] text-base sm:text-lg" />
          </div>
          <a
            href="tel:+918484872498"
            className="text-xs sm:text-sm md:text-base font-semibold tracking-wide"
          >
            +91-8484872498
          </a>
        </div>

      </div>
    </div>
  );
};

export default Hero;
