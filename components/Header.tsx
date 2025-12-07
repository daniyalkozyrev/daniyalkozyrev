import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

// PASTE YOUR LOGO URL HERE
const LOGO_URL = "https://i.pinimg.com/736x/34/a5/21/34a5213441c0b26856ec54c553ceb176.jpg";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80; // Height of sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={(e) => handleScroll(e as any, '#hero')}>
            <div className="h-12 w-12 rounded-full flex items-center justify-center overflow-hidden shrink-0 border border-gray-200">
               {/* Simulating logo.png - Academic Icon */}
               <img src={LOGO_URL} alt="Fizmat Logo" className="w-8 h-8 object-contain"/>
            </div>
            <div className="flex flex-col">
              <span className="text-fizmat-blue font-bold text-sm md:text-base leading-tight">
                National School of <br/> Physics & Math
              </span>
              <span className="text-gray-500 text-xs mt-0.5">
                Fizmat · 7-сыныпқа арналған сайт
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-gray-700 hover:text-fizmat-red font-medium text-sm transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-fizmat-red p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-fizmat-red hover:bg-gray-50"
                onClick={(e) => handleScroll(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;