const SmallInfo = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#F2E9D8] to-[#E9E0D1] py-8 px-4 sm:px-6 md:px-16 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 max-h-80 md:max-h-full">
          <img
            src="./info.png"
            alt="Why Shop From Us"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-1/2 md:pl-12">
          <h2
            className="text-base md:text-2xl font-bold mb-6 text-[#7D7F4F]"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Why Shop From Us
          </h2>

          <ul
            className="space-y-6 text-sm md:text-base text-gray-800"
            style={{ fontFamily: '"Nunito Sans", sans-serif', fontWeight: 700 }}
          >
            <li>
              <strong className="block mb-1">• Trusted Quality & Freshness</strong>
              <span className="block pl-5 text-gray-700 font-normal">
                We source directly from reliable suppliers to guarantee freshness in every product.
              </span>
            </li>
            <li>
              <strong className="block mb-1">• Wide Range of Authentic Products</strong>
              <span className="block pl-5 text-gray-700 font-normal">
                From fasting essentials to traditional chutneys – everything under one roof.
              </span>
            </li>
            <li>
              <strong className="block mb-1">• Wholesale Prices, Maximum Savings</strong>
              <span className="block pl-5 text-gray-700 font-normal">
                Enjoy competitive rates on bulk purchases without compromising <strong>quality</strong>.
              </span>
            </li>
            <li>
              <strong className="block mb-1">• Simple & Secure Ordering</strong>
              <span className="block pl-5 text-gray-700 font-normal">
                User-friendly website and secure payment options for a hassle-free experience.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Spice image inside section (bottom-right corner) */}
      <img
        src="./spice.png"
        alt="Spice Decoration"
        className="absolute right-0 bottom-0 translate-y-1/2 pointer-events-none"
        style={{ maxHeight: '40vh', width: 'auto' }}
      />
    </section>
  );
};

export default SmallInfo;
