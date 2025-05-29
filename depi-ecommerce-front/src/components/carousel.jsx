import { useState } from "react";
import ProductCard from "./productcard";

function Carousel({ items, onAddToCart }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = {
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative animate-reveal">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView.xl)}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / itemsPerView.xl}%` }}
            >
              <ProductCard product={item} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-ivory-100 rounded-full p-3 hover:bg-gold-400 transition-all hover-lift"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-charcoal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-ivory-100 rounded-full p-3 hover:bg-gold-400 transition-all hover-lift"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-charcoal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default Carousel;