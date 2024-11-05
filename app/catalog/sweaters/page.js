"use client";

import React from 'react';
import CategoryPage from '../../components/CategoryPage';

const SweatersPage = () => {
  return (
    <CategoryPage 
      category="sweaters" 
      title="Sweaters" 
      itemsPerPage={10} // Настройте при необходимости
    />
  );
};

export default SweatersPage;
