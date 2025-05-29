import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../components/carousel";

function ProductDetails({ onAddToCart, products }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const relatedProducts = products.filter((p) => p.category === product?.category && p.id !== product?.id).slice(0, 4);

  if (!product) return <div className="text-center py-16 text-charcoal-900">Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <button onClick={() => navigate(-1)} className="text-charcoal-900 hover:text-gold-400 mb-8 animate-reveal">
        ← Back to Shop
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-reveal">
        <div>
          <img src={selectedImage} alt={product.name} className="w-full h-[600px] object-cover rounded-lg mb-4" />
          <div className="flex space-x-4">
            {[product.image, product.image, product.image].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} thumbnail ${index}`}
                className={`w-24 h-24 object-cover rounded-lg cursor-pointer ${
                  selectedImage === img ? "ring-2 ring-gold-400" : ""
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="sticky top-24">
          <h2 className="text-4xl font-playfair text-charcoal-900">{product.name}</h2>
          <p className="text-2xl text-gold-400 mt-2">${product.price.toFixed(2)}</p>
          <p className="text-charcoal-900 mt-4">{product.description}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="mt-6 w-full bg-emerald-900 text-ivory-100 rounded-full py-3 hover:bg-emerald-800 hover-lift transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h3 className="text-3xl font-playfair text-charcoal-900 mb-8 animate-reveal">You May Also Like</h3>
          <Carousel items={relatedProducts} onAddToCart={onAddToCart} />
        </div>
      )}
    </div>
  );
}

export default ProductDetails;