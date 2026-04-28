import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: [0.165, 0.84, 0.44, 1] }}
        className="text-center z-10 px-6"
      >
        <span className="block font-sans text-xs tracking-[0.4em] uppercase text-[--color-gold] mb-8">
          Boutique Design Studio
        </span>
        <h1 className="font-serif text-5xl md:text-8xl lg:text-[9rem] tracking-tight leading-[1.1] mb-8">
          Crafting Visual<br />
          <span className="italic font-light tracking-normal pr-4">Elegance</span>
        </h1>
      </motion.div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="font-sans text-[9px] tracking-[0.4em] uppercase mb-6 opacity-40">Scroll to Explore</span>
        <div className="w-[1px] h-20 bg-white/10 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-[50%] bg-white/60"
            initial={{ y: '-100%' }}
            animate={{ y: '200%' }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          />
        </div>
      </div>
    </section>
  );
}
