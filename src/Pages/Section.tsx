import { useState } from "react";
import Card from "../Components/Card";
import FilterSection from "../Components/FilterSection";
import { arrayOfData, type ProductData } from "../data/productsData";

const Section = () => {
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>(arrayOfData);

  
  return (
    <section className="py-0 px-4 bg-white pb-20 flex flex-col items-center justify-center">
      <FilterSection onFilterChange={setFilteredProducts} />

      <div className="flex flex-wrap gap-4 mt-10 justify-center sm:px-0">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <Card
              key={item.id}
              isFirst={[0, 4, 8, 12].includes(index)}
              item={item}
            />
          ))
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section;