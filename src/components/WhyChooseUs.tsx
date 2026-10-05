import { features } from "@/lib/content";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function WhyChooseUs() {
  const { ref, visible } = useFadeIn<HTMLDivElement>();

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`fade-up mx-auto max-w-2xl text-center ${visible ? "is-visible" : ""}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium text-foreground sm:text-5xl">
            The Varr Promise
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center rounded-lg border border-border bg-card p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg"
            >
              <div className="grid h-14 w-14 place-items-center rounded-full bg-gold/10">
                <f.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
