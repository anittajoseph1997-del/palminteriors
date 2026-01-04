
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-stone-400 mb-6 block">Inquire</span>
            <h2 className="text-5xl font-bold text-stone-900 mb-10 serif">Let’s architect your <br/><span className="italic">next project.</span></h2>
            
            <div className="space-y-12">
               <div>
                 <h4 className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-4">The Studio</h4>
                 <p className="text-xl font-light text-stone-700">Kunnath Agencies, Thuruthy, <br/>Kottayam, Kerala - 686535</p>
               </div>
               
               <div className="flex flex-col md:flex-row gap-12 md:gap-16">
                 <div>
                   <h4 className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-4">Call</h4>
                   <p className="text-xl font-light text-stone-700">+91 94473 14858</p>
                 </div>
                 <div>
                   <h4 className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-4">Email</h4>
                   <p className="text-xl font-light text-stone-700">info@palminteriors.com</p>
                 </div>
               </div>

               <div>
                 <h4 className="text-xs uppercase tracking-widest font-bold text-stone-400 mb-4">Consultation Hours</h4>
                 <p className="text-sm font-light text-stone-500">Mon — Sat: 09:30 — 18:30 <br/>Sun: Closed</p>
               </div>
            </div>
          </div>

          <div className="bg-[#F9F8F6] p-12 rounded-[40px] shadow-2xl shadow-stone-100">
            <form className="space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Your Name</label>
                   <input type="text" className="w-full bg-transparent border-b border-stone-200 py-3 focus:border-stone-900 focus:outline-none text-sm transition-all" placeholder="John Doe" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Email Address</label>
                   <input type="email" className="w-full bg-transparent border-b border-stone-200 py-3 focus:border-stone-900 focus:outline-none text-sm transition-all" placeholder="john@company.com" />
                 </div>
               </div>

               <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Project Type</label>
                 <select className="w-full bg-transparent border-b border-stone-200 py-3 focus:border-stone-900 focus:outline-none text-sm transition-all">
                    <option>Residential Villa</option>
                    <option>Commercial Office</option>
                    <option>Retail / Showroom</option>
                    <option>Hospitality</option>
                    <option>Other</option>
                 </select>
               </div>

               <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Message</label>
                 <textarea className="w-full bg-transparent border-b border-stone-200 py-3 focus:border-stone-900 focus:outline-none text-sm transition-all h-32 resize-none" placeholder="Tell us about your project..."></textarea>
               </div>

               <button className="w-full bg-stone-900 text-white py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-stone-800 transition-all shadow-xl shadow-stone-200">
                 Send Inquiry
               </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
