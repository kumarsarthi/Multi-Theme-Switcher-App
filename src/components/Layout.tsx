import React, { ReactNode } from 'react';
import Header from './Header';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { currentTheme } = useTheme();

  const getLayoutClasses = () => {
    switch (currentTheme) {
      case 'theme2':
        return 'bg-gray-900 text-white min-h-screen';
      case 'theme3':
        return 'bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 min-h-screen';
      default:
        return 'bg-gray-50 text-gray-900 min-h-screen';
    }
  };

  const getContentClasses = () => {
    switch (currentTheme) {
      case 'theme2':
        return 'flex';
      default:
        return '';
    }
  };

  const getSidebarClasses = () => {
    return 'w-64 bg-gray-800 min-h-screen pt-20 px-6 hidden lg:block';
  };

  const getMainClasses = () => {
    switch (currentTheme) {
      case 'theme2':
        return 'flex-1 pt-20 px-4 lg:px-8';
      default:
        return 'pt-20 px-4 lg:px-8 max-w-7xl mx-auto';
    }
  };

  return (
    <div className={`transition-all duration-300 ${getLayoutClasses()}`}>
      <Header />
      <div className={getContentClasses()}>
        {currentTheme === 'theme2' && (
          <aside className={getSidebarClasses()}>
            <nav className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-200 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Dashboard</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Analytics</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Reports</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Settings</a>
              </div>
            </nav>
          </aside>
        )}
        <main className={getMainClasses()}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;