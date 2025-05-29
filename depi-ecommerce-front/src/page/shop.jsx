import { useState } from "react";
import ProductCard from "../components/productcard";

function Shop({ onAddToCart, products }) {
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const filteredProducts = category === "All" ? products : products.filter((p) => p.category === category);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-playfair text-charcoal-900 mb-8 animate-reveal">Shop All</h2>
      <div className=" top-20 z-10 bg-ivory-100 py-4 mb-8 rounded-lg shadow-sm animate-reveal">
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full ${
                category === cat ? "bg-cyan-900 text-ivory-100" : "bg-ivory-100 text-charcoal-900 hover:bg-gold-400"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
      {visibleCount < filteredProducts.length && (
        <button
          onClick={loadMore}
          className="mt-8 mx-auto block bg-gold-400 text-charcoal-900 rounded-full px-8 py-3 hover:bg-gold-500 hover-lift transition"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Shop;