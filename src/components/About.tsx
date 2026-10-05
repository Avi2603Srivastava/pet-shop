import aboutVet from "@/assets/about-vet.jpg";
import { RATING, REVIEW_COUNT } from "@/lib/business";

const STATS = [
  { value: `${RATING}★`, label: "Google Rating" },
  { value: `${REVIEW_COUNT}+`, label: "Customer Reviews" },
  { value: "24/7", label: "Open" },
  { value: "100%", label: "Pet Care Focus" },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] shadow-card">
          <img
            src={aboutVet}
            alt="Veterinarian gently examining a beagle at Radha Pet Care"
            loading="lazy"
            width={1200}
            height={1408}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <span className="eyebrow">About Us</span>
          <h2 className="mt-4 text-3xl text-primary-dark sm:text-4xl">
            Caring for Pets Like Family
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            At Radha Pet Care, we believe every pet deserves compassionate care, attention
            and a safe environment. Our team focuses on providing dependable pet care and
            veterinary support while keeping the comfort and wellbeing of your pets at the
            center of everything we do.
          </p>

          <dl className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card px-4 py-5 text-center"
              >
                <dt className="font-display text-2xl font-semibold text-primary">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
