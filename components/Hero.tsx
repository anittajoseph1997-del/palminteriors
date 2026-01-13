
import React, { useState } from 'react';
import QuoteModal from './QuoteModal.tsx';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=90&w=2400" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover scale-105 transition-transform duration-[10s]"
          style={{ filter: 'brightness(0.75)' }}
        />
        <div className="absolute inset-0 bg-stone-900/20 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl">
        <div className="flex items-center justify-center space-x-4 mb-8 fade-in">
          <span className="text-white text-[9px] uppercase tracking-[0.4em] px-3 py-1 border border-white/20 rounded-full">Kochi</span>
          <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
          <span className="text-white text-[9px] uppercase tracking-[0.4em] px-3 py-1 border border-white/20 rounded-full">Bangalore</span>
        </div>
        
        <h1 className="text-white text-6xl md:text-9xl font-light leading-none mb-6 serif tracking-tight">
          Design <span className="italic">is</span> Detail.
        </h1>
        
        <p className="text-white/90 text-sm md:text-xl font-light tracking-[0.1em] mb-12 max-w-3xl mx-auto leading-relaxed">
          Complete home interior design and execution in Kerala to Bangalore, from concept to handover.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          <button 
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-white text-stone-900 px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.4em] font-black hover:bg-stone-100 transition-all shadow-2xl scale-100 hover:scale-105 active:scale-95"
          >
            Get a Free Quote
          </button>
          
          <button 
            onClick={onStart}
            className="group relative text-white text-[11px] uppercase tracking-[0.5em] font-bold py-5"
          >
            Launch Palm Studio
            <span className="absolute bottom-3 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-12 hidden lg:block">
        <p className="text-white/40 text-[9px] uppercase tracking-[0.4em] leading-loose">
          Palm Interiors<br/>
          Direct Factory Manufacturing
        </p>
      </div>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
};

export default Hero;
