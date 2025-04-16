import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Traction from './components/Traction';
import CTA from './components/CTA';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Traction />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;