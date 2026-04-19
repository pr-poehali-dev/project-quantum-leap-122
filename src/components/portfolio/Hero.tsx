import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

      const imgs = containerRef.current.querySelectorAll<HTMLElement>(".parallax-img");
      imgs.forEach((img, i) => {
        const depth = (i + 1) * 0.3;
        img.style.transform = `translate(${x * depth}px, ${y * depth}px) rotate(${img.dataset.rotate || "0"}deg)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial from-zinc-900 via-black to-black" />

      <img
        src="https://cdn.poehali.dev/projects/8774fd28-1848-4ff9-8e82-cd0013de8cac/bucket/983cf528-16bf-4135-8192-5d55ba14e93c.jpg"
        className="parallax-img absolute left-[-5%] top-[10%] w-[38vw] max-w-[480px] opacity-60 select-none pointer-events-none transition-transform duration-75 ease-out"
        data-rotate="-12"
        style={{ transform: "rotate(-12deg)" }}
        alt=""
        draggable={false}
      />

      <img
        src="https://cdn.poehali.dev/projects/8774fd28-1848-4ff9-8e82-cd0013de8cac/bucket/a14d7bc2-80c3-4e32-9ff4-31a7c462bf8c.jpg"
        className="parallax-img absolute right-[-8%] bottom-[5%] w-[42vw] max-w-[520px] opacity-50 select-none pointer-events-none transition-transform duration-75 ease-out"
        data-rotate="10"
        style={{ transform: "rotate(10deg)" }}
        alt=""
        draggable={false}
      />

      <img
        src="https://cdn.poehali.dev/projects/8774fd28-1848-4ff9-8e82-cd0013de8cac/bucket/aecfb14f-7fb2-472e-832f-edaf5faccb40.jpg"
        className="parallax-img absolute right-[8%] top-[5%] w-[22vw] max-w-[280px] opacity-35 select-none pointer-events-none transition-transform duration-75 ease-out"
        data-rotate="6"
        style={{ transform: "rotate(6deg)" }}
        alt=""
        draggable={false}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-white/30 tracking-[0.5em] uppercase text-xs mb-8 animate-fade-in">
          Creative Direction & Design
        </p>
        <h1 className="text-[clamp(3rem,10vw,9rem)] font-black leading-none tracking-tight uppercase mb-8"
          style={{ fontFamily: "'Play', sans-serif" }}
        >
          Sound
          <br />
          <span className="text-transparent"
            style={{
              WebkitTextStroke: "2px rgba(255,255,255,0.15)",
            }}
          >
            &amp; Vision
          </span>
        </h1>
        <p className="text-white/40 text-lg tracking-wide max-w-md mx-auto mb-12">
          Vinyl. CD. Tape. Art that plays.
        </p>
        <a
          href="#works"
          className="inline-block border border-white/20 text-white/70 hover:text-white hover:border-white/50 px-10 py-3 text-xs tracking-[0.3em] uppercase transition-all duration-300 hover:bg-white/5"
        >
          View Works
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-white/0 to-white/20" />
        <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
