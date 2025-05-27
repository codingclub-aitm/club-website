import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import { DarkModeProvider } from './contexts/DarkModeContext';

// Lazy-loaded pages for code splitting
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Events = React.lazy(() => import('./pages/Events'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Team = React.lazy(() => import('./pages/Team'));
const Join = React.lazy(() => import('./pages/Join'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Google Analytics setup
const initGA = () => {
  const gaId = import.meta.env.VITE_GA_ID;
  if (!gaId) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', gaId);
};

function App() {
  const location = useLocation();

  // Initialize GA on first render
  useEffect(() => {
    initGA();
  }, []);

  // Track page views
  useEffect(() => {
    if (window.gtag) {
      window.gtag('set', 'page_path', location.pathname);
      window.gtag('event', 'page_view');
    }
  }, [location]);

  return (
    <DarkModeProvider>
      <Layout>
        <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </React.Suspense>
      </Layout>
    </DarkModeProvider>
  );
}

export default App;