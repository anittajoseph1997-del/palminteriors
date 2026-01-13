
import React from 'react';

const TESTIMONIALS = [
  {
    name: "Thomas Kurian",
    location: "Kottayam, Kerala",
    text: "Jomon's team handled our heritage villa renovation with immense respect for the original structure while adding modern comforts from their Kochi factory.",
    role: "Planter & Business Owner"
  },
  {
    name: "Priyanka Mehra",
    location: "Whitefield, Bengaluru",
    text: "Finding a turnkey designer who understands the speed of Bangalore but the quality of traditional joinery is rare. Palm Interiors delivered exactly on time.",
    role: "Tech Lead"
  },
  {
    name: "Dr. Lakshmi Nair",
    location: "Trivandrum, Kerala",
    text: "The precision of their factory-finished wardrobes is unmatched. No local carpenter could achieve this level of alignment and finish.",
    role: "Senior Surgeon"
  },
  {
    name: "Senthil Kumar",
    location: "OMR, Chennai",
    text: "We commissioned Palm for our Chennai apartment because of their reputation in Kerala. The logistics were seamless, and the result is a masterpiece.",
    role: "Software Architect"
  },
  {
    name: "Mathew Varghese",
    location: "Kochi, Kerala",
    text: "Walking into their Kochi factory gave me the confidence to sign. You see the wood being seasoned and the precision of the machinery. Real transparency.",
    role: "Exporter"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-400 mb-4 block">Client Voices</span>
          <h2 className="text-5xl md:text-7xl font-black text-stone-900 serif leading-none tracking-tight">Trust Across <span className="italic font-light">Borders.</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-stone-50 p-12 rounded-[40px] border border-stone-100 flex flex-col justify-between hover:shadow-xl transition-all duration-500 group">
              <div>
                <div className="flex space-x-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-stone-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl font-medium text-stone-800 leading-relaxed mb-8 italic">"{t.text}"</p>
              </div>
              <div>
                <h4 className="text-lg font-black text-stone-900">{t.name}</h4>
                <div className="flex items-center text-[10px] uppercase tracking-widest font-black text-stone-400 mt-1">
                  <span>{t.location}</span>
                  <span className="mx-3 opacity-30">•</span>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
