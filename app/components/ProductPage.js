'use client';

import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartContext } from '../contexts/CartContext';
import { CurrencyContext } from '../contexts/CurrencyContext';
import { motion, AnimatePresence } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import { FaPlus, FaMinus } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

// Варианты анимации для плавного раскрытия
const dropdownVariants = {
  hidden: { 
    opacity: 0,
    height: 0,
    transition: {
      height: { duration: 0.3 },
      opacity: { duration: 0.2 }
    }
  },
  visible: { 
    opacity: 1,
    height: 'auto',
    transition: {
      height: { duration: 0.3 },
      opacity: { duration: 0.3, delay: 0.1 }
    }
  },
  exit: { 
    opacity: 0,
    height: 0,
    transition: {
      height: { duration: 0.3 },
      opacity: { duration: 0.2 }
    }
  }
};

// Компонент выпадающей секции
const DropdownSection = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="bg-zinc-600 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left font-semibold flex justify-between items-center p-4 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden bg-zinc-700"
          >
            <div className="p-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Компонент селектора количества
const QuantitySelector = ({ quantity, setQuantity, maxQuantity }) => {
  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-zinc-600 rounded-xl overflow-hidden">
      <div className="font-semibold p-4">
        Quantity
      </div>
      <div className="bg-zinc-700 p-4">
        <div className="flex items-center justify-between max-w-[200px]">
          <button
            onClick={handleDecrement}
            disabled={quantity <= 1}
            className={`p-2 rounded-lg ${
              quantity <= 1 
                ? 'bg-zinc-600 text-zinc-400 cursor-not-allowed' 
                : 'bg-zinc-600 hover:bg-zinc-500 text-white'
            } transition-colors duration-200`}
          >
            <FaMinus className="w-3 h-3" />
          </button>
          
          <span className="mx-4 min-w-[40px] text-center">{quantity}</span>
          
          <button
            onClick={handleIncrement}
            disabled={quantity >= maxQuantity}
            className={`p-2 rounded-lg ${
              quantity >= maxQuantity 
                ? 'bg-zinc-600 text-zinc-400 cursor-not-allowed' 
                : 'bg-zinc-600 hover:bg-zinc-500 text-white'
            } transition-colors duration-200`}
          >
            <FaPlus className="w-3 h-3" />
          </button>
        </div>
        <div className="text-sm text-zinc-400 mt-2">
          Available: {maxQuantity} pcs
        </div>
      </div>
    </div>
  );
};

const ProductPage = ({ product }) => {
  const {
    name,
    slug,
    price,
    image,
    discount,
    additionalImages,
    availability,
    description,
  } = product;
  
  const { currency, exchangeRates } = useContext(CurrencyContext);
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(image);
  const [review, setReview] = useState({
    user: '',
    rating: 5,
    comment: '',
  });

  // States for dropdowns
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isDeliveryInfoOpen, setIsDeliveryInfoOpen] = useState(false);
  const [isShippingCostOpen, setIsShippingCostOpen] = useState(false);

  // Calculate price after discount
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

  const formattedPrice = `${convertedPrice} ${currencySymbols[currency] || currency}`;

  // Original price for displaying discount
  const originalPrice = (price * exchangeRates[currency]).toFixed(2);
  const formattedOriginalPrice = `${originalPrice} ${currencySymbols[currency] || currency}`;

  // Function to add to cart and show notification
  const handleAddToCart = () => {
    addToCart({...product, quantity});
  };

  // Handle changes in the review form
  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle review form submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the review to the server here

    toast.success('Your review has been submitted!', {
      position: 'top-right',
      autoClose: 3000,
    });

    setReview({
      user: '',
      rating: 5,
      comment: '',
    });
  };

  // Standard information for delivery and shipping cost
  const standardDeliveryInfo = "We offer free delivery across the country within 3-5 business days.";
  const standardShippingCost = "Shipping cost is 50$ for orders up to 50$ and free for orders over 50$.";

  // Объединяем основное изображение с дополнительными для отображения всех миниатюр
  const allImages = additionalImages || [];

  return (
    <div className="min-h-screen p-6">
      <ToastContainer />
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Раздел с изображениями продукта */}
        <div className="flex-1">
    <div className="flex flex-col lg:flex-row">
        {/* Миниатюры изображений */}
        {allImages.length > 0 && (
            <div className="flex flex-row lg:flex-col lg:mr-4 mb-4 lg:mb-0">
                {allImages.map((img, index) => (
                    <div
                        key={index}
                        className={`relative w-10 h-10 lg:w-12 lg:h-12 mr-2 lg:mr-0 lg:mb-2 cursor-pointer rounded-md overflow-hidden ${
                            currentImage === img ? 'border-2 border-zinc-500' : 'border border-transparent'
                        }`}
                        onClick={() => setCurrentImage(img)}
                    >
                        <Image
                            src={img}
                            alt={`${name} ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                        />
                    </div>
                ))}
            </div>
        )}

        {/* Основное изображение */}
        <div className="relative w-full h-[30rem] lg:h-[700px] md:h-[57rem]">
            <Image
                src={currentImage}
                alt={name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
                priority
            />
        </div>
    </div>
</div>

        {/* Раздел с информацией о продукте */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <p className="text-2xl mb-4">{formattedPrice}</p>

          {/* Оригинальная цена, если есть скидка */}
          {discount > 0 && (
            <p className="text-lg line-through text-gray-500 mb-6">
              {formattedOriginalPrice}
            </p>
          )}

          {/* Селектор количества и кнопка "Добавить в корзину" */}
          <div className="space-y-4 mb-6">
            <QuantitySelector
              quantity={quantity}
              setQuantity={setQuantity}
              maxQuantity={availability}
            />
            
            <motion.button
              onClick={handleAddToCart}
              className="w-full bg-zinc-600 text-white py-3 px-6 rounded-xl text-center transition-colors duration-300 hover:bg-zinc-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Add to Cart
            </motion.button>
          </div>

          {/* Дополнительная информация */}
          <div className="space-y-4">
            {/* Описание */}
            <DropdownSection
              title="Description"
              isOpen={isDescriptionOpen}
              onToggle={() => setIsDescriptionOpen(prev => !prev)}
            >
              <p>{description}</p>
            </DropdownSection>

            {/* Форма добавления отзыва */}
            <DropdownSection
              title="Add a Review"
              isOpen={isReviewOpen}
              onToggle={() => setIsReviewOpen(prev => !prev)}
            >
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <label htmlFor="user" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="user"
                    name="user"
                    value={review.user}
                    onChange={handleReviewChange}
                    required
                    className="mt-1 w-full px-3 py-2 bg-zinc-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-turquoise"
                  />
                </div>
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium">
                    Rating
                  </label>
                  <select
                    id="rating"
                    name="rating"
                    value={review.rating}
                    onChange={handleReviewChange}
                    required
                    className="mt-1 w-full border bg-zinc-700 border-gray-600 focus:ring-turquoise rounded px-3 py-2"
                  >
                    {[5, 4, 3, 2, 1].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium">
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={review.comment}
                    onChange={handleReviewChange}
                    required
                    className="mt-1 w-full border border-gray-600 bg-zinc-700 rounded px-3 py-2"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-zinc-600 hover:bg-zinc-500 text-white font-semibold py-2 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-400 transition-colors duration-200"
                >
                  Submit Review
                </button>
              </form>
            </DropdownSection>

            {/* Информация о доставке */}
            <DropdownSection
              title="Delivery Information"
              isOpen={isDeliveryInfoOpen}
              onToggle={() => setIsDeliveryInfoOpen(prev => !prev)}
            >
              <p>{standardDeliveryInfo}</p>
            </DropdownSection>

            {/* Стоимость доставки */}
            <DropdownSection
              title="Shipping Cost"
              isOpen={isShippingCostOpen}
              onToggle={() => setIsShippingCostOpen(prev => !prev)}
            >
              <p>{standardShippingCost}</p>
            </DropdownSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;