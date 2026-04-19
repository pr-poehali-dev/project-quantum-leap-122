export default function About() {
  const stats = [
    { value: "50+", label: "Projects" },
    { value: "8", label: "Years" },
    { value: "3", label: "Formats" },
    { value: "∞", label: "Ideas" },
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-white/30 tracking-[0.4em] uppercase text-xs mb-6">About</p>
          <h2
            className="text-5xl font-black uppercase leading-tight mb-8"
            style={{ fontFamily: "'Play', sans-serif" }}
          >
            Art for
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)" }}
            >
              Every Format
            </span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed mb-6">
            I create artwork for physical music formats — vinyl records, CDs, and cassettes. 
            Each piece is designed to exist as both visual art and functional packaging.
          </p>
          <p className="text-white/25 text-base leading-relaxed">
            Drawing from ukiyo-e tradition, street art, and contemporary digital aesthetics, 
            my work bridges centuries of visual culture through the lens of recorded sound.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px bg-white/5">
          {stats.map((s) => (
            <div key={s.label} className="bg-black p-10 flex flex-col">
              <span
                className="text-6xl font-black text-white mb-2"
                style={{ fontFamily: "'Play', sans-serif" }}
              >
                {s.value}
              </span>
              <span className="text-white/30 text-xs tracking-widest uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
