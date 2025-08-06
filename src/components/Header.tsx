import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeType } from '../types';

const Header: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const location = useLocation();

  const themes: { value: ThemeType; label: string }[] = [
    { value: 'theme1', label: 'Minimalist Light' },
    { value: 'theme2', label: 'Professional Dark' },
    { value: 'theme3', label: 'Colorful Creative' },
  ];

  const getHeaderClasses = () => {
    switch (currentTheme) {
      case 'theme2':
        return 'bg-gray-900 text-white border-gray-700';
      case 'theme3':
        return 'bg-gradient-to-r from-purple-600 to-pink-600 text-white';
      default:
        return 'bg-white text-gray-900 border-gray-200 shadow-sm';
    }
  };

  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    const baseClasses = 'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200';
    
    switch (currentTheme) {
      case 'theme2':
        return `${baseClasses} ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`;
      case 'theme3':
        return `${baseClasses} ${isActive ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`;
      default:
        return `${baseClasses} ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`;
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${getHeaderClasses()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Palette className="h-8 w-8" />
            <span className={`text-xl font-bold ${currentTheme === 'theme3' ? 'font-["Pacifico"]' : ''}`}>
              ThemeCraft
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className={getLinkClasses('/')}>
              Home
            </Link>
            <Link to="/about" className={getLinkClasses('/about')}>
              About
            </Link>
            <Link to="/contact" className={getLinkClasses('/contact')}>
              Contact
            </Link>
          </nav>

          {/* Theme Switcher */}
          <div className="relative">
            <select
              value={currentTheme}
              onChange={(e) => setTheme(e.target.value as ThemeType)}
              className={`appearance-none px-4 py-2 pr-8 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer ${
                currentTheme === 'theme2'
                  ? 'bg-gray-800 text-white border-gray-600 hover:bg-gray-700'
                  : currentTheme === 'theme3'
                  ? 'bg-white/20 text-white border-white/30 hover:bg-white/30'
                  : 'bg-gray-50 text-gray-900 border-gray-300 hover:bg-gray-100'
              } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              {themes.map((theme) => (
                <option key={theme.value} value={theme.value} className="text-gray-900">
                  {theme.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200">
        <div className="px-4 py-3 space-y-1">
          <Link to="/" className={getLinkClasses('/')}>
            Home
          </Link>
          <Link to="/about" className={getLinkClasses('/about')}>
            About
          </Link>
          <Link to="/contact" className={getLinkClasses('/contact')}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;