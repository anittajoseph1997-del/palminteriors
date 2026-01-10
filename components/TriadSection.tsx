
import React from 'react';

const PILLARS = [
  { 
    title: 'Design', 
    desc: 'Bespoke architectural vision tailored to Kerala & Bangalore lifestyles, rendered in high-fidelity.',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
  },
  { 
    title: 'Manufacture', 
    desc: 'Crafted in our specialized Kochi facility. Direct shipping and expert assembly across Karnataka and Kerala.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  },
  { 
    title: 'Build', 
    desc: 'Turnkey execution by professional site teams in major hubs like Kochi, Bangalore and across Kerala.',
    img: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800'
  }
];

const TriadSection: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t-4 border-stone-950">
          {PILLARS.map((pillar, idx) => (
            <div key={idx} className="group relative border-l-2 border-b-2 border-stone-200 p-12 lg:p-20 luxury-transition hover:bg-stone-50 overflow-hidden">
              <div className="relative z-10">
                <span className="text-stone-950 text-[14px] font-black uppercase tracking-[0.5em] mb-12 block">0{idx + 1}</span>
                <h3 className="text-5xl font-black text-stone-950 mb-8 serif italic tracking-tighter">{pillar.title}</h3>
                <p className="text-stone-950 text-lg font-black leading-relaxed tracking-tight max-w-xs transition-opacity duration-500 opacity-100">
                  {pillar.desc}
                </p>
              </div>
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-30 transition-all duration-1000 scale-110 group-hover:scale-100">
                <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover grayscale" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TriadSection;
