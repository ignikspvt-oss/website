import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-white/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 gradient-blue rounded-lg flex items-center justify-center group-hover:glow-blue transition-all duration-300">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
              Igniks
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 hover:scale-105 px-2 py-1 ${
                  location.pathname === link.path
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass-blue hover:glow-blue transition-all duration-300 z-50"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-blue-600" />
            ) : (
              <Menu className="w-5 h-5 text-blue-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            y: isOpen ? 0 : -20,
            height: isOpen ? 'auto' : 0
          }}
          className={`md:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 ${isOpen ? 'pb-4 shadow-lg' : ''}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 mx-2 ${
                location.pathname === link.path
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;