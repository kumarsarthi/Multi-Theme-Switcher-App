import React from 'react';
import { Sparkles, TrendingUp, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useApi } from '../hooks/useApi';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const { currentTheme } = useTheme();
  const { data: products, loading, error } = useApi('https://fakestoreapi.com/products?limit=8');

  const getHeadingClasses = () => {
    switch (currentTheme) {
      case 'theme2':
        return 'text-4xl lg:text-6xl font-bold text-white mb-6 font-serif';
      case 'theme3':
        return 'text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 font-["Pacifico"]';
      default:
        return 'text-4xl lg:text-6xl font-bold text-gray-900 mb-6';
    }
  };

  const getButtonClasses = () => {
    switch (currentTheme) {
      case 'theme2':
        return 'bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2';
      case 'theme3':
        return 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2';
    }
  };

  const getGridClasses = () => {
    switch (currentTheme) {
      case 'theme3':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
      default:
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
    }
  };

  if (loading) {
    return (
      <div className="py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg">Loading amazing products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12">
        <div className="text-center">
          <p className="text-red-600 text-lg">Error loading products: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <h1 className={getHeadingClasses()}>
          Welcome to ThemeCraft
        </h1>
        
        <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
          currentTheme === 'theme2' ? 'text-gray-300' : 
          currentTheme === 'theme3' ? 'text-gray-700 font-medium' : 
          'text-gray-600'
        }`}>
          Experience the power of dynamic theming with our innovative multi-theme switcher. 
          Transform your browsing experience with just one click and discover how design 
          can completely change the way you interact with content.
        </p>

        <button className={getButtonClasses()}>
          <Sparkles className="h-5 w-5" />
          <span>Explore Themes</span>
        </button>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: TrendingUp, title: '3 Unique Themes', desc: 'Each with distinct personality' },
          { icon: Users, title: 'User-Friendly', desc: 'Seamless theme switching' },
          { icon: Sparkles, title: 'Modern Design', desc: 'Beautiful and responsive' },
        ].map((stat, index) => (
          <div key={index} className={`text-center p-6 rounded-lg ${
            currentTheme === 'theme2' ? 'bg-gray-800' :
            currentTheme === 'theme3' ? 'bg-white/80 backdrop-blur-sm' :
            'bg-white shadow-sm'
          }`}>
            <stat.icon className={`h-12 w-12 mx-auto mb-4 ${
              currentTheme === 'theme3' ? 'text-purple-600' : 'text-blue-600'
            }`} />
            <h3 className={`text-xl font-semibold mb-2 ${
              currentTheme === 'theme3' ? 'font-["Pacifico"]' : ''
            }`}>
              {stat.title}
            </h3>
            <p className={currentTheme === 'theme2' ? 'text-gray-300' : 'text-gray-600'}>
              {stat.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Products Section */}
      <section className="space-y-8">
        <h2 className={`text-3xl font-bold text-center ${
          currentTheme === 'theme2' ? 'text-white font-serif' :
          currentTheme === 'theme3' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-["Pacifico"]' :
          'text-gray-900'
        }`}>
          Featured Products
        </h2>
        
        <div className={getGridClasses()}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;