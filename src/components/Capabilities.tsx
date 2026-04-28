import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  { name: 'Art Direction', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop' },
  { name: 'Brand Identity', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1600' },
  { name: 'Web Experience', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600' },
  { name: 'Editorial Layout', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop' }
];

export default function Capabilities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-40 relative my-20">
      {/* Background images that appear on hover */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10 mix-blend-multiply"></div>
        {services.map((service, idx) => (
          <img 
            key={idx}
            src={service.image} 
            className={`absolute inset-0 w-full h-full object-cover grayscale-[30%] transition-all duration-[1.2s] ease-[cubic-bezier(0.165,0.84,0.44,1)] ${hoveredIndex === idx ? 'opacity-40 scale-100' : 'opacity-0 scale-110'}`} 
            alt={service.name} 
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 mix-blend-difference">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-[10px] tracking-[0.4em] uppercase text-white mb-20 block text-center"
        >
          Studio Capabilities
        </motion.span>
        
        <div className="border-t border-white/10">
          {services.map((service, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              key={idx} 
              className="border-b border-white/10 py-12 md:py-20 group cursor-pointer relative"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex justify-between items-center pl-0 md:pl-12 pr-0 md:pr-12">
                <h3 className="font-serif text-5xl md:text-[5rem] group-hover:italic group-hover:translate-x-12 transition-transform duration-700 ease-[cubic-bezier(0.165,0.84,0.44,1)]">
                  {service.name}
                </h3>
                <span className="font-sans text-sm tracking-[0.3em] text-[--color-gold] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-700 hidden md:block">
                  [ 0{idx + 1} ]
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
