import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
// import { getVilla } from "@/lib/villas";


export type Villa = {
  id: string;
  name: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
  tag: string;
  description: string;
  gallery: string[];
};

export const villas: Villa[] = [
  {
    id: "1",
    name: "Villa Azure",
    location: "Saint-Tropez, Côte d'Azur",
    price: "€12,500,000",
    beds: 6,
    baths: 8,
    area: "1.2 ha",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    tag: "Waterfront",
    description:
      "An exceptional waterfront estate with private dock and panoramic sea views. This villa blends contemporary design with the natural beauty of the French Riviera. Expansive terraces, a infinity pool, and direct beach access define the outdoor living experience.",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
  },
  {
    id: "2",
    name: "Casa del Sol",
    location: "Marbella, Spain",
    price: "€8,900,000",
    beds: 5,
    baths: 6,
    area: "850 m²",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    tag: "Pool",
    description:
      "Sun-drenched Mediterranean villa with a spectacular pool and landscaped gardens. Open-plan living spaces flow onto covered terraces perfect for al fresco dining. Minutes from Marbella's golden mile and marina.",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
  },
  {
    id: "3",
    name: "Villa Serenity",
    location: "Lake Como, Italy",
    price: "€15,200,000",
    beds: 7,
    baths: 9,
    area: "2.4 ha",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    tag: "Estate",
    description:
      "A landmark estate on the shores of Lake Como with private grounds and boathouse. Classic Italian architecture meets modern comfort. Formal gardens, a pool, and uninterrupted lake views create an incomparable setting.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    ],
  },
  {
    id: "4",
    name: "Palazzo Verde",
    location: "Amalfi Coast",
    price: "€22,000,000",
    beds: 8,
    baths: 10,
    area: "3.1 ha",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    tag: "New",
    description:
      "Newly completed cliffside palazzo with breathtaking Amalfi views. Every detail has been curated for the most discerning buyer. Infinity pool, cinema, spa, and helipad. A rare opportunity on the world's most coveted coast.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    ],
  },
  {
    id: "5",
    name: "Château des Vignes",
    location: "Provence, France",
    price: "€18,750,000",
    beds: 6,
    baths: 7,
    area: "5 ha",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    tag: "Vineyard",
    description:
      "A restored 18th-century château set within its own vineyard. Stone walls, exposed beams, and Provençal gardens. Produces a limited-edition estate wine. Pool, tennis, and total privacy in the Luberon.",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    ],
  },
  {
    id: "6",
    name: "Villa Bianca",
    location: "Mykonos, Greece",
    price: "€9,400,000",
    beds: 5,
    baths: 6,
    area: "720 m²",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    tag: "Beach",
    description:
      "Stunning Cycladic villa steps from a secluded beach. Whitewashed walls, blue shutters, and endless sea views. Multiple terraces, a pool, and outdoor kitchen. The essence of Greek island luxury.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    ],
  },
];

export function getVilla(id: string): Villa | undefined {
  return villas.find((v) => v.id === id);
}

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const villa = getVilla(id);
  if (!villa) return { title: "Villa | Aurora Estates" };
  return {
    title: `${villa.name} | Aurora Estates`,
    description: villa.description.slice(0, 160),
  };
}

export default async function VillaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const villa = getVilla(id);
  if (!villa) notFound();

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-28">
        <Link
          href="/#listings"
          className="mb-8 inline-flex items-center gap-2 text-sm tracking-widest text-stone-500 transition hover:text-amber-700 dark:text-stone-400 dark:hover:text-amber-200/90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          BACK TO LISTINGS
        </Link>

        <header className="mb-10">
          <span className="font-mono text-xs tracking-[0.4em] text-amber-700 dark:text-amber-200/80">
            {villa.tag}
          </span>
          <h1 className="mt-2 font-serif text-4xl tracking-tight text-stone-900 dark:text-white sm:text-5xl">
            {villa.name}
          </h1>
          <p className="mt-2 text-lg text-stone-600 dark:text-stone-400">
            {villa.location}
          </p>
          <p className="mt-4 font-serif text-3xl text-amber-800 dark:text-amber-200/95">
            {villa.price}
          </p>
          <ul className="mt-4 flex flex-wrap gap-6 text-sm text-stone-500">
            <li>{villa.beds} bedrooms</li>
            <li>{villa.baths} bathrooms</li>
            <li>{villa.area}</li>
          </ul>
        </header>

        <div className="relative mb-12 aspect-[21/9] w-full overflow-hidden rounded-sm border border-stone-200 dark:border-stone-800">
          <Image
            src={villa.image}
            alt={villa.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-stone-900 dark:text-white">
              About this property
            </h2>
            <p className="mt-4 leading-relaxed text-stone-600 dark:text-stone-400">
              {villa.description}
            </p>
          </div>
          <div>
            <div className="sticky top-28 rounded-sm border border-stone-200 bg-stone-100/80 p-6 dark:border-stone-800 dark:bg-stone-900/50">
              <h3 className="font-serif text-lg text-stone-900 dark:text-white">
                Schedule a viewing
              </h3>
              <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
                Contact our team for a private showing of {villa.name}.
              </p>
              <a
                href={`mailto:estates@aurora.villas?subject=Inquiry: ${encodeURIComponent(villa.name)}`}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm border border-amber-200/50 bg-amber-200/10 px-6 py-3 text-sm font-medium tracking-widest text-amber-800 transition hover:bg-amber-200/20 dark:border-amber-200/50 dark:text-amber-200 dark:hover:bg-amber-200/20"
              >
                INQUIRE
              </a>
            </div>
          </div>
        </div>

        {villa.gallery.length > 1 && (
          <section className="mt-16">
            <h2 className="font-serif text-2xl text-stone-900 dark:text-white">
              Gallery
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {villa.gallery.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-sm border border-stone-200 dark:border-stone-800"
                >
                  <Image
                    src={src}
                    alt={`${villa.name} view ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
