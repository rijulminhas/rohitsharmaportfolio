"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks, personal } from "@/data/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper/90 backdrop-blur transition-shadow duration-300 ${
        isScrolled
          ? "border-line shadow-[0_8px_24px_-16px_rgba(23,21,15,0.35)]"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#home"
          className="focus-ring group font-display text-lg tracking-tight text-ink"
        >
          Rohit Kumar Sharma
          <span className="block h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="underline-link focus-ring font-mono text-xs uppercase tracking-wide text-ink-soft hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="focus-ring rounded-sm border border-ink px-4 py-2 font-mono text-xs uppercase tracking-wide text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_8px_20px_-12px_rgba(193,68,14,0.6)]"
          >
            Let&apos;s Talk
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className="focus-ring flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className="sr-only">
              {isOpen ? "Close menu" : "Open menu"}
            </span>
            <span
              className={`block h-px w-6 bg-ink transition-transform ${
                isOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-transform ${
                isOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-line transition-[max-height] duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav
          className="flex flex-col gap-1 px-6 py-6"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="focus-ring rounded-sm px-2 py-3 font-display text-xl text-ink hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${personal.email}`}
            onClick={() => setIsOpen(false)}
            className="focus-ring mt-3 rounded-sm border border-ink px-4 py-3 text-center font-mono text-xs uppercase tracking-wide text-ink"
          >
            Say Hello
          </a>
        </nav>
      </div>
    </header>
  );
}
