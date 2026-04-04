import React from 'react';
import { ScrollReveal } from '../atoms/ScrollReveal';

import ayurvedaImgUrl from '../../assets/images/O-Ajurwedzie.webp';

export const AboutAyurveda: React.FC = () => {
  return (
    <section className="relative mb-40 overflow-hidden bg-spa-bg" id="o-ajurwedzie">
      <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-0 max-w-[120rem] mx-auto">
        
        {/* Lewa strona - Zdjęcie symetrycznie zaokrąglone po prawej stronie */}
        <div className="w-full lg:w-1/2 relative bg-spa-bg min-h-[500px] sm:min-h-[600px] lg:min-h-[800px]">
          {/* Subtelny glow pod spodem */}
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-spa-secondary/40 rounded-full blur-[100px] -z-10" />
             
          <img 
            src={ayurvedaImgUrl} 
            alt="O Ajurwedzie" 
            className="absolute inset-0 w-full h-full object-cover rounded-r-3xl lg:rounded-r-[60px] shadow-[15px_0_50px_rgba(0,0,0,0.15)]"
          />
        </div>

        {/* Prawa strona - Opowieść wyrównana odgórnie ze zdjęciem */}
        <div className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-16 xl:px-24 pb-20 lg:pb-32 pt-12 lg:pt-0 relative z-10">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <ScrollReveal delay={0.2}>
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-serif leading-[1.1] text-spa-ink mb-10">
                O Ajurwedzie <br className="hidden lg:block" />
                <span className="italic font-light">jako systemie</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="space-y-6 text-lg text-spa-ink/70 leading-relaxed font-light">
                <p>
                  Ajurweda często postrzegana jest jako pierwszy system medycyny w historii ludzkości. To starohinduski, liczący sobie <span className="font-medium text-spa-terracotta">5000 lat</span> system dbania o człowieka, holistycznie traktujący umysł, ciało i duszę.
                </p>
                <p>
                  W ajurwedzie teoria kontinuum zakłada, że człowiek (mikrokosmos) stanowi odzwierciedlenie wszechświata (makrokosmos), a w związku z tym wszystko, co istnieje poza nami, istnieje również w nas.
                </p>
                
                {/* Cytat jako piękny blok tekstowy */}
                <div className="mt-10 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-spa-terracotta/40 rounded-full" />
                  <p className="font-quote text-spa-ink text-3xl md:text-4xl py-4 pl-8 leading-snug">
                    „Ajurweda to sposób na życie w harmonii z naturą, który pozwala zrozumieć własne ciało i umysł.”
                  </p>
                </div>
                
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
};
