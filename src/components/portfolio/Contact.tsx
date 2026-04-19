import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-2xl mx-auto">
        <p className="text-white/30 tracking-[0.4em] uppercase text-xs mb-6 text-center">Contact</p>
        <h2
          className="text-5xl font-black uppercase text-center mb-16"
          style={{ fontFamily: "'Play', sans-serif" }}
        >
          Let's Work
          <br />
          Together
        </h2>

        {sent ? (
          <div className="text-center py-16 border border-white/10">
            <p className="text-white/60 text-lg tracking-wide">Message sent. I'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-px bg-white/5">
            {[
              { name: "name", placeholder: "Your Name", type: "text" },
              { name: "email", placeholder: "Email Address", type: "email" },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required
                value={form[field.name as "name" | "email"]}
                onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                className="w-full bg-black border-0 px-6 py-5 text-white placeholder-white/20 focus:outline-none focus:bg-white/5 transition-colors duration-200 text-sm tracking-wide"
              />
            ))}
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-black border-0 px-6 py-5 text-white placeholder-white/20 focus:outline-none focus:bg-white/5 transition-colors duration-200 text-sm tracking-wide resize-none"
            />
            <button
              type="submit"
              className="w-full bg-white text-black py-5 text-xs tracking-[0.3em] uppercase font-bold hover:bg-white/90 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
