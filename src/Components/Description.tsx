import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Description = () => {
    return (
        <>
            <section className="w-full py-5 px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
                    {/* Left side - Image */}
                    <div className="w-full">
                        <img 
                            src="./description.png" 
                            alt="Spices showcase" 
                            className="object-cover rounded-lg"
                        />
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="space-y-1">
                        <div className="space-y-3">
                            <h5 className="text-
                            xl sm:text-xl font-bold text-black tracking-wider  md:text-2xl" style={{ fontFamily: '"Playfair Display", serif' }}>
                                Decades of <span className="text-red-600" >trusted expertise,</span> <br />
                                <span >delivering excellence every step of the way.</span>
                            </h5>

                            <h5 className="text-xl sm:text-xl  font-bold text-red-600 pt-8 pb-8" style={{ fontFamily:  '"Nunito Sans", sans-serif' }}>
                                We provide the best spices in the market
                            </h5>
                        </div>
                        
                        <div className="space-y-4 text-gray-500 text-base sm:text-lg" style={{ fontWeight: 400, fontFamily:  '"Nunito Sans", sans-serif' }}>
                            <p>
                                At Kelapure, we blend tradition and innovation to bring you spices that are pure, flavorful, and full of aroma. Our meticulous sourcing and processing ensure that every product meets the highest standards of quality, so you can enjoy authentic taste in every meal.
                            </p>
                            <p className="mt-5">
                                Experience the difference with our carefully curated range—crafted for those who value freshness, trust, and a passion for great food. Discover why chefs and families alike choose Kelapure for their kitchens.
                            </p>
                        </div>

                        <div className="flex">
                            <Link to="/about">
                            <button className="mt-6 bg-[#fe0000] text-white font-medium px-10 py-2 rounded-full border-2 border-transparent hover:bg-transparent hover:border-red-600 hover:text-red-600 transition duration-300 flex items-center justify-between gap-3" style={{fontFamily:  '"Nunito Sans", sans-serif'}}>
                                Know More <FaArrowRightLong className="text-xl" />
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Description;