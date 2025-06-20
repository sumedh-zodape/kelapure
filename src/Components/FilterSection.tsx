import React, { useState, useEffect } from "react";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { arrayOfData, type ProductData } from "../data/productsData";


interface FilterSectionProps {
  onFilterChange: (products: ProductData[]) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ onFilterChange }) => {
  // Initial values for reset
  const initialPrice = 1000;
  const initialSize = "50 g";
  const initialCategories: string[] = [];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  
  // Single set of filter states
  const [price, setPrice] = useState(initialPrice);
  const [selectedSize, setSelectedSize] = useState(initialSize);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategories);

  const filters = ["Chutney", "Grains Powder & Flours", "Satvik Ingredients"];
  const sizes = ["50 g", "100 g", "150 g", "200 g"];
  const categories = [
    "Chutney", "Supari", "Flours", "Sattu & others Beverages",
    "Grains Powder", "Satvik Ingredients","Bharda"
  ];

  // Function to check if a product matches a search term in any field
  const productMatchesSearch = (product: ProductData, searchTerm: string): boolean => {
    const searchLower = searchTerm.toLowerCase();
    const fieldsToSearch = [
      product.title,
      product.description,
      product.ingredients,
      product.traditionalFlavors,
      product.greatWithIndianMeals,
      product.uses,
      product.benefits,
      product.nutritionalValue,
      product.nutritionalBenefits,
      product.versatileUse
    ];

    return fieldsToSearch.some(field => 
      field?.toLowerCase().includes(searchLower)
    );
  };

  // Function to determine if a product belongs to a category
  const productMatchesCategory = (product: ProductData, category: string): boolean => {
    const categoryLower = category.toLowerCase();
    const titleLower = product.title.toLowerCase();
    const descriptionLower = (product.description || "").toLowerCase();
    
    // Special case handling for categories
    switch (categoryLower) {
      case 'chutney':
        return titleLower.includes('chutney');
      case 'supari':
        return titleLower.includes('supari') || descriptionLower.includes('supari');
      case 'flours':
        return titleLower.includes('atta') || 
               titleLower.includes('pith') ||
               titleLower.includes('flour') ||
               titleLower.includes('soji') ||
               titleLower.includes('bhajani');
      case 'grains powder & flours':
        return titleLower.includes('atta') || 
               titleLower.includes('pith') ||
               titleLower.includes('flour') ||
               titleLower.includes('soji') ||
               titleLower.includes('bhajani') ||
               titleLower.includes('powder');
      case 'sattu & others beverages':
        return titleLower.includes('sattu') ||
               titleLower.includes('sip');
      case 'grains powder':
        return titleLower.includes('powder') ||
               descriptionLower.includes('powder');
      case 'satvik ingredients':
        return true; // All products are Satvik ingredients
      default:
        return titleLower.includes(categoryLower) || 
               descriptionLower.includes(categoryLower);
    }
  };

  // Handle category toggle
  const handleCategoryToggle = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  // Handle reset all filters
  const handleReset = () => {
    setPrice(initialPrice);
    setSelectedSize(initialSize);
    setSelectedCategories(initialCategories);
    setSearchText("");
    setIsPopupOpen(false);
  };

  // Apply filters whenever any filter criteria changes
  useEffect(() => {
    let filtered = [...arrayOfData];

    // Filter by search text
    if (searchText.trim()) {
      filtered = filtered.filter(product => 
        productMatchesSearch(product, searchText.trim())
      );
    }

    // Filter by categories - product should match ANY of the selected categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => {
        return selectedCategories.some(category => 
          productMatchesCategory(product, category)
        );
      });
    }

    // Filter by price - only apply if price is less than maximum
    if (price < initialPrice) {
      filtered = filtered.filter(product => {
        if (!product.price) return true; // Include products without price
        const priceStr = product.price.replace(/[₹,\s]/g, "").trim();
        const productPrice = parseInt(priceStr);
        return !isNaN(productPrice) && productPrice <= price;
      });
    }

    // Filter by size - only apply if a specific size is selected
    if (selectedSize !== initialSize) {
      filtered = filtered.filter(product => {
        if (!product.weight) return false; // Don't include products without weight
        
        // Normalize both the product weight and selected size for comparison
        const normalizeWeight = (weight: string) => {
          // Remove spaces and convert to lowercase
          const normalized = weight.toLowerCase().replace(/\s+/g, '');
          // Handle cases where 'g' or 'gm' or 'gms' or 'gram' or 'grams' might be used
          return normalized
            .replace(/grams?$/i, 'g')
            .replace(/gms?$/i, 'g');
        };

        const productWeight = normalizeWeight(product.weight);
        const targetWeight = normalizeWeight(selectedSize);

        return productWeight === targetWeight;
      });
    }

    console.log("Filter Applied:", {
      searchText,
      selectedCategories,
      price,
      selectedSize,
      filteredCount: filtered.length,
      totalCount: arrayOfData.length
    });

    onFilterChange(filtered);
  }, [searchText, selectedCategories, price, selectedSize, onFilterChange]);

  // Initialize with all products on component mount
  useEffect(() => {
    onFilterChange(arrayOfData);
  }, [onFilterChange]);

  // Check if any filters are active
  const hasActiveFilters = searchText.trim() || selectedCategories.length > 0 || 
    price < initialPrice || selectedSize !== initialSize;

  return (
    <div className="flex flex-col items-center mt-20  w-full max-w-[1440px] mx-auto">
     
      <h2 className="title text-3xl text-center  font-bold tracking-wider font-[
Playfair_Display]">
        Shop Our Products
      </h2>

      {/* Desktop Filter Buttons */}
      <div className="hidden sm:flex justify-center mt-7 w-full max-w-[600px] rounded-full border-2">
        <div className="flex flex-wrap justify-center gap-3 w-full p-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                // Set only the clicked category, or clear if it's already selected
                setSelectedCategories(selectedCategories.includes(filter) ? [] : [filter]);
              }}
              className={`px-4 py-2 text-sm rounded-full border-2 transition duration-300 ${
                selectedCategories.includes(filter)
                  ? "bg-[#333] text-white border-transparent"
                  : "bg-transparent text-black border-transparent hover:bg-[#333] hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Filter Dropdown + Button */}
      <div className="sm:hidden w-full mt-7 space-y-4">
        <select
          value={selectedCategories[0] || ""}
          onChange={(e) => setSelectedCategories(e.target.value ? [e.target.value] : [])}
          className="w-full px-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option value="">All Categories</option>
          {filters.map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>

        <button
          onClick={() => setIsPopupOpen(true)}
          className="w-full flex items-center justify-center gap-2 border-2 border-black px-4 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
        >
          Filter <SlidersHorizontal className="text-base" />
        </button>
      </div>

      {/* Search and Filter button (desktop) */}
      <div className="w-full border-b-4 border-yellow-400 mt-10 pb-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center w-full">
          <form className="w-full sm:flex-grow max-w-full sm:max-w-[500px]" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center border-2 border-gray-300 rounded-xl px-4 h-[48px] bg-white w-full">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search here"
                className="w-full outline-none text-sm"
              />
              <Search className="text-2xl text-[#141B34]" />
            </div>
          </form>

          {/* Desktop Filter Button */}
          <button
            onClick={() => setIsPopupOpen(true)}
            className="hidden sm:flex items-center gap-3 border border-gray-400 px-6 py-2.5 rounded-full text-black transition duration-300"
          >
            Filter <SlidersHorizontal className="text-lg" />
            {hasActiveFilters && (
              <span className="bg-yellow-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                !
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mt-4 w-full">
          {searchText && (
            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2">
              Search: {searchText}
              <button onClick={() => setSearchText("")} className="text-gray-500 hover:text-black">
                <X size={14} />
              </button>
            </div>
          )}
          {selectedCategories.map(cat => (
            <div key={cat} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2">
              {cat}
              <button 
                onClick={() => handleCategoryToggle(cat)}
                className="text-gray-500 hover:text-black"
              >
                <X size={14} />
              </button>
            </div>
          ))}
          {price < initialPrice && (
            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2">
              Price: ₹{price}
              <button onClick={() => setPrice(initialPrice)} className="text-gray-500 hover:text-black">
                <X size={14} />
              </button>
            </div>
          )}
          {selectedSize !== initialSize && (
            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2">
              Size: {selectedSize}
              <button onClick={() => setSelectedSize(initialSize)} className="text-gray-500 hover:text-black">
                <X size={14} />
              </button>
            </div>
          )}
          {/* Reset All Button */}
          <button
            onClick={handleReset}
            className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm hover:bg-red-200"
          >
            Reset All
          </button>
        </div>
      )}

      {/* Filter Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4 overflow-y-auto">
          <div className="bg-white rounded-xl w-full max-w-md p-6 mt-10 mb-10 relative shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Filter</h3>
              <button onClick={() => setIsPopupOpen(false)}>
                <X className="text-2xl" />
              </button>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <p className="font-medium mb-2">Price</p>
              <div className="flex justify-between text-sm text-gray-600">
                <span>₹ 50</span>
                <span>₹ 1000</span>
              </div>
              <input
                type="range"
                min={50}
                max={1000}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full accent-yellow-500 mt-2"
              />
              <div className="text-center mt-1 font-bold text-yellow-600">₹ {price}</div>
            </div>

            {/* Size Filter */}
            <div className="mb-6">
              <p className="font-medium mb-2">Size</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 text-sm rounded-full border transition ${
                      selectedSize === size
                        ? "bg-yellow-500 text-white"
                        : "bg-white border-gray-300 text-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <p className="font-medium mb-2">Category</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCategoryToggle(cat)}
                      className="accent-yellow-500"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-between mt-6 gap-2">
              <button
                onClick={handleReset}
                className="w-full sm:w-1/2 py-2 border rounded-full font-medium hover:bg-gray-100"
              >
                Reset
              </button>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="w-full sm:w-1/2 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSection;