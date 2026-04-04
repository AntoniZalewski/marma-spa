import React, { useRef, useState, useEffect } from 'react';
import { ScrollReveal } from '../atoms/ScrollReveal';
import { SectionTitle } from '../atoms/SectionTitle';
import { RitualCard } from '../molecules/RitualCard';
import { RITUALS } from '../../data';

interface RitualsSectionProps {
  onRitualSelect: (ritual: typeof RITUALS[0]) => void;
}

export const RitualsSection: React.FC<RitualsSectionProps> = ({ onRitualSelect }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();
    let accumulatedScroll = 0;

    const autoScroll = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      if (!isPaused && scrollRef.current) {
        accumulatedScroll += deltaTime * 0.04; // Delikatna prędkość
        if (accumulatedScroll >= 1) {
          const pixelsToMove = Math.floor(accumulatedScroll);
          scrollRef.current.scrollLeft += pixelsToMove;
          accumulatedScroll -= pixelsToMove;

          // Magia nieskończonej pętli
          // Jeśli przekroczymy połowę pełnej szerokości scrolla (czyli przejedziemy cały pierwszy zestaw RITUALS), przeskakujemy niewidzialnie na początek.
          const maxScroll = scrollRef.current.scrollWidth / 2;
          if (scrollRef.current.scrollLeft >= maxScroll) {
            scrollRef.current.scrollLeft -= maxScroll;
          }
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section className="py-12 md:py-16 bg-spa-secondary/30 overflow-hidden" id="oferta">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <SectionTitle title="Nasze Rytuały" className="!mb-12 md:!mb-16" />
        </ScrollReveal>
      </div>

      <div className="relative w-full mt-8 group/slider">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-12 scrollbar-hide px-4 md:px-12 w-full cursor-grab active:cursor-grabbing"
          onMouseDown={() => setIsPaused(true)}
          onMouseUp={() => setTimeout(() => setIsPaused(false), 1500)}
          onMouseLeave={() => setTimeout(() => setIsPaused(false), 1500)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 1500)}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Renderujemy listę dwa razy, aby zapewnić materiał do zapętlania */}
          {[...RITUALS, ...RITUALS].map((ritual, index) => (
            <div key={`${ritual.id}-${index}`} className="w-[85vw] md:w-[400px] lg:w-[450px] shrink-0">
              <RitualCard 
                id={ritual.id}
                title={ritual.title}
                shortDesc={ritual.shortDesc}
                image={ritual.image}
                onClick={() => onRitualSelect(ritual)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
