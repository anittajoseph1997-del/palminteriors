
import React from 'react';

const AboutSnapshot: React.FC = () => {
  return (
    <section className="py-24 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
                alt="Palm Interiors Manufacturing Facility" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-72 aspect-square bg-stone-950 rounded-3xl p-10 flex flex-col justify-center text-white shadow-2xl hidden md:flex ring-8 ring-white">
              <span className="text-5xl font-black serif mb-4 text-white leading-none">Direct-to-Site</span>
              <span className="text-[11px] uppercase tracking-[0.3em] font-black text-stone-300">In-house Factory & <br/>Manufacturing Units</span>
            </div>
          </div>
          
          <div className="lg:pl-10">
            <span className="text-sm uppercase tracking-[0.4em] font-black text-stone-950 mb-6 block">The Advantage</span>
            <h2 className="text-5xl md:text-6xl font-black text-stone-950 mb-10 serif leading-none tracking-tighter">Precision built in <br/><span className="italic font-light">our own factory.</span></h2>
            <p className="text-stone-950 leading-relaxed mb-8 text-2xl font-black tracking-tight italic">
              Palm Interiors stands apart through its integrated approach. Unlike firms that outsource, we operate our own state-of-the-art manufacturing unit.
            </p>
            <p className="text-stone-950 leading-relaxed mb-12 text-lg font-bold">
              Our factory allows us to manage timelines with precision, eliminate middleman costs, and offer truly bespoke solutions that off-the-shelf alternatives simply cannot match. From kiln-dried timber to high-precision CNC machining, we control the entire lifecycle of your interior assets.
            </p>
            <div className="grid grid-cols-2 gap-12 border-t-4 border-stone-200 pt-12">
               <div>
                 <h4 className="font-black text-stone-950 text-xl mb-3 tracking-tight">Full Control</h4>
                 <p className="text-sm text-stone-950 font-bold leading-relaxed">Total oversight from raw material selection to factory finishing.</p>
               </div>
               <div>
                 <h4 className="font-black text-stone-950 text-xl mb-3 tracking-tight">Bespoke Fitting</h4>
                 <p className="text-sm text-stone-950 font-bold leading-relaxed">Custom furniture engineered to fit the unique geometry of your space.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
