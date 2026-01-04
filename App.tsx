
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import ProjectGallery from './components/ProjectGallery.tsx';
import AIDesignStudio from './components/AIDesignStudio.tsx';
import AboutSnapshot from './components/AboutSnapshot.tsx';
import TriadSection from './components/TriadSection.tsx';
import ProcessSection from './components/ProcessSection.tsx';
import ContactSection from './components/ContactSection.tsx';
import Footer from './components/Footer.tsx';
import FloatingConsult from './components/FloatingConsult.tsx';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'gallery' | 'studio' | 'contact'>('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero onStart={() => setCurrentView('studio')} />
            <TriadSection />
            <AboutSnapshot />
            <ProjectGallery />
            <ProcessSection />
            <section className="bg-stone-900 py-48 relative overflow-hidden">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-white text-5xl md:text-7xl font-light serif italic leading-tight mb-16">
                  Experience the <br/>Future of Design.
                </h2>
                <button 
                  onClick={() => setCurrentView('studio')}
                  className="bg-white text-stone-900 px-16 py-6 rounded-full text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-stone-100 transition-all shadow-2xl"
                >
                  Enter Palm Studio
                </button>
              </div>
              <div className="absolute top-1/2 left-0 w-full h-px bg-white/5"></div>
            </section>
          </>
        );
      case 'gallery':
        return <div className="pt-20"><ProjectGallery /></div>;
      case 'studio':
        return <div className="pt-10 min-h-screen bg-stone-50"><AIDesignStudio /></div>;
      case 'contact':
        return <div className="pt-10"><ContactSection /></div>;
      default:
        return <Hero onStart={() => setCurrentView('studio')} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col luxury-transition ${currentView === 'home' && !scrolled ? 'bg-transparent' : 'bg-stone-50'}`}>
      <Header activeView={currentView} onNavigate={setCurrentView} />
      <main className="flex-1">
        {renderContent()}
      </main>
      <Footer />
      <FloatingConsult />
    </div>
  );
};

export default App;
