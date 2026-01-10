import React, { useState } from 'react';
import { Project } from '../types.ts';

const PROJECTS: Project[] = [
  { 
    id: '1', 
    title: 'The Monolith Villa', 
    category: 'Residential', 
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200', 
    description: 'Kochi, Kerala',
    detailedDescription: 'A study in brutalist minimalism softened by tropical surroundings. This 4,500 sq. ft. villa features bespoke teak wood joinery manufactured in our Kochi facility. The design prioritizes natural cross-ventilation and a seamless indoor-outdoor flow.',
    materials: ['Exposed Concrete', 'Kiln-dried Teak', 'Italian Statuario Marble', 'Black Powder-coated Aluminum'],
    testimonial: {
      quote: "Palm Interiors transformed our abstract vision into a living masterpiece. Their in-house manufacturing made all the difference.",
      author: "Dr. Abraham K."
    }
  },
  { 
    id: '2', 
    title: 'Ethereal Offices', 
    category: 'Commercial', 
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200', 
    description: 'Tech Hub, Bangalore',
    detailedDescription: 'A high-performance workspace designed for a leading AI startup. The brief was to create an environment that fosters creativity while maintaining a sense of calm.',
    materials: ['Acoustic PET Felt', 'Oak Veneer', 'Frosted Glass', 'Polished Terrazzo'],
    testimonial: {
      quote: "The attention to technical detail and the speed of execution were beyond our expectations.",
      author: "Siddharth V., CEO"
    }
  },
  { id: '3', title: 'Ivory Loft', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200', description: 'Coastal Kochi' },
  { id: '4', title: 'Noir Studio', category: 'Retail', imageUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1200', description: 'Boutique Fashion' },
  { id: '5', title: 'The Terrace House', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200', description: 'Urban Living' },
  { id: '6', title: 'Zenith Lounge', category: 'Hospitality', imageUrl: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1200', description: 'Luxury Dining' },
  { id: '7', title: 'The Archways', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200', description: 'Heritage Reborn' },
  { id: '8', title: 'Glass Pavilion', category: 'Commercial', imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200', description: 'Modern HQ' },
  { id: '9', title: 'Marble Sanctuary', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200', description: 'Minimalist Villa' },
];

const ProjectGallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const categories = ['All', 'Residential', 'Commercial', 'Retail', 'Hospitality'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="max-w-xl">
            <h2 className="text-6xl font-black text-stone-950 mb-6 serif tracking-tight">The <span className="italic font-light">Portfolio</span>.</h2>
            <p className="text-stone-950 font-black text-sm tracking-[0.5em] uppercase mb-4">A curated legacy of architectural excellence</p>
          </div>
          
          <div className="flex flex-wrap gap-12 border-b-4 border-stone-100 pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[11px] uppercase tracking-[0.5em] font-black transition-all ${
                  filter === cat ? 'text-stone-950 scale-110 border-b-4 border-stone-950' : 'text-stone-400 hover:text-stone-950'
                } pb-2`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-10 luxury-transition rounded-sm shadow-2xl border-stone-100 border">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200";
                  }}
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-black text-stone-950 mb-2 serif tracking-tight">{project.title}</h3>
                  <p className="text-stone-950 text-[10px] uppercase tracking-[0.2em] font-black bg-stone-950 text-white inline-block px-3 py-1 rounded-sm">{project.description}</p>
                </div>
                <span className="text-stone-950 text-[14px] font-black italic">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-white luxury-transition flex flex-col">
          <div className="sticky top-0 z-10 p-8 flex justify-end">
            <button 
              onClick={() => setSelectedProject(null)}
              className="group flex items-center space-x-4 text-[11px] uppercase tracking-[0.5em] font-black text-stone-950"
            >
              <span>Close</span>
              <div className="w-14 h-14 border-4 border-stone-950 rounded-full flex items-center justify-center transition-all bg-stone-950 text-white shadow-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
            </button>
          </div>

          <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col lg:flex-row gap-20">
            <div className="lg:w-3/5">
              <div className="aspect-[4/5] rounded-[20px] overflow-hidden shadow-2xl border-4 border-stone-50">
                <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:w-2/5 flex flex-col justify-center">
              <span className="text-stone-950 text-[14px] uppercase tracking-[0.5em] font-black mb-4 block">
                {selectedProject.category} • {selectedProject.description}
              </span>
              <h2 className="text-6xl md:text-8xl font-black text-stone-950 mb-10 serif italic tracking-tighter leading-none">
                {selectedProject.title}
              </h2>
              <div className="space-y-12">
                <div>
                  <h4 className="text-[14px] uppercase tracking-[0.4em] font-black text-stone-950 mb-6 border-b-4 border-stone-950 pb-2 inline-block">The Story</h4>
                  <p className="text-stone-950 font-black leading-relaxed text-2xl italic tracking-tight">
                    {selectedProject.detailedDescription || "This project represents our commitment to architectural purity and functional elegance."}
                  </p>
                </div>
                {selectedProject.materials && (
                  <div>
                    <h4 className="text-[14px] uppercase tracking-[0.4em] font-black text-stone-950 mb-6 border-b-4 border-stone-950 pb-2 inline-block">Palette & Materials</h4>
                    <div className="flex flex-wrap gap-4">
                      {selectedProject.materials.map((m, i) => (
                        <span key={i} className="px-5 py-3 bg-stone-950 text-white text-[11px] uppercase tracking-[0.3em] font-black rounded-xl shadow-lg">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="h-40"></div>
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;