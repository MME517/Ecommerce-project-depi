import { Link } from "react-router-dom";

function Cart({ cartItems, onRemoveFromCart, onUpdateQuantity }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-playfair text-charcoal-900 mb-8 animate-reveal">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-charcoal-900">Your cart is empty.</p>
      ) : (
        <div>
          <div className="bg-ivory-100 rounded-lg shadow-md overflow-hidden animate-reveal">
            <table className="w-full">
              <thead className="bg-gold-400 text-ivory-100">
                <tr>
                  <th className="py-3 px-4 text-left">Product</th>
                  <th className="py-3 px-4 text-left">Price</th>
                  <th className="py-3 px-4 text-left">Quantity</th>
                  <th className="py-3 px-4 text-left">Total</th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b border-ivory-100 animate-reveal">
                    <td className="py-4 px-4 flex items-center">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                      <span className="text-charcoal-900">{item.name}</span>
                    </td>
                    <td className="py-4 px-4 text-charcoal-900">${item.price.toFixed(2)}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="bg-ivory-100 text-charcoal-900 rounded-full w-8 h-8 hover:bg-gold-400 transition"
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span className="text-charcoal-900">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="bg-ivory-100 text-charcoal-900 rounded-full w-8 h-8 hover:bg-gold-400 transition"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-charcoal-900">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="text-blush-300 hover:text-blush-400 transition"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex justify-end animate-reveal">
            <div className="bg-ivory-100 rounded-lg p-6 shadow-md">
              <p className="text-2xl font-playfair text-charcoal-900">Total: ${total.toFixed(2)}</p>
              <Link
                to="/checkout"
                className="mt-4 block bg-gold-400 text-ivory-100 rounded-full px-8 py-3 hover:bg-yellow-400 hover-lift transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;