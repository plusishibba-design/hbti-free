import React, { useState, useEffect } from 'react';
import HomeHero from './components/HomeHero';
import Quiz from './components/Quiz';
import Result from './components/Result';
import TypeListPage from './components/TypeListPage';
import TypeDetailPage from './components/TypeDetailPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { TYPES } from './data/types';
import './App.css';

const VALID_PAGES = ['about', 'contact', 'privacy', 'terms', 'types', 'test', 'result'];

function getRouteFromPath() {
  const path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
  if (!path) return { page: 'home', param: null };
  const segments = path.split('/');
  const first = segments[0];
  const param = segments[1] || null;
  if (first === 'types' && param && TYPES[param]) {
    return { page: 'typeDetail', param };
  }
  if (VALID_PAGES.includes(first)) {
    return { page: first, param };
  }
  return { page: 'home', param: null };
}

function App() {
  const [route, setRoute] = useState(() => getRouteFromPath());

  useEffect(() => {
    const handlePopState = () => setRoute(getRouteFromPath());
    window.addEventListener('popstate', handlePopState);
    updateCanonical();
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  function updateCanonical() {
    const canon = document.querySelector('link[rel="canonical"]');
    if (canon) canon.href = window.location.origin + window.location.pathname;
  }

  const navigate = (path) => {
    const url = path === 'home' ? '/' : '/' + path;
    window.history.pushState(null, '', url);
    setRoute(getRouteFromPath());
    updateCanonical();
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (route.page) {
      case 'home':
        return <HomeHero onStart={() => navigate('test')} onAboutClick={() => navigate('about')} onTypeList={() => navigate('types')} />;
      case 'test':
        return <Quiz onComplete={() => navigate('result')} onCancel={() => navigate('home')} />;
      case 'result':
        return <Result onRetake={() => navigate('test')} onTypeList={() => navigate('types')} onHome={() => navigate('home')} />;
      case 'types':
        return <TypeListPage onSelect={(code) => navigate('types/' + code)} onStart={() => navigate('test')} />;
      case 'typeDetail':
        return <TypeDetailPage code={route.param} onBack={() => navigate('types')} onStart={() => navigate('test')} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      default:
        return <HomeHero onStart={() => navigate('test')} onAboutClick={() => navigate('about')} onTypeList={() => navigate('types')} />;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-brand" onClick={() => navigate('home')} role="button" tabIndex={0}>
          <span className="app-brand-mark">HBTI</span>
        </h1>
        <nav className="app-nav">
          <a href="/types" onClick={(e) => { e.preventDefault(); navigate('types'); }}>16 タイプ</a>
          <a href="/about" onClick={(e) => { e.preventDefault(); navigate('about'); }}>About</a>
        </nav>
      </header>

      <main className="app-main">{renderPage()}</main>

      <footer className="app-footer">
        <div className="footer-links">
          <a href="/about" onClick={(e) => { e.preventDefault(); navigate('about'); }}>About</a>
          <a href="/types" onClick={(e) => { e.preventDefault(); navigate('types'); }}>16 タイプ</a>
          <a href="/privacy" onClick={(e) => { e.preventDefault(); navigate('privacy'); }}>Privacy</a>
          <a href="/terms" onClick={(e) => { e.preventDefault(); navigate('terms'); }}>Terms</a>
          <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('contact'); }}>Contact</a>
        </div>
        <p className="footer-tagline">HBTI is a project by Studio T. Ishi.</p>
        <p className="footer-copy">© 2026 Studio T. Ishi.</p>
      </footer>
    </div>
  );
}

export default App;
