import { Heart, Home, PawPrint, Phone, Star, Stethoscope } from "lucide-react";
import heroPets from "@/assets/hero-pets.jpg";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  RATING,
  REVIEW_COUNT,
  WA_MESSAGES,
  whatsappLink,
} from "@/lib/business";

const BADGES = [
  { icon: PawPrint, label: "Pet Care" },
  { icon: Stethoscope, label: "Veterinary Support" },
  { icon: Home, label: "Pet Boarding" },
  { icon: Heart, label: "Loving Care" },
];

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-hero relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="eyebrow">
            <PawPrint className="size-3.5" /> Sector 22, Noida · Open 24 Hours
          </span>

          <h1 className="mt-5 text-4xl leading-[1.08] text-primary-dark sm:text-5xl lg:text-6xl">
            Compassionate Care for Your Beloved Pets
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Professional pet care, veterinary support and comfortable boarding services in
            Sector 22, Noida.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={whatsappLink(WA_MESSAGES.consultation)} className="btn-base btn-primary">
              Book a Visit
            </a>
            <a href={PHONE_TEL} className="btn-base btn-outline">
              <Phone className="size-4" />
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-7 inline-flex items-center gap-3 rounded-full bg-card px-4 py-2.5 shadow-soft">
            <span className="flex items-center gap-0.5 text-accent">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </span>
            <span className="text-sm font-semibold text-primary-dark">
              {RATING}/5 from {REVIEW_COUNT} Reviews
            </span>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:max-w-lg">
            {BADGES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-card/80 px-3.5 py-3"
              >
                <Icon className="size-4 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground/85">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={heroPets}
              alt="A golden retriever and a tabby cat resting together at Radha Pet Care in Noida"
              width={1536}
              height={1152}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-card sm:left-8">
            <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary-dark">
              <Stethoscope className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-primary-dark">Dr. Sahu</span>
              <span className="block text-xs text-muted-foreground">Veterinary support</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
