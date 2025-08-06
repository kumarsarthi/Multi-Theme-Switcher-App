import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { currentTheme } = useTheme();

  const getCardClasses = () => {
    switch (currentTheme) {
      case 'theme2':
        return 'bg-gray-800 border-gray-700 hover:bg-gray-750 text-white';
      case 'theme3':
        return 'bg-white/90 backdrop-blur-sm border-pink-200 hover:shadow-xl hover:scale-105 transform transition-all duration-300';
      default:
        return 'bg-white border-gray-200 hover:shadow-lg';
    }
  };

  const getButtonClasses = () => {
    switch (currentTheme) {
      case 'theme2':
        return 'bg-blue-600 hover:bg-blue-700 text-white';
      case 'theme3':
        return 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white';
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className={`rounded-lg border p-6 transition-all duration-300 ${getCardClasses()}`}>
      <div className="aspect-square w-full mb-4 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
      
      <div className="space-y-3">
        <h3 className={`font-semibold ${currentTheme === 'theme3' ? 'font-["Pacifico"] text-lg' : 'text-lg'}`}>
          {truncateText(product.title, 50)}
        </h3>
        
        <p className={`text-sm ${currentTheme === 'theme2' ? 'text-gray-300' : 'text-gray-600'}`}>
          {truncateText(product.description, 100)}
        </p>
        
        <div className="flex items-center justify-between">
          <span className={`text-2xl font-bold ${currentTheme === 'theme3' ? 'text-purple-600' : currentTheme === 'theme2' ? 'text-blue-400' : 'text-blue-600'}`}>
            ${product.price}
          </span>
          
          <div className="flex items-center space-x-1">
            <Star className={`h-4 w-4 fill-current ${currentTheme === 'theme3' ? 'text-yellow-400' : 'text-yellow-500'}`} />
            <span className="text-sm font-medium">{product.rating.rate}</span>
            <span className={`text-sm ${currentTheme === 'theme2' ? 'text-gray-400' : 'text-gray-500'}`}>
              ({product.rating.count})
            </span>
          </div>
        </div>
        
        <button className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${getButtonClasses()}`}>
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;