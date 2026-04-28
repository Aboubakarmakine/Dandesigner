import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function FeaturedFilm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section ref={containerRef} className="relative h-[120vh] w-full overflow-hidden mt-20" id="studio">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[140%] -top-[20%]">
        <div className="absolute inset-0 bg-black/30 z-10 mix-blend-overlay"></div>
        {/* Grain specific to this section to enhance film look */}
        <div className="absolute inset-0 z-20 opacity-20 pointer-events-none noise-overlay"></div>
        <img 
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2940&auto=format&fit=crop" 
          alt="Featured Editorial Film" 
          className="w-full h-full object-cover grayscale-[40%] contrast-125"
        />
      </motion.div>
      <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-20%" }}
           transition={{ duration: 1.4, ease: [0.165, 0.84, 0.44, 1] }}
        >
          <h2 className="font-serif text-5xl md:text-8xl italic text-white/90 drop-shadow-2xl">
            Cinematic
          </h2>
          <p className="font-sans text-xs tracking-[0.4em] uppercase mt-8 text-[--color-gold] bg-black/40 px-6 py-2 backdrop-blur-sm inline-block border border-white/10 rounded-full">
            Visual Storytelling
          </p>
        </motion.div>
      </div>
    </section>
  );
}
