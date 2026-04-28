import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'border-b border-white/10 bg-black/65 py-4 backdrop-blur-xl' : 'bg-transparent py-7'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-12">
        <a href="/" className="font-serif text-xl tracking-[0.18em] text-white md:text-2xl">
          DAN T
        </a>
        <nav className="hidden gap-10 font-sans text-[11px] uppercase tracking-[0.23em] md:flex">
          <a href="#work" className="text-white/85 transition-colors hover:text-[--color-gold]">
            Work
          </a>
          <a href="#studio" className="text-white/85 transition-colors hover:text-[--color-gold]">
            Studio
          </a>
          <a href="#about" className="text-white/85 transition-colors hover:text-[--color-gold]">
            About
          </a>
          <a href="#contact" className="text-white/85 transition-colors hover:text-[--color-gold]">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
