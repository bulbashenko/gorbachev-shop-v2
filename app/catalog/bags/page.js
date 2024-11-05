"use client";

import React, { useState, useEffect } from 'react';
import products from '../../utils/productsData';
import ItemCard from '../../components/ItemCard';
import useMediaQuery from '../../hooks/useMediaQuery';

const ITEMS_PER_PAGE = 10; // Showing 10 items per page (5 per row * 2 rows)

const BagsPage = () => {
  const bags = products.filter(product => product.category === 'bags');
  const totalPages = Math.ceil(bags.length / ITEMS_PER_PAGE);

  const isMobile = useMediaQuery('(max-width: 768px)'); // Define mobile breakpoint
  
  const [currentPage, setCurrentPage] = useState(0);

  // Reset to first page when switching between mobile and desktop
  useEffect(() => {
    setCurrentPage(0);
  }, [isMobile]);

  const startIdx = currentPage * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const currentBags = bags.slice(startIdx, endIdx);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Bags</h1>
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-10">
          {isMobile
            ? bags.map((product) => (
                <div key={product.slug}>
                  <ItemCard product={product} />
                </div>
              ))
            : currentBags.map((product) => (
                <div key={product.slug}>
                  <ItemCard product={product} />
                </div>
              ))}
        </div>

        {/* Pagination Controls */}
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

export default BagsPage;
