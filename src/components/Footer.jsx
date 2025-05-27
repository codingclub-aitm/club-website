import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Linkedin, Instagram, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../contexts/DarkModeContext';

const Footer = () => {
  const { isDarkMode } = useDarkMode();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary dark:bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Code2 size={32} className="text-accent" />
              <span className="font-bold text-xl">AITM Coding Club</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              A vibrant coding community at AITM that empowers students to become innovators through technology.
            </p>
            <div className="flex space-x-4 mt-4">
              <motion.a
                href="https://github.com/AITM-Coding-Club"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/aitm-coding-club"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://instagram.com/aitm_coding_club"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="mailto:aitmcodingclub@example.com"
                className="text-gray-300 hover:text-accent transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-accent transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-accent transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-gray-300 hover:text-accent transition-colors">
                  Join Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-accent">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-accent mt-0.5 flex-shrink-0" size={18} />
                <p className="text-gray-300">
                  AITM Campus, Anjumanabad, Bhatkal 581320, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-accent flex-shrink-0" size={18} />
                <a 
                  href="mailto:aitmcodingclub@example.com" 
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  aitmcodingclub@example.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} AITM Coding Club. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;