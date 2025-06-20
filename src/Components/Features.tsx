const Features = () => {
  return (
    <section className="w-full py-0 px-4 bg-white pb-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

        {/* Card 1 */}
        <div className="relative rounded-lg overflow-hidden shadow-md">
          <img
            src="/card1.png"
            alt="Desi Chutney Collection"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-4 right-10 text-[#fe0000]">
            <h3 className="text-lg font-bold leading-snug" style={{ fontFamily: '"Playfair Display", serif' }}>
              Desi Chutney <br /> Collection
            </h3>
            <button className="mt-2 bg-[#fe0000] text-white font-medium px-10 py-2 rounded-full border-2 border-transparent hover:bg-transparent hover:border-red-600 hover:text-red-600 transition duration-300">
              Explore
            </button>


          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-lg overflow-hidden shadow-md">
          <img
            src="/card2.png"
            alt="Traditional Grains Powder & Flours"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-4 right-10 text-[#e3c505]">
            <h3 className="text-lg font-bold leading-snug" style={{ fontFamily: '"Playfair Display", serif' }}>
              Traditional Grains <br />
              powder & Flours
            </h3>
            <button className="mt-2 bg-[#e3c505] text-white font-medium px-10 py-2 rounded-full border-2 border-transparent hover:bg-transparent hover:border-yellow-600 hover:text-yellow-600 transition duration-300 ">
              Explore
            </button>

          </div>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-lg overflow-hidden shadow-md">
          <img
            src="/card3.png"
            alt="Satvik Ingredients"
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-4 right-10 text-[#3fd408]">
            <h3 className="text-lg font-bold leading-snug" style={{ fontFamily: '"Playfair Display", serif' }}>
              Satvik Ingredients
            </h3>
            <button className="mt-2 bg-[#3fd408] text-[#ffffff] font-medium px-10 py-2 rounded-full border-2 border-transparent hover:bg-transparent hover:border-green-600 hover:text-green-500 transition duration-300">
              Explore
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
