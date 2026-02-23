import { Utensils, Wrench, Droplet, LifeBuoy, PackageOpen, Ship } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Utensils size={32} />,
    title: 'Provisions & Food Stores',
    description: 'Fresh, frozen, and dry provisions complying with international health standards. We operate cold chain logistics to ensure quality from warehouse to vessel.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2874&auto=format&fit=crop'
  },
  {
    icon: <Wrench size={32} />,
    title: 'Technical Stores & Spare Parts',
    description: 'Supply of deck, engine, and cabin stores. Sourcing critical spare parts globally to ensure your vessel operates without delay.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop'
  },
  {
    icon: <Droplet size={32} />,
    title: 'Lubricants & Chemicals',
    description: 'Premium marine lubricants, greases, and specialized chemicals sourced from trusted international manufacturers for optimal engine performance.',
    image: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=2787&auto=format&fit=crop'
  },
  {
    icon: <LifeBuoy size={32} />,
    title: 'Safety & Rescue Equipment',
    description: 'SOLAS-approved safety gear, life-saving appliances, fire-fighting equipment, and personal protective gear for crew safety.',
    image: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2944&auto=format&fit=crop'
  },
  {
    icon: <PackageOpen size={32} />,
    title: 'Bonded Stores',
    description: 'Wide selection of bonded stores including international beverages, tobacco, perfumes, and crew welfare items.',
    image: 'https://images.unsplash.com/photo-1587280510058-20623d387349?q=80&w=2940&auto=format&fit=crop'
  },
  {
    icon: <Ship size={32} />,
    title: 'Nautical Equipment',
    description: 'Charts, publications, marine electronics, ropes, hawsers, and general deck equipment required for safe navigation.',
    image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=2940&auto=format&fit=crop'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-3">Comprehensive Supply</h2>
          <h3 className="text-4xl font-bold text-navy-950 mb-6">Our Shipchandling Services</h3>
          <p className="text-gray-600 text-lg">
            MSC operates under strict international norms, offering a complete range of shipchandling services. We hold full ANP (Agence Nationale des Ports) authorization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-10 right-8 bg-navy-950 text-gold-500 p-4 rounded-sm shadow-lg z-20">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-navy-950 mb-4 pr-12">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
