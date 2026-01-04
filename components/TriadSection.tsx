
import React from 'react';

const PILLARS = [
  { 
    title: 'Design', 
    desc: 'Architectural vision tailored to your lifestyle, rendered in high-fidelity.',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
  },
  { 
    title: 'Manufacture', 
    desc: 'Crafted in our in-house facility. Bespoke joinery and furniture without compromise.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  },
  { 
    title: 'Build', 
    desc: 'Precision engineering and site execution. Turning blueprints into reality.',
    img: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800'
  }
];

const TriadSection: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-stone-100">
          {PILLARS.map((pillar, idx) => (
            <div key={idx} className="group relative border-l border-b border-stone-100 p-12 lg:p-20 luxury-transition hover:bg-stone-50 overflow-hidden">
              <div className="relative z-10">
                <span className="text-stone-300 text-[10px] font-bold uppercase tracking-[0.4em] mb-12 block">0{idx + 1}</span>
                <h3 className="text-4xl font-light text-stone-900 mb-6 serif italic tracking-tight">{pillar.title}</h3>
                <p className="text-stone-500 text-xs font-light leading-relaxed tracking-wider max-w-xs transition-opacity duration-500 group-hover:opacity-100 opacity-60">
                  {pillar.desc}
                </p>
              </div>
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-all duration-1000 scale-110 group-hover:scale-100">
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
