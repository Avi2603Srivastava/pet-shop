import { Dog, HeartPulse, Home, MessageCircleHeart, Pill, Stethoscope } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { WA_MESSAGES, whatsappLink } from "@/lib/business";

const SERVICES = [
  {
    icon: Stethoscope,
    title: "Veterinary Care",
    description: "Professional veterinary consultation and treatment support.",
    href: "#contact",
  },
  {
    icon: Home,
    title: "Pet Boarding",
    description:
      "Safe and comfortable hostel/boarding facilities for pets when you're away.",
    href: "#boarding",
  },
  {
    icon: HeartPulse,
    title: "Pet Treatment",
    description: "Care and treatment support for pets requiring medical attention.",
    href: "#contact",
  },
  {
    icon: Dog,
    title: "Dog Care",
    description: "Daily care, feeding, walking and attentive supervision.",
    href: "#boarding",
  },
  {
    icon: Pill,
    title: "Pet Medication",
    description: "Support with medication schedules and proper care.",
    href: "#contact",
  },
  {
    icon: MessageCircleHeart,
    title: "Pet Consultation",
    description: "Friendly guidance for pet health, nutrition and general wellbeing.",
    href: whatsappLink(WA_MESSAGES.consultation),
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="eyebrow">Our Services</span>
          <h2 className="mt-4 text-3xl text-primary-dark sm:text-4xl">
            Our Pet Care Services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Everything your pet needs for a healthy, happy and comfortable life.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
