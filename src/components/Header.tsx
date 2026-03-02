import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-300/50 bg-stone-50/90 backdrop-blur-md dark:border-stone-800/50 dark:bg-stone-950/80">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.3em] text-amber-800 dark:text-amber-100/90"
        >
          AURORA
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden gap-10 md:flex">
            <Link
              href="/#listings"
              className="text-sm tracking-widest text-stone-600 transition hover:text-amber-700 dark:text-stone-400 dark:hover:text-amber-200/90"
            >
              LISTINGS
            </Link>
            <Link
              href="/#about"
              className="text-sm tracking-widest text-stone-600 transition hover:text-amber-700 dark:text-stone-400 dark:hover:text-amber-200/90"
            >
              ABOUT
            </Link>
            <Link
              href="/#contact"
              className="text-sm tracking-widest text-stone-600 transition hover:text-amber-700 dark:text-stone-400 dark:hover:text-amber-200/90"
            >
              CONTACT
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
