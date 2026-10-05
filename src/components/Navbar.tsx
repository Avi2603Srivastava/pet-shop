import { useEffect, useState } from "react";
import { Menu, PawPrint, Phone, X } from "lucide-react";
import { BUSINESS_NAME, PHONE_DISPLAY, PHONE_TEL } from "@/lib/business";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pet Boarding", href: "#boarding" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-background/95 py-2 shadow-soft backdrop-blur"
          : "border-transparent bg-background/70 py-4 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <PawPrint className="size-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold text-primary-dark">
              {BUSINESS_NAME}
            </span>
            <span className="text-[11px] tracking-wide text-muted-foreground">
              Sector 22, Noida
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={PHONE_TEL} className="btn-base btn-primary hidden sm:inline-flex">
            <Phone className="size-4" />
            Call Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex size-11 items-center justify-center rounded-full border border-border text-primary-dark lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-5 mt-3 rounded-2xl border border-border bg-card p-4 shadow-card lg:hidden">
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-primary-dark"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={PHONE_TEL}
            onClick={() => setOpen(false)}
            className="btn-base btn-primary mt-3 w-full"
          >
            <Phone className="size-4" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  );
}
