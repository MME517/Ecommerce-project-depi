import { useState } from "react";

function Footer() {
  const [showNewsletter, setShowNewsletter] = useState(false);

  return (
    <footer className="bg-charcoal-900 text-ivory-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-reveal">
            <h3 className="text-2xl font-playfair text-gold-400">ChicWear</h3>
            <p className="mt-3 text-ivory-100 text-sm">
              Crafting elegance for the modern woman. Explore our curated collections.
            </p>
          </div>
          <div className="animate-reveal md:delay-100">
            <h3 className="text-2xl font-playfair text-gold-400">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="/shop" className="text-ivory-100 hover:text-gold-400 hover-lift transition">Shop</a>
              </li>
              <li>
                <a href="/profile" className="text-ivory-100 hover:text-gold-400 hover-lift transition">Profile</a>
              </li>
              <li>
                <a href="/cart" className="text-ivory-100 hover:text-gold-400 hover-lift transition">Cart</a>
              </li>
              <li>
                <a href="#" className="text-ivory-100 hover:text-gold-400 hover-lift transition">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="animate-reveal md:delay-200">
            <h3 className="text-2xl font-playfair text-gold-400">Connect</h3>
            <div className="mt-3 flex space-x-4">
              <a href="#" className="text-ivory-100 hover:text-gold-400 hover-lift transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L15.17 10l-1.42 2.83L12 14.25l-1.75-1.42L8.83 10l-1.42-2.42L8.83 5.17 10.25 3.75 12 2.33l1.75 1.42 1.42 2.42 1.42 2.42z" />
                </svg>
              </a>
              <a href="#" className="text-ivory-100 hover:text-gold-400 hover-lift transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-6.98h-2.4v-2.82H10v-2.07c0-2.36 1.41-3.66 3.56-3.66 1.03 0 2.1.18 2.1.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.54v1.71h2.58l-.41 2.82h-2.17V22c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
              <a href="#" className="text-ivory-100 hover:text-gold-400 hover-lift transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.99 4.69c-.88.39-1.83.65-2.82.77 1.01-.61 1.79-1.57 2.16-2.71-.95.56-2 .97-3.12 1.19-.9-.96-2.18-1.56-3.6-1.56-2.72 0-4.93 2.21-4.93 4.93 0 .39.04.77.13 1.13C7.69 8.21 4.07 6.25 1.64 3.29c-.42.72-.66 1.55-.66 2.44 0 1.71.87 3.22 2.19 4.1-.81-.03-1.57-.25-2.24-.61v.06c0 2.39 1.7 4.38 3.95 4.83-.41.11-.85.17-1.3.17-.32 0-.63-.03-.93-.09.63 1.97 2.46 3.41 4.63 3.45-1.7 1.33-3.84 2.12-6.16 2.12-.4 0-.79-.02-1.18-.07 2.19 1.41 4.79 2.23 7.58 2.23 9.11 0 14.09-7.54 14.09-14.09 0-.21 0-.43-.01-.64.97-.72 1.81-1.61 2.47-2.63z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="animate-reveal md:delay-300">
            <h3 className="text-2xl font-playfair text-gold-400">Contact</h3>
            <p className="mt-3 text-ivory-100 text-sm">
              Cairo,Egypt
            </p>
            <p className="mt-1 text-ivory-100 text-sm">
              Email: support@chicwear.com
            </p>
            <p className="mt-1 text-ivory-100 text-sm">
              Phone: (+20) 123-4567
            </p>
          </div>
        </div>
        <div className="mt-12 text-center text-ivory-100 text-sm">
          <p>© 2025 ChicWear. All rights reserved.</p>
        </div>
      </div>
      {showNewsletter && (
        <div className="fixed inset-0 bg-charcoal-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-ivory-100 p-8 rounded-lg max-w-md w-full animate-reveal">
            <h3 className="text-2xl font-playfair text-emerald-900">Join Our Newsletter</h3>
            <p className="mt-2 text-charcoal-900">Stay updated with the latest trends and exclusive offers.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-4 w-full border border-gold-400 rounded-full px-4 py-2 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={() => setShowNewsletter(false)}
                className="text-charcoal-900 hover:text-emerald-900"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowNewsletter(false)}
                className="bg-gold-400 text-charcoal-900 rounded-full px-6 py-2 hover:bg-gold-500 hover-lift transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;