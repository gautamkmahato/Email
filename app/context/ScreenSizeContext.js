'use client'

import React, { createContext, useContext, useState } from 'react';

// 1. Create a context for theme
const ScreenContext = createContext();

// 2. Create a custom provider for the context
export const ScreenProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState('desktop'); // Default theme

  return (
    <ScreenContext.Provider value={{ screenSize, setScreenSize }}>
      {children}
    </ScreenContext.Provider>
  );
};

// 3. Custom hook to use theme context
export const useScreen = () => {
  return useContext(ScreenContext);
};
