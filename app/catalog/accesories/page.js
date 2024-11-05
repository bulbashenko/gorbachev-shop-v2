"use client";

import React from 'react';
import CategoryPage from '../../components/CategoryPage';

const ExtraPage = () => {
  return (
    <CategoryPage 
      category="extra" 
      title="Accessories" 
      itemsPerPage={10} // Настройте при необходимости
    />
  );
};

export default ExtraPage;
