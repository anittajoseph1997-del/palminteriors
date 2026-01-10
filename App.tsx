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

type View = 'home' | 'gallery' | 'studio' | 'contact' | 'about' | 'philosophy';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
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
        return (
          <div className="pt-40 min-h-screen bg-white text-center px-6">
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-stone-400 mb-6 block">Connect With Us</span>
            <h1 className="text-6xl md:text-8xl font-light serif mb-12">Talk to a <span className="italic">Designer.</span></h1>
            <p className="max-w-2xl mx-auto text-xl font-light text-stone-600 mb-16 leading-relaxed">
              We are available for consultations across Kerala and Bangalore. The fastest way to reach our team is via WhatsApp.
            </p>
            <div className="flex flex-col items-center gap-8">
              <a 
                href="https://wa.me/919447314858" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-stone-900 text-white px-12 py-6 rounded-full text-xs uppercase tracking-[0.4em] font-bold hover:bg-stone-800 transition-all shadow-xl"
              >
                Text via WhatsApp: +91 94473 14858
              </a>
              <button 
                onClick={() => setCurrentView('home')}
                className="text-stone-400 text-[10px] uppercase tracking-widest hover:text-stone-900 transition-colors"
              >
                Return to Index
              </button>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="pt-40 min-h-screen bg-white px-6 md:px-20">
            <div className="max-w-4xl">
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-stone-400 mb-6 block">Company Profile</span>
              <h1 className="text-6xl md:text-8xl font-light serif mb-16 leading-none tracking-tight">
                About <span className="italic">Palm Interiors.</span>
              </h1>
              <div className="space-y-12 text-2xl font-light text-stone-800 leading-relaxed">
                <p>
                  Palm Interiors is a premier turnkey design and execution firm specializing in luxury residential and high-performance commercial spaces. With active hubs in <span className="font-medium text-stone-950">Kochi</span> and <span className="font-medium text-stone-950">Bangalore</span>, we bridge the gap between architectural vision and industrial precision.
                </p>
                <p>
                  Unlike traditional design houses, we operate our own state-of-the-art manufacturing facility in Kochi. This allows us to deliver bespoke furniture and joinery with a level of quality and timeline control that is unmatched in the region.
                </p>
                <p className="italic text-stone-500">
                  From initial concept to final handover, we manage every detail of the construction, manufacturing, and finishing process.
                </p>
              </div>
              <button 
                onClick={() => setCurrentView('home')}
                className="mt-20 border-b border-stone-900 pb-2 text-xs uppercase tracking-[0.4em] font-bold"
              >
                Back to Home
              </button>
            </div>
          </div>
        );
      case 'philosophy':
        return (
          <div className="pt-40 min-h-screen bg-stone-950 text-stone-100 px-6 md:px-20">
            <div className="max-w-4xl">
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-stone-500 mb-6 block">Ethos</span>
              <h1 className="text-6xl md:text-8xl font-light serif mb-20 text-white leading-none">
                Our <span className="italic">Philosophy.</span>
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="space-y-6">
                  <h3 className="text-xl uppercase tracking-widest font-bold text-white">01. Absolute Detail</h3>
                  <p className="text-stone-400 font-light leading-relaxed">
                    We believe that luxury is not about excess, but about the precision of every shadow, the alignment of every grain, and the intention behind every material choice.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl uppercase tracking-widest font-bold text-white">02. Structural Integrity</h3>
                  <p className="text-stone-400 font-light leading-relaxed">
                    Design must endure. By controlling our own manufacturing, we ensure that the internal skeleton of our projects is as beautiful and robust as the final finish.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl uppercase tracking-widest font-bold text-white">03. Local Soul</h3>
                  <p className="text-stone-400 font-light leading-relaxed">
                    Whether in the urban landscape of Bangalore or the tropical coastal lines of Kerala, our designs respect local context while maintaining global standards.
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setCurrentView('home')}
                className="mt-32 text-stone-500 border-b border-stone-500 pb-2 text-xs uppercase tracking-[0.4em] font-bold hover:text-white hover:border-white transition-all"
              >
                Back to Home
              </button>
            </div>
          </div>
        );
      default:
        return <Hero onStart={() => setCurrentView('studio')} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col luxury-transition ${currentView === 'home' && !scrolled ? 'bg-transparent' : (currentView === 'philosophy' ? 'bg-stone-950' : 'bg-stone-50')}`}>
      <Header activeView={currentView} onNavigate={setCurrentView} />
      <main className="flex-1">
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentView} />
      <FloatingConsult />
    </div>
  );
};

export default App;