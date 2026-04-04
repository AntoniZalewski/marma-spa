/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { MainLayout } from './components/templates/MainLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  const [view, setView] = useState<'home' | 'about'>('home');

  const handleLearnMoreClick = () => {
    setView('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScheduleClick = () => {
    setView('home');
    setTimeout(() => {
      const contactSection = document.getElementById('kontakt');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <MainLayout view={view} setView={setView}>
      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <HomePage onLearnMoreClick={handleLearnMoreClick} />
        ) : (
          <AboutPage onScheduleClick={handleScheduleClick} />
        )}
      </AnimatePresence>
    </MainLayout>
  );
}
