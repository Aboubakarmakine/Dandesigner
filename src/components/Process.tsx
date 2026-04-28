import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Insight', desc: 'Plunging deep into the core of your brand to unearth its fundamental truth and aesthetic potential.' },
  { num: '02', title: 'Action', desc: 'Translating strategy into striking visual vernacular through rigorous design exploration and craft.' },
  { num: '03', title: 'Impact', desc: 'Deploying the final experience with meticulous precision to captivate and convert.' }
];

export default function Process() {
  return (
    <section className="py-40 px-6 lg:px-12 max-w-7xl mx-auto my-32">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-7xl lg:text-[7rem] leading-[1.1]"
        >
          Our<br/><span className="text-[--color-gold] italic pr-4">Process</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-[10px] tracking-[0.4em] uppercase text-white/50 max-w-xs leading-relaxed md:pb-6"
        >
          A methodical approach designed to distill complexity into pure visual elegance.
        </motion.p>
      </div>

      <div className="space-y-0 text-white">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="group relative"
          >
            {/* The expanding border line */}
            <motion.div 
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1, transition: { duration: 1.2, ease: [0.165, 0.84, 0.44, 1] } }
              }}
              className="absolute top-0 left-0 w-full h-[1px] bg-white/10 origin-left"
            ></motion.div>

            <div className="py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-center cursor-pointer hover:bg-white/[0.02] transition-colors duration-500 px-4 md:px-0">
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="col-span-1 md:col-span-2 font-serif text-4xl md:text-5xl text-white/20 group-hover:text-[--color-gold] transition-colors duration-500 italic"
              >
                {step.num}
              </motion.div>
              
              <motion.div 
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
                className="col-span-1 md:col-span-5 font-serif text-4xl md:text-6xl group-hover:translate-x-8 transition-transform duration-700 ease-[cubic-bezier(0.165,0.84,0.44,1)]"
              >
                {step.title}
              </motion.div>
              
              <motion.div 
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } } }}
                className="col-span-1 md:col-span-5 text-lg md:text-2xl font-serif italic text-white/60 leading-relaxed md:pl-12"
              >
                {step.desc}
              </motion.div>
            </div>
            {/* Bottom line for the last item */}
            {i === steps.length - 1 && (
              <motion.div 
                variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1.2, delay: 0.5, ease: [0.165, 0.84, 0.44, 1] } } }}
                className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 origin-left"
              ></motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
