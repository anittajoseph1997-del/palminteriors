
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (view: 'home' | 'gallery' | 'studio' | 'contact') => void;
  activeView: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, activeView }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLight = activeView === 'home' && !scrolled;

  const handleConsultClick = () => {
    window.dispatchEvent(new CustomEvent('palm-toggle-consult'));
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4' : 'py-10'}`}>
      <div className="max-w-[1600px] mx-auto px-8 flex justify-between items-center">
        <div 
          className="cursor-pointer flex flex-col"
          onClick={() => onNavigate('home')}
        >
          <span className={`text-2xl font-light tracking-[0.4em] serif transition-colors ${isLight ? 'text-white' : 'text-stone-900'}`}>PALM</span>
          <span className={`text-[8px] uppercase tracking-[0.8em] font-medium transition-colors ${isLight ? 'text-white/60' : 'text-stone-400'}`}>Interiors</span>
        </div>
        
        <nav className="hidden lg:flex space-x-16">
          {['home', 'gallery', 'studio', 'contact'].map((id) => (
            <button
              key={id}
              onClick={() => onNavigate(id as any)}
              className={`text-[9px] uppercase tracking-[0.5em] font-bold transition-all ${
                activeView === id 
                  ? (isLight ? 'text-white border-b border-white' : 'text-stone-900 border-b border-stone-900')
                  : (isLight ? 'text-white/60 hover:text-white' : 'text-stone-300 hover:text-stone-900')
              } pb-1`}
            >
              {id === 'home' ? 'Index' : id === 'studio' ? 'Studio' : id}
            </button>
          ))}
        </nav>

        <button 
           onClick={handleConsultClick}
           className={`text-[9px] uppercase tracking-[0.4em] font-bold px-8 py-3 rounded-full transition-all border ${
             isLight ? 'border-white/30 text-white hover:bg-white hover:text-stone-900' : 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'
           }`}
        >
          Consult
        </button>
      </div>
    </header>
  );
};

export default Header;
