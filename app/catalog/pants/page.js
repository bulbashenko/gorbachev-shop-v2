"use client";

import React from 'react';
import CategoryPage from '../../components/CategoryPage';

const PantsPage = () => {
  return (
    <CategoryPage 
      category="pants" 
      title="Pants" 
      itemsPerPage={10} // Настройте при необходимости
    />
  );
};

export default PantsPage;
