import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, FileText } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About MSC', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Global Network', href: '#network' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-950/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center group relative z-50">
            <img src="/assets/logo.png" alt="MSC Logo" className="h-20 md:h-40 object-contain hover:scale-105 transition-transform" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <a href="#contact" className="text-white flex items-center gap-2 hover:text-gold-500 transition-colors text-sm font-semibold">
                <PhoneCall size={16} />
                <span>24/7 Support</span>
              </a>
              <a href="#catalog" className="bg-gold-500 hover:bg-gold-400 text-navy-950 px-5 py-2.5 rounded-sm font-bold text-sm transition-colors flex items-center gap-2">
                <FileText size={16} />
                Request Catalog
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-950 shadow-xl border-t border-navy-800">
          <ul className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-gray-300 hover:text-white block py-2 text-lg font-medium border-b border-navy-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4 flex flex-col gap-3">
              <a href="#catalog" className="bg-gold-500 text-navy-950 px-5 py-3 rounded-sm font-bold text-center flex justify-center items-center gap-2">
                <FileText size={18} />
                Please send your catalog
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
