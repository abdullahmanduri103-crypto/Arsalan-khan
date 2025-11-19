import React from 'react';

const features = [
  {
    title: "Ancient Ruins",
    desc: "Walk through the corridors of time in the Old Citadel.",
    img: "https://picsum.photos/600/800?random=1"
  },
  {
    title: "Azure Waters",
    desc: "Pristine coastlines that touch the edge of the world.",
    img: "https://picsum.photos/600/800?random=2"
  },
  {
    title: "Culinary Arts",
    desc: "Flavors forged by centuries of tradition and spice.",
    img: "https://picsum.photos/600/800?random=3"
  }
];

const Features: React.FC = () => {
  return (
    <section id="discover" className="py-24 bg-manduri-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-cinzel text-manduri-900 mb-4">The Essence of Manduri</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
          <p className="mt-6 text-manduri-600 max-w-2xl mx-auto">
            Immerse yourself in a land where every stone tells a story and every breeze carries a legend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative overflow-hidden h-[500px] cursor-pointer">
              <img 
                src={feature.img} 
                alt={feature.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-cinzel text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 font-light">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
