
import React, { useState } from 'react';
import { Project } from '../types.ts';

const PROJECTS: Project[] = [
  { 
    id: '1', 
    title: 'The Monolith Villa', 
    category: 'Residential', 
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200', 
    description: 'Kottayam, Kerala',
    detailedDescription: 'A study in brutalist minimalism softened by tropical surroundings. This 4,500 sq. ft. villa features cast-in-situ concrete walls, expansive glass partitions, and bespoke teak wood joinery manufactured in our own facility. The design prioritizes natural cross-ventilation and a seamless indoor-outdoor flow.',
    materials: ['Exposed Concrete', 'Kiln-dried Teak', 'Italian Statuario Marble', 'Black Powder-coated Aluminum'],
    testimonial: {
      quote: "Palm Interiors transformed our abstract vision into a living masterpiece. Their in-house manufacturing made all the difference in the custom furniture pieces.",
      author: "Dr. Abraham K."
    }
  },
  { 
    id: '2', 
    title: 'Ethereal Offices', 
    category: 'Commercial', 
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200', 
    description: 'Tech Hub, Bangalore',
    detailedDescription: 'A high-performance workspace designed for a leading AI startup. The brief was to create an environment that fosters creativity while maintaining a sense of calm. We utilized acoustic felt panels and integrated bio-lighting systems to enhance employee well-being.',
    materials: ['Acoustic PET Felt', 'Oak Veneer', 'Frosted Glass', 'Polished Terrazzo'],
    testimonial: {
      quote: "The attention to technical detail and the speed of execution were beyond our expectations. A truly turnkey experience.",
      author: "Siddharth V., CEO"
    }
  },
  { id: '3', title: 'Ivory Loft', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200', description: 'Coastal Retreat' },
  { id: '4', title: 'Noir Studio', category: 'Retail', imageUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1200', description: 'Boutique Fashion' },
  { id: '5', title: 'The Terrace House', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200', description: 'Urban Living' },
  { id: '6', title: 'Zenith Lounge', category: 'Hospitality', imageUrl: 'https://images.unsplash.com/photo-1600566752355-3979ff1040ad?auto=format&fit=crop&q=80&w=1200', description: 'Luxury Dining' },
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
            <h2 className="text-6xl font-light text-stone-900 mb-6 serif tracking-tight">The <span className="italic">Portfolio</span>.</h2>
            <p className="text-stone-400 font-light text-sm tracking-widest uppercase mb-4">A Legacy of 100+ Masterpieces</p>
          </div>
          
          <div className="flex flex-wrap gap-12 border-b border-stone-100 pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] uppercase tracking-[0.4em] font-bold transition-all ${
                  filter === cat ? 'text-stone-900 scale-110' : 'text-stone-300 hover:text-stone-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Film Section */}
        <div className="mb-24 relative aspect-video w-full rounded-[40px] overflow-hidden group cursor-pointer shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=90&w=2400" 
            alt="Feature Project" 
            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-stone-900/20 flex flex-col items-center justify-center">
             <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform group-hover:scale-110">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
             </div>
             <p className="text-white text-[10px] uppercase tracking-[0.6em] mt-8 font-bold opacity-0 group-hover:opacity-100 transition-all">Play Design Film</p>
          </div>
          <div className="absolute bottom-12 left-12">
            <h3 className="text-white text-4xl serif italic">A Glimpse into the Factory</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-10 luxury-transition rounded-sm">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 border border-transparent group-hover:border-stone-100 m-4 transition-all duration-500"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-light text-stone-900 mb-2 serif">{project.title}</h3>
                  <p className="text-stone-400 text-[10px] uppercase tracking-widest font-bold">{project.description}</p>
                </div>
                <span className="text-stone-300 text-[10px] font-medium italic">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 text-center">
          <button className="text-stone-900 text-[10px] uppercase tracking-[0.5em] font-bold border-b border-stone-900 pb-2 hover:opacity-50 transition-all">
            Explore 100+ Case Studies
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-white luxury-transition flex flex-col">
          <div className="sticky top-0 z-10 p-8 flex justify-end">
            <button 
              onClick={() => setSelectedProject(null)}
              className="group flex items-center space-x-4 text-[10px] uppercase tracking-[0.5em] font-bold text-stone-900"
            >
              <span>Close</span>
              <div className="w-10 h-10 border border-stone-200 rounded-full flex items-center justify-center transition-all group-hover:border-stone-900">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
            </button>
          </div>

          <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col lg:flex-row gap-20">
            <div className="lg:w-3/5">
              <div className="aspect-[4/5] rounded-[20px] overflow-hidden shadow-2xl">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:w-2/5 flex flex-col justify-center">
              <span className="text-stone-400 text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">
                {selectedProject.category} • {selectedProject.description}
              </span>
              <h2 className="text-5xl md:text-7xl font-light text-stone-900 mb-10 serif italic tracking-tight">
                {selectedProject.title}
              </h2>
              
              <div className="space-y-12">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-900 mb-6 border-b border-stone-100 pb-2">The Story</h4>
                  <p className="text-stone-600 font-light leading-relaxed text-lg italic">
                    {selectedProject.detailedDescription || "This project represents our commitment to architectural purity and functional elegance, combining bespoke manufacturing with precision site execution."}
                  </p>
                </div>

                {selectedProject.materials && (
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-900 mb-6 border-b border-stone-100 pb-2">Pallete & Materials</h4>
                    <div className="flex flex-wrap gap-4">
                      {selectedProject.materials.map((m, i) => (
                        <span key={i} className="px-4 py-2 bg-stone-50 text-stone-500 text-[10px] uppercase tracking-widest font-bold rounded-full border border-stone-100">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.testimonial && (
                  <div className="bg-stone-50 p-10 rounded-[30px] border border-stone-100 relative overflow-hidden">
                    <div className="absolute top-4 right-8 text-stone-100 text-9xl serif leading-none select-none opacity-50">“</div>
                    <p className="relative z-10 text-stone-800 italic serif text-xl mb-6">
                      "{selectedProject.testimonial.quote}"
                    </p>
                    <p className="relative z-10 text-stone-400 text-[10px] uppercase tracking-[0.4em] font-bold">
                      — {selectedProject.testimonial.author}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-20">
                <button className="bg-stone-900 text-white px-12 py-5 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-stone-800 transition-all shadow-xl shadow-stone-200">
                  Discuss a Similar Project
                </button>
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
