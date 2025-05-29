import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ cartItems }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent absolute top-0 w-full z-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-4xl font-playfair text-gold-400">ChicWear</Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gold-400 hover:text-yellow-400 relative group transition">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/shop" className="text-gold-400 hover:text-yellow-400 relative group transition">
              Shop
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/profile" className="text-gold-400 hover:text-yellow-400 relative group transition">
              Profile
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/cart" className="text-gold-400 hover:text-yellow-400 relative group transition">
              Cart
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-4 bg-gold-400 text-charcoal-900 text-xs rounded-full px-2 animate-pulse-gold">{cartItems.length}</span>
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
          <button className="md:hidden text-ivory-100" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden bg-charcoal-900 bg-opacity-95 px-4 py-6 animate-reveal">
            <Link to="/" className="block text-ivory-100 hover:text-gold-400 py-2">Home</Link>
            <Link to="/shop" className="block text-ivory-100 hover:text-gold-400 py-2">Shop</Link>
            <Link to="/profile" className="block text-ivory-100 hover:text-gold-400 py-2">Profile</Link>
            <Link to="/cart" className="block text-ivory-100 hover:text-gold-400 py-2 relative">
              Cart
              {cartItems.length > 0 && (
                <span className="absolute top-2 right-0 bg-gold-400 text-charcoal-900 text-xs rounded-full px-2">{cartItems.length}</span>
              )}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;