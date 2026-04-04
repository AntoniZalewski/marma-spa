import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../atoms/ScrollReveal';
import { Button } from '../atoms/Button';
import philosophyImgUrl from '../../assets/images/naszaFilozofia.webp';
import noweLogoUrl from '../../assets/icons/NoweLogo.svg';

interface PhilosophySectionProps {
  onLearnMoreClick: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ onLearnMoreClick }) => {
  return (
    <section className="relative pt-20 lg:pt-32 pb-0 bg-spa-bg overflow-hidden" id="o-nas">

      {/* Zen Watermark wyśrodkowany za prawą połową ekranu */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full lg:w-1/2 opacity-[0.03] pointer-events-none select-none z-0 flex justify-center items-center">
        <img 
          src={noweLogoUrl} 
          alt="Marma Spa Watermark Logo" 
          className="w-[140%] max-w-none h-auto object-contain" 
        />
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-0 relative z-10 max-w-[120rem] mx-auto">

        {/* Lewa strona - Zdjęcie Zen wchodzące z samego marginesu przeglądarki */}
        <div className="w-full lg:w-1/2 relative bg-spa-bg min-h-[500px] sm:min-h-[600px] lg:min-h-[800px]">
          {/* Subtelny glow pod spodem */}
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-spa-secondary/40 rounded-full blur-[100px] -z-10" />

          {/* Obrazek przylegający do lewej, zaokrąglony tylko z prawej top */}
          <img
            src={philosophyImgUrl}
            alt="Nasza Filozofia"
            className="absolute inset-0 w-full h-full object-cover rounded-tr-2xl lg:rounded-tr-3xl rounded-br-none shadow-[15px_0_50px_rgba(0,0,0,0.1)]"
          />
        </div>

        {/* Prawa strona - Opowieść chroniona przed ucięciem. Brak paddingu od góry równa tekst ze zdjęciem. */}
        <div className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-16 xl:px-24 pb-20 lg:pb-32 pt-12 lg:pt-0 relative z-10">
          <div className="max-w-2xl mx-auto lg:mx-0">

            <ScrollReveal delay={0.2}>
              <div className="flex items-center gap-5 mb-8">
                <div className="h-[1px] w-10 bg-spa-terracotta/60" />
                <span className="text-spa-terracotta font-medium tracking-[0.25em] uppercase text-xs">Prawdziwy Relaks</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-serif leading-[1.1] text-spa-ink mb-10">
                Sztuka <br className="hidden lg:block" />
                <span className="text-spa-ink/50 italic font-light tracking-wide">czułego</span> dotyku.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-6 text-lg text-spa-ink/80 leading-relaxed font-light">
                <p>
                  Snehana to w ajurwedzie proces olejowania organizmu. Słowo „Sneha” w sanskrycie oznacza zarówno <strong className="font-serif italic font-normal text-spa-terracotta text-2xl pr-1">„olej”</strong>, jak i <strong className="font-serif italic font-normal text-spa-terracotta text-2xl pr-1">„miłość”</strong>. Wierzymy, że dotyk połączony z ciepłym, ziołowym olejem jest najprostszą formą powrotu do siebie.
                </p>
                <p className="pb-8">
                  Abhyanga, czyli masaż całego ciała, to fundament tej praktyki. To rytuał, który łagodnie zmywa z Ciebie napięcie, relaksuje nerwy, poprawia krążenie i przywraca czystość pobudzonemu umysłowi.
                </p>

                <div className="pt-4">
                  <Button onClick={onLearnMoreClick} className="gap-3 text-xs font-semibold tracking-widest uppercase px-12 py-6 rounded-full shadow-md bg-white text-spa-ink border border-spa-ink/10 hover:bg-spa-ink hover:text-white transition-all duration-300">
                    Poznaj Ideę <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

      </div>
    </section>
  );
};
