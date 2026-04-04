import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Pause } from 'lucide-react';
import { ScrollReveal } from '../atoms/ScrollReveal';
const heroVideoUrl = '/video/NewHeroVideo.mp4';

export const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleOdkryjClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('oferta');
    if (el) {
      const navbarHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-spa-ink">
        <video 
          ref={videoRef}
          src={heroVideoUrl}
          autoPlay 
          muted 
          loop
          playsInline 
          className="w-full h-full object-cover opacity-80 pointer-events-none"
        />
        <div className="absolute inset-0 bg-spa-ink/30" />
      </div>

      <div className="relative z-10 px-6 w-full max-w-6xl mt-40 md:mt-56">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-[2.5rem] lg:text-5xl text-spa-bg/90 leading-relaxed mb-12 md:mb-16 font-quote font-normal drop-shadow-md text-left">
              „Masaż ajurwedyjski wykracza poza relaks... on odżywia tkanki, uspokaja układ nerwowy i przywraca równowagę zarówno na poziomie fizycznym, jak i energetycznym”.
            </h1>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="w-full flex justify-center mt-4">
            <motion.a
              href="#oferta"
              onClick={handleOdkryjClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-spa-terracotta text-spa-bg px-10 py-5 rounded-spa-xl font-medium tracking-widest uppercase shadow-2xl hover:brightness-90 transition-all"
            >
              Odkryj Rytuały
            </motion.a>
          </div>
        </ScrollReveal>
      </div>

      {/* Kontrolki wideo */}
      <button 
        onClick={togglePlay}
        className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-20 p-3 md:p-4 rounded-full border border-spa-bg/30 text-spa-bg/70 hover:bg-spa-bg/20 hover:text-spa-bg hover:scale-105 active:scale-95 transition-all backdrop-blur-sm shadow-lg overflow-hidden flex items-center justify-center"
        aria-label={isPlaying ? "Zatrzymaj wideo" : "Odtwórz wideo"}
      >
        {isPlaying ? <Pause size={20} className="md:w-6 md:h-6" strokeWidth={1.5} /> : <Play size={20} className="translate-x-[2px] md:w-6 md:h-6" strokeWidth={1.5} />}
      </button>
    </section>
  );
};
