import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Twitter, Linkedin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thanks for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

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

  const getInputClasses = () => {
    switch (currentTheme) {
      case 'theme2':
        return 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500';
      case 'theme3':
        return 'bg-white/80 border-pink-300 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500';
      default:
        return 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500';
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

  return (
    <div className="py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className={getHeadingClasses()}>
          Get In Touch
        </h1>
        
        <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
          currentTheme === 'theme2' ? 'text-gray-300' : 
          currentTheme === 'theme3' ? 'text-gray-700 font-medium' : 
          'text-gray-600'
        }`}>
          Have questions about ThemeCraft? Want to collaborate on a project? 
          We'd love to hear from you. Reach out and let's start a conversation.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section className={`p-8 rounded-lg border ${getCardClasses()}`}>
          <h2 className={`text-2xl font-semibold mb-6 ${
            currentTheme === 'theme3' ? 'font-["Pacifico"]' :
            currentTheme === 'theme2' ? 'font-serif' :
            ''
          }`}>
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                currentTheme === 'theme2' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 ${getInputClasses()}`}
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                currentTheme === 'theme2' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 ${getInputClasses()}`}
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                currentTheme === 'theme2' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 resize-vertical ${getInputClasses()}`}
                placeholder="Tell us about your project or ask any questions..."
              />
            </div>

            <button
              type="submit"
              className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${getButtonClasses()}`}
            >
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </button>
          </form>
        </section>

        {/* Contact Information */}
        <section className="space-y-8">
          <div className={`p-8 rounded-lg border ${getCardClasses()}`}>
            <h2 className={`text-2xl font-semibold mb-6 ${
              currentTheme === 'theme3' ? 'font-["Pacifico"]' :
              currentTheme === 'theme2' ? 'font-serif' :
              ''
            }`}>
              Contact Information
            </h2>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'hello@themecraft.com' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                { icon: MapPin, label: 'Location', value: 'San Francisco, CA' }
              ].map((contact, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <contact.icon className={`h-6 w-6 mt-1 ${
                    currentTheme === 'theme3' ? 'text-purple-600' :
                    currentTheme === 'theme2' ? 'text-blue-400' :
                    'text-blue-600'
                  }`} />
                  <div>
                    <p className={`font-medium ${
                      currentTheme === 'theme2' ? 'text-gray-300' : 'text-gray-900'
                    }`}>
                      {contact.label}
                    </p>
                    <p className={currentTheme === 'theme2' ? 'text-gray-400' : 'text-gray-600'}>
                      {contact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`p-8 rounded-lg border ${getCardClasses()}`}>
            <h3 className={`text-xl font-semibold mb-6 ${
              currentTheme === 'theme3' ? 'font-["Pacifico"]' :
              currentTheme === 'theme2' ? 'font-serif' :
              ''
            }`}>
              Follow Us
            </h3>

            <div className="flex space-x-4">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-3 rounded-lg transition-all duration-200 ${
                    currentTheme === 'theme2' ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' :
                    currentTheme === 'theme3' ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white' :
                    'bg-gray-100 hover:bg-gray-200 text-gray-600'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;