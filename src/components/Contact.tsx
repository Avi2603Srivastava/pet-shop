import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import {
  ADDRESS_LINES,
  HOURS,
  MAPS_DIRECTIONS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WA_MESSAGES,
  whatsappLink,
} from "@/lib/business";

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-cream">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="eyebrow">Location & Contact</span>
          <h2 className="mt-4 text-3xl text-primary-dark sm:text-4xl">
            Visit Radha Pet Care
          </h2>
        </div>

        <div className="mt-11 grid gap-5 lg:grid-cols-3">
          <div className="card-soft p-6">
            <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary-dark">
              <MapPin className="size-5" />
            </span>
            <h3 className="mt-4 text-lg text-primary-dark">Address</h3>
            <address className="mt-2 text-sm leading-relaxed text-muted-foreground not-italic">
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div className="card-soft p-6">
            <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary-dark">
              <Phone className="size-5" />
            </span>
            <h3 className="mt-4 text-lg text-primary-dark">Phone</h3>
            <a
              href={PHONE_TEL}
              className="mt-2 block text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="card-soft p-6">
            <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary-dark">
              <Clock className="size-5" />
            </span>
            <h3 className="mt-4 text-lg text-primary-dark">Hours</h3>
            <p className="mt-2 text-sm text-muted-foreground">{HOURS}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={PHONE_TEL} className="btn-base btn-primary">
            <Phone className="size-4" />
            Call Now
          </a>
          <a
            href={whatsappLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noreferrer"
            className="btn-base btn-accent"
          >
            <MessageCircle className="size-4" />
            WhatsApp
          </a>
          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-base btn-outline"
          >
            <Navigation className="size-4" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
