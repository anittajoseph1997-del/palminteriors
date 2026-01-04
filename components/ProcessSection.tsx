
import React from 'react';

const STEPS = [
  { num: '01', title: 'Consultation', desc: 'Detailed brief collection and architectural site analysis.' },
  { num: '02', title: 'Design Dev', desc: 'Concept planning, 3D renders and technical blueprints.' },
  { num: '03', title: 'Manufacturing', desc: 'Custom production of furniture and joinery in our own factory.' },
  { num: '04', title: 'Site Execution', desc: 'Civil work, structural changes and on-site assembly.' },
  { num: '05', title: 'Handover', desc: 'Rigorous quality checks and project completion.' }
];

const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-stone-500 mb-4 block">The Palm Method</span>
            <h2 className="text-4xl md:text-5xl font-bold serif">Integrated manufacturing <br/>for absolute precision.</h2>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl">
             <span className="text-[10px] uppercase tracking-widest font-bold text-stone-500 block mb-1">Differentiator</span>
             <span className="text-xs text-white">Direct-from-factory logistics included.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
          <div className="absolute top-10 left-0 right-0 h-px bg-white/10 hidden md:block"></div>
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative z-10 group">
              <div className="w-16 h-16 bg-stone-800 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:bg-white group-hover:text-stone-900 transition-all">
                <span className="text-lg font-bold">{step.num}</span>
              </div>
              <h4 className="text-lg font-bold mb-3">{step.title}</h4>
              <p className="text-sm text-stone-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
