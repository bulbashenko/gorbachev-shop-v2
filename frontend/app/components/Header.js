// components/Header.js
"use client";
import Link from 'next/link';
import links from '../utils/navigationLinks';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useContext } from 'react';
import {
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiMoreVertical,
  FiX,
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { CurrencyContext } from '../contexts/CurrencyContext';
import { CartContext } from '../contexts/CartContext'; // Import CartContext

export default function Header() {
  const { currency, setCurrency } = useContext(CurrencyContext);
  const { cartItems } = useContext(CartContext); // Access cartItems
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0); // Calculate total quantity
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const pathname = usePathname(); // Use usePathname to get the current path

  // Prevent scrolling of background when the side menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  // Animation variants for currency selection
  const currencyVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.2 },
    },
  };

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto py-4 px-6">
        {/* Header for mobile version */}
        <div className="flex items-center justify-between lg:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <FiMoreVertical className="w-6 h-6 text-teal-500" />
          </button>

          <div className="text-2xl font-bold">
            <Link href="/" className="cursor-pointer">
              gorbachev
            </Link>
          </div>

          <div className="flex items-center space-x-4 relative">
            <Link href="/cart" className="relative">
              <FiShoppingCart className="w-6 h-6" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Header for desktop version */}
        <div className="hidden lg:flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link href="/" className="cursor-pointer">
              gorbachev
            </Link>
          </div>

          <nav className="flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href ? 'text-teal-500' : 'text-white'
                } text-lg`}
              >
                {link.label}
              </Link>
            ))}
            {/* Information Link with Responsive Classes */}
            <Link
              href="/information"
              className={`${
                pathname === '/information' ? 'text-teal-500' : 'text-white'
              } text-lg block lg:hidden xl:block`}
            >
              Information
            </Link>
          </nav>

          <div className="flex items-center space-x-4 relative">
            {/* Currency selection */}
            <div
              className="relative"
              onMouseEnter={() => setIsCurrencyOpen(true)}
              onMouseLeave={() => setIsCurrencyOpen(false)}
            >
              <button
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="bg-black text-white p-1 rounded flex items-center"
              >
                {currency}
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isCurrencyOpen ? 'transform rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isCurrencyOpen && (
                  <motion.ul
                    className="mt-2 w-full bg-black rounded shadow-lg overflow-hidden absolute left-0 z-50"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={currencyVariants}
                  >
                    {['EUR', 'USD', 'RUB', 'UAH'].map((cur) => (
                      <li
                        key={cur}
                        onClick={() => {
                          setCurrency(cur);
                          setIsCurrencyOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-teal-700 cursor-pointer"
                      >
                        {cur}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Functional icons */}
            <Link href="/auth">
              <FiUser className="w-6 h-6" />
            </Link>
            <Link href="/favorites">
              <FiHeart className="w-6 h-6" />
            </Link>
            <Link href="/cart" className="relative">
              <FiShoppingCart className="w-6 h-6" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Dark overlay for hiding main content when menu is open */}
      <div
        className={`fixed inset-0 bg-black ${
          isMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        } transition-opacity duration-300`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Side menu for mobile version */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black p-6 transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          <FiX className="w-6 h-6" />
        </button>

        {/* Navigation links */}
        <nav className="mt-8 flex flex-col space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href ? 'text-teal-500' : 'text-white'
              } text-xl`}
            >
              {link.label}
            </Link>
          ))}
          {/* Information Link in Side Menu */}
          <Link
            href="/information"
            className={`${
              pathname === '/information' ? 'text-teal-500' : 'text-white'
            } text-xl`}
          >
            Information
          </Link>
        </nav>

        <div className="mt-8">
          <div className="mb-4">
            <label className="block mb-2 text-white">Currency</label>
            <div>
              <button
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="bg-black text-white p-2 rounded w-full flex items-center justify-between"
              >
                {currency}
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isCurrencyOpen ? 'transform rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {isCurrencyOpen && (
                  <motion.ul
                    className="mt-2 w-full bg-black rounded shadow-lg overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={currencyVariants}
                  >
                    {['EUR', 'USD', 'RUB', 'UAH'].map((cur) => (
                      <li
                        key={cur}
                        onClick={() => {
                          setCurrency(cur);
                          setIsCurrencyOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-teal-700 cursor-pointer"
                      >
                        {cur}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex space-x-4">
            <Link href="/auth">
              <FiUser className="w-6 h-6" />
            </Link>
            <Link href="/favorites">
              <FiHeart className="w-6 h-6" />
            </Link>
            <Link href="/cart" className="relative">
              <FiShoppingCart className="w-6 h-6" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
