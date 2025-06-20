import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { MdOutlineWifiCalling3 } from "react-icons/md";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Form submitted:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", mobile: "", message: "" });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full flex flex-wrap md:flex-nowrap gap-10 px-5 md:px-10 py-10 text-red-500">
      {/* Left Side */}
      <div className="w-full md:w-[45%] flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold text-red-600">
            Connect With Us For <br />
            <span className="text-red-600">All Your Flavor Needs.</span>
          </h2>
          <hr className="border-red-600 mt-2 w-full" />
        </div>

        <p className="text-sm text-gray-600 font-medium">
          Lorem ipsum dolor sit amet consectetur. Egestas elementum et eget arcu cursus. Dictum sed sed phasellus purus sapien.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Mail */}
          <div className="bg-[#E3000F0D] text-white p-4 rounded-lg w-full flex items-center gap-4">
            <div className="bg-white text-red-600 p-2 rounded-full">
              <CiMail size={24} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-black">Send us a Mail</h3>
              <a href="mailto:infokelapurefood@gmail.com" className="text-sm text-red-500 font-medium">
                infokelapurefood@gmail.com
              </a>
            </div>
          </div>

          {/* Call */}
          <div className="bg-[#E3000F0D] text-white p-4 rounded-lg w-full flex items-center gap-4">
            <div className="bg-white text-red-600 p-2 rounded-full">
              <MdOutlineWifiCalling3 size={24} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-black">Call Us</h3>
              <a href="tel:+918484872498" className="text-sm text-red-500 font-medium">
                +91-8484872498
              </a>
            </div>
          </div>
        </div>

        {/* Map & Address */}
        <div className="flex flex-col sm:flex-row gap-4 mt-3 bg-[#E3000F0D] p-4 rounded-lg">
          {/* Map */}
          <div className="w-full sm:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14887.451766013559!2d79.04230949287152!3d21.118029744955603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf87aff0ca8b%3A0xc3c190d0b064322b!2sPratap%20Nagar%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1748843384958!5m2!1sen!2sin"
              width="100%"
              height="180"
              loading="lazy"
              className="rounded-lg"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map location"
            ></iframe>
          </div>

          {/* Address */}
          <div className="w-full sm:w-1/2 text-sm">
            <h2 className="font-bold text-black text-lg mb-2 mt-2">Nagpur, India</h2>
            <h3 className="font-bold text-black my-1">Address</h3>
            <p className="text-black mb-3 font-thin">
              15, Gedam Layout, Trimurti Nagar, Nagpur - 440 022
            </p>
            <h3 className="font-bold my-1 text-black">Service Time</h3>
            <p className="text-black font-thin">Mon - Sat, 10 AM - 9 PM</p>
          </div>
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="w-full md:w-[50%] bg-white text-black rounded-xl shadow-xl flex flex-col md:flex-row">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-6 flex flex-col gap-4 justify-center"
        >
          <h2 className="text-2xl font-bold">Get In Touch</h2>

          <div>
            <label htmlFor="name" className="text-sm font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label htmlFor="mobile" className="text-sm font-semibold">Mobile No</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile no"
              className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write message here"
              className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white font-semibold py-2 rounded-full hover:bg-red-700 transition-all"
          >
            SUBMIT
          </button>

          {submitted && (
            <p className="text-green-600 font-medium text-sm">Form submitted successfully!</p>
          )}
        </form>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="./contactSpices.png"
            alt="Contact Us with Spices"
            className="w-full h-full object-cover rounded-b-xl md:rounded-none md:rounded-r-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
