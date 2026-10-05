import { MessageCircle, Phone } from "lucide-react";
import { PHONE_TEL, WA_MESSAGES, whatsappLink } from "@/lib/business";

export default function CTA() {
  return (
    <section className="px-5 pb-16 md:pb-24">
      <div className="bg-gradient-deep mx-auto max-w-5xl rounded-[2rem] px-7 py-12 text-center shadow-lift sm:px-12 sm:py-16">
        <h2 className="text-3xl text-primary-foreground sm:text-4xl">
          Your Pet Deserves the Best Care
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/80">
          Have a question about your pet's care? Get in touch with Radha Pet Care.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href={PHONE_TEL} className="btn-base btn-accent">
            <Phone className="size-4" />
            Call Now
          </a>
          <a
            href={whatsappLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noreferrer"
            className="btn-base border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/12 border-1.5"
          >
            <MessageCircle className="size-4" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
