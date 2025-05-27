import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../contexts/DarkModeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="rounded-full p-1 text-white hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
    >
      {isDarkMode ? (
        <Sun size={20} className="text-accent" />
      ) : (
        <Moon size={20} />
      )}
    </motion.button>
  );
};

export default ThemeToggle;