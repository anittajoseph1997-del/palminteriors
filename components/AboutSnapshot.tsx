
import React from 'react';

const AboutSnapshot: React.FC = () => {
  return (
    <section className="py-24 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
                alt="Palm Interiors Manufacturing Facility" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 aspect-square bg-stone-900 rounded-2xl p-8 flex flex-col justify-center text-white shadow-2xl hidden md:flex">
              <span className="text-4xl font-bold serif mb-2 text-white">Direct-to-Site</span>
              <span className="text-xs uppercase tracking-widest opacity-70">In-house Factory & <br/>Manufacturing Units</span>
            </div>
          </div>
          
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-stone-400 mb-4 block">The Advantage</span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 serif">Precision built in our own factory.</h2>
            <p className="text-stone-600 leading-relaxed mb-6 text-lg">
              Palm Interiors stands apart through its integrated approach. Unlike firms that outsource, we operate our own state-of-the-art manufacturing unit. This ensures every piece of furniture and joinery is built to exact specifications with uncompromised quality.
            </p>
            <p className="text-stone-600 leading-relaxed mb-10">
              Our factory allows us to manage timelines with precision, eliminate middleman costs, and offer truly bespoke solutions that off-the-shelf alternatives simply cannot match. From kiln-dried timber to high-precision CNC machining, we control the entire lifecycle of your interior assets.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-stone-200 pt-10">
               <div>
                 <h4 className="font-bold text-stone-900 mb-2">Full Control</h4>
                 <p className="text-sm text-stone-500">Total oversight from raw material selection to factory finishing.</p>
               </div>
               <div>
                 <h4 className="font-bold text-stone-900 mb-2">Bespoke Fitting</h4>
                 <p className="text-sm text-stone-500">Custom furniture engineered to fit the unique geometry of your space.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
