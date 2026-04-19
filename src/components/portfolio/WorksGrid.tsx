import { useState } from "react";

const works = [
  {
    id: 1,
    title: "Great Wave — CD Edition",
    category: "cd",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/8774fd28-1848-4ff9-8e82-cd0013de8cac/bucket/aecfb14f-7fb2-472e-832f-edaf5faccb40.jpg",
    tag: "CD Artwork",
    description: "Hokusai meets modern disc culture. Monochrome interpretation.",
  },
  {
    id: 2,
    title: '"This Is It"',
    category: "cd",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/8774fd28-1848-4ff9-8e82-cd0013de8cac/bucket/abfaa561-bc05-4fa0-b6e5-6b9e1fc29054.jpg",
    tag: "CD Artwork",
    description: "Bold typography painted directly on the disc surface.",
  },
  {
    id: 3,
    title: "Wave — Cassette Series",
    category: "cassette",
    year: "2023",
    image: "https://cdn.poehali.dev/projects/8774fd28-1848-4ff9-8e82-cd0013de8cac/bucket/db18abb1-4e12-42c4-9dad-e70a9d63bb1b.jpg",
    tag: "Cassette Art",
    description: "Full-color Hokusai wave wrapping cassette body and case.",
  },
  {
    id: 4,
    title: "Solar Flare — Vinyl",
    category: "vinyl",
    year: "2023",
    image: "https://cdn.poehali.dev/projects/8774fd28-1848-4ff9-8e82-cd0013de8cac/bucket/a14d7bc2-80c3-4e32-9ff4-31a7c462bf8c.jpg",
    tag: "Vinyl",
    description: "Electric blue & red flames emerge from the record's grooves.",
  },
  {
    id: 5,
    title: "Tide — Vinyl Record",
    category: "vinyl",
    year: "2024",
    image: "https://cdn.poehali.dev/projects/8774fd28-1848-4ff9-8e82-cd0013de8cac/bucket/983cf528-16bf-4135-8192-5d55ba14e93c.jpg",
    tag: "Vinyl",
    description: "Kanagawa wave printed onto black vinyl with crimson label.",
  },
];

const filters = [
  { key: "all", label: "All" },
  { key: "vinyl", label: "Vinyl" },
  { key: "cd", label: "CD" },
  { key: "cassette", label: "Cassette" },
];

interface Props {
  activeFilter: string;
  setActiveFilter: (f: string) => void;
}

export default function WorksGrid({ activeFilter, setActiveFilter }: Props) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeFilter === "all" ? works : works.filter((w) => w.category === activeFilter);

  return (
    <section id="works" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
        <div>
          <p className="text-white/30 tracking-[0.4em] uppercase text-xs mb-3">Selected Works</p>
          <h2 className="text-5xl font-black uppercase" style={{ fontFamily: "'Play', sans-serif" }}>
            Projects
          </h2>
        </div>
        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300 border ${
                activeFilter === f.key
                  ? "border-white/60 text-white bg-white/5"
                  : "border-white/10 text-white/30 hover:border-white/30 hover:text-white/60"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
        {filtered.map((work) => (
          <div
            key={work.id}
            className="relative group bg-black overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredId(work.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div
              className={`absolute inset-0 bg-black/80 flex flex-col justify-end p-8 transition-opacity duration-400 ${
                hoveredId === work.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-white/40 text-xs tracking-[0.3em] uppercase mb-2">{work.tag} · {work.year}</span>
              <h3 className="text-2xl font-bold uppercase mb-3" style={{ fontFamily: "'Play', sans-serif" }}>
                {work.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{work.description}</p>
            </div>

            <div className="p-5 border-t border-white/5">
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-sm font-medium">{work.title}</span>
                <span className="text-white/20 text-xs">{work.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
