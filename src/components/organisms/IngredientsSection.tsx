import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Droplet, Leaf, Wind, Sparkles } from 'lucide-react';
import { ScrollReveal } from '../atoms/ScrollReveal';
import { SectionTitle } from '../atoms/SectionTitle';
import olejeBgUrl from '../../assets/images/olejeBackround.webp';

const INGREDIENTS_DATA = [
  {
    id: 'base-oils',
    icon: Droplet,
    title: 'Oleje bazowe',
    content: (
      <div className="space-y-4">
        <p className="text-sm md:text-base text-spa-ink/80 leading-relaxed font-medium mb-4">
          Naszą bazą są najwyższej jakości tłoczone na zimno oleje roślinne.
        </p>
        <ul className="space-y-6">
          <li className="flex gap-4">
            <span className="text-spa-terracotta mt-1 text-xl leading-none">•</span>
            <div>
              <strong className="text-spa-ink block font-serif text-lg tracking-wide mb-1">Olej Sezamowy</strong>
              <p className="text-sm text-spa-ink/70 leading-relaxed">
                Według tekstów ajurwedyjskich jest „królem olejów”. Rozgrzewa, odżywia, usuwa toksyny. Odpowiedni dla wszystkich dosz. Dobry w chłodniejsze dni.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-spa-terracotta mt-1 text-xl leading-none">•</span>
            <div>
              <strong className="text-spa-ink block font-serif text-lg tracking-wide mb-1">Olej Kokosowy</strong>
              <p className="text-sm text-spa-ink/70 leading-relaxed">
                Idealny, gdy czujesz w sobie zbyt dużo „ognia” (stany zapalne, irytacja) – chłodzi i koi. Odpowiedni dla Pity lub dla wszystkich dosz w gorące dni.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-spa-terracotta mt-1 text-xl leading-none">•</span>
            <div>
              <strong className="text-spa-ink block font-serif text-lg tracking-wide mb-1">Olej Migdałowy</strong>
              <p className="text-sm text-spa-ink/70 leading-relaxed">
                Delikatny i odżywczy, przywraca skórze elastyczność bez obciążania. Odpowiedni dla wszystkich dosz.
              </p>
            </div>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: 'ayurvedic-oils',
    icon: Sparkles,
    title: 'Oleje ajurwedyjskie',
    content: (
      <div className="text-spa-ink/70 italic text-sm tracking-widest opacity-60">
        ....................................
      </div>
    )
  },
  {
    id: 'essential-oils',
    icon: Wind,
    title: 'Czyste olejki eteryczne',
    content: (
      <div className="text-spa-ink/70 italic text-sm tracking-widest opacity-60">
        ......................................
      </div>
    )
  },
  {
    id: 'herbal-stamps',
    icon: Leaf,
    title: 'Stemple ziołowo-solne',
    content: (
      <div className="text-spa-ink/70 italic text-sm tracking-widest opacity-60">
        ................................................
      </div>
    )
  }
];

export const IngredientsSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('base-oils');

  const toggleOpen = (id: string) => {
    setOpenId(prev => prev === id ? null : id);
  };

  return (
    <section className="py-20 md:py-32 relative border-t border-spa-secondary/30" id="skladniki">
      {/* Tło graficzne z overlayem */}
      <div className="absolute inset-0 z-0">
        <img
          src={olejeBgUrl}
          alt="Oleje tło"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-spa-bg/90 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <SectionTitle 
            title="Z czym pracuję?" 
            subtitle="Rodzaje olejów, olejków eterycznych, wybór stempli ziołowych" 
          />
        </ScrollReveal>

        <div className="mt-16 space-y-4">
          {INGREDIENTS_DATA.map((item, index) => {
            const Icon = item.icon;
            const isOpen = openId === item.id;

            return (
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <div 
                  className={`border border-spa-secondary rounded-[1.5rem] overflow-hidden transition-all duration-500 ${
                    isOpen ? 'bg-spa-secondary/20 shadow-sm' : 'bg-transparent hover:border-spa-terracotta/30'
                  }`}
                >
                  <button
                    onClick={() => toggleOpen(item.id)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className={`p-3 md:p-4 rounded-full transition-colors duration-500 ${isOpen ? 'bg-spa-terracotta/10 text-spa-terracotta' : 'bg-spa-secondary/40 text-spa-ink/40'}`}>
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl md:text-3xl font-serif text-spa-ink">{item.title}</h3>
                    </div>
                    <div className={`p-2 rounded-full transition-colors duration-500 ${isOpen ? 'bg-spa-terracotta/10' : ''}`}>
                      <ChevronDown 
                        size={20} 
                        className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-spa-terracotta' : 'text-spa-ink/30'}`} 
                      />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="px-6 md:px-8 pb-8 pt-2 md:pl-[6.5rem]">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
