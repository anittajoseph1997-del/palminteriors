
import React, { useState, useRef, useEffect } from 'react';
import { getDesignAdvice, generateRoomConcept } from '../services/geminiService';
import { ChatMessage, GeneratedConcept } from '../types';

const AIDesignStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'advisor' | 'generator'>('advisor');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to Palm Studio. I am your lead design assistant. How can I help you architect your perfect space today?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [prompt, setPrompt] = useState('');
  const [concepts, setConcepts] = useState<GeneratedConcept[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isTyping) return;

    const newUserMsg: ChatMessage = { role: 'user', text: userInput };
    setChatMessages(prev => [...prev, newUserMsg]);
    setUserInput('');
    setIsTyping(true);

    try {
      const history = chatMessages.map(m => ({ role: m.role, parts: [{ text: m.text }] }));
      const response = await getDesignAdvice(userInput, history);
      setChatMessages(prev => [...prev, { role: 'model', text: response || 'Connectivity issue. Please try again.' }]);
    } catch (error) {
      setChatMessages(prev => [...prev, { role: 'model', text: 'An error occurred. Please refresh.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleGenerateConcept = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    try {
      const imageUrl = await generateRoomConcept(prompt);
      if (imageUrl) {
        const newConcept: GeneratedConcept = {
          id: Date.now().toString(),
          prompt,
          imageUrl,
          timestamp: Date.now()
        };
        setConcepts(prev => [newConcept, ...prev]);
        setPrompt('');
      }
    } catch (error) {
      alert('Generation failed.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-stone-400 mb-4 block">Interactive Design</span>
        <h2 className="text-5xl font-bold text-stone-900 mb-4 serif">Palm Studio</h2>
        <p className="text-stone-500 font-light">Leverage generative intelligence to explore concepts and technical advice.</p>
      </div>

      <div className="bg-white rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-stone-100 overflow-hidden flex flex-col md:flex-row h-[750px]">
        {/* Sidebar */}
        <div className="w-full md:w-72 bg-stone-50 border-r border-stone-200 p-8 flex flex-col">
          <button 
            onClick={() => setActiveTab('advisor')}
            className={`flex items-center space-x-4 p-5 rounded-2xl transition-all mb-4 ${activeTab === 'advisor' ? 'bg-white shadow-xl text-stone-900 font-bold' : 'text-stone-400 hover:text-stone-600'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            <span className="text-sm uppercase tracking-widest">Assistant</span>
          </button>
          <button 
            onClick={() => setActiveTab('generator')}
            className={`flex items-center space-x-4 p-5 rounded-2xl transition-all ${activeTab === 'generator' ? 'bg-white shadow-xl text-stone-900 font-bold' : 'text-stone-400 hover:text-stone-600'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h14a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <span className="text-sm uppercase tracking-widest">Generator</span>
          </button>
          
          <div className="mt-auto">
             <div className="p-6 bg-stone-900 rounded-3xl text-white">
                <p className="text-[10px] uppercase tracking-[0.2em] mb-4 opacity-50 font-bold">Project ID: P-2024-01</p>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                  <span className="text-xs font-semibold">Ready for input</span>
                </div>
             </div>
          </div>
        </div>

        {/* Workspace */}
        <div className="flex-1 flex flex-col bg-white">
          {activeTab === 'advisor' ? (
            <div className="flex-1 flex flex-col h-full">
              <div className="flex-1 overflow-y-auto p-10 space-y-8">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-6 rounded-3xl ${
                      msg.role === 'user' 
                      ? 'bg-stone-900 text-white rounded-tr-none' 
                      : 'bg-stone-100 text-stone-800 rounded-tl-none font-light'
                    }`}>
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-stone-100 p-6 rounded-3xl rounded-tl-none">
                      <div className="flex space-x-2">
                        <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
              <div className="p-8 border-t border-stone-100">
                <form onSubmit={handleSendMessage} className="flex space-x-4">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Enter your design query..."
                    className="flex-1 px-8 py-5 rounded-full bg-stone-50 border-none focus:ring-2 focus:ring-stone-900 transition-all text-sm"
                  />
                  <button 
                    type="submit"
                    disabled={isTyping}
                    className="bg-stone-900 text-white w-16 h-16 rounded-full flex items-center justify-center hover:bg-stone-800 transition-all disabled:opacity-50 shadow-xl shadow-stone-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col h-full overflow-hidden">
               <div className="p-10 border-b border-stone-100">
                 <form onSubmit={handleGenerateConcept} className="space-y-6">
                   <div className="relative">
                      <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Define your architectural vision (e.g., 'A double-height industrial living space with exposed concrete and warm oak accents...')"
                        className="w-full px-8 py-6 rounded-[32px] bg-stone-50 border-none focus:ring-2 focus:ring-stone-900 transition-all resize-none h-32 text-sm leading-relaxed"
                      />
                   </div>
                   <button 
                    type="submit"
                    disabled={isGenerating || !prompt}
                    className="w-full bg-stone-900 text-white py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-stone-800 transition-all disabled:opacity-50 flex items-center justify-center space-x-3 shadow-2xl shadow-stone-200"
                   >
                     {isGenerating ? (
                       <>
                         <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                         <span>Architecting Vision...</span>
                       </>
                     ) : (
                       <>
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                         <span>Generate Architectural Concept</span>
                       </>
                     )}
                   </button>
                 </form>
               </div>
               
               <div className="flex-1 overflow-y-auto p-10 bg-[#FCFBFA]">
                  {concepts.length === 0 && !isGenerating ? (
                    <div className="h-full flex flex-col items-center justify-center text-stone-300">
                      <svg className="w-20 h-20 mb-6 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h14a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      <p className="text-center font-medium uppercase tracking-[0.2em] text-[10px]">Vault is empty</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-12">
                       {concepts.map((c) => (
                         <div key={c.id} className="bg-white rounded-[32px] overflow-hidden shadow-2xl border border-stone-100 group">
                           <div className="relative aspect-video">
                              <img src={c.imageUrl} alt={c.prompt} className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button className="bg-white text-stone-900 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-2xl scale-90 group-hover:scale-100 transition-all">
                                   Download High-Res
                                </button>
                              </div>
                           </div>
                           <div className="p-8">
                              <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">Architectural Prompt</p>
                              <p className="text-stone-800 text-sm italic font-light leading-relaxed">"{c.prompt}"</p>
                           </div>
                         </div>
                       ))}
                    </div>
                  )}
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIDesignStudio;
