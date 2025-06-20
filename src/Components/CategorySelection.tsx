import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const categories = [
  'Chutney',
  'Supari',
  'Flours',
  'Sattu & others Beverages',
  'Grains Powder',
  'Satvik Ingredients',
];

const CategoryFilterPopup = ({ onClose }: { onClose: () => void }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleReset = () => {
    setSelectedCategories([]);
  };

  const handleApply = () => {
    console.log('Selected:', selectedCategories);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md md:max-w-xl rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold">Category</h2>
          <button onClick={onClose}>
            <IoClose className="text-2xl" />
          </button>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 mb-6">
          {categories.map((category, idx) => (
            <label key={idx} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
                className="accent-yellow-500 w-4 h-4"
              />
              <span className="text-sm text-gray-700">{category}</span>
            </label>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handleReset}
            className="border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100"
          >
            Reset
          </button>
          <button
            onClick={handleApply}
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilterPopup;
