import { Bone, Dog, Home, Pill } from "lucide-react";
import boarding from "@/assets/boarding.jpg";
import { WA_MESSAGES, whatsappLink } from "@/lib/business";

const FEATURES = [
  { icon: Home, title: "Comfortable Stay", text: "Clean, calm space with soft bedding." },
  { icon: Bone, title: "Timely Food", text: "Meals served on your pet's routine." },
  { icon: Pill, title: "Medication Support", text: "Doses given on schedule." },
  { icon: Dog, title: "Regular Care", text: "Walks, play and daily supervision." },
];

export default function Boarding() {
  return (
    <section id="boarding" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <div className="bg-gradient-deep overflow-hidden rounded-[2.25rem] shadow-lift">
          <div className="grid items-stretch lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <span className="text-xs font-bold tracking-[0.14em] text-sage uppercase">
                Pet Boarding / Hostel
              </span>
              <h2 className="mt-4 text-3xl text-primary-foreground sm:text-4xl">
                A Comfortable Home Away From Home
              </h2>
              <p className="mt-5 text-base leading-relaxed text-primary-foreground/80">
                Going out of town or unable to be with your pet? Our boarding service
                provides a safe, caring and comfortable environment for your pet.
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {FEATURES.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/12 text-sage">
                      <Icon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-primary-foreground">
                        {title}
                      </span>
                      <span className="block text-xs text-primary-foreground/70">
                        {text}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(WA_MESSAGES.boarding)}
                target="_blank"
                rel="noreferrer"
                className="btn-base btn-accent mt-9"
              >
                Enquire About Boarding
              </a>
            </div>

            <div className="min-h-64 lg:min-h-full">
              <img
                src={boarding}
                alt="Pets resting comfortably in the boarding room at Radha Pet Care"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
