import React from 'react';
import { HeroSection } from './components/HeroSection';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Card from './components/Card';
import Skills from './components/Skills';
import AchievementShowcase from './components/AchievementShowcase';

const App = () => {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Card />
      <Skills />
      <AchievementShowcase />
    </main>
  );
};

export default App;
