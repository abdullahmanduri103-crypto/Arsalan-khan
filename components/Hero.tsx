import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Manduri Landscapes" 
          className="w-full h-full object-cover scale-110 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-manduri-950/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-gold-400 text-sm md:text-base tracking-[0.4em] uppercase mb-4 animate-[fadeInDown_1s_ease-out]">
          The Hidden Sanctuary
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-cinzel font-bold text-white tracking-widest mb-8 animate-[fadeInUp_1s_ease-out]">
          MANDURI
        </h1>
        <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10 animate-[fadeIn_1.5s_ease-out_0.5s_both]">
          Where ancient heritage meets the whisper of the wind. 
          Discover a timeless journey beyond the horizon.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeIn_2s_ease-out_1s_both]">
          <a 
            href="#discover" 
            className="px-8 py-3 border border-white/30 text-white hover:bg-white hover:text-manduri-900 transition-all duration-300 uppercase tracking-wider text-sm"
          >
            Explore
          </a>
          <a 
            href="#planner" 
            className="px-8 py-3 bg-gold-400 text-manduri-900 hover:bg-gold-500 transition-all duration-300 uppercase tracking-wider text-sm font-semibold"
          >
            Plan with AI
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-white/50 w-8 h-8" />
      </div>
    </header>
  );
};

export default Hero;
