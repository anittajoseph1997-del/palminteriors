
import React from 'react';

const AboutFounder: React.FC = () => {
  return (
    <section className="py-32 bg-stone-950 text-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Legacy Badge Column */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            <div className="bg-white text-stone-900 p-12 rounded-[40px] shadow-2xl border-4 border-stone-100 inline-block w-fit">
              <p className="text-7xl font-black serif leading-none mb-2 text-stone-900">20+</p>
              <p className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-500">Years of Legacy</p>
            </div>
          </div>
          
          {/* Main Content Column */}
          <div className="lg:col-span-9 max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-500 mb-6 block">The Visionary</span>
            <h2 className="text-6xl md:text-8xl font-black text-white mb-10 serif leading-none tracking-tight">Jomon <span className="italic font-light text-stone-400">Antony.</span></h2>
            
            <div className="space-y-8 text-xl font-light text-stone-400 leading-relaxed">
              <p>
                With over two decades of immersion in South India's architectural landscape, <span className="text-white font-medium">Jomon Antony</span> has spearheaded the transition of Palm Interiors from a local design studio into a regional leader in turnkey execution.
              </p>
              <p>
                His core philosophy rejects the "outsourced" model. By investing in an industrial-scale manufacturing unit in Kochi, he ensured that Palm Interiors maintains absolute control over the quality of timber, the precision of joinery, and the timeline of delivery.
              </p>
              
              <div className="relative py-12 pl-10 border-l-2 border-stone-700 my-12">
                <p className="italic text-white text-3xl serif leading-relaxed">
                  "Interior design isn't just about aesthetics—it's about the engineering of comfort. We build homes that are meant to be lived in for generations, not just photographed."
                </p>
              </div>
              
              <div className="pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-3">Heritage</h4>
                  <p className="text-sm text-stone-500 font-medium">20 Years of Site Mastery & Structural Innovation</p>
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-xs tracking-[0.3em] mb-3">Operations</h4>
                  <p className="text-sm text-stone-500 font-medium">Headquartered in Kochi with hubs in Bangalore & Kottayam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
