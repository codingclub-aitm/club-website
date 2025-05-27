import React from 'react';
import { motion } from 'framer-motion';

const CardComponent = ({ 
  children, 
  className = '', 
  hoverEffect = true, 
  ...props 
}) => {
  return (
    <motion.div
      className={`card p-6 ${className}`}
      whileHover={hoverEffect ? { 
        y: -5, 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      } : {}}
      transition={{ type: 'spring', stiffness: 300 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default CardComponent;