import React from 'react';
import { motion } from 'motion/react';
import { AboutHeader } from '../components/organisms/AboutHeader';
import { AboutUsText } from '../components/organisms/AboutUsText';
import { AboutQuotes } from '../components/organisms/AboutQuotes';

interface AboutPageProps {
  onScheduleClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onScheduleClick }) => {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-spa-bg"
    >
      <div className="overflow-x-hidden">
        
        {/* Sekcja Hero dla O nas (Full-bleed układ) */}
        <AboutHeader />
        
        {/* Główna nowa sekcja tekstowa: Kim jesteśmy */}
        <AboutUsText />
        
        {/* Cytaty na kafelkach (2 kolumny) z kamiennym tłem w tle sekcji */}
        <AboutQuotes />
      </div>
    </motion.div>
  );
};
