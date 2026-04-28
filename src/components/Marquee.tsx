import { motion } from 'framer-motion';

export default function Marquee() {
  return (
    <section className="py-24 overflow-hidden bg-[--color-gold] mb-12 transform -skew-y-2 scale-110">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex font-serif text-6xl md:text-8xl italic text-black uppercase tracking-widest"
        >
          <span className="mx-12">Aesthetics</span> — 
          <span className="mx-12 font-sans tracking-[0.3em] font-light">Innovation</span> — 
          <span className="mx-12">Elegance</span> — 
          <span className="mx-12 font-sans tracking-[0.3em] font-light">Precision</span> — 
          <span className="mx-12">Aesthetics</span> — 
          <span className="mx-12 font-sans tracking-[0.3em] font-light">Innovation</span> — 
          <span className="mx-12">Elegance</span> — 
          <span className="mx-12 font-sans tracking-[0.3em] font-light">Precision</span> — 
        </motion.div>
      </div>
    </section>
  );
}
