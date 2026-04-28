import React from 'react';
import CustomCursor from './CustomCursor';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative font-sans text-white bg-[#0a0a0a]">
      <div className="noise-overlay"></div>
      <CustomCursor />
      <Header />
      
      <main>
        {children}
      </main>
      
      <footer className="border-t border-white/10 bg-[#040404] px-6 py-12 text-center text-[10px] uppercase tracking-[0.3em] text-white/45">
        © {new Date().getFullYear()} Dan T Films. All Rights Reserved.
      </footer>
    </div>
  );
}
