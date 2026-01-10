import React from 'react';

interface FooterProps {
  onNavigate?: (view: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleConsultationClick = () => {
    window.dispatchEvent(new CustomEvent('palm-toggle-consult'));
  };

  const safeNavigate = (view: string) => {
    if (onNavigate) {
      onNavigate(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="col-span-1">
             <div className="flex flex-col mb-8">
                <span className="text-3xl font-black tracking-tighter text-white serif">PALM</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-stone-300 font-black">Interiors</span>
              </div>
              <div className="space-y-6">
                <div>
                  <h5 className="text-[11px] uppercase tracking-widest text-white mb-2 font-black">Kochi Manufacturing & Office</h5>
                  <p className="text-sm leading-relaxed font-black text-white">
                    Oorakath Estate, Bldg No 2/716<br/>
                    Near Varapuzha Bridge, Cheranelloore<br/>
                    Kochi, Kerala - 682034
                  </p>
                </div>
                <div>
                  <h5 className="text-[11px] uppercase tracking-widest text-white mb-2 font-black">Kottayam Office</h5>
                  <p className="text-sm leading-relaxed font-black text-white">
                    Kunnath Agencies, Thuruthy PO,<br/>
                    Changanassery, 686535<br/>
                    Kerala
                  </p>
                </div>
              </div>
              <p className="text-lg font-black text-white mt-8 tracking-tighter">+91 94473 14858</p>
          </div>
          
          <div>
            <h4 className="text-white text-[11px] uppercase tracking-widest font-black mb-8 opacity-90">Service Hubs</h4>
            <ul className="space-y-5 text-sm font-black tracking-widest uppercase text-white">
              <li>Kochi Manufacturing</li>
              <li>Bangalore Studio</li>
              <li>Kottayam Hub</li>
              <li>Trivandrum Operations</li>
              <li 
                onClick={handleConsultationClick}
                className="hover:text-stone-300 transition-colors cursor-pointer border-b-2 border-white/50 pb-1 inline-block"
              >
                Start Consultation
              </li>
            </ul>
            
            <h4 className="text-white text-[11px] uppercase tracking-widest font-black mt-12 mb-8 opacity-90">Company</h4>
            <ul className="space-y-5 text-sm font-black tracking-widest uppercase text-white">
              <li onClick={() => safeNavigate('about')} className="hover:text-stone-300 transition-colors cursor-pointer">About Palm</li>
              <li onClick={() => safeNavigate('philosophy')} className="hover:text-stone-300 transition-colors cursor-pointer">Our Philosophy</li>
              <li onClick={() => safeNavigate('contact')} className="hover:text-stone-300 transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[11px] uppercase tracking-widest font-black mb-8 opacity-90">Newsletter</h4>
            <p className="text-sm mb-6 font-black text-white leading-relaxed">Quarterly architectural insights from Kochi & Bangalore hubs.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-stone-800 border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-white text-white text-xs font-black"
              />
              <button className="absolute right-2 top-2 bg-white text-stone-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-stone-200 transition-colors">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-10 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] font-black text-stone-400">
          <p>© 2024 Palm Interiors Private Ltd. Kochi & Bangalore.</p>
          <div className="mt-6 md:mt-0 flex space-x-12">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;