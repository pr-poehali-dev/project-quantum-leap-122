import { useState } from "react";
import Hero from "./Hero";
import WorksGrid from "./WorksGrid";
import About from "./About";
import Contact from "./Contact";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-black/80 backdrop-blur-md border-b border-white/5">
        <span className="text-sm tracking-[0.3em] uppercase text-white/50 font-light">
          Portfolio
        </span>
        <div className="flex gap-8">
          {["Works", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm tracking-widest uppercase text-white/40 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <Hero />
      <WorksGrid activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <About />
      <Contact />

      <footer className="py-8 text-center border-t border-white/5">
        <p className="text-white/20 text-xs tracking-widest uppercase">
          © 2026 — All rights reserved
        </p>
      </footer>
    </div>
  );
}
