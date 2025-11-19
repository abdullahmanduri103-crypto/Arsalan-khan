import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-manduri-950 text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-3xl font-cinzel font-bold mb-6">MANDURI</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A sanctuary for the soul. Discover the untold stories of the past and the pristine beauty of nature.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">The Citadel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Coastal Villas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Culinary Tours</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> concierge@manduri.com
              </li>
              <li>+1 (555) 982-1000</li>
              <li>12 Coastal Highway, Manduri Region</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-6">Stay Updated</h4>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 px-4 py-2 rounded text-sm text-white focus:outline-none focus:border-gold-400 transition-colors"
              />
              <button className="bg-white text-manduri-950 px-4 py-2 rounded text-sm font-bold hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Manduri Experience. All rights reserved.</p>
          <div className="flex gap-6">
            <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
