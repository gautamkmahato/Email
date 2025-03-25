// Button.jsx

import React from 'react';

const Button = ({ label, onClick, style = "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" }) => {
  return (
    <button
      onClick={onClick}
      className={`${style} transition duration-300 ease-in-out transform hover:scale-105`}
    >
      {label}
    </button>
  );
};

export default Button;
