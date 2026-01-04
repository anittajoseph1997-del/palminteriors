
import React, { useState, useEffect, useCallback } from 'react';

const FloatingConsult: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isForcedVisible, setIsForcedVisible] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.documentElement.scrollHeight - 300;
    // FAB is visible if scrolled to bottom OR if it was manually triggered
    setIsVisible(scrollPosition >= threshold || isForcedVisible);
  }, [isForcedVisible]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Listen for global toggle events from Header or Footer
    const handleToggleEvent = () => {
      setIsForcedVisible(true);
      setIsVisible(true);
      setShowPopup(true);
    };

    window.addEventListener('palm-toggle-consult', handleToggleEvent);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('palm-toggle-consult', handleToggleEvent);
    };
  }, [handleScroll]);

  const openWhatsApp = () => {
    window.open('https://wa.me/919447314858', '_blank');
  };

  if (!isVisible && !showPopup) return null;

  return (
    <div className={`fixed bottom-8 right-8 z-[150] transition-all duration-700 ease-in-out ${isVisible || showPopup ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
      
      {/* WhatsApp Popup Card */}
      <div className={`absolute bottom-20 right-0 w-72 bg-white rounded-[32px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] border border-stone-100 p-8 transition-all duration-500 ease-out transform ${showPopup ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95 pointer-events-none'}`}>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-100 ring-4 ring-green-50">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-stone-900 mb-2 serif tracking-tight">Consult on WhatsApp</h3>
          <p className="text-stone-400 text-xs font-bold tracking-[0.2em] mb-8 uppercase">+91 94473 14858</p>
          <button 
            onClick={openWhatsApp}
            className="w-full bg-[#25D366] text-white py-4 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#1ebd5b] transition-all shadow-xl shadow-green-100 flex items-center justify-center space-x-3"
          >
            <span>Message Us</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => setShowPopup(!showPopup)}
        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl overflow-hidden border ${showPopup ? 'bg-stone-50 text-stone-900 border-stone-200' : 'bg-stone-900 text-white border-transparent hover:scale-110'}`}
      >
        {showPopup ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <div className="flex flex-col items-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
          </div>
        )}
      </button>
    </div>
  );
};

export default FloatingConsult;
