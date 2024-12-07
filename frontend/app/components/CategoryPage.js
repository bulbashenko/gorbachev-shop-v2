"use client";

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import products from '../utils/productsData';
import ItemCard from './ItemCard';
import useMediaQuery from '../hooks/useMediaQuery';

const CategoryPage = ({ category, title, itemsPerPage }) => {
  const pageProducts = products.filter(product => product.category === category);
  const totalPages = Math.ceil(pageProducts.length / itemsPerPage);

  const isMobile = useMediaQuery('(max-width: 768px)'); // Определяем брейкпоинт для мобильных устройств

  const [currentPage, setCurrentPage] = useState(0);

  // Сбрасываем на первую страницу при переключении между мобильным и десктопным видами
  useEffect(() => {
    setCurrentPage(0);
  }, [isMobile]);

  const startIdx = currentPage * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const currentPageProducts = isMobile ? pageProducts : pageProducts.slice(startIdx, endIdx);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">{title}</h1>
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10">
          {currentPageProducts.map((product) => (
            <div key={product.slug}>
              <ItemCard product={product} />
            </div>
          ))}
        </div>

        {/* Пагинационные Контролы */}
        {!isMobile && (
          <div className="flex justify-between items-center mt-5">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="px-4 py-2 bg-zinc-700 rounded hover:bg-zinc-600 disabled:opacity-50"
            >
              &larr; Previous
            </button>
            <span>Page {currentPage + 1} of {totalPages}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className="px-4 py-2 bg-zinc-700 rounded hover:bg-zinc-600 disabled:opacity-50"
            >
              Next &rarr;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

CategoryPage.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  itemsPerPage: PropTypes.number,
};

CategoryPage.defaultProps = {
  itemsPerPage: 10,
};

export default CategoryPage;
