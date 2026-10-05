import boarding from "@/assets/boarding.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import heroPets from "@/assets/hero-pets.jpg";

// Replace these src values with real photos of the clinic when available.
const IMAGES = [
  { src: gallery1, alt: "A cat being examined with a stethoscope during a check-up" },
  { src: gallery3, alt: "A labrador puppy running happily on grass" },
  { src: boarding, alt: "Dogs resting in the pet boarding room" },
  { src: gallery2, alt: "A happy family holding their small dog" },
  { src: gallery4, alt: "A white spitz being brushed during a pet care session" },
  { src: gallery5, alt: "Two kittens sleeping together in a soft basket" },
  { src: heroPets, alt: "A dog and cat relaxing together at the pet care centre" },
];

export default function Gallery() {
  return (
    <section className="section-pad bg-cream">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="eyebrow">Gallery</span>
          <h2 className="mt-4 text-3xl text-primary-dark sm:text-4xl">
            Happy Pets, Happy Families
          </h2>
        </div>

        <div className="mt-11 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {IMAGES.map((img, i) => (
            <figure
              key={img.src}
              className={`group overflow-hidden rounded-2xl shadow-soft ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
