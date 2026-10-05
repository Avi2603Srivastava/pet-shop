import { Clock, Facebook, Instagram, MapPin, MessageCircle, PawPrint, Phone } from "lucide-react";
import {
  BUSINESS_NAME,
  BUSINESS_NAME_HI,
  HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  SOCIAL_LINKS,
  WA_MESSAGES,
  whatsappLink,
} from "@/lib/business";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Boarding", href: "#boarding" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <PawPrint className="size-4" />
            </span>
            <span className="font-display text-lg font-semibold text-primary-dark">
              {BUSINESS_NAME}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{BUSINESS_NAME_HI}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Compassionate pet care and veterinary support in Sector 22, Noida.
          </p>
          <div className="mt-5 flex gap-2.5">
            <a
              href={SOCIAL_LINKS.instagram}
              aria-label="Instagram"
              className="flex size-10 items-center justify-center rounded-full border border-border text-primary-dark transition-colors hover:bg-secondary"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              aria-label="Facebook"
              className="flex size-10 items-center justify-center rounded-full border border-border text-primary-dark transition-colors hover:bg-secondary"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href={whatsappLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex size-10 items-center justify-center rounded-full border border-border text-primary-dark transition-colors hover:bg-secondary"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>

        <nav>
          <h3 className="text-base text-primary-dark">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-base text-primary-dark">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2.5">
              <MapPin className="size-4 shrink-0 text-primary" /> Sector 22, Noida
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-primary" />
              <a href={PHONE_TEL} className="transition-colors hover:text-primary">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="size-4 shrink-0 text-primary" /> {HOURS}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-5">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 {BUSINESS_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
