'use client';

import Header from '@/components/Header';
import LanderHero from '@/components/LanderHero';
import HeroIntro from '@/components/HeroIntro';
import Stats from '@/components/Stats';
import ServicesPreview from '@/components/ServicesPreview';
import TechStack from '@/components/TechStack';
import Capabilities from '@/components/Capabilities';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-surface text-foreground font-sans selection:bg-accent selection:text-white">
      {/* Header */}
      <Header />

      <main className="flex flex-col">
        {/* Lander Hero */}
        <LanderHero />

        {/* Hero Introduction */}
        <HeroIntro />

        {/* Condensed Services Capabilities */}
        <section className="py-20 md:py-28 bg-surface border-t border-border">
          <ServicesPreview />
        </section>

        {/* Section 3: Core Technology Stack Matrix */}
        <section className="min-h-[90vh] flex items-center py-24 bg-surface-2 border-y border-border w-full">
          <TechStack />
        </section>

        {/* Section 4: Deep-Dive Capabilities */}
        <section className="min-h-[90vh] flex items-center py-24 bg-surface border-b border-border w-full">
          <Capabilities />
        </section>

        {/* Operational Statistics */}
        <section className="py-20 md:py-28 bg-surface">
          <Stats />
        </section>

        {/* Section 5: The Studio Philosophy (Dark CTA Block) */}
        <section className="py-20 md:py-28 bg-surface border-t border-border">
          <CTA />
        </section>
      </main>

      {/* Let's Connect CTA */}
      <LetsConnect />

      {/* Footer */}
      <Footer />
    </div>
  );
}
