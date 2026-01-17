import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import UiUx from './pages/UiUx';
import ProjectFlow from './pages/ProjectFlow';

function App() {
  const location = useLocation();

  // Define Project Frames (Updated Sequence)
  const projects = {
    // UI/UX Projects
    megamart: ['/assets/frame%204.jpg', '/assets/frame%205.jpg', '/assets/frame%206.jpg'],
    parkgo: ['/assets/frame%207.jpg', '/assets/frame%208.jpg', '/assets/frame%209.jpg'],
    legalEase: ['/assets/frame%2010.jpg', '/assets/frame%2011.jpg', '/assets/frame%2012.jpg', '/assets/frame%2013.jpg'],

    // About Page Categories
    branding: ['/assets/frame%2014.jpg', '/assets/frame%2015.jpg', '/assets/frame%2016.jpg'],
    character: ['/assets/frame%2017.jpg', '/assets/frame%2018.jpg', '/assets/frame%2019.jpg', '/assets/frame%2020.jpg'],
    brandComm: ['/assets/frame%2021.jpg', '/assets/frame%2022.jpg', '/assets/frame%2023.jpg'],
    funGraphics: ['/assets/frame%2024.jpg', '/assets/frame%2025.jpg', '/assets/frame%2026.jpg']
  };

  return (
    <>
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/uiux" element={<UiUx />} />

          {/* UI/UX Projects */}
          <Route path="/uiux/project1" element={<ProjectFlow frames={projects.megamart} />} />
          <Route path="/uiux/project2" element={<ProjectFlow frames={projects.parkgo} />} />
          <Route path="/uiux/project3" element={<ProjectFlow frames={projects.legalEase} />} />

          {/* Other Categories */}
          <Route path="/branding" element={<ProjectFlow frames={projects.branding} />} />
          <Route path="/character" element={<ProjectFlow frames={projects.character} />} />
          <Route path="/brand-comm" element={<ProjectFlow frames={projects.brandComm} />} />
          <Route path="/fun-graphics" element={<ProjectFlow frames={projects.funGraphics} />} />

          {/* Catch all */}
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
