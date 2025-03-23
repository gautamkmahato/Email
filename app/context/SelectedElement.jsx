'use client'

import React, { createContext, useContext, useState } from 'react';

// 1. Create a context for theme
const SelectedElementContext = createContext();

// 2. Create a custom provider for the context
export const SelectedElementProvider = ({ children }) => {
  const [selectedElement, setSelectedElement] = useState(); 

  return (
    <SelectedElementContext.Provider value={{ selectedElement, setSelectedElement }}>
      {children}
    </SelectedElementContext.Provider>
  );
};

// 3. Custom hook to use theme context
export const useSelectedElement = () => {
  return useContext(SelectedElementContext);
};
