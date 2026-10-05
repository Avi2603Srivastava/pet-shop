import { Phone, Stethoscope } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WA_MESSAGES, whatsappLink } from "@/lib/business";

export default function Veterinarian() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-4xl px-5">
        <div className="card-soft px-7 py-10 text-center sm:px-12 sm:py-14">
          <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-secondary text-primary-dark">
            <Stethoscope className="size-7" />
          </span>
          <span className="eyebrow mt-6">Professional Veterinary Care</span>
          <h2 className="mt-3 text-3xl text-primary-dark sm:text-4xl">Dr. Sahu</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Dr. Sahu is known by local customers for providing pet care, consultation and
            veterinary support.
          </p>

          <p className="mt-8 font-display text-xl text-primary-dark">
            Talk to Us About Your Pet
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href={PHONE_TEL} className="btn-base btn-primary">
              <Phone className="size-4" />
              Call Now
            </a>
            <a
              href={whatsappLink(WA_MESSAGES.consultation)}
              target="_blank"
              rel="noreferrer"
              className="btn-base btn-outline"
            >
              Message on WhatsApp
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">{PHONE_DISPLAY} · Open 24 hours</p>
        </div>
      </div>
    </section>
  );
}
