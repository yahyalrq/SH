import { Anchor } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-950 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center mb-6">
              <img src="/assets/logo.png" alt="MSC Logo" className="h-24 object-contain brightness-0 invert opacity-90" />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 mt-4">
              State-of-the-art shipchandling services operating under international norms, delivering excellence across all Moroccan ports.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Provisions & Food</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Technical Stores</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Lubricants & Chemicals</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Safety Equipment</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Bonded Stores</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">About MSC</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">ANP Compliance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Sustainability</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gold-500 transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Port Coverage</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <span className="w-1 h-1 bg-gold-500 rounded-full"></span> Safi
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <span className="w-1 h-1 bg-gold-500 rounded-full"></span> Casablanca
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <span className="w-1 h-1 bg-gold-500 rounded-full"></span> Tangier
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <span className="w-1 h-1 bg-gold-500 rounded-full"></span> Agadir
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-2">
                <span className="w-1 h-1 bg-gold-500 rounded-full"></span> Jorf Lasfar
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Morocco Shipchandling Company (MSC). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
