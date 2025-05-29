import { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  const [showQuickView, setShowQuickView] = useState(false);

  return (
    <div className="relative bg-ivory-100 rounded-lg overflow-hidden shadow-md hover-lift transition-all animate-reveal">
      <Link to={`/product/${product.id}`}>
        <div className="relative">
          <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 to-transparent opacity-50"></div>
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-playfair text-charcoal-900">{product.name}</h3>
        <p className="text-gold-400 font-semibold">${product.price.toFixed(2)}</p>
        <div className="mt-3 flex space-x-2">
          <button
            onClick={() => setShowQuickView(true)}
            className="flex-1 bg-cyan-900 text-ivory-100 rounded-full py-2 hover:bg-blush-400 hover-lift transition"
          >
            Quick View
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="flex-1 bg-yellow-600 text-ivory-100 rounded-full py-2 hover:bg-yellow-700 hover-lift transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {showQuickView && (
        <div className="fixed inset-0 bg-charcoal-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-ivory-100 p-8 rounded-lg max-w-lg w-full animate-reveal">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-playfair text-charcoal-900">{product.name}</h3>
            <p className="text-gold-400 font-semibold">${product.price.toFixed(2)}</p>
            <p className="mt-2 text-charcoal-900">{product.description}</p>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={() => setShowQuickView(false)}
                className="text-charcoal-900 hover:text-emerald-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onAddToCart(product);
                  setShowQuickView(false);
                }}
                className="bg-emerald-900 text-ivory-100 rounded-full px-6 py-2 hover:bg-emerald-800 hover-lift transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;