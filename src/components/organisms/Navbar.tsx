import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Facebook, Menu, X, Mail } from 'lucide-react';
import { NAV_LINKS } from '../../data';
import noweLogoUrl from '../../assets/icons/NoweLogo.svg';

interface NavbarProps {
  view: 'home' | 'about';
  setView: (view: 'home' | 'about') => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  onOpenAyurvedaModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ view, setView, isMobileMenuOpen, setIsMobileMenuOpen, onOpenAyurvedaModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof NAV_LINKS[0]) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Otwarcie okienka pop-up zamiast scrollowania
    if (link.href === '#filozofia' && onOpenAyurvedaModal) {
      onOpenAyurvedaModal();
      return;
    }

    if (link.view === 'about') {
      // Switch to about page and smoothly go to top
      setView('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (view === 'about') {
        // Switch back to home first, then scroll after the page renders
        setView('home');
        setTimeout(() => scrollToSection(link.href), 350);
      } else {
        // Already on home – just scroll
        scrollToSection(link.href);
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-spa-secondary/95 backdrop-blur-md py-4 shadow-sm'
          : 'bg-transparent py-8'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center w-full">
          {/* Left section */}
          <div className="flex-1 flex justify-start items-center">
            <div className={`hidden md:flex items-center gap-4 xl:gap-6 whitespace-nowrap text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${isScrolled ? 'text-spa-ink/80' : 'text-spa-bg'}`}>
              {NAV_LINKS.slice(0, 3).map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link)}
                  className={`hover:opacity-70 transition-all ${view === link.view && link.view === 'about' ? 'border-b pb-1' : ''}`}
                >
                  {link.name.split('\n').map((line, idx) => (
                    <span key={idx} className="block leading-tight text-center">
                      {line}
                    </span>
                  ))}
                </a>
              ))}
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0 flex justify-center items-center z-20 h-20 md:h-[110px] w-[120px] md:w-[280px] lg:w-[400px] relative">
            <button
              onClick={() => {
                setView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-transform duration-300 focus:outline-none"
            >
              <motion.div
                animate={{ scale: isScrolled || view === 'about' ? 0.36 : 1, y: isScrolled || view === 'about' ? 0 : 75 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="origin-center flex items-center justify-center mt-4 md:mt-2"
              >
                <img 
                  src={noweLogoUrl}
                  alt="Marma Spa Logo"
                  className={`w-[220px] md:w-[300px] h-auto max-w-none ${isScrolled ? 'drop-shadow-sm' : 'brightness-0 invert drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]'}`}
                />
              </motion.div>
            </button>
          </div>

          {/* Right section */}
          <div className="flex-1 flex justify-end items-center">
            <div className={`hidden md:flex items-center gap-4 xl:gap-6 whitespace-nowrap text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${isScrolled ? 'text-spa-ink/80' : 'text-spa-bg'}`}>
              {NAV_LINKS.slice(3).map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link)}
                  className="hover:opacity-70 transition-all"
                >
                  {link.name.split('\n').map((line, idx) => (
                    <span key={idx} className="block leading-tight text-right">
                      {line}
                    </span>
                  ))}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`md:hidden p-2 transition-colors duration-500 ${isScrolled ? 'text-spa-ink hover:text-spa-terracotta' : 'text-spa-bg hover:opacity-70'}`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-spa-bg flex flex-col items-center justify-center p-8"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 p-3 bg-spa-secondary/50 rounded-full text-spa-ink hover:brightness-90 transition-all"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center gap-6 text-center mt-4 border-b border-spa-secondary/20 pb-8 w-full max-w-sm">
              <div className="py-4 opacity-90">
                <img src={noweLogoUrl} alt="Marma Spa Logo" className="h-32 md:h-40 w-auto" />
              </div>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={(e) => handleNavLinkClick(e, link)}
                  className="text-2xl font-serif text-spa-ink hover:text-spa-terracotta hover:brightness-90 transition-all"
                >
                  {link.name.split('\n').map((line, idx) => (
                    <span key={idx} className="block leading-tight md:text-center">
                      {line}
                    </span>
                  ))}
                </motion.a>
              ))}
              {/* Ikonki social media w menu mobilnym usunięte */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
