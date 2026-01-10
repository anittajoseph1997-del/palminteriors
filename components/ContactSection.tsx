import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-sm uppercase tracking-[0.3em] font-black text-stone-950 mb-6 block">Inquire</span>
            <h2 className="text-5xl md:text-6xl font-black text-stone-950 mb-10 serif leading-tight">Let’s architect your <br/><span className="italic">next project.</span></h2>
            
            <div className="space-y-12">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div>
                   <h4 className="text-xs uppercase tracking-widest font-black text-white mb-4 bg-stone-950 inline-block px-3 py-1.5 rounded-md shadow-sm">Kochi (Manufacturing Unit & Office)</h4>
                   <p className="text-lg font-black text-stone-950 leading-relaxed">
                     Oorakath Estate, Bldg No 2/716<br/>
                     Near Varapuzha Bridge, Cheranelloore<br/>
                     Kochi, Kerala - 682034
                   </p>
                 </div>
                 <div>
                   <h4 className="text-xs uppercase tracking-widest font-black text-white mb-4 bg-stone-950 inline-block px-3 py-1.5 rounded-md shadow-sm">Kottayam Office</h4>
                   <p className="text-lg font-black text-stone-950 leading-relaxed">
                     Kunnath Agencies, Thuruthy PO,<br/>
                     Changanassery, 686535<br/>
                     Kerala
                   </p>
                 </div>
               </div>
               
               <div className="flex flex-col md:flex-row gap-12 md:gap-16 border-t-2 border-stone-200 pt-10">
                 <div>
                   <h4 className="text-xs uppercase tracking-widest font-black text-stone-950 mb-4">Direct Line</h4>
                   <p className="text-3xl font-black text-stone-950 tracking-tighter">+91 94473 14858</p>
                 </div>
                 <div>
                   <h4 className="text-xs uppercase tracking-widest font-black text-stone-950 mb-4">Email</h4>
                   <p className="text-3xl font-black text-stone-950 tracking-tighter">info@palminteriors.com</p>
                 </div>
               </div>

               <div className="bg-stone-50 p-8 rounded-3xl border-4 border-stone-200 shadow-lg">
                 <h4 className="text-xs uppercase tracking-widest font-black text-stone-950 mb-6 border-b-2 border-stone-200 pb-2">Strategic Locations</h4>
                 <div className="flex flex-col gap-y-5">
                   <p className="text-sm font-black text-stone-950 flex items-center">
                     <span className="w-3 h-3 bg-stone-950 rounded-full mr-3"></span>
                     Kochi: Central Manufacturing & Design Hub
                   </p>
                   <p className="text-sm font-black text-stone-950 flex items-center">
                     <span className="w-3 h-3 bg-stone-950 rounded-full mr-3"></span>
                     Kottayam: Executive Client Hub
                   </p>
                   <p className="text-sm font-black text-stone-950 flex items-center">
                     <span className="w-3 h-3 bg-stone-950 rounded-full mr-3"></span>
                     Bangalore: Urban Project Management
                   </p>
                 </div>
               </div>
            </div>
          </div>

          <div className="bg-stone-50 p-12 rounded-[40px] shadow-2xl border-2 border-stone-200">
            <h3 className="text-2xl font-black text-stone-950 mb-8 serif">Request a Consultation</h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest font-black text-stone-950">Your Name</label>
                   <input type="text" className="w-full bg-white border-2 border-stone-200 rounded-xl px-4 py-4 focus:border-stone-950 focus:outline-none text-sm font-black" placeholder="Full Name" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest font-black text-stone-950">Email Address</label>
                   <input type="email" className="w-full bg-white border-2 border-stone-200 rounded-xl px-4 py-4 focus:border-stone-950 focus:outline-none text-sm font-black" placeholder="email@domain.com" />
                 </div>
               </div>

               <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-black text-stone-950">Primary Hub</label>
                 <select className="w-full bg-white border-2 border-stone-200 rounded-xl px-4 py-4 focus:border-stone-950 focus:outline-none text-sm font-black appearance-none">
                    <option>Kochi Manufacturing Hub</option>
                    <option>Kottayam Office</option>
                    <option>Bangalore Studio</option>
                    <option>Trivandrum / Other</option>
                 </select>
               </div>

               <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-black text-stone-950">Project Brief</label>
                 <textarea className="w-full bg-white border-2 border-stone-200 rounded-xl px-4 py-4 focus:border-stone-950 focus:outline-none text-sm font-black h-32 resize-none" placeholder="Briefly describe your space..."></textarea>
               </div>

               <button className="w-full bg-stone-950 text-white py-6 rounded-full text-xs uppercase tracking-[0.4em] font-black hover:bg-stone-800 transition-all shadow-2xl">
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