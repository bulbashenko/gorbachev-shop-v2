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
  return (
    <motion.div
      className=""
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10">
          {products.map((product) => (
            <ItemCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
