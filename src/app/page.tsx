import { ApproachSection } from "./_components/approach-section";
import { CapabilitiesSection } from "./_components/capabilities-section";
import { ContactSection } from "./_components/contact-section";
import { HeroSection } from "./_components/hero-section";
import { ImpactSection } from "./_components/impact-section";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { ValueChainsSection } from "./_components/value-chains-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <CapabilitiesSection />
        <ValueChainsSection />
        <ImpactSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
