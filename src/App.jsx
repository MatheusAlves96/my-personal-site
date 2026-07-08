import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Statistics from './pages/Statistics';
import Contact from './pages/Contact';
import Background from './components/Background';
import Footer from './components/Footer';
import './translations/i18n';

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    } else {
      const browserLanguage = navigator.language.split('-')[0];
      const supportedLanguages = ['en', 'es', 'pt'];
      const defaultLanguage = supportedLanguages.includes(browserLanguage) ? browserLanguage : 'pt';
      i18n.changeLanguage(defaultLanguage);
      localStorage.setItem('language', defaultLanguage);
    }
  }, [i18n]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      window.location.reload();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col h-screen">
        <Background />
        <Header />
        <div className="h-[80px] w-full"></div>
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
