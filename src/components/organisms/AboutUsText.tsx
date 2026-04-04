import React from 'react';
import { ScrollReveal } from '../atoms/ScrollReveal';

export const AboutUsText: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-spa-bg" id="kim-jestesmy">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center md:text-left">
        <ScrollReveal>
          <span className="text-spa-terracotta font-bold tracking-[0.3em] uppercase text-xs mb-6 block text-center">Kim Jesteśmy</span>
          <h2 className="text-4xl md:text-[3.5rem] font-serif leading-tight text-spa-ink mb-16 text-center">
            Prawdziwy powrót do natury
          </h2>
        </ScrollReveal>

        <div className="space-y-10 md:space-y-12 text-lg md:text-xl text-spa-ink/80 font-light leading-[1.8] md:leading-[2]">
          <ScrollReveal delay={0.2}>
            <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-spa-terracotta first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
              MARMA SPA powstała z myślą o naturalnym, cierpliwym i systematycznym wspieraniu ciała i umysłu w drodze do harmonii, równowagi i piękna. Powstała też z potrzeby uporządkowania i prostoty, na przekór wszechobecnej i nachalnej narracji sztuczności i nadmiaru.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p>
              Czuję, że jesteśmy pogubione i przytłoczone presją informacji, mnogością zabiegów, substancji, przymusem nakładania na siebie nadmiaru drogich, nasyconych chemią kosmetyków, agresywnych metod modyfikacji ciała polegających na ostrzykiwaniu, wypełnianiu, wycinaniu, podciąganiu różnych części ciała żeby wpisać się w jeden obowiązujący schemat, a w rezultacie i tak przegrać z czasem. Żyjemy w epoce estetyki instant, gdzie szybkie efekty wypełniaczy mają zrekompensować brak wewnętrznej równowagi.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="bg-spa-secondary/20 p-8 md:p-12 rounded-[2rem] border border-spa-secondary/40 my-16 shadow-sm relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-spa-terracotta/10 rounded-full blur-md" />
              <p className="font-serif text-2xl md:text-3xl text-spa-terracotta leading-relaxed text-center">
                Proponuję wziąć oddech, zatrzymać się na chwilę i wybrać dialog z własnym ciałem i naturą. Wspierać je od środka. Odżywiać. Dotykać. Otulać. Dać sobie Czas, Uważność i Czułość. Widzieć Je z wdzięcznością, jako Całość. Na to właśnie odpowiada i z tym rezonuje MARMA SPA.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p>
              Stworzyłam to miejsce ponieważ w ten sposób chcę patrzeć na ciało i odwdzięczać się za to, że mnie gości. Chciałabym się dzielić tą perspektywą z tymi, którzy tęsknią za prostotą, zatrzymaniem w przyjemności i spokoju, w kontakcie ze swoim ciałem.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <p className="font-medium text-spa-ink">
              MARMA SPA skupia się na uważnym dotyku masażu ajurwedyjskiego Abhyanga. Czerpie z jego wielotysięcznej tradycji i przekłada się na najprostszą formę terapii: Dotyk. Uczta dla ciała nasycona odżywczym ciepłem, olejem i uwagą.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
