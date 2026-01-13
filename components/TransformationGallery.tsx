
import React from 'react';

const TRANSFORMATIONS = [
  {
    id: 1,
    title: "The Heritage Restoration",
    location: "Kottayam, Kerala",
    beforeLabel: "Original Structure",
    afterLabel: "Palm Restoration",
    // Verified stable Unsplash IDs for raw construction vs finished interior
    beforeImg: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800",
    afterImg: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
    description: "A 40-year-old family home stripped of its weathered exterior and reimagined with premium teak joinery and tropical modernism common in Kerala's premium districts."
  },
  {
    id: 2,
    title: "Urban Loft Execution",
    location: "Indiranagar, Bangalore",
    beforeLabel: "Raw Site Handover",
    afterLabel: "Bespoke Interior",
    // Verified stable Unsplash IDs for concrete shell vs luxury loft
    beforeImg: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
    afterImg: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    description: "Taking a raw concrete shell provided by Bangalore developers and injecting warmth using our Kochi-manufactured veneers and precision lighting."
  }
];

const TransformationGallery: React.FC = () => {
  return (
    <section className="py-32 bg-[#F9F8F6]">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="mb-20 text-center md:text-left">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-400 mb-4 block">Visual Evidence</span>
          <h2 className="text-5xl md:text-7xl font-black text-stone-900 serif leading-none tracking-tight">
            Real <span className="italic font-light">Transformations.</span>
          </h2>
          <p className="mt-6 text-stone-500 max-w-2xl font-light text-lg">
            Witness the drastic change from raw, local construction sites to the refined luxury of a Palm Interiors handover.
          </p>
        </div>

        <div className="space-y-32">
          {TRANSFORMATIONS.map((item) => (
            <div key={item.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Image Collage Area */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-lg grayscale hover:grayscale-0 transition-all duration-700 bg-stone-200">
                    <img 
                      src={item.beforeImg} 
                      alt="Before" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-stone-900/80 backdrop-blur-md text-white text-[9px] uppercase tracking-widest font-black rounded-lg">
                      {item.beforeLabel}
                    </span>
                  </div>
                </div>
                <div className="relative group">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border-4 border-white bg-stone-200">
                    <img 
                      src={item.afterImg} 
                      alt="After" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-stone-900 text-[9px] uppercase tracking-widest font-black rounded-lg">
                      {item.afterLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="lg:col-span-4 lg:pl-10">
                <div className="bg-white p-10 rounded-[40px] shadow-xl border border-stone-100">
                  <h3 className="text-3xl font-black text-stone-900 mb-2 serif italic leading-tight">{item.title}</h3>
                  <p className="text-stone-400 text-[10px] uppercase tracking-[0.4em] font-black mb-6">{item.location}</p>
                  <p className="text-stone-600 font-light leading-relaxed mb-8 text-lg">
                    {item.description}
                  </p>
                  <div className="h-px w-20 bg-stone-300 mb-8"></div>
                  <ul className="space-y-4">
                    <li className="flex items-center text-xs font-black uppercase tracking-widest text-stone-400">
                      <span className="w-2 h-2 bg-stone-900 rounded-full mr-3"></span> In-house Factory Precision
                    </li>
                    <li className="flex items-center text-xs font-black uppercase tracking-widest text-stone-400">
                      <span className="w-2 h-2 bg-stone-900 rounded-full mr-3"></span> Structural Civil Works
                    </li>
                    <li className="flex items-center text-xs font-black uppercase tracking-widest text-stone-400">
                      <span className="w-2 h-2 bg-stone-900 rounded-full mr-3"></span> Authentic Site Handover
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationGallery;
