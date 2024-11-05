// /components/Footer.jsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";
import { SiVisa, SiMastercard, SiSamsungpay, SiApplepay } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Upper Section: Three Main Rounded Cards */}
        <motion.div
          className="flex flex-col md:flex-row justify-between gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Card 1: About Us */}
          <div className="bg-zinc-800 text-white p-6 rounded-xl shadow-lg flex-1">
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <Link href="/about" className="hover:underline">
              Learn More
            </Link>
          </div>

          {/* Card 2: Reviews */}
          <div className="bg-zinc-800 text-white p-6 rounded-xl shadow-lg flex-1">
            <h3 className="text-xl font-semibold mb-2">Reviews</h3>
            <Link href="/reviews" className="hover:underline">
              Read Reviews
            </Link>
          </div>

          {/* Card 3: Payment and Delivery */}
          <div className="bg-zinc-800 text-white p-6 rounded-xl shadow-lg flex-1">
            <h3 className="text-xl font-semibold mb-2">Payment and Delivery</h3>
            <Link href="/payment-delivery" className="hover:underline">
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Lower Section: Socials, Payment Systems, Useful Links */}
        <motion.div
          className="flex flex-col md:flex-row justify-between gap-6 mt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Useful Links */}
          <div className="md:order-1 md:w-1/4">
            <h3 className="text-xl font-semibold mb-2">Useful Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/payment-methods" className="hover:underline">
                Payment Methods
              </Link>
              <Link href="/return-policy" className="hover:underline">
                Return Policy
              </Link>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/gift-certificate" className="text-teal-500 hover:underline">
                Gift Certificate
              </Link>
            </div>
          </div>

          {/* Social Networks */}
          <div className="md:order-2">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube size={24} className="hover:text-red-600 transition-colors" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={24} className="hover:text-pink-500 transition-colors" />
              </Link>
              <Link
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <FaTelegramPlane size={24} className="hover:text-blue-400 transition-colors" />
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok size={24} className="hover:text-black transition-colors" />
              </Link>
            </div>
          </div>

          {/* Payment Systems */}
          <div className="md:order-3">
            <h3 className="text-xl font-semibold mb-2">Payment Methods</h3>
            <div className="flex space-x-4">
              <SiVisa size={32} className="hover:opacity-75 transition-opacity" />
              <SiMastercard size={32} className="hover:opacity-75 transition-opacity" />
              <SiSamsungpay size={32} className="hover:opacity-75 transition-opacity" />
              <SiApplepay size={32} className="hover:opacity-75 transition-opacity" />
              {/* Add other payment icons as needed */}
            </div>
          </div>
        </motion.div>

        {/* Company Information */}
        <motion.div
          className="mt-10 text-sm leading-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            <strong>gorbachev.shop</strong> | Chief Galactic Officer Gorbachev. Company UNP:
            <strong>123456789</strong>, registered on the moon. Date of registration certificate issuance:
            <strong>01.01.2020</strong> by the Lunar Executive Committee. Registered in the Interstellar
            Trade Register under number: <strong>987654321</strong> in New Moscow. Registration date: {" "}
            <strong>12.12.2024</strong>. Online store operating hours: <strong>24/7</strong>. Support available
            daily from <strong>00:00 to 24:00</strong>. Address: {" "}
            <strong>Milky Way Galaxy, Sector 7G, Luna Base, Astro Street, 42</strong>.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;