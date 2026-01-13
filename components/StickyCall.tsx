
import React from 'react';

const StickyCall: React.FC = () => {
  const handleCall = () => {
    window.location.href = 'tel:+919447314858';
  };

  return (
    <div className="fixed bottom-24 left-6 z-[160] transition-all duration-300">
      <button 
        onClick={handleCall}
        className="bg-stone-900 text-white p-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center justify-center group active:scale-90 transition-transform border border-white/20"
        aria-label="Call Palm Interiors"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <div className="absolute left-full ml-4 bg-white text-stone-900 px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
          <span className="text-[10px] font-black uppercase tracking-widest">+91 94473 14858</span>
        </div>
      </button>
    </div>
  );
};

export default StickyCall;
