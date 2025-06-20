import { FaHeart, FaStar, FaSearch } from "react-icons/fa";
import { IoShareOutline, IoClose } from "react-icons/io5";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAutoSave, loadSavedData } from "../hooks/useAutoSave";
import type { ProductData } from "../data/productsData";
import Card from "../Components/Card";
import { arrayOfData } from "../data/productsData";
import SealCheck from "../assets/SealCheck.png";    

interface TabDefinition {
  id: keyof ProductData;
  label: string;
}

const Product = () => {
  const stateData = useLocation();
  // const navigate = useNavigate();
  const initialProductData = stateData.state;
  
  const [productData] = useState<ProductData>(() => 
    loadSavedData<ProductData>(`product_${initialProductData.id}`, initialProductData)
  );
  
  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [activeTab, setActiveTab] = useState<keyof ProductData>("description");
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageLoadError, setImageLoadError] = useState<Record<string, boolean>>({});

  // Auto-save product data whenever it changes
  useAutoSave(`product_${productData.id}`, productData);

  // Generate product images array with proper paths
  const productImages = useMemo(() => {
    const mainImage = productData.image;
    const subImages = productData.subImages || [];
    return [mainImage, ...subImages].filter(Boolean).map(img => img.startsWith('/') ? img : `/${img}`);
  }, [productData]);

  // Handle image error
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>, imgPath: string) => {
    event.currentTarget.src = "/package.png"; // Fallback to default image
    setImageLoadError(prev => ({ ...prev, [imgPath]: true }));
  };

  // Reset error state when image loads successfully
  const handleImageLoad = (imgPath: string) => {
    setImageLoadError(prev => ({ ...prev, [imgPath]: false }));
  };

  const sizes = ["50 g", "100 g", "150 g", "200 g"];

  // Define all possible product data fields and their labels
  const tabDefinitions: TabDefinition[] = [
    { id: "description", label: "Description" },
    { id: "ingredients", label: "Ingredients" },
    { id: "traditionalFlavors", label: "Traditional Flavors" },
    { id: "greatWithIndianMeals", label: "Great With Indian Meals" },
    { id: "oilFreePreparation", label: "Oil Free Preparation" },
    { id: "freshnessFriendlyPackaging", label: "Freshness & Packaging" },
    { id: "fullOfFlavorAroma", label: "Flavor & Aroma" },
    { id: "coarseGround", label: "Coarse Ground" },
    { id: "versatileIngredient", label: "Versatile Uses" },
    { id: "uses", label: "Uses" },
    { id: "benefits", label: "Benefits" },
    { id: "nutritionalValue", label: "Nutritional Value" }
  ];

  // Filter tabs based on available data and ensure content is not empty
  const availableTabs = tabDefinitions.filter(tab => {
    const content = productData[tab.id];
    return content && typeof content === 'string' && content.trim() !== '';
  });

  // Set initial active tab
  useEffect(() => {
    if (availableTabs.length > 0) {
      setActiveTab(availableTabs[0].id);
    }
  }, []);


  // Handle tab click
  const handleTabClick = (tabId: keyof ProductData) => {
    setActiveTab(tabId);
  };

  // Get content for active tab
  const getActiveTabContent = () => {
    const content = productData[activeTab];
    return typeof content === 'string' ? content : "No content available.";
  };

  // Get related products (excluding current product)
  const relatedProducts = useMemo(() => {
    return arrayOfData
      .filter(product => product.id !== productData.id)
      .slice(0, 4); // Show only 4 related products
  }, [productData.id]);

  // Handle related product click

  return (
    <>
      <Header />

      <div className="w-full mx-auto font-sans bg-[#F5F5F5]">
        {/* Breadcrumb & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-7 py-4 bg-white mb-9 text-sm text-gray-800">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <Link to="/" className="text-gray-800 hover:text-red-600">Home</Link> / <Link to="/products" className="text-gray-800 hover:text-red-600">Products</Link> /{" "}
            <span className="font-semibold text-black">{productData.title}</span>
          </div>

          <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-3 items-center justify-center">
            <div className="w-full md:w-[70%] flex items-center border-2 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search Products"
                className="w-full p-3 text-sm bg-transparent outline-none"
              />
              <div className="px-3 text-gray-700">
                <FaSearch className="text-xl" />
              </div>
            </div>

            <div className="w-full md:w-[30%] border-2 rounded-lg">
              <select className="w-full p-3 text-sm bg-transparent outline-none">
                <option>All Categories</option>
                <option>Category 1</option>
                <option>Category 2</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Product Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 px-7 pb-10">
          {/* Left: Images */}
          <div className="flex w-full lg:w-[40%] gap-6">
            {/* Thumbnails */}
            <div className="flex flex-col gap-4 min-w-[80px]">
              {productImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImg(idx)}
                  className={`border-2 p-2 rounded-lg cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md relative
                    ${selectedImg === idx 
                      ? "border-red-500 bg-white" 
                      : "border-gray-200 hover:border-red-300 bg-white"
                    }`}
                >
                  <div className="w-16 h-16 relative">
                    {imageLoadError[img] ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-md">
                        <span className="text-xs text-gray-500">Image Error</span>
                      </div>
                    ) : (
                      <img
                        src={img}
                        alt={`${productData.title} - View ${idx + 1}`}
                        className="absolute inset-0 w-full h-full object-contain rounded-md"
                        onError={(e) => handleImageError(e, img)}
                        onLoad={() => handleImageLoad(img)}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div 
              className="flex-1 flex items-center justify-center p-6 bg-white rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
              onClick={() => setIsImageModalOpen(true)}
            >
              {imageLoadError[productImages[selectedImg]] ? (
                <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 rounded-lg">
                  <span className="text-gray-500">Image not available</span>
                </div>
              ) : (
                <img
                  src={productImages[selectedImg]}
                  alt={productData.title}
                  className="object-contain w-full max-h-[400px] hover:scale-105 transition-transform duration-300"
                  onError={(e) => handleImageError(e, productImages[selectedImg])}
                  onLoad={() => handleImageLoad(productImages[selectedImg])}
                />
              )}
            </div>
          </div>

          {/* Right: Info & Actions */}
          <div className="flex-1 bg-white p-3">
            <div className="flex justify-between items-start mb-2 border-b-2">
              <div>
                <div className="text-red-600 font-semibold text-sm">
                  Kelapure
                </div>
                <div className="flex items-center gap-10">
                  <h1 className="text-3xl font-bold">{productData.title}</h1>
                  <h4 className="text-green-600 text-sm font-semibold mt-6">
                    In Stock
                  </h4>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <IoShareOutline className="text-xl cursor-pointer text-gray-600" />
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white cursor-pointer">
                  <FaHeart className="text-red-500 text-lg" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 text-sm text-gray-700 mb-4">
              <div>
                <span className="text-sm flex items-center gap-3">
                  <img
                    src={SealCheck}
                    alt="Seal Check"
                    className="w-6 h-6"
                  />
                  Trusted Product by 1000+ people
                </span>
              </div>
              <div className="flex items-center gap-1 text-yellow-500 mb-5 text-lg">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="text-gray-600 ml-2 text-base font-medium">
                  4.5
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed tracking-widest">
              {productData.description}
            </p>

            {/* Price & Size Selection */}
            <div className="flex items-center justify-between">
              <div className="mb-6">
                <h4 className="mb-2">Price</h4>
                <div className="flex items-center gap-4">
                  <span className="text-red-600 text-2xl font-semibold">
                  ₹{productData.price}
                  </span>
                  <span className="line-through text-gray-400 text-base">
                   {productData.subPrice}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-gray-700 font-medium mr-4">Size</span>
                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  {sizes.map((size, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSize(idx)}
                      className={`px-5 py-2 rounded-full border text-sm font-medium ${
                        selectedSize === idx
                          ? "bg-yellow-400 text-white"
                          : "bg-white text-gray-800 border-gray-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity and Buttons */}
            {/* <div className="flex items-center gap-4 flex-wrap justify-between mb-6">
                            <div className="flex items-center border border-slate-950 px-10 py-2 rounded-full w-fit">
                                <button
                                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                    className="px-2 text-xl"
                                >
                                    −
                                </button>
                                <span className="px-4 text-lg">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(prev => prev + 1)}
                                    className="px-2 text-xl"
                                >
                                    +
                                </button>
                            </div>
                            <div className=" flex gap-4">

                                <button className="flex items-center gap-2 bg-red-100 text-red-600 px-5 py-2 rounded-full border border-red-600 font-medium">
                                    <FaShoppingCart /> Add to Cart
                                </button>
                                <button className="bg-red-600 text-white px-6 py-2 rounded-full font-medium">
                                    Buy Now
                                </button>
                            </div>
                        </div> */}
          </div>
        </div>
        <div className="max-w-7xl mx-auto p-4 shadow rounded bg-white">
          {/* Tabs */}
          <div className="flex flex-wrap border-b overflow-x-auto gap-2">
            {availableTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-6 py-3 font-medium whitespace-nowrap relative transition-all duration-300
                  ${activeTab === tab.id 
                    ? "text-red-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600" 
                    : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start mt-6 gap-6">
            {/* Text content */}
            <div className="flex-1 space-y-4 text-gray-700 text-sm leading-relaxed p-4">
              {getActiveTabContent()}
            </div>

            {/* Right section with images */}
            <div className="relative lg:w-60 lg:h-52 w-full flex flex-col sm:flex-row items-center justify-center gap-4 lg:mr-10">
              <img
                src="/Artificial.png"
                alt="No Artificial"
                className="w-28 sm:w-32 z-10 lg:absolute lg:top-0"
              />
              <img
                src="/seeds.png"
                alt="Spices"
                className="w-40 sm:w-60 lg:absolute lg:left-44 lg:top-10"
              />
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {relatedProducts.map((product, index) => (
              <Card 
                key={product.id}
                item={product}
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-lg p-6">
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <IoClose size={24} />
            </button>
            
            {imageLoadError[productImages[selectedImg]] ? (
              <div className="w-full h-[70vh] flex items-center justify-center bg-gray-100 rounded-lg">
                <span className="text-gray-500">Image not available</span>
              </div>
            ) : (
              <img
                src={productImages[selectedImg]}
                alt={productData.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                onError={(e) => handleImageError(e, productImages[selectedImg])}
                onLoad={() => handleImageLoad(productImages[selectedImg])}
              />
            )}

            {/* Modal Thumbnails */}
            <div className="flex justify-center mt-6 gap-4 overflow-x-auto p-2">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(idx)}
                  className={`min-w-[80px] h-20 border-2 rounded-lg p-2 transition-all duration-300 relative
                    ${selectedImg === idx 
                      ? 'border-red-500 bg-white shadow-md' 
                      : 'border-gray-200 hover:border-red-300 bg-white'
                    }`}
                >
                  {imageLoadError[img] ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-md">
                      <span className="text-xs text-gray-500">Image Error</span>
                    </div>
                  ) : (
                    <img
                      src={img}
                      alt={`${productData.title} - View ${idx + 1}`}
                      className="w-full h-full object-contain rounded-md"
                      onError={(e) => handleImageError(e, img)}
                      onLoad={() => handleImageLoad(img)}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
};

export default Product;
