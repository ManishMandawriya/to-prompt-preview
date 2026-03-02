import Image from "next/image";
import Link from "next/link";
import { villas } from "@/lib/villas";

const heroImage =
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=85";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <section className="relative flex min-h-screen items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Luxury villa overlooking the sea"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/40 to-stone-950" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 font-mono text-xs tracking-[0.4em] text-amber-200/80">
            EXCLUSIVE PROPERTIES
          </p>
          <h1 className="font-serif text-5xl leading-tight tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl">
            Where the world&apos;s most
            <br />
            <span className="text-amber-200/95">beautiful villas</span> find
            their owners
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg text-stone-300">
            Curated estates on the Côte d&apos;Azur, Amalfi Coast, and beyond.
            Your next chapter starts here.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#listings"
              className="rounded-sm border border-amber-200/50 bg-amber-200/10 px-8 py-3 text-sm font-medium tracking-widest text-amber-200 transition hover:bg-amber-200/20"
            >
              VIEW LISTINGS
            </Link>
            <Link
              href="#contact"
              className="rounded-sm border border-stone-500/50 px-8 py-3 text-sm font-medium tracking-widest text-stone-300 transition hover:border-stone-400 hover:text-white"
            >
              INQUIRE
            </Link>
          </div>
        </div>
      </section>

      <section
        id="listings"
        className="border-t border-stone-200 py-24 dark:border-stone-800/50"
      >
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs tracking-[0.4em] text-amber-700 dark:text-amber-200/80">
            CURRENT OFFERINGS
          </p>
          <h2 className="mt-2 font-serif text-4xl tracking-tight text-stone-900 dark:text-white sm:text-5xl">
            Featured villas
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {villas.map((villa) => (
              <article
                key={villa.id}
                className="group overflow-hidden rounded-sm border border-stone-200 bg-white transition hover:border-amber-300/60 dark:border-stone-800/60 dark:bg-stone-900/50 dark:hover:border-amber-200/30"
              >
                <Link href={`/villa/${villa.id}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={villa.image}
                      alt={villa.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute left-4 top-4 rounded-sm border border-amber-200/40 bg-stone-950/70 px-2 py-1 font-mono text-[10px] tracking-widest text-amber-200/90">
                      {villa.tag}
                    </span>
                  </div>
                  <div className="border-t border-stone-200 p-6 dark:border-stone-800/60">
                    <h3 className="font-serif text-xl text-stone-900 dark:text-white">
                      {villa.name}
                    </h3>
                    <p className="mt-1 text-sm text-stone-500">
                      {villa.location}
                    </p>
                    <p className="mt-4 font-serif text-2xl text-amber-800 dark:text-amber-200/95">
                      {villa.price}
                    </p>
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

      <section
        id="about"
        className="border-t border-stone-200 bg-stone-100/80 py-24 dark:border-stone-800/50 dark:bg-stone-900/30"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-mono text-xs tracking-[0.4em] text-amber-700 dark:text-amber-200/80">
            AURORA ESTATES
          </p>
          <h2 className="mt-2 font-serif text-3xl tracking-tight text-stone-900 dark:text-white sm:text-4xl">
            A legacy of discretion and excellence
          </h2>
          <p className="mt-6 leading-relaxed text-stone-600 dark:text-stone-400">
            For over two decades we have connected discerning clients with
            exceptional properties. Every villa in our portfolio is vetted for
            provenance, privacy, and timeless appeal. No listings, only
            invitations.
          </p>
        </div>
      </section>
    </div>
  );
}
