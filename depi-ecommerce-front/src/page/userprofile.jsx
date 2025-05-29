const user = {
  name: "Hana Ahmed",
  email: "Hana.Ahmed@example.com",
  avatar: "/images/woman3.jpg",
  orders: [
    { id: 1, date: "2025-04-10", total: 99.98, items: ["Floral Maxi Dress", "Silk Blouse"] },
    { id: 2, date: "2025-03-15", total: 44.99, items: ["High-Waisted Jeans"] },
  ],
};

function UserProfile() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-playfair text-charcoal-900 mb-8 animate-reveal">Your Profile</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-ivory-100 rounded-lg shadow-md p-6 animate-reveal">
          <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
          <h3 className="text-2xl font-playfair text-charcoal-900 text-center">{user.name}</h3>
          <p className="text-charcoal-900 text-center">{user.email}</p>
        </div>
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-playfair text-charcoal-900 mb-4 animate-reveal">Order History</h3>
          {user.orders.length === 0 ? (
            <p className="text-charcoal-900">No orders yet.</p>
          ) : (
            <div className="space-y-6">
              {user.orders.map((order, index) => (
                <div
                  key={order.id}
                  className="bg-ivory-100 rounded-lg p-6 shadow-md animate-reveal"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <p className="text-charcoal-900 font-semibold">Order #{order.id} - {order.date}</p>
                  <p className="text-charcoal-900">Total: ${order.total.toFixed(2)}</p>
                  <p className="text-charcoal-900">Items: {order.items.join(", ")}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;