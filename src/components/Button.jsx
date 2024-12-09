import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ text, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md"
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default Button;
