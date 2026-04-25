"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { navLinks } from "@/lib/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Glass effect on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1)); // strip "#"
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      // Trigger when section crosses ~30% from top of viewport
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-100/70 bg-white/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="shrink-0" aria-label="NeuroPeak home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((l) => {
            const isActive = activeSection === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-sm font-medium transition-colors ${
                  isActive
                    ? "text-brand-600"
                    : "text-ink-700 hover:text-brand-600"
                }`}
              >
                {l.label}
                {/* Active underline dot */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-brand-500" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <a href="#lead" className="btn-primary">
            Замовити
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-100 bg-white text-ink-900 lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16" strokeLinecap="round" />
                <path d="M4 12h16" strokeLinecap="round" />
                <path d="M4 17h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        className={`lg:hidden ${open ? "block" : "hidden"} border-t border-ink-100 bg-white`}
      >
        <nav
          className="container-page flex flex-col gap-1 py-4"
          aria-label="Mobile"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink-900 hover:bg-brand-50 hover:text-brand-700"
            >
              {l.label}
            </a>
          ))}
          <a href="#lead" onClick={close} className="btn-primary mt-2 w-full">
            Замовити
          </a>
        </nav>
      </div>
    </header>
  );
}
