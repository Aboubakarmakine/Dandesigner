import { useParams, Link } from 'react-router-dom';
import { categories } from '../data';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CategoryPage() {
  const { id } = useParams();
  const category = categories.find((c) => c.id === id);

  if (!category) return <div className="p-20 text-white font-sans text-center mt-20">Category not found. <br/><br/><Link to="/" className="text-[--color-gold] border-b border-[--color-gold] pb-1 uppercase tracking-widest text-xs font-bold hover:text-white">Return Home</Link></div>;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans pb-32">
      <header className="absolute top-0 left-0 right-0 px-6 md:px-12 py-12 z-50 mix-blend-difference">
         <Link to="/" className="inline-flex items-center gap-3 text-white/50 hover:text-[--color-gold] transition-colors uppercase tracking-[0.2em] text-xs font-bold">
           <ArrowLeft size={16} /> Back to Studio
         </Link>
      </header>

      <section className="relative w-full h-[60vh] flex flex-col justify-end px-6 md:px-12 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img src={category.cover} alt="Cover" className="w-full h-full object-cover brightness-[0.3]" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        </div>
        <motion.div className="relative z-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif text-[--color-gold] mb-6 italic drop-shadow-2xl">{category.title}</h1>
          <div className="w-16 h-[2px] bg-white/20 mb-8"></div>
          <p className="text-base md:text-xl text-white/70 max-w-3xl leading-relaxed font-serif tracking-wide">{category.description}</p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-20">
        {category.photos.map((photo, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.1 }}
            key={i} 
            className={`overflow-hidden border border-white/5 shadow-2xl group ${i === 0 || i === 3 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square'}`}
          >
            <img src={photo} alt={`${category.title} gallery detail ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] cursor-pointer brightness-[0.7] group-hover:brightness-100" />
          </motion.div>
        ))}
      </section>
    </div>
  );
}
