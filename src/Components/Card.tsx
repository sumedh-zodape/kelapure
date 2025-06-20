import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import type { ProductData } from "../data/productsData";
import { useState } from "react";
import { useAutoSave, loadSavedData } from "../hooks/useAutoSave";

interface CardProps {
  isFirst?: boolean;
  item: ProductData;
}

const Card = ({ isFirst = false, item }: CardProps) => {
  const navigate = useNavigate();
  
  // Load saved favorite state
  const [isFavorite, setIsFavorite] = useState(() => 
    loadSavedData<boolean>(`favorite_${item.id}`, false)
  );

  // Auto-save favorite state
  useAutoSave(`favorite_${item.id}`, isFavorite);

  const handleClick = () => {
    // Navigate to product details with the full product data
    navigate(`/product/details`, {
      state: {
        ...item,
        // Ensure subImages are properly set
        subImages: item.subImages || ["/subImage1.png", "/subImage2.png"]
      },
      replace: false // This ensures browser back button works
    });
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking favorite button
    setIsFavorite(!isFavorite);
  };

  // Remove the public prefix from image path if it exists
  const imageUrl = item.image.replace('./public/', '/');

  return (
    <div
      className="w-full max-w-[316px] sm:w-[400px] h-[390px] bg-[#ffff] rounded-[10px] shadow-lg relative overflow-hidden my-3 mx-0 px-0 sm:px-0 cursor-pointer hover:shadow-xl transition-all duration-300"
      onClick={handleClick}
    >
      {isFirst && (
        <button className="absolute top-5 left-2 bg-[#F7A600] text-sm font-medium px-3 py-1 rounded-full z-10">
          Best Seller
        </button>
      )}

      <div className="relative flex justify-center mt-5">
        <img
          src={imageUrl}
          alt={item.title}
          className="h-[250px] object-contain transition-transform duration-300 hover:scale-105"
        />
        <button 
          onClick={handleFavoriteClick}
          className="absolute bottom-0 right-3 w-[40px] h-[40px] border border-[#cfcccc] rounded-full bg-white flex items-center justify-center hover:border-red-500 transition-all duration-300"
        >
          <CiHeart className={`text-2xl ${isFavorite ? 'text-red-600 fill-current' : 'text-gray-400'}`} />
        </button>
      </div>

      <div className="p-4  flex justify-between items-center mt-4">
        <div className="flex flex-col">
          <h2 className="text-gray-800 font-bold text-base" style={{ fontFamily: '"Nunito Sans", sans-serif', fontSize: "16px" }}>
            {item.title}
          </h2>
          <p className="text-sm text-gray-500 font-medium">{item.weight || '100 g'}</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-[#800000] font-bold text-m"> ₹{item.price || '60.00'}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
