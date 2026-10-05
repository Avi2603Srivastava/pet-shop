import { Quote, Star } from "lucide-react";
import { MAPS_LISTING_URL, RATING, REVIEW_COUNT } from "@/lib/business";

const REVIEWS = [
  {
    name: "Sonea Narula",
    text: "Always keep my pug there whenever I'm busy or away. My pet is treated with love and affection, with food, medicine and walks taken care of.",
  },
  {
    name: "Thakur Shubham",
    text: "Best pet care in Noida and Dr. Sahu is very polite and helpful.",
  },
  {
    name: "Anshul Sahu",
    text: "I had a good experience with Radha Pet Care and appreciated the doctor's politeness and advice.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow">Reviews</span>
            <h2 className="mt-4 text-3xl text-primary-dark sm:text-4xl">
              What Pet Parents Say
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-soft">
            <span className="font-display text-3xl font-semibold text-primary">
              {RATING}
            </span>
            <span>
              <span className="flex items-center gap-0.5 text-accent">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </span>
              <span className="mt-1 block text-xs text-muted-foreground">
                {REVIEW_COUNT} Google Reviews
              </span>
            </span>
          </div>
        </div>

        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <blockquote key={r.name} className="card-soft flex flex-col p-6">
              <Quote className="size-7 text-sage" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                "{r.text}"
              </p>
              <footer className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex size-9 items-center justify-center rounded-full bg-secondary font-semibold text-primary-dark">
                  {r.name.charAt(0)}
                </span>
                <cite className="text-sm font-semibold text-primary-dark not-italic">
                  {r.name}
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-relaxed text-muted-foreground">
            These are individual customer testimonials from publicly visible Google
            reviews and do not represent the experience of all customers.
          </p>
          <a
            href={MAPS_LISTING_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-base btn-outline"
          >
            View More Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
