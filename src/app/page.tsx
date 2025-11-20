import { Hero } from "@/components/Hero";
import { MarketTicker } from "@/components/MarketTicker";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { LeadGenerationForm } from "@/components/LeadGenerationForm";
import { Packages } from "@/components/Packages";
import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden max-w-[100vw]">
      {/* Home / Hero Section */}
      <div id="home">
        <Hero />
        <MarketTicker />
      </div>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Lead Generation Form */}
      <LeadGenerationForm />

      {/* Packages Section */}
      <Packages />

      {/* Contact Section */}
      <ContactSection />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer / Contact Section */}
      <Footer />
    </main>
  );
}
