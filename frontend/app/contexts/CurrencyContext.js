// contexts/CurrencyContext.js
'use client';

import { createContext, useState } from 'react';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('EUR');

  // Exchange rates relative to EUR
  const exchangeRates = {
    EUR: 1,
    USD: 1.1,
    RUB: 106,
    UAH: 45,
  };

  const value = {
    currency,
    setCurrency,
    exchangeRates,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};
