const spicesImage = './group.png';
const cashIcon = 'p1.png';
const returnIcon = 'p2.png';
const shippingIcon = 'p3.png';

const Payment = () => {
  return (
    <div className="container mx-auto my-16 py-8 px-4">
      <div className="relative w-full h-auto md:h-[379px] flex flex-col md:flex-row items-center justify-center">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/3 h-auto md:h-full relative z-10 p-4 order-1 md:order-2 md:absolute md:top-0 md:left-0">
          <img
            src={spicesImage}
            alt="Spices"
            className="w-full h-auto md:h-full object-contain"
          />
        </div>

        {/* Full Width Background Benefits */}
        <div className="w-full h-auto md:h-[229px] bg-[#EFEEEE] flex items-center justify-center px-4 md:px-8 py-6 md:py-0 my-4 md:my-0 order-2 md:order-1">
          <div className="w-full flex flex-col md:flex-row justify-around items-center gap-6 md:gap-0 md:pl-[33.333%]">
            {/* Benefit Item 1 */}
            <div className="text-center max-w-[200px]">
              <img src={cashIcon} alt="Cash Icon" className="w-8 h-8 mx-auto mb-2" />
              <h2 className="text-lg font-bold text-gray-800 mb-2 font-crimson">
                Cash on Delivery
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                Get cash on delivery option available<br />
                with no extra charges
              </p>
            </div>

            {/* Benefit Item 2 */}
            <div className="text-center max-w-[200px]">
              <img src={returnIcon} alt="Return Icon" className="w-8 h-8 mx-auto mb-2" />
              <h2 className="text-lg font-bold text-gray-800 mb-2 font-crimson">
                3 Days Return
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                Return unused items within 3 days<br />
                not applicable for already discount product
              </p>
            </div>

            {/* Benefit Item 3 */}
            <div className="text-center max-w-[200px]">
              <img src={shippingIcon} alt="Shipping Icon" className="w-8 h-8 mx-auto mb-2" />
              <h2 className="text-lg font-bold text-gray-800 mb-2 font-crimson">
                Free Shipping
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                Free Shipping in India for orders over 500/-
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
