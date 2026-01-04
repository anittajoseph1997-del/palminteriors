
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
             <div className="flex flex-col mb-8">
                <span className="text-3xl font-bold tracking-tighter text-white serif">PALM</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-stone-500 font-bold">Interiors</span>
              </div>
              <p className="text-sm leading-relaxed mb-8 font-light">
                Kunnath Agencies, Thuruthy, <br/>Kottayam, Kerala - 686535
              </p>
              <p className="text-xs font-bold text-white mb-6">+91 94473 14858</p>
              <div className="flex space-x-6">
                {['INSTAGRAM', 'LINKEDIN', 'BEHANCE'].map(i => (
                  <span key={i} className="text-[10px] tracking-widest font-bold hover:text-white transition-colors cursor-pointer">
                    {i}
                  </span>
                ))}
              </div>
          </div>
          
          <div>
            <h4 className="text-white text-[10px] uppercase tracking-widest font-bold mb-8 opacity-50">Expertise</h4>
            <ul className="space-y-5 text-xs font-semibold tracking-widest uppercase">
              <li className="hover:text-white transition-colors cursor-pointer">Residential</li>
              <li className="hover:text-white transition-colors cursor-pointer">Commercial</li>
              <li className="hover:text-white transition-colors cursor-pointer">Turnkey Execution</li>
              <li className="hover:text-white transition-colors cursor-pointer">Consultation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-widest font-bold mb-8 opacity-50">Support</h4>
            <ul className="space-y-5 text-xs font-semibold tracking-widest uppercase">
              <li className="hover:text-white transition-colors cursor-pointer">Palm Studio</li>
              <li className="hover:text-white transition-colors cursor-pointer">Process Guide</li>
              <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-white transition-colors cursor-pointer">Legal</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-widest font-bold mb-8 opacity-50">Brief</h4>
            <p className="text-xs mb-6 font-light leading-relaxed">Sign up for our quarterly architectural digest.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-stone-800 border-none rounded-full px-6 py-4 focus:ring-1 focus:ring-white text-white text-xs"
              />
              <button className="absolute right-2 top-2 bg-white text-stone-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-stone-200 transition-colors">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-10 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold opacity-30">
          <p>© 2024 Palm Interiors Private Ltd.</p>
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
