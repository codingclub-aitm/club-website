import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '../contexts/DarkModeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const { isDarkMode } = useDarkMode();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Add background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/events', label: 'Events' },
    { path: '/projects', label: 'Projects' },
    { path: '/team', label: 'Team' },
    { path: '/join', label: 'Join Us' },
    { path: '/contact', label: 'Contact' },
  ];

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'py-3' : 'py-5'
  } ${
    isScrolled || isOpen
      ? 'bg-primary/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-white hover:text-accent transition-colors"
        >
          <Code2 size={32} className="text-accent" />
          <span className="font-bold text-xl">AITM Coding Club</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-base font-medium transition-colors ${
                  isActive
                    ? 'text-accent'
                    : 'text-white hover:text-accent/80'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          {/* <ThemeToggle /> */}
        </div>

        {/* Mobile Menu Button */}
        {/* <div className="flex items-center space-x-3 md:hidden"> */}
        <div className="flex items-center md:hidden">

          {/* <ThemeToggle /> */}
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            className="text-white hover:text-accent transition-colors p-1"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary/95 dark:bg-gray-900/95 backdrop-blur-md"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg py-2 font-medium transition-colors ${
                      isActive
                        ? 'text-accent'
                        : 'text-white hover:text-accent/80'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;