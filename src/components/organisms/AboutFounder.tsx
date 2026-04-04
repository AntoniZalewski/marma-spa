import React from 'react';
import { ScrollReveal } from '../atoms/ScrollReveal';
import stoneBgUrl from '../../assets/images/stone-top-view.jpg';

interface AboutFounderProps {
  onScheduleClick: () => void;
}

export const AboutFounder: React.FC<AboutFounderProps> = ({ onScheduleClick }) => {
  return (
    <div className="bg-spa-bg rounded-[80px] p-8 md:p-20 grid md:grid-cols-2 gap-20 items-center shadow-sm border border-spa-ink/5">
      <ScrollReveal>
        <div className="relative">
          <img 
            src={stoneBgUrl} 
            alt="Masaż Tło Kamienie" 
            className="rounded-[60px] shadow-2xl w-full aspect-[4/5] object-cover mix-blend-multiply opacity-90"
          />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-spa-terracotta/10 rounded-full blur-3xl -z-10" />
        </div>
      </ScrollReveal>
      <div className="space-y-10">
        <ScrollReveal delay={0.2}>
          <span className="text-spa-terracotta font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">O mnie</span>
          <h2 className="text-4xl md:text-6xl font-serif">Poznajmy się</h2>
          <div className="space-y-6 text-lg text-spa-ink/70 leading-relaxed">
            <p>
              Stworzyłam to miejsce, ponieważ sama szukałam ukojenia, którego nie mogłam znaleźć w głośnym, szybkim świecie. Marma Spa to moja odpowiedź na potrzebę autentyczności.
            </p>
            <p>
              Każdy rytuał, który tu znajdziesz, jest przeze mnie sprawdzony i głęboko przemyślany. Nie oferuję cudownych maszyn, oferuję obecność, spokój i moją wiedzę o tym, jak przywrócić harmonię tam, gdzie wkradł się chaos.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <button 
            onClick={onScheduleClick}
            className="bg-spa-terracotta text-spa-bg px-12 py-6 rounded-spa-xl font-medium tracking-widest uppercase shadow-xl hover:scale-105 hover:brightness-90 transition-all"
          >
            Umów spotkanie
          </button>
        </ScrollReveal>
      </div>
    </div>
  );
};
