'use client';

import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const [showWarning, setShowWarning] = useState(null);

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + ((item.price * (1 - (item.discount || 0) / 100)) * item.quantity), 0)
      .toFixed(2);
  };

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity < 0) return;
    if (newQuantity === 0) {
      setShowWarning(item.slug);
    } else {
      updateQuantity(item.slug, newQuantity);
    }
  };

  const confirmRemoveItem = (slug) => {
    removeFromCart(slug);
    setShowWarning(null);
  };

  const cancelRemoveItem = () => {
    setShowWarning(null);
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold mb-6 text-center">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-white border-b">
                <th className="py-2 text-center">Image</th>
                <th className="py-2 text-center">Product Name</th>
                <th className="py-2 text-center">Price</th>
                <th className="py-2 text-center">Quantity</th>
                <th className="py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.slug} className="border-b hover:bg-gray-800">
                  <td className="py-4 text-center align-middle">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mx-auto" />
                  </td>
                  <td className="py-4 font-medium text-center text-white">{item.name}</td>
                  <td className="py-4 text-center text-white">
                    ${((item.price * (1 - (item.discount || 0) / 100)).toFixed(2))}
                  </td>
                  <td className="py-4 text-center flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(item, item.quantity - 1)}
                      className="px-2 py-1 bg-black text-white rounded"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="0"
                      className="w-12 text-center text-black appearance-none"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                    />
                    <button
                      onClick={() => handleQuantityChange(item, item.quantity + 1)}
                      className="px-2 py-1 bg-black text-white rounded"
                    >
                      +
                    </button>
                  </td>
                  <td className="py-4 text-center">
                    <button
                      onClick={() => setShowWarning(item.slug)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 flex justify-between items-center">
            <h3 className="text-xl font-semibold text-white">Total: ${calculateTotalPrice()}</h3>
            <button
              className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
              onClick={() => alert("Purchase confirmed!")}
            >
              Confirm Purchase
            </button>
          </div>
        </div>
      )}

      {showWarning && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded shadow-lg text-center">
            <p className="mb-4">Do you really want to remove an item from your cart?</p>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded mr-2"
              onClick={() => confirmRemoveItem(showWarning)}
            >
              OK
            </button>
            <button
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={cancelRemoveItem}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
