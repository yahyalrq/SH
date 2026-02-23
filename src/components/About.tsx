import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -left-8 -top-8 w-64 h-64 bg-gold-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-navy-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1577083165243-7f2a74c2eef0?q=80&w=2940&auto=format&fit=crop" 
                alt="MSC Shipchandling Operations" 
                className="w-full object-cover h-[600px]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950 p-8">
                <div className="bg-gold-500 w-16 h-1 mb-4"></div>
                <h3 className="text-2xl font-bold text-white mb-2">Committed to Excellence</h3>
                <p className="text-gray-300">Setting the standard in Moroccan maritime supply.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-3">About MSC</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-navy-950 mb-8 leading-tight">
              Morocco Shipchandling Company
            </h3>
            
            <div className="space-y-6 text-gray-600 text-lg mb-10 leading-relaxed">
              <p>
                Based in Morocco, MSC operates as a premier maritime supply partner across the nation's strategic ports. We are fully authorized by the ANP (Agence Nationale des Ports) to handle comprehensive ship provisioning.
              </p>
              <p>
                Our logistics network integrates cold chain transport, extensive warehousing, and a rapid-response delivery fleet. This ensures that whether your vessel requires delicate perishable goods, critical safety equipment, or heavy technical spares, MSC delivers on time, in full compliance with international maritime norms.
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                'Full compliance with ANP and international port regulations',
                'Advanced cold-chain and dry storage facilities',
                'Dedicated fleet for rapid dockside delivery',
                'Highly trained, certified personnel ready 24/7'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-navy-50 text-navy-600 rounded-full p-1">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-navy-900 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="inline-flex items-center gap-3 border-b-2 border-gold-500 pb-1 text-navy-950 font-bold hover:text-gold-600 transition-colors group">
              Speak with our operations team
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-gold-500" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
