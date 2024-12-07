// app/page.js
'use client';

import ItemCard from './components/ItemCard'; // Проверьте путь
import products from './utils/productsData'; // Проверьте путь
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export default function Home() {
  // Разделяем товары на товары со скидкой и доступные товары
  const discountedProducts = products.filter((product) => product.discount);
  const availableProducts = products.filter(
    (product) => product.available && !product.discount
  );

  return (
    <motion.div
      className=""
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 py-8">
        {/* Новостной баннер */}
        <div className="news-banners">
          <div
            className="news-banner relative h-64 md:h-96 bg-cover bg-center rounded-lg mb-8 flex items-center justify-center"
            style={{ backgroundImage: "url('/images/banner1.jpg')" }}
          >
            {/* Темное затемнение */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

            <h2 className="relative text-4xl font-bold text-white z-10">Soon... | This spring</h2>
          </div>
        </div>

        {/* Товары со скидкой */}
        {discountedProducts.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mb-4">Discounted</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10 mt-8">
              {discountedProducts.map((product) => (
                <ItemCard key={product.slug} product={product} />
              ))}
            </div>
          </>
        )}

        {/* Доступные товары */}
        {availableProducts.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mb-4 mt-12">Available items</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10 mt-8">
              {availableProducts.map((product) => (
                <ItemCard key={product.slug} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
