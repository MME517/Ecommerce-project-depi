import { useState } from "react";

function Checkout() {
  const [step, setStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    setShowConfirmation(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-playfair text-charcoal-900 mb-8 animate-reveal">Checkout</h2>
      <div className="flex mb-8 animate-reveal">
        <div className={`flex-1 text-center ${step >= 1 ? "text-gold-400" : "text-ivory-100"}`}>
          <div className={`w-8 h-8 mx-auto rounded-full ${step >= 1 ? "bg-gold-400" : "bg-ivory-100"}`}>1</div>
          <p>Shipping</p>
        </div>
        <div className={`flex-1 text-center ${step >= 2 ? "text-gold-400" : "text-ivory-100"}`}>
          <div className={`w-8 h-8 mx-auto rounded-full ${step >= 2 ? "bg-gold-400" : "bg-ivory-100"}`}>2</div>
          <p>Payment</p>
        </div>
        <div className={`flex-1 text-center ${step >= 3 ? "text-gold-400" : "text-ivory-100"}`}>
          <div className={`w-8 h-8 mx-auto rounded-full ${step >= 3 ? "bg-gold-400" : "bg-ivory-100"}`}>3</div>
          <p>Review</p>
        </div>
      </div>
      <div className="bg-ivory-100 rounded-lg p-8 shadow-md animate-reveal">
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair text-charcoal-900">Shipping Information</h3>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-ivory-100 rounded-full px-4 py-3 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full border border-ivory-100 rounded-full px-4 py-3 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full border border-ivory-100 rounded-full px-4 py-3 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
            <input
              type="text"
              placeholder="ZIP Code"
              className="w-full border border-ivory-100 rounded-full px-4 py-3 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
            <button
              onClick={nextStep}
              className="w-full bg-gold-400 text-ivory-100 rounded-full py-3 hover:bg-yellow-400 hover-lift transition"
            >
              Continue to Payment
            </button>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair text-charcoal-900">Payment Information</h3>
            <inputvars
              type="text"
              placeholder="Card Number"
              className="w-full border border-ivory-100 rounded-full px-4 py-3 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 border border-ivory-100 rounded-full px-4 py-3 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-1/2 border border-ivory-100 rounded-full px-4 py-3 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
            </div>
            <div className="flex space-x-4">
              <button
                onClick={prevStep}
                className="w-1/2 bg-ivory-100 text-charcoal-900 rounded-full py-3 hover:bg-gold-400 transition"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="w-1/2 bg-gold-400 text-ivory-100 rounded-full py-3 hover:bg-yellow-400 hover-lift transition"
              >
                Review Order
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair text-charcoal-900">Review Your Order</h3>
            <p className="text-charcoal-900">Please review your shipping and payment details.</p>
            <div className="flex space-x-4">
              <button
                onClick={prevStep}
                className="w-1/2 bg-ivory-100 text-charcoal-900 rounded-full py-3 hover:bg-gold-400 transition"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="w-1/2 bg-gold-400 text-ivory-100 rounded-full py-3 hover:bg-yellow-400 hover-lift transition"
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
      {showConfirmation && (
        <div className="fixed inset-0 bg-charcoal-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-ivory-100 p-8 rounded-lg max-w-md w-full animate-reveal">
            <h3 className="text-2xl font-playfair text-gold-400">Order Confirmed!</h3>
            <p className="mt-2 text-charcoal-900">Thank you for your purchase. You'll receive a confirmation soon.</p>
            <button
              onClick={() => setShowConfirmation(false)}
              className="mt-4 w-full bg-gold-400 text-charcoal-900 rounded-full py-3 hover:bg-gold-500 hover-lift transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;