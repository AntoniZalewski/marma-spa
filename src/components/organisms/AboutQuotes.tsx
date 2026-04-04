import React from 'react';
import { ScrollReveal } from '../atoms/ScrollReveal';
import stoneBgUrl from '../../assets/images/stone-top-view.webp';

export const AboutQuotes: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Kamienne tło na całą sekcję cytatów */}
      <div className="absolute inset-0 z-0">
        <img 
          src={stoneBgUrl} 
          alt="Kamienie" 
          className="w-full h-full object-cover"
        />
        {/* Bardzo delikatne przyciemnienie reszty, aby białe kafle się wyróżniały bez utraty ostrości i struktury kamieni */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Płynne, gradientowe przejście z sekcji powyżej (jasne do przezroczystego) - MUSI BYĆ NA WIERZCHU, by nie dotknęło go black/10 */}
        <div className="absolute top-0 left-0 right-0 h-48 md:h-72 bg-gradient-to-b from-spa-bg via-spa-bg/80 to-transparent" />
      </div>

      <div className="relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="text-spa-terracotta font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Inspiracje</span>
            <h2 className="text-4xl md:text-5xl font-serif">Słowa o Dotyku i Życiu</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">
          {[
            "Mądrość Wschodu nie walczy na siłę z czasem lecz podpowiada jak płynąć z nim, naturalnie i w zgodzie z naturą. Zamiast 'ostrzykiwać' zmęczenie, Abhyanga je rozpuszcza. To przejście od tyranii zewnętrznego wyglądu, do rozgoszczenia się w Dobrostanie, gdzie witalna, odżywiona skóra jest jedynie lustrzanym odbiciem harmonii ducha i ciała.",
            "Masaż Abhyanga to rytuał, który nie 'naprawia' nas na siłę, lecz pozwala rozkwitnąć naturalnemu pięknu, które rodzi się z głębokiego ukojenia systemu nerwowego. Cierpliwość i powtarzalność masażu przynosi naturalny, piękny efekt nakarmionej skóry która staje się promienna i odżywiona i w której wciąż poznajemy siebie."
          ].map((quote, i) => (
            <ScrollReveal key={i} delay={i * 0.2}>
              <div className="bg-spa-bg/95 border border-spa-secondary/40 shadow-xl rounded-spa-xl p-10 md:p-14 h-full flex items-center group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-spa-terracotta/30">
                <p className="text-2xl lg:text-[1.7rem] font-quote text-spa-ink/80 leading-relaxed text-center w-full transition-colors drop-shadow-sm">
                  „{quote}”
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
