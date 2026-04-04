import React, { useState } from 'react';
import { ScrollReveal } from '../atoms/ScrollReveal';
import { ElementCard } from '../molecules/ElementCard';
import { ElementModal } from './ElementModal';
import { ELEMENTS } from '../../data';

export const ElementsSection: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<typeof ELEMENTS[0] | null>(null);

  return (
    <section className="py-24 md:py-32 bg-spa-ink text-spa-bg" id="zywioly">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl text-center mb-20 font-serif">Pięć Żywiołów Twojego Relaksu</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {ELEMENTS.map((el, index) => (
            <ScrollReveal key={el.name} delay={index * 0.1}>
              <ElementCard 
                name={el.name}
                label={el.label}
                desc={el.desc}
                icon={el.icon}
                onClick={() => setSelectedElement(el)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ElementModal 
        selectedElement={selectedElement} 
        onClose={() => setSelectedElement(null)} 
      />
    </section>
  );
};
