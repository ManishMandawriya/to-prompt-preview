import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVilla } from "@/lib/villas";

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
