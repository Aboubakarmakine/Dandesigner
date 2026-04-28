import { motion } from 'framer-motion';

export default function Manifesto() {
  const words = "We believe in the immersive power of visual storytelling to elevate brands beyond the ordinary. Our bespoke approach combines rigorous strategy with avant-garde aesthetics to craft undeniable digital presences.".split(" ");

  return (
    <section className="py-40 px-6 lg:px-12 max-w-7xl mx-auto relative" id="studio">
      <div className="absolute right-0 top-32 w-64 md:w-96 aspect-[3/4] opacity-40 hidden md:block overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2, y: 50 }}
          whileInView={{ scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.5, ease: [0.165, 0.84, 0.44, 1] }}
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1600" 
          className="w-full h-full object-cover grayscale mix-blend-lighten" 
          alt="texture" 
        />
      </div>
      
      <p className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.3] max-w-5xl z-10 relative mix-blend-difference">
        {words.map((word, i) => (
          <span className="inline-block overflow-hidden mr-3 md:mr-6 mb-3 md:mb-5" key={i}>
            <motion.span
              className="inline-block"
              initial={{ y: '100%', rotate: 8 }}
              whileInView={{ y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.04, ease: [0.165, 0.84, 0.44, 1] }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </p>
      
      <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/10 pt-20">
        {[
          { title: 'Vision', desc: 'Crafting timeless visual identities that resonate deeply.' },
          { title: 'Precision', desc: 'Executing with meticulous attention to every pixel and typography.' },
          { title: 'Emotion', desc: 'Evoking feelings and desire through deliberate luxury design.' }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
          >
            <h4 className="font-sans text-[10px] tracking-[0.4em] uppercase text-[--color-gold] mb-6">{item.title}</h4>
            <p className="font-serif text-2xl lg:text-3xl text-white/70 italic leading-snug">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
