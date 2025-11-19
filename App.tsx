import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import AIPlanner from './components/AIPlanner';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-manduri-50 font-sans">
      <Navigation />
      <main>
        <Hero />
        <Features />
        
        <section id="gallery" className="py-0">
           <div className="grid grid-cols-2 md:grid-cols-4 h-96 md:h-[600px]">
             <div className="relative group overflow-hidden">
               <img src="https://picsum.photos/800/1200?random=10" alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
             </div>
             <div className="relative group overflow-hidden">
               <img src="https://picsum.photos/800/1200?random=11" alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
             </div>
             <div className="relative group overflow-hidden">
               <img src="https://picsum.photos/800/1200?random=12" alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
             </div>
             <div className="relative group overflow-hidden">
               <img src="https://picsum.photos/800/1200?random=13" alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
             </div>
           </div>
        </section>

        <AIPlanner />
      </main>
      <Footer />
    </div>
  );
};

export default App;
