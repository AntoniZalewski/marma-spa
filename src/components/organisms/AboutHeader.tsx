import React from 'react';
import { ScrollReveal } from '../atoms/ScrollReveal';

import headerBg from '../../assets/images/IdeaMarma.webp';

export const AboutHeader: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden mb-32 xl:mb-48">
      {/* Tło obrazkowe full-bleed */}
      <div className="absolute inset-0 z-0">
        <img 
          src={headerBg} 
          alt="Idea Marma Spa" 
          className="w-full h-full object-cover object-center" 
        />
        {/* Overlay ujednolicający tło dla czytelności białego napisu */}
        <div className="absolute inset-0 bg-black/40 lg:bg-black/30" />
      </div>
      
      {/* Treść */}
      <div className="relative z-10 text-center px-6 w-full max-w-7xl mx-auto pt-40 md:pt-56">
        <ScrollReveal>
          <span className="text-white/80 font-bold tracking-[0.4em] uppercase text-xs mb-6 block drop-shadow-md">Filozofia</span>
          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-serif text-white mb-12 drop-shadow-lg">Idea Marma Spa</h1>
          <div className="w-24 h-px bg-white/50 mx-auto mb-12" />
          <p className="text-3xl md:text-5xl text-white/95 max-w-4xl mx-auto leading-relaxed font-quote drop-shadow-md">
            „Głównym celem ajurwedy jest osiągnięcie synchronizacji, tak aby żyć w harmonii z naturą i jej cyklami.”
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
