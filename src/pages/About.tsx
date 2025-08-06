import React from 'react';
import { Palette, Code, Heart, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { currentTheme } = useTheme();

  const getHeadingClasses = () => {
    switch (currentTheme) {
      case 'theme2':
        return 'text-4xl font-bold text-white mb-6 font-serif';
      case 'theme3':
        return 'text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 font-["Pacifico"]';
      default:
        return 'text-4xl font-bold text-gray-900 mb-6';
    }
  };

  const getCardClasses = () => {
    switch (currentTheme) {
      case 'theme2':
        return 'bg-gray-800 border-gray-700 text-white';
      case 'theme3':
        return 'bg-white/90 backdrop-blur-sm border-pink-200 shadow-lg';
      default:
        return 'bg-white border-gray-200 shadow-sm';
    }
  };

  return (
    <div className="py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className={getHeadingClasses()}>
          About ThemeCraft
        </h1>
        
        <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
          currentTheme === 'theme2' ? 'text-gray-300' : 
          currentTheme === 'theme3' ? 'text-gray-700 font-medium' : 
          'text-gray-600'
        }`}>
          ThemeCraft is more than just a theme switcher—it's a demonstration of how thoughtful 
          design can transform user experience. Built with React, TypeScript, and modern web 
          technologies, this application showcases the power of dynamic theming and responsive design.
        </p>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            icon: Palette,
            title: 'Dynamic Theming',
            description: 'Switch between three completely different design systems with persistent preferences.'
          },
          {
            icon: Code,
            title: 'Modern Technology',
            description: 'Built with React 18, TypeScript, Tailwind CSS, and React Router for optimal performance.'
          },
          {
            icon: Heart,
            title: 'User-Centered Design',
            description: 'Each theme is carefully crafted to provide a unique and delightful user experience.'
          },
          {
            icon: Zap,
            title: 'Performance Optimized',
            description: 'Fast loading times, smooth animations, and responsive design across all devices.'
          }
        ].map((feature, index) => (
          <div key={index} className={`p-8 rounded-lg border transition-all duration-300 ${getCardClasses()}`}>
            <feature.icon className={`h-12 w-12 mb-6 ${
              currentTheme === 'theme3' ? 'text-purple-600' :
              currentTheme === 'theme2' ? 'text-blue-400' :
              'text-blue-600'
            }`} />
            <h3 className={`text-2xl font-semibold mb-4 ${
              currentTheme === 'theme3' ? 'font-["Pacifico"]' :
              currentTheme === 'theme2' ? 'font-serif' :
              ''
            }`}>
              {feature.title}
            </h3>
            <p className={`leading-relaxed ${
              currentTheme === 'theme2' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      {/* Theme Showcase */}
      <section className="space-y-8">
        <h2 className={`text-3xl font-bold text-center ${
          currentTheme === 'theme2' ? 'text-white font-serif' :
          currentTheme === 'theme3' ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-["Pacifico"]' :
          'text-gray-900'
        }`}>
          Three Unique Experiences
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              name: 'Minimalist Light',
              description: 'Clean, modern design with a focus on readability and simplicity.',
              features: ['Light color palette', 'Sans-serif typography', 'Spacious layouts', 'Subtle shadows']
            },
            {
              name: 'Professional Dark',
              description: 'Sophisticated dark mode with sidebar navigation and elegant serif fonts.',
              features: ['Dark color scheme', 'Serif typography', 'Sidebar navigation', 'Professional feel']
            },
            {
              name: 'Colorful Creative',
              description: 'Vibrant and playful design with gradient backgrounds and creative typography.',
              features: ['Gradient backgrounds', 'Pacifico font', 'Card-based layout', 'Colorful accents']
            }
          ].map((theme, index) => (
            <div key={index} className={`p-6 rounded-lg border transition-all duration-300 ${getCardClasses()}`}>
              <h3 className={`text-xl font-semibold mb-3 ${
                currentTheme === 'theme3' ? 'font-["Pacifico"]' :
                currentTheme === 'theme2' ? 'font-serif' :
                ''
              }`}>
                {theme.name}
              </h3>
              <p className={`mb-4 ${
                currentTheme === 'theme2' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {theme.description}
              </p>
              <ul className="space-y-2">
                {theme.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={`flex items-center space-x-2 text-sm ${
                    currentTheme === 'theme2' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      currentTheme === 'theme3' ? 'bg-purple-500' :
                      currentTheme === 'theme2' ? 'bg-blue-400' :
                      'bg-blue-500'
                    }`}></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;