import products from "../data/products";
import Carousel from "../components/carousel";

function Home({ onAddToCart }) {
  const featuredProducts = products.slice(0, 4);
  const categories = ["Dresses", "Tops", "Jackets", "Pants", "Skirts"];

  return (
    <div>
      <div className="relative h-screen parallax-bg" style={{ backgroundImage: "url(/images/hero.jpg)" }}>
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover opacity-80">
          <source src="/video/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal-900 opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center animate-reveal">
          <div>
            <h1 className="text-5xl font-playfair text-ivory-100 mb-4">Unleash Your Elegance</h1>
            <a
              href="/shop"
              className="bg-gold-400 text-charcoal-900 rounded-full px-8 py-3 hover:bg-gold-500 hover-lift transition"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-playfair text-charcoal-900 mb-8 animate-reveal">Featured Collections</h2>
        <Carousel items={featuredProducts} onAddToCart={onAddToCart} />
        <h2 className="text-3xl font-playfair text-charcoal-900 mt-12 mb-8 animate-reveal">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <a
              key={category}
              href={`/shop?category=${category}`}
              className="relative bg-ivory-100 rounded-lg overflow-hidden hover-lift transition animate-reveal"
            >
              <img src={`/images/${category.toLowerCase()}.jpg`} alt={category} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 to-transparent opacity-50"></div>
              <h3 className="absolute bottom-4 left-4 text-ivory-100 font-playfair text-xl">{category}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;