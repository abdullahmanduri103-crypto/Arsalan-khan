import React, { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Discover', href: '#discover' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'AI Planner', href: '#planner' },
    { name: 'Visit', href: '#footer' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-manduri-900/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <Compass className={`w-8 h-8 transition-colors ${isScrolled ? 'text-gold-400' : 'text-white'}`} />
          <span className={`text-2xl font-cinzel font-bold tracking-widest transition-colors ${
            isScrolled ? 'text-white' : 'text-white'
          }`}>
            MANDURI
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-widest hover:text-gold-400 transition-colors uppercase ${
                isScrolled ? 'text-gray-200' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-gold-400 hover:bg-gold-500 text-manduri-950 px-6 py-2 rounded-sm font-semibold transition-all hover:scale-105">
            Book Stay
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-manduri-900 border-t border-manduri-700 py-4 flex flex-col items-center gap-4 shadow-xl">
           {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-200 hover:text-gold-400 text-sm uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
