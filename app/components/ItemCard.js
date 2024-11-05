// components/ItemCard.js
'use client';

import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { useContext } from 'react';
import { CurrencyContext } from '../contexts/CurrencyContext';
import { CartContext } from '../contexts/CartContext';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ItemCard({ product }) {
  const { name, slug, price, image, discount } = product;
  const { currency, exchangeRates } = useContext(CurrencyContext);
  const { addToCart } = useContext(CartContext);

  // Calculate final price after discount in the base currency (EUR)
  const basePrice = discount > 0 ? price - (price * discount) / 100 : price;

  // Convert price to selected currency
  const convertedPrice = (basePrice * exchangeRates[currency]).toFixed(2);

  // Format price with currency symbol
  const currencySymbols = {
    EUR: '€',
    USD: '$',
    RUB: '₽',
    UAH: '₴',
  };

  const formattedPrice = `${convertedPrice} ${
    currencySymbols[currency] || currency
  }`;

  // Original price in selected currency (for displaying discount)
  const originalPrice = (price * exchangeRates[currency]).toFixed(2);
  const formattedOriginalPrice = `${originalPrice} ${
    currencySymbols[currency] || currency
  }`;

  // Function to add the product to the cart and display a notification
  const handleAddToCart = () => {
    addToCart(product); // Add product to the cart
  };

  return (
    <div className="bg-zinc-800 text-white p-6 relative rounded-xl overflow-hidden w-full">
      {/* Product image with link */}
      <div className="relative w-full h-auto">
        <Link href={`/product/${slug}`}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-lg cursor-pointer"
          />
        </Link>
        {/* Discount badge */}
        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
            -{discount}%
          </span>
        )}
      </div>

      {/* Product information */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="mt-2">
          {discount > 0 ? (
            <div className="flex items-center space-x-2">
              <span className="text-red-500 font-bold text-xl">
                {formattedPrice}
              </span>
              <span className="line-through text-gray-500 text-sm">
                {formattedOriginalPrice}
              </span>
            </div>
          ) : (
            <span className="font-bold text-xl">{formattedPrice}</span>
          )}
        </div>
      </div>

      {/* Cart button */}
      <motion.button
        onClick={handleAddToCart}
        className="w-full mt-4 bg-zinc-600 text-white py-3 rounded-lg text-center sm:absolute sm:bottom-4 sm:right-4 sm:w-16 sm:h-16 sm:py-0"
        aria-label="Add to cart"
        whileHover={{
          backgroundColor: '#3f3f46', // Dark color on hover
          color: '#14b8a6', // Teal color for icon on hover
        }}
        transition={{ duration: 0.3 }}
      >
        <FiShoppingCart
          className="inline-block w-6 h-6 sm:w-8 sm:h-8"
          style={{ color: 'inherit' }}
        />
      </motion.button>
    </div>
  );
}
