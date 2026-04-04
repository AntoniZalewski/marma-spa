import React, { useState } from 'react';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';
import { AyurvedaModal } from '../organisms/AyurvedaModal';

interface MainLayoutProps {
  children: React.ReactNode;
  view: 'home' | 'about';
  setView: (view: 'home' | 'about') => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, view, setView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAyurvedaModalOpen, setIsAyurvedaModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-spa-bg selection:bg-spa-terracotta selection:text-spa-bg">
      <Navbar 
        view={view} 
        setView={setView} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
        onOpenAyurvedaModal={() => setIsAyurvedaModalOpen(true)}
      />
      {children}
      <Footer />
      
      <AyurvedaModal 
        isOpen={isAyurvedaModalOpen} 
        onClose={() => setIsAyurvedaModalOpen(false)} 
      />
    </div>
  );
};
