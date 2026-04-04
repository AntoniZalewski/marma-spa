import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HeroSection } from '../components/organisms/HeroSection';
import { PhilosophySection } from '../components/organisms/PhilosophySection';
import { RitualsSection } from '../components/organisms/RitualsSection';
import { IngredientsSection } from '../components/organisms/IngredientsSection';
import { ElementsSection } from '../components/organisms/ElementsSection';
import { PricingSection } from '../components/organisms/PricingSection';
import { RitualModal } from '../components/organisms/RitualModal';
import { RITUALS } from '../data';

interface HomePageProps {
  onLearnMoreClick: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onLearnMoreClick }) => {
  const [selectedRitual, setSelectedRitual] = useState<typeof RITUALS[0] | null>(null);

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <PhilosophySection onLearnMoreClick={onLearnMoreClick} />
      <RitualsSection onRitualSelect={setSelectedRitual} />
      <IngredientsSection />
      <ElementsSection />
      <PricingSection />
      <RitualModal 
        selectedRitual={selectedRitual} 
        onClose={() => setSelectedRitual(null)}
        onNavigate={setSelectedRitual}
      />
    </motion.div>
  );
};
