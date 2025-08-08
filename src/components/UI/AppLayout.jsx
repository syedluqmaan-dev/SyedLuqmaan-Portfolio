import React, { memo } from 'react';
import ParticlesComponent from '../particles/Particles';
import MouseEffects from '../mouseeffects/MouseEffects';
import Banner from './Banner/Banner';
import About from './About/About';
import Skills from './Skills/Skills';
import Experience from './Work/Experience';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const AppLayout = () => {
  return (
    <>
        <Banner />

      <div className='container'>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <MemoizedParticles />
      <MemoizedMouseEffects />
    </>
  );
};

// Memoizing the effects for better performance
const MemoizedParticles = memo(ParticlesComponent);
const MemoizedMouseEffects = memo(MouseEffects);

export default AppLayout;
