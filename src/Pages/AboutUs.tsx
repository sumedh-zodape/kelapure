import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import Card from "../Components/Card";

const AboutUs = () => {
  // const cardsNum = [1, 2, 3, 4];
  // let images: string[] = ["./public/package2.png", "./public/package.png", "./public/package3.png", "./public/package4.png"]
  return (
    <>
      <Header />
      <div className="w-full  bg-[#F5F5F5]">
        {/* Header Section */}
        <div className="relative h-64 text-white text-center">
          <img
            src="/About_Background.png"
            className="w-full h-full object-cover"
            alt="Background"
          />
          <h1 className="text-3xl md:text-4xl font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            About Us
          </h1>

          {/* Decorative Images */}
          <img
            src="/spice_powder.png"
            alt=""
            className="w-60 absolute left-0 top-[40%] z-10"
          />
          <img
            src="/redPowder.png"
            alt=""
            className="w-28 absolute left-4 top-[25%]"
          />
          <img
            src="/yellowPowder.png"
            alt=""
            className="w-20 absolute left-24 top-[37%]"
          />
          <img
            src="/greenPowder.png"
            alt=""
            className="w-16 absolute left-36 top-[55%]"
          />
          <img
            src="/masala.png"
            alt=""
            className="w-60  absolute right-0 top-[28%]"
          />
        </div>

        {/* Main Content */}
        <div className="w-full flex items-center justify-center py-16 sm:px-6 lg:px-8">
          <div className="flex w-[90%] flex-col lg:flex-row items-center justify-between bg-[#FBFBFB]">
            {/* Left - Image */}
            <div className="w-full lg:w-[40%]">
              <img
                src="/About_Page_Design.png"
                alt="Spices"
                className="w-full object-contain"
              />
            </div>

            {/* Right - Text */}
            <div className="w-full lg:w-[58%] px-0 mt-6 lg:mt-0 text-center lg:text-left flex flex-col">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                About Us
              </h2>
              <h3 className="text-red-600 text-3xl sm:text-4xl font-semibold mb-6 tracking-tighter font-[Playfair-Display]">
                Authentic flavor in every pinch.
              </h3>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                At Kelapure, we are passionate about bringing the authentic taste
                of tradition to your kitchen. With decades of expertise in sourcing
                and blending the finest spices, we ensure every product delivers
                purity, freshness, and bold flavor. Our commitment to quality
                means that each pinch of our spices elevates your culinary
                creations, making every meal a memorable experience for your
                family and friends.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                We believe in transparency, sustainability, and supporting local
                farmers. From careful selection of raw ingredients to hygienic
                packaging, our process is designed to preserve the natural aroma
                and nutritional value of our spices. Join us on a journey of taste
                and trust—experience the difference that true dedication and
                heritage can make in every dish.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Us Live */}
        <div className="px-4 sm:px-6 p-10 text-center bg-[#F5F5F5]">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold mb-6 font-['Playfair_Display']">
            Experience Us Live
          </h2>
          <div className="relative flex justify-center items-center flex-col sm:flex-row">
            <img
              src="/About_Seeds.png"
              alt="Pepper"
              className="rounded-xl w-full max-w-3xl object-cover"
            />

            {/* Red Circle */}
            <div className="relative mt-6 sm:mt-0 sm:absolute sm:left-[60%] sm:top-1/2 sm:-translate-y-1/2">
              <img src="/Ellipse_139.png" alt="" className="w-64 sm:w-80" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white p-6 rounded-full w-60 sm:w-72 h-60 sm:h-72 flex flex-col justify-center items-center shadow-lg">
                <h3 className=" text-lg sm:text-2xl font-[Nunito_Sans] text-center">
                  EXPLORE <br /> OUR PURE SPICES,
                  <br /> BOLD FLAVORS.
                </h3>
                <button className="mt-4 px-6 py-3 border-2 border-white text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-red-500 transition">
                  Taste the Flavor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
