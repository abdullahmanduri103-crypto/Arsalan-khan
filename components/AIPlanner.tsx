import React, { useState } from 'react';
import { Sparkles, Loader2, Map, Sun, Clock } from 'lucide-react';
import { generateManduriGuide } from '../services/geminiService';
import { LoadingState, TravelPlan } from '../types';

const AIPlanner: React.FC = () => {
  const [interest, setInterest] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [plan, setPlan] = useState<TravelPlan | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePlan = async () => {
    if (!interest.trim()) return;
    
    setStatus(LoadingState.LOADING);
    setError(null);
    setPlan(null);

    try {
      const result = await generateManduriGuide(interest);
      setPlan(result);
      setStatus(LoadingState.SUCCESS);
    } catch (err) {
      setError("Failed to connect to the Spirit of Manduri. Please try again.");
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section id="planner" className="py-24 bg-manduri-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-manduri-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Input Section */}
          <div>
            <div className="inline-flex items-center gap-2 text-gold-400 mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="uppercase tracking-widest text-sm font-semibold">AI Concierge</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-cinzel text-white mb-6">
              Ask the Spirit of Manduri
            </h2>
            <p className="text-gray-300 mb-10 leading-relaxed">
              Not sure where to begin? Tell us what you love—be it history, food, adventure, or silence—and our AI guide will craft a perfect day for you in Manduri.
            </p>

            <div className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm">
              <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">What seeks your heart?</label>
              <div className="flex gap-2">
                <input 
                  type="text"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  placeholder="e.g., 'Romantic sunset dinner' or 'Hiking ancient trails'"
                  className="flex-1 bg-manduri-950/50 border border-manduri-700 text-white px-4 py-3 rounded focus:outline-none focus:border-gold-400 transition-colors"
                  onKeyDown={(e) => e.key === 'Enter' && handlePlan()}
                />
                <button 
                  onClick={handlePlan}
                  disabled={status === LoadingState.LOADING || !interest.trim()}
                  className="bg-gold-400 hover:bg-gold-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-manduri-950 px-6 py-3 rounded font-semibold transition-colors flex items-center justify-center min-w-[120px]"
                >
                  {status === LoadingState.LOADING ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    "Reveal"
                  )}
                </button>
              </div>
              {error && <p className="text-red-400 mt-3 text-sm">{error}</p>}
            </div>

            {/* Quick Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['Wine Tasting', 'Hidden Beaches', 'Temple Runs', 'Local Cuisine'].map(tag => (
                <button 
                  key={tag}
                  onClick={() => setInterest(tag)}
                  className="text-xs text-manduri-300 border border-manduri-700 px-3 py-1 rounded-full hover:border-gold-400 hover:text-gold-400 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-white text-manduri-900 rounded-lg p-8 shadow-2xl min-h-[400px] flex flex-col justify-center relative overflow-hidden">
            {!plan && status !== LoadingState.LOADING && (
              <div className="text-center text-manduri-400 opacity-60">
                <Map className="w-16 h-16 mx-auto mb-4" />
                <p className="font-cinzel text-xl">Your journey awaits...</p>
              </div>
            )}

            {status === LoadingState.LOADING && (
              <div className="text-center animate-pulse">
                <Sun className="w-16 h-16 mx-auto mb-4 text-gold-400 animate-[spin_3s_linear_infinite]" />
                <p className="font-cinzel text-xl text-manduri-600">Consulting the stars...</p>
              </div>
            )}

            {plan && status === LoadingState.SUCCESS && (
              <div className="animate-[fadeIn_0.5s_ease-out]">
                <div className="border-b border-manduri-100 pb-4 mb-6">
                  <h3 className="text-2xl font-cinzel font-bold text-manduri-800">{plan.title}</h3>
                  <p className="text-gold-500 italic mt-1 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> {plan.vibe}
                  </p>
                </div>

                <div className="space-y-6 max-h-[400px] overflow-y-auto no-scrollbar pr-2">
                  {plan.schedule.map((item, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-manduri-300 rounded-full group-hover:bg-gold-400 transition-colors mt-1.5"></div>
                        <div className="w-0.5 h-full bg-manduri-100 flex-1 my-1 group-last:hidden"></div>
                      </div>
                      <div className="pb-2">
                        <span className="text-xs font-bold text-manduri-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                          <Clock className="w-3 h-3" /> {item.time}
                        </span>
                        <h4 className="font-bold text-lg text-manduri-800 mb-1">{item.activity}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIPlanner;
