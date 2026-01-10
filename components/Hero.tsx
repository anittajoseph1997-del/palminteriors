
import React from 'react';

interface HeroProps {
  onStart: () => void;
}

// Fixed: Correctly typed the component props with HeroProps
const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder or High-End Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=90&w=2400" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover scale-105 animate-pulse-slow transition-transform duration-[10s] hover:scale-100"
          style={{ filter: 'brightness(0.85)' }}
        />
        <div className="absolute inset-0 bg-stone-900/10 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <div className="flex items-center justify-center space-x-4 mb-8 fade-in">
          <span className="text-white text-[9px] uppercase tracking-[0.4em] px-3 py-1 border border-white/20 rounded-full">Kerala</span>
          <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
          <span className="text-white text-[9px] uppercase tracking-[0.4em] px-3 py-1 border border-white/20 rounded-full">Bangalore</span>
        </div>
        <h1 className="text-white text-6xl md:text-9xl font-light leading-none mb-12 serif tracking-tight">
          Design <span className="italic">is</span> Detail.
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
          <button 
            onClick={onStart}
            className="group relative text-white text-[10px] uppercase tracking-[0.5em] font-bold"
          >
            Launch Palm Studio
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
          </button>
          <div className="h-px w-12 bg-white/30 hidden md:block"></div>
          <button className="group relative text-white text-[10px] uppercase tracking-[0.5em] font-bold">
            View Regional Portfolio
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></span>
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-12 hidden lg:block">
        <p className="text-white/40 text-[9px] uppercase tracking-[0.4em] leading-loose">
          Palm Interiors<br/>
          Design • Manufacture • Build
        </p>
      </div>

      <div className="absolute bottom-12 right-12 animate-bounce opacity-40">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
