import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "./../redux/slices/cartSlice";
import WhatsappButton from "../components/whatsappButton";

import visaIcon from './../assets/visaIcon.jpeg';
import paypalIcon from './../assets/paypalIcon.jpeg';
import gpayIcon from './../assets/gpayIcon.jpeg';
import rupayIcon from './../assets/rupayIcon.jpeg';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((total, item) => {
    const price = Number(item.price);
    const quantity = Number(item.quantity);
    return total + (isNaN(price) || isNaN(quantity) ? 0 : price * quantity);
  }, 0);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
      alert("Proceeding to checkout...");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen pt-20 mt-10"> {/* Added pt-20 for spacing from Navbar */}
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-md">
              <img
                src={item.images?.[0] || item.image} // Use images array, fallback to old 'image' if needed
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg mr-4 border border-gray-200"
              />
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                {item.selectedSize && ( // Display selected size if available
                   <p className="text-gray-600 text-sm">Size: {item.selectedSize}</p>
                )}
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <p className="text-lg font-medium text-gray-900 mr-4">
                ₹{(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-600 hover:text-red-800 font-semibold text-sm px-2 py-1 rounded-md"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-end items-center text-xl font-bold mt-6 py-4 border-t border-gray-300">
            Total: <span className="ml-2 text-blue-600">₹{totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-4 sm:space-y-0">
            <button
              onClick={handleClearCart}
              className="w-full sm:w-auto bg-red-600 text-white py-3 px-8 rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-md"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              className="w-full sm:w-auto bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md"
            >
              Proceed to Checkout
            </button>
          </div>

          {/* Payment Icons Section */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">We Accept:</h3>
            <div className="flex justify-center flex-wrap gap-4">
              <img src={visaIcon} alt="Visa" className="h-10 w-auto object-contain" />
              <img src={paypalIcon} alt="PayPal" className="h-10 w-auto object-contain" />
              <img src={gpayIcon} alt="Google Pay" className="h-10 w-auto object-contain" />
              <img src={rupayIcon} alt="RuPay" className="h-10 w-auto object-contain" />
            </div>
          </div>
        </div>
      )}
      <WhatsappButton/>
    </div>
  );
}

export default Cart;