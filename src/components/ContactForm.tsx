import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section className="py-40 px-6 lg:px-12 max-w-4xl mx-auto" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.165, 0.84, 0.44, 1] }}
        className="text-center mb-32"
      >
        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[--color-gold] mb-6 block">Inquiries</span>
        <h2 className="font-serif text-5xl md:text-8xl">Let's Create<br/><span className="italic text-white/50">Together</span></h2>
      </motion.div>

      <motion.form 
        className="space-y-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <div className="relative group">
          <input 
            type="text" 
            id="name" 
            required 
            className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-3xl font-serif text-white placeholder-transparent focus:outline-none focus:border-[--color-gold] transition-colors peer"
            placeholder="Name"
          />
          <label htmlFor="name" className="absolute left-0 -top-8 text-[10px] font-sans tracking-[0.3em] text-white/40 uppercase peer-focus:text-[--color-gold] peer-placeholder-shown:top-4 peer-placeholder-shown:text-2xl peer-placeholder-shown:font-serif peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal transition-all duration-300">
            What is your name?
          </label>
        </div>

        <div className="relative group">
          <input 
            type="email" 
            id="email" 
            required 
            className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-3xl font-serif text-white placeholder-transparent focus:outline-none focus:border-[--color-gold] transition-colors peer"
            placeholder="Email"
          />
          <label htmlFor="email" className="absolute left-0 -top-8 text-[10px] font-sans tracking-[0.3em] text-white/40 uppercase peer-focus:text-[--color-gold] peer-placeholder-shown:top-4 peer-placeholder-shown:text-2xl peer-placeholder-shown:font-serif peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal transition-all duration-300">
            What is your email?
          </label>
        </div>

        <div className="relative group">
          <textarea 
            id="message" 
            rows={1}
            required 
            className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-3xl font-serif text-white placeholder-transparent focus:outline-none focus:border-[--color-gold] transition-colors peer resize-none"
            placeholder="Message"
          ></textarea>
          <label htmlFor="message" className="absolute left-0 -top-8 text-[10px] font-sans tracking-[0.3em] text-white/40 uppercase peer-focus:text-[--color-gold] peer-placeholder-shown:top-4 peer-placeholder-shown:text-2xl peer-placeholder-shown:font-serif peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal transition-all duration-300">
            Tell us about your project
          </label>
        </div>

        <div className="pt-12 text-center">
          <button type="submit" className="magnetic-btn group relative inline-flex items-center justify-center font-sans tracking-[0.3em] text-[10px] uppercase px-16 py-8 overflow-hidden">
            <span className="absolute inset-0 border border-white/20 group-hover:border-[--color-gold] transition-colors duration-[0.8s] rounded-full"></span>
            <span className="relative z-10 text-white group-hover:text-[--color-gold] transition-colors duration-[0.8s]">Send Message</span>
          </button>
        </div>
      </motion.form>
    </section>
  );
}
