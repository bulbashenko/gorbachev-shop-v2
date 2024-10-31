// contexts/CartContext.js
'use client';

import React, { createContext, useReducer, useEffect } from 'react';

// Create context
export const CartContext = createContext();

// Initial state of the cart
const initialState = {
  cartItems: [],
};

// Reducer to manage cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.slug === action.payload.slug
      );

      if (existingItemIndex >= 0) {
        // If item is already in cart, increase quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        return { ...state, cartItems: updatedCartItems };
      } else {
        // If item is not in cart, add it with quantity 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.slug !== action.payload),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };

    case 'UPDATE_QUANTITY':
      const itemIndex = state.cartItems.findIndex(
        (item) => item.slug === action.payload.slug
      );
      if (itemIndex >= 0) {
        const updatedItems = [...state.cartItems];
        updatedItems[itemIndex].quantity = action.payload.quantity;
        return { ...state, cartItems: updatedItems };
      }
      return state;

    default:
      return state;
  }
};

// Context provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, (initial) => {
    if (typeof window !== 'undefined') {
      try {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
          const parsedCart = JSON.parse(storedCart);
          // Check if parsedCart has a cartItems property and if it's an array
          if (
            parsedCart &&
            typeof parsedCart === 'object' &&
            Array.isArray(parsedCart.cartItems)
          ) {
            return parsedCart;
          }
        }
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
      }
    }
    return initial;
  });

  // Save cart state in localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('cart', JSON.stringify(state));
      } catch (error) {
        console.error('Error saving cart to localStorage:', error);
      }
    }
  }, [state]);

  // Functions to manage the cart
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (slug) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: slug });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const updateQuantity = (slug, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { slug, quantity } });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
