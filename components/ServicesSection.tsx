
import React from 'react';

const SERVICES = [
  {
    title: 'Interior Design',
    description: 'Bespoke conceptualization, 3D visualization, and architectural space planning.',
    icon: 'M4 6h16M4 12h16m-7 6h7'
  },
  {
    title: 'Turnkey Projects',
    description: 'Comprehensive project management from shell construction to final handover.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    title: 'Factory Manufacturing',
    description: 'In-house production of custom furniture, modular units, and high-end joinery.',
    icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
  },
  {
    title: 'Construction',
    description: 'Precision civil works, structural engineering, and site execution services.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-stone-400 mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 serif">Design, Build & Manufacture</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200 rounded-3xl overflow-hidden shadow-2xl shadow-stone-200">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="bg-white p-10 hover:bg-stone-50 transition-colors cursor-default group">
              <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-stone-900 group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.icon}></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-4">{service.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{service.description}</p>
              {service.title === 'Factory Manufacturing' && (
                <div className="mt-4 inline-block px-3 py-1 bg-stone-100 rounded text-[10px] font-bold uppercase tracking-widest text-stone-400">
                  In-House Unit
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
