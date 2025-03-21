// layout/Layout.js

import { Columns2, Columns3, Columns4, Square } from 'lucide-react';  // Import the icons

export default [
  {
    name: '1 column',
    type: 'column-1',
    numberOfColumn: 1,
    icon: Square, // Use the 'Search' icon from lucide-react
  },
  {
    name: '2 column',
    type: 'column-2',
    numberOfColumn: 2,
    icon: Columns2, // Use the 'Menu' icon from lucide-react
  },
  {
    name: '3 column',
    type: 'column-3',
    numberOfColumn: 3,
    icon: Columns3, // Use the 'Bell' icon from lucide-react
  },
  {
    name: '4 column',
    type: 'column-4',
    numberOfColumn: 4,
    icon: Columns4, // Another placeholder for the 'Search' icon
  }
];
