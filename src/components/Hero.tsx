import { FileText, ArrowRight, Anchor, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-navy-950"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=2874&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/80 to-navy-900/40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Morocco's Premier <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-600">Shipchandling</span> Partner
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              State-of-the-art provisioning for the global maritime industry. From high-quality provisions to critical technical stores, we deliver excellence to vessels across all Moroccan ports.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#catalog" className="group bg-gold-500 hover:bg-gold-400 text-navy-950 px-8 py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center gap-3">
                <FileText size={20} />
                Please send your catalog
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-sm font-bold text-lg transition-all flex items-center justify-center">
                Explore Services
              </a>
            </div>
          </motion.div>

          {/* Quick Stats/Trust Builders */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="bg-navy-800/80 p-3 rounded-sm text-gold-500">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold">24/7 Operations</h4>
                <p className="text-gray-400 text-sm">Always ready to deliver</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-navy-800/80 p-3 rounded-sm text-gold-500">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold">ANP Certified</h4>
                <p className="text-gray-400 text-sm">Full port compliance</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-navy-800/80 p-3 rounded-sm text-gold-500">
                <Anchor size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold">All Moroccan Ports</h4>
                <p className="text-gray-400 text-sm">Comprehensive coverage</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
