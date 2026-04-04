import React, { useState } from 'react';
import { Clock, Hourglass, Shirt, Droplets } from 'lucide-react';
import { ScrollReveal } from '../atoms/ScrollReveal';
import { PricingRow } from '../molecules/PricingRow';
import { FeatureItem } from '../molecules/FeatureItem';
import { BookingModal } from './BookingModal';
import { PRICING } from '../../data';
import pricingBgUrl from '../../assets/images/backroundCennik.webp';

type PricingItem = typeof PRICING[0];

export const PricingSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PricingItem | null>(null);

  return (
    <>
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-spa-ink overflow-hidden" id="cennik">
        {/* Tło obrazowe */}
        <div className="absolute inset-0 z-0">
          <img
            src={pricingBgUrl}
            alt="Cennik tło"
            className="w-full h-full object-cover opacity-90 brightness-95"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-[#D1B394] text-center mb-16 drop-shadow-md">
              <h2 className="text-7xl md:text-8xl lg:text-[7.5rem] font-serif tracking-normal">Cennik</h2>
              <p className="text-sm tracking-[0.2em] uppercase mt-4 text-[#D1B394]/60 font-sans">Kliknij aby zarezerwować</p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {PRICING.map((item, index) => (
              <ScrollReveal key={item.name} delay={index * 0.05}>
                <PricingRow
                  name={item.name}
                  time={item.time}
                  price={item.price}
                  onClick={() => setSelectedItem(item)}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Oddzielna sekcja przygotowania na własnym tle (klasyczny kremowy) */}
      <section className="py-24 px-6 md:px-12 bg-spa-secondary/20 border-b border-spa-secondary/30" id="przygotowanie">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-spa-terracotta font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Praktyczne informacje</span>
              <h2 className="text-4xl md:text-5xl font-serif text-spa-ink">Jak się przygotować</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              <FeatureItem
                icon={Clock}
                title="Przed rozpoczęciem"
                desc="Bądź proszę 10/15 minut przed umówioną godziną masażu, aby wypełnić kartę i zapoznać się z ewentualnymi przeciwwskazaniami."
              />
              <FeatureItem
                icon={Hourglass}
                title="Czas trwania"
                desc="Czas masaży określony i opisany jest na stronie, ale warto wziąć pod uwagę, że może się on wydłużyć o parę minut."
              />
              <FeatureItem
                icon={Shirt}
                title="Ubiór podczas masażu"
                desc="Masaż Abhyanga to masaż całego ciała z wyłączeniem części intymnych. Pozostajemy w dolnej bieliźnie (majtkach)."
              />
              <FeatureItem
                icon={Droplets}
                title="Pielęgnacja"
                desc="Należy wziąć pod uwagę, że na włosach może pozostać olej. Nie dotyczy to masażu stemplami."
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Modal rezerwacji */}
      <BookingModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
};
