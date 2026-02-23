import { Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
        <svg width="800" height="800" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 22h20L12 2z" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-5/12">
            <h2 className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-3">Get in Touch</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8">Ready to supply your vessel?</h3>
            <p className="text-gray-400 text-lg mb-12">
              Contact MSC today for immediate assistance. Our operations team is on standby 24/7 to process your requisitions and provide our comprehensive catalog.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="bg-navy-800 p-4 rounded-sm text-gold-500 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">24/7 Operations Desk</h4>
                  <p className="text-gray-400">+212 (0) 5XX XX XX XX</p>
                  <p className="text-gray-400">operations@moroccoshipchandling.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-navy-800 p-4 rounded-sm text-gold-500 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Headquarters</h4>
                  <p className="text-gray-400">Port of Safi, Zone Industrielle</p>
                  <p className="text-gray-400">Safi, Morocco</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-7/12"
            id="catalog"
          >
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-400 to-gold-600"></div>
              
              <h3 className="text-3xl font-bold text-navy-950 mb-2">Request Catalog & Quote</h3>
              <p className="text-gray-600 mb-8">Fill out the form below to receive our full provisions and technical catalog.</p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-navy-900 mb-2">Vessel Name</label>
                    <input type="text" className="w-full border-b-2 border-gray-200 py-3 bg-transparent focus:outline-none focus:border-gold-500 transition-colors" placeholder="e.g. MV Atlantic" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy-900 mb-2">IMO Number</label>
                    <input type="text" className="w-full border-b-2 border-gray-200 py-3 bg-transparent focus:outline-none focus:border-gold-500 transition-colors" placeholder="IMO 1234567" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-navy-900 mb-2">Contact Name / Title</label>
                    <input type="text" className="w-full border-b-2 border-gray-200 py-3 bg-transparent focus:outline-none focus:border-gold-500 transition-colors" placeholder="Captain / Chief Engineer" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy-900 mb-2">Email Address</label>
                    <input type="email" className="w-full border-b-2 border-gray-200 py-3 bg-transparent focus:outline-none focus:border-gold-500 transition-colors" placeholder="email@company.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Message / Requisition Details</label>
                  <textarea rows={4} className="w-full border-b-2 border-gray-200 py-3 bg-transparent focus:outline-none focus:border-gold-500 transition-colors resize-none" placeholder="We are arriving at Safi Port on..."></textarea>
                </div>

                <button type="button" className="w-full bg-navy-950 hover:bg-navy-900 text-white font-bold py-4 rounded-sm flex justify-center items-center gap-3 transition-colors group">
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  Please send your catalog
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
