import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const projects = [
  { id: 1, title: 'Lumière', category: 'Editorial', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, title: 'Noire', category: 'Fashion', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop' },
  { id: 3, title: 'Vanguard', category: 'Lookbook', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1600' },
  { id: 4, title: 'Oasis', category: 'Campaign', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600' }
];

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-40 px-6 lg:px-12 max-w-[1400px] mx-auto" id="work">
      <div className="flex justify-between items-end mb-32">
        <h2 className="font-serif text-5xl md:text-7xl text-white">Selected<br/><span className="text-white/40 italic">Works</span></h2>
        <a href="#work" className="font-sans text-xs tracking-[0.2em] uppercase pb-2 border-b border-white/20 hover:border-[--color-gold] hover:text-[--color-gold] transition-colors magnetic-btn">View All</a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className={`relative group cursor-pointer ${index % 2 !== 0 ? 'md:mt-40' : ''}`}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: index * 0.15, ease: [0.165, 0.84, 0.44, 1] }}
          >
            <div className="overflow-hidden bg-white/5 aspect-[3/4] relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-105 grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 mix-blend-difference">
              <AnimatePresence>
                {hoveredProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <h3 className="font-serif text-6xl md:text-8xl text-[--color-gold] tracking-wide mb-2 italic">
                      {project.title}
                    </h3>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="mt-8 flex justify-between items-center text-sm border-t border-white/10 pt-6">
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/50">{(index + 1).toString().padStart(2, '0')}</span>
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/80">{project.category}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
