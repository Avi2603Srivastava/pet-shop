import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Boarding from "@/components/Boarding";
import WhyChooseUs from "@/components/WhyChooseUs";
import Veterinarian from "@/components/Veterinarian";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const TITLE = "Radha Pet Care | Pet Care & Veterinary Services in Noida";
const DESCRIPTION =
  "Radha Pet Care in Sector 22, Noida provides pet care, veterinary support, pet boarding and treatment services. Contact us for your pet's care.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Boarding />
        <WhyChooseUs />
        <Veterinarian />
        <Gallery />
        <Reviews />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
