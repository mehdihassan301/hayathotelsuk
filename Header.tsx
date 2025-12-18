
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  // Use any to bypass Framer Motion type mismatch in this environment
  const MotionDiv = motion.div as any;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-500 rounded-sm flex items-center justify-center text-white font-serif font-bold text-xl">
            H
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-serif font-bold tracking-tight ${isScrolled || isMobileMenuOpen ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
              HAYATT
            </span>
            <span className={`text-xs uppercase tracking-widest ${isScrolled || isMobileMenuOpen ? 'text-gray-600 dark:text-gray-400' : 'text-gray-200'}`}>
              Sukkur
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors relative group ${
                isScrolled 
                  ? (isActive(link.path) ? 'text-brand-500' : 'text-gray-800 dark:text-gray-200 hover:text-brand-500') 
                  : (isActive(link.path) ? 'text-white font-bold' : 'text-white/90 hover:text-white')
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-500 transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
          
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isScrolled 
                ? 'bg-gray-100 dark:bg-dark-800 text-gray-800 dark:text-gray-200' 
                : 'bg-white/20 text-white backdrop-blur-sm'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            to="/contact"
            className="px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold uppercase tracking-wide rounded-sm transition-all shadow-md hover:shadow-lg"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
           <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isScrolled || isMobileMenuOpen
                ? 'bg-gray-100 dark:bg-dark-800 text-gray-800 dark:text-gray-200' 
                : 'bg-white/20 text-white backdrop-blur-sm'
            }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-1 ${isScrolled || isMobileMenuOpen ? 'text-gray-900 dark:text-white' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark-900 border-t border-gray-100 dark:border-dark-700 overflow-hidden shadow-xl"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-medium py-2 border-b border-gray-100 dark:border-dark-800 ${
                    isActive(link.path) 
                    ? 'text-brand-500' 
                    : 'text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 w-full py-3 bg-brand-500 text-white text-center font-bold uppercase rounded-sm"
              >
                Book Your Stay
              </Link>
            </nav>
          </MotionDiv>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
