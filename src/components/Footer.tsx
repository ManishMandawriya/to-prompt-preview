export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-stone-300/50 bg-stone-100/50 py-16 dark:border-stone-800/50 dark:bg-stone-900/30"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <span className="font-serif text-xl tracking-[0.3em] text-amber-800 dark:text-amber-100/90">
            AURORA
          </span>
          <p className="text-center text-sm text-stone-600 md:text-right dark:text-stone-500">
            Inquiries:{" "}
            <a
              href="mailto:estates@aurora.villas"
              className="text-amber-700 underline-offset-4 hover:underline dark:text-amber-200/80"
            >
              estates@aurora.villas
            </a>
            <br />
            +33 (0)4 00 00 00 00
          </p>
        </div>
        <p className="mt-8 text-center text-xs text-stone-500 dark:text-stone-600">
          © {new Date().getFullYear()} Aurora Estates. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
