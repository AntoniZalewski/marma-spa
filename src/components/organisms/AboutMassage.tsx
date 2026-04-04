import React from 'react';
import { ScrollReveal } from '../atoms/ScrollReveal';

export const AboutMassage: React.FC = () => {
  return (
    <div className="mb-40 py-32 bg-spa-secondary/20 rounded-[100px] px-8 md:px-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2D241E 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif mb-8">Czym jest masaż ajurwedyjski?</h2>
            <p className="text-xl text-spa-ink/80 leading-relaxed">
              To jeden z najstarszych rytuałów prowadzących do regeneracji organizmu. Oczyszcza, integruje i pozwala na powrót do równowagi. Ciepły, pachnący ziołami olej rozprowadzany po skórze płynnymi, powolnymi ruchami wprowadza ciało i umysł w stan głębokiego odpoczynku, przyjemności, wyciszenia.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-spa-terracotta">Błogość Abhyangi</h3>
              <p className="text-lg text-spa-ink/70 leading-relaxed">
                Słowo ABHYANGA wywodzi się z sanskrytu i oznacza „ruch oleju po ciele”. Jest to forma „snehana” (nawilżania), która ma na celu odżywienie i (dosłownie) „rozkochanie” ciała poprzez troskliwy dotyk. Jeśli miałabym jedno słowo na Abhyangę, użyłabym słowa <strong>błogość</strong>.
              </p>
              <p className="text-lg text-spa-ink/70 leading-relaxed">
                W starych tekstach Abhyanga jest traktowana jak „miłość do ciała”, która przynosi głęboką regenerację fizyczną i umysłową.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="bg-spa-bg/50 p-10 rounded-[40px] border border-spa-ink/5 shadow-sm">
              <h3 className="text-xl font-bold tracking-widest uppercase text-xs mb-8 text-spa-terracotta">Fundament Zdrowia (Dinacharya)</h3>
              <p className="text-sm text-spa-ink/60 mb-8 leading-relaxed">
                Według starożytnych tekstów ajurwedyjskich (takich jak Charaka Samhita czy Ashtanga Hridaya), Abhyanga (sanskryt: अभ्यङ्ग) to rytuał namaszczania ciała ciepłym olejem, będący fundamentem codziennej profilaktyki zdrowotnej.
              </p>
              <ul className="space-y-6">
                {[
                  { title: 'Hamuje procesy starzenia', desc: 'Regularna praktyka ma na celu odmłodzenie tkanek i zapewnienie długowieczności.' },
                  { title: 'Równoważy Dosze', desc: 'Zabieg pomaga uspokoić system nerwowy i kontrolować energię Vata.' },
                  { title: 'Wzmacnia ciało i skórę', desc: 'Odżywia tkanki (Dhatus), poprawia elastyczność stawów oraz sprawia, że skóra staje się promienna i odporna na urazy.' },
                  { title: 'Poprawia sen i wzrok', desc: 'Starożytne pisma podkreślają, że masaż głowy i stóp znacząco wpływa na jakość odpoczynku i zdrowie oczu.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-spa-terracotta mt-2 shrink-0" />
                    <div>
                      <span className="block font-bold text-sm uppercase tracking-wider mb-1">{item.title}</span>
                      <span className="text-sm text-spa-ink/60 leading-relaxed">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
