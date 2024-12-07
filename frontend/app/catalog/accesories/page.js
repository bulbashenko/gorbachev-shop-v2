"use client";

import React from 'react';
import CategoryPage from '../../components/CategoryPage';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const ExtraPage = () => {
  return (
    <motion.div
      className=""
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
    <CategoryPage 
      category="extra" 
      title="Accessories" 
      itemsPerPage={10} // Настройте при необходимости
    />
    </motion.div>
  );
};

export default ExtraPage;
