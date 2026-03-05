"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// --- Theme (inline) ---
type Theme = "light" | "dark";
const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (t: Theme) => void;
} | null>(null);

function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  useEffect(() => {
    const stored = localStorage.getItem("aurora-theme") as Theme | null;
    const preferred = stored ?? "light";
    setThemeState(preferred);
    document.documentElement.classList.toggle("dark", preferred === "dark");
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem("aurora-theme", t);
    document.documentElement.classList.toggle("dark", t === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-sm border border-stone-600/60 bg-stone-800/40 p-2 text-stone-400 transition hover:border-amber-200/40 hover:text-amber-200/90 dark:border-stone-600/60 dark:bg-stone-800/40 dark:text-stone-400 dark:hover:border-amber-200/40 dark:hover:text-amber-200/90"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      {theme === "dark" ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-300/50 bg-stone-50/90 backdrop-blur-md dark:border-stone-800/50 dark:bg-stone-950/80">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="font-serif text-xl tracking-[0.3em] text-amber-800 dark:text-amber-100/90">
          AURORA
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden gap-10 md:flex">
            <Link href="/#listings" className="text-sm tracking-widest text-stone-600 transition hover:text-amber-700 dark:text-stone-400 dark:hover:text-amber-200/90">LISTINGS</Link>
            <Link href="/#about" className="text-sm tracking-widest text-stone-600 transition hover:text-amber-700 dark:text-stone-400 dark:hover:text-amber-200/90">ABOUT</Link>
            <Link href="/#contact" className="text-sm tracking-widest text-stone-600 transition hover:text-amber-700 dark:text-stone-400 dark:hover:text-amber-200/90">CONTACT</Link>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-stone-300/50 bg-stone-100/50 py-16 dark:border-stone-800/50 dark:bg-stone-900/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <span className="font-serif text-xl tracking-[0.3em] text-amber-800 dark:text-amber-100/90">AURORA</span>
          <p className="text-center text-sm text-stone-600 md:text-right dark:text-stone-500">
            Inquiries: <a href="mailto:estates@aurora.villas" className="text-amber-700 underline-offset-4 hover:underline dark:text-amber-200/80">estates@aurora.villas</a>
            <br />+33 (0)4 00 00 00 00
          </p>
        </div>
        <p className="mt-8 text-center text-xs text-stone-500 dark:text-stone-600">© {new Date().getFullYear()} Aurora Estates. All rights reserved.</p>
      </div>
    </footer>
  );
}

// --- Villa data (inline) ---
const VILLAS = [
  { id: "1", name: "Villa Azure", location: "Saint-Tropez, Côte d'Azur", price: "€12,500,000", beds: 6, baths: 8, area: "1.2 ha", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80", tag: "Waterfront" },
  { id: "2", name: "Casa del Sol", location: "Marbella, Spain", price: "€8,900,000", beds: 5, baths: 6, area: "850 m²", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80", tag: "Pool" },
  { id: "3", name: "Villa Serenity", location: "Lake Como, Italy", price: "€15,200,000", beds: 7, baths: 9, area: "2.4 ha", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", tag: "Estate" },
  { id: "4", name: "Palazzo Verde", location: "Amalfi Coast", price: "€22,000,000", beds: 8, baths: 10, area: "3.1 ha", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", tag: "New" },
  { id: "5", name: "Château des Vignes", location: "Provence, France", price: "€18,750,000", beds: 6, baths: 7, area: "5 ha", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80", tag: "Vineyard" },
  { id: "6", name: "Villa Bianca", location: "Mykonos, Greece", price: "€9,400,000", beds: 5, baths: 6, area: "720 m²", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", tag: "Beach" },
];

const HERO_IMAGE = "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=85";

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <div className="min-h-screen bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
        <section className="relative flex min-h-screen items-center justify-center">
          <div className="absolute inset-0">
            <Image src={HERO_IMAGE} alt="Luxury villa overlooking the sea" fill className="object-cover" priority sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/40 to-stone-950" />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 font-mono text-xs tracking-[0.4em] text-amber-200/80">EXCLUSIVE PROPERTIES</p>
            <h1 className="font-serif text-5xl leading-tight tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl">
              Where the world&apos;s most
              <br />
              <span className="text-amber-200/95">beautiful villas</span> find their owners
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg text-stone-300">
              Curated estates on the Côte d&apos;Azur, Amalfi Coast, and beyond. Your next chapter starts here.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link href="#listings" className="rounded-sm border border-amber-200/50 bg-amber-200/10 px-8 py-3 text-sm font-medium tracking-widest text-amber-200 transition hover:bg-amber-200/20">VIEW LISTINGS</Link>
              <Link href="#contact" className="rounded-sm border border-stone-500/50 px-8 py-3 text-sm font-medium tracking-widest text-stone-300 transition hover:border-stone-400 hover:text-white">INQUIRE</Link>
            </div>
          </div>
        </section>

        <section id="listings" className="border-t border-stone-200 py-24 dark:border-stone-800/50">
          <div className="mx-auto max-w-7xl px-6">
            <p className="font-mono text-xs tracking-[0.4em] text-amber-700 dark:text-amber-200/80">CURRENT OFFERINGS</p>
            <h2 className="mt-2 font-serif text-4xl tracking-tight text-stone-900 dark:text-white sm:text-5xl">Featured villas</h2>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {VILLAS.map((villa) => (
                <article key={villa.id} className="group overflow-hidden rounded-sm border border-stone-200 bg-white transition hover:border-amber-300/60 dark:border-stone-800/60 dark:bg-stone-900/50 dark:hover:border-amber-200/30">
                  <Link href={`/villa/${villa.id}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={villa.image} alt={villa.name} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                      <span className="absolute left-4 top-4 rounded-sm border border-amber-200/40 bg-stone-950/70 px-2 py-1 font-mono text-[10px] tracking-widest text-amber-200/90">{villa.tag}</span>
                    </div>
                    <div className="border-t border-stone-200 p-6 dark:border-stone-800/60">
                      <h3 className="font-serif text-xl text-stone-900 dark:text-white">{villa.name}</h3>
                      <p className="mt-1 text-sm text-stone-500">{villa.location}</p>
                      <p className="mt-4 font-serif text-2xl text-amber-800 dark:text-amber-200/95">{villa.price}</p>
                      <ul className="mt-3 flex gap-4 text-xs text-stone-500">
                        <li>{villa.beds} beds</li>
                        <li>{villa.baths} baths</li>
                        <li>{villa.area}</li>
                      </ul>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-stone-200 bg-stone-100/80 py-24 dark:border-stone-800/50 dark:bg-stone-900/30">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="font-mono text-xs tracking-[0.4em] text-amber-700 dark:text-amber-200/80">AURORA ESTATES</p>
            <h2 className="mt-2 font-serif text-3xl tracking-tight text-stone-900 dark:text-white sm:text-4xl">A legacy of discretion and excellence</h2>
            <p className="mt-6 leading-relaxed text-stone-600 dark:text-stone-400">
              For over two decades we have connected discerning clients with exceptional properties. Every villa in our portfolio is vetted for provenance, privacy, and timeless appeal. No listings, only invitations.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
