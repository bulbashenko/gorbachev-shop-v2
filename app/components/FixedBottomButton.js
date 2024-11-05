// ./components/FixedBottomButton.js
import React from 'react';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { CurrencyContext } from '../contexts/CurrencyContext';

const FixedBottomButton = ({ deviceType, formattedPrice, quantity, product }) => {
  const { addToCart } = useContext(CartContext);
  const { currency } = useContext(CurrencyContext);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    // Можно добавить toast уведомление здесь, если необходимо
  };

  const handleApplePay = () => {
    // Реализуйте логику оплаты через Apple Pay
    console.log('Apple Pay');
  };

  const handleGooglePay = () => {
    // Реализуйте логику оплаты через Google Pay
    console.log('Google Pay');
  };

  // Определяем, какую кнопку отображать
  let buttonContent;

  switch (deviceType) {
    case 'ios':
      buttonContent = (
        <button
          onClick={handleApplePay}
          className="w-full bg-black text-white py-3 px-6 rounded-tl-xl rounded-tr-xl text-center transition-colors duration-300 hover:bg-gray-800"
        >
          Pay by Apple Pay
        </button>
      );
      break;
    case 'android':
      buttonContent = (
        <button
          onClick={handleGooglePay}
          className="w-full bg-green-500 text-white py-3 px-6 rounded-tl-xl rounded-tr-xl text-center transition-colors duration-300 hover:bg-green-400"
        >
          Pay by Google Pay
        </button>
      );
      break;
    case 'mobile':
      buttonContent = (
        <button
          onClick={handleAddToCart}
          className="w-full bg-zinc-600 text-white py-3 px-6 rounded-tl-xl rounded-tr-xl text-center transition-colors duration-300 hover:bg-zinc-500"
        >
          Add to Cart
        </button>
      );
      break;
    default:
      buttonContent = null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full">
      {buttonContent}
    </div>
  );
};

export default FixedBottomButton;
