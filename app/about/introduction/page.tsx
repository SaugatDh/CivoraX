'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import {
  Building2, Users, Code2, Globe, Star, Quote,
  MapPin, Calendar, Target, Heart, Cpu, Shield,
  ArrowRight, Sparkles,
} from 'lucide-react';

const stats = [
  { icon: Building2, label: 'Founded', value: '2022 in Dharan, Nepal' },
  { icon: Users, label: 'Team Size', value: '6 core engineers & designers' },
  { icon: Code2, label: 'Projects Delivered', value: '12+ production systems deployed' },
  { icon: Globe, label: 'Coverage', value: 'Koshi, Bagmati & Gandaki provinces' },
];

const principles = [
  {
    icon: Shield,
    title: 'Data Sovereignty',
    body: 'Your business data lives on infrastructure you own. We build for on-premise deployment, private cloud, or isolated local servers. Nothing leaves your perimeter without explicit consent.',
  },
  {
    icon: Cpu,
    title: 'Production Code Only',
    body: 'We ship production-grade code from day one. No prototype-to-rebuild gap, no technical debt compounded by shortcut dependencies. Every line is typed, tested, and documented.',
  },
  {
    icon: Target,
    title: 'Operational Realism',
    body: 'We engineer for the conditions of Nepal — intermittent power, patchy connectivity, multi-branch logistics, and IRD tax compliance. The constraints shape the architecture, not the marketing.',
  },
  {
    icon: Heart,
    title: 'Long-Term Partnerships',
    body: 'We measure success in decades, not sprints. Clients who onboarded in 2022 still call the same engineering leads. No account managers, no handoffs, no churned support queues.',
  },
];

const journey = [
  {
    year: '2022',
    title: 'Studio Founded in Dharan',
    body: 'CivoraX Tech Pvt. Ltd. registered in Putali Line, Dharan. Started as a 3-person engineering team focused on offline-first retail systems for local businesses.',
  },
  {
    year: '2023',
    title: 'First Multi-Branch ERP',
    body: 'Shipped our first multi-branch ERP for a Kathmandu-based retail chain spanning 5 locations. Established the sync engine pattern that now powers every system we build.',
  },
  {
    year: '2024',
    title: 'IRD Compliance Module',
    body: 'Released the in-house IRD compliance module with native VAT structuring. Eliminated third-party tax intermediary subscriptions for our clients across 3 provinces.',
  },
  {
    year: '2025',
    title: 'Hardware Edge Integrations',
    body: 'Rolled out direct ESC/POS thermal printing, WebUSB barcode scanner support, and Bluetooth cash drawer integrations. Zero-internet in-store operations became standard.',
  },
  {
    year: '2026',
    title: 'Expanded Engineering Team',
    body: 'Grew to 6 core engineers and designers. Crossed 12 production deployments. Began accepting bespoke portal commissions for industrial and service-sector clients.',
  },
];

const testimonials = [
  {
    name: 'Ramesh Karki',
    detail: 'Owner, Karki General Store · Dharan',
    rating: 5,
    comment: 'The CivoraX POS has been running in our shop for over a year. Internet drops are no longer a problem — transactions queue locally and sync when the network returns. The team trained my staff on-site in Nepali.',
  },
  {
    name: 'Sita Adhikari',
    detail: 'Operations Manager, Bagmati Mart · Kathmandu',
    rating: 5,
    comment: 'We replaced three legacy systems with CivoraX. The multi-branch dashboard gives me real-time visibility across all five locations. IRD VAT reports generate automatically — no more manual reconciliation.',
  },
  {
    name: 'Bikram Shrestha',
    detail: 'CTO, Himalayan Hardware · Pokhara',
    rating: 4,
    comment: 'Their engineers understood our local supply chain constraints from day one. The offline-first architecture and IRD compliance were non-negotiables, and CivoraX delivered both without compromise.',
  },
];

export default function IntroductionPage() {
  return (
    <div className="relative min-h-screen bg-surface text-foreground font-sans selection:bg-accent selection:text-white">
      <Header />

      {/* Section 1: Hero — 90vh */}
      <section className="min-h-[90vh] flex items-center bg-surface-2 border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest">
                  Introduction
                </span>
                <span className="w-8 h-px bg-accent/40" />
                <span className="text-xs font-mono text-foreground-muted uppercase tracking-widest">
                  01 / Studio Origin
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-foreground font-display leading-[1.05]">
                A small studio with{' '}
                <span className="text-accent italic">serious engineering discipline.</span>
              </h1>
              <p className="text-base md:text-lg text-foreground-secondary mt-8 leading-relaxed max-w-2xl">
                CivoraX Tech Pvt. Ltd. is a software engineering studio based in Putali Line, Dharan. We build offline-first retail point-of-sale systems, multi-branch enterprise resource planning platforms, and bespoke corporate web portals — engineered to operate under the real conditions of Nepal&apos;s infrastructure.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-mono text-foreground-muted uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  Dharan · Nepal
                </span>
                <span className="text-foreground/30">·</span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  Est. 2022
                </span>
                <span className="text-foreground/30">·</span>
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  12+ Deployments
                </span>
              </div>
            </div>

            {/* Right panel — quick facts */}
            <div className="lg:col-span-5">
              <div className="bg-[#0f1714] text-surface rounded-2xl p-8 border border-[#1a2420]">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-3 text-xs font-mono text-emerald-300/70 tracking-widest uppercase">
                    ▸ STUDIO.IDENT
                  </span>
                </div>
                <dl className="space-y-5 font-mono text-sm">
                  <div className="flex justify-between border-b border-white/5 pb-3">
                    <dt className="text-white/40 uppercase tracking-wider text-xs">Legal Entity</dt>
                    <dd className="text-emerald-300">CivoraX Tech Pvt. Ltd.</dd>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-3">
                    <dt className="text-white/40 uppercase tracking-wider text-xs">Registered</dt>
                    <dd className="text-emerald-300">2022 · Nepal</dd>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-3">
                    <dt className="text-white/40 uppercase tracking-wider text-xs">Headquarters</dt>
                    <dd className="text-emerald-300">Putali Line, Dharan</dd>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-3">
                    <dt className="text-white/40 uppercase tracking-wider text-xs">Discipline</dt>
                    <dd className="text-emerald-300">Systems Engineering</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-white/40 uppercase tracking-wider text-xs">Specialization</dt>
                    <dd className="text-accent text-right">Offline-First Software</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Stats + Mission/Belief — 90vh */}
      <section className="min-h-[90vh] flex items-center py-24 bg-surface-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Studio Profile
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              Operational facts about our practice.
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              We are deliberately small. Our growth is measured in deployment quality, engineering depth, and the longevity of systems we hand over — not headcount or marketing surface area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-surface border border-border p-6 rounded-2xl flex flex-col">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xs font-mono uppercase tracking-widest text-foreground-muted mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-base font-semibold text-foreground leading-snug flex-1">
                    {stat.value}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-surface border border-border p-8 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-4 h-4 text-accent" />
                <h3 className="font-bold text-sm font-mono uppercase tracking-widest text-foreground">
                  Our Mission
                </h3>
              </div>
              <p className="text-base text-foreground-secondary leading-relaxed">
                We engineer software that works reliably in Nepal&apos;s real conditions — intermittent connectivity, power transitions, and multi-branch complexity. Every system we ship defaults to offline-first architecture, local data caching, and IRD-compliant logging without requiring third-party cloud subscriptions. The mission is straightforward: build software that keeps working long after the contract ends.
              </p>
            </div>
            <div className="bg-surface border border-border p-8 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-4 h-4 text-accent" />
                <h3 className="font-bold text-sm font-mono uppercase tracking-widest text-foreground">
                  What We Believe
                </h3>
              </div>
              <p className="text-base text-foreground-secondary leading-relaxed">
                Clean code outlasts trendy frameworks. We use standard relational databases, provide open code handovers, and write thorough documentation. Our clients own their systems entirely — no vendor lock-in, no hidden recurring fees, no proprietary traps. The best software is the kind a competent local team can read, maintain, and extend for the next decade without calling us back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Engineering Principles — 90vh */}
      <section className="min-h-[90vh] flex items-center py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Engineering Principles
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              Four constraints that govern every system we ship.
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              These are not aspirational statements. They are non-negotiable engineering constraints baked into our development process, our code review checklists, and our client delivery contracts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group relative bg-surface-white border border-border p-8 rounded-2xl hover:border-accent/40 transition-colors duration-300 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#f4f7f5] border border-border flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#4a6b5d]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-foreground-muted">
                      P/0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight text-foreground font-display leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-base text-foreground-secondary leading-relaxed mt-4 flex-1">
                    {p.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Studio Journey Timeline — 80vh */}
      <section className="min-h-[80vh] flex items-center py-24 bg-surface-2 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Studio Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              Four years of compounding engineering decisions.
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              A condensed timeline of the deployment milestones, architectural shifts, and product releases that shaped the studio into what it is today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {journey.map((step, i) => (
              <div
                key={step.year}
                className="relative bg-surface-white border border-border p-6 rounded-2xl flex flex-col"
              >
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-border">
                  <span className="text-3xl font-mono font-black text-accent">
                    {step.year}
                  </span>
                  <span className="text-[10px] font-mono text-foreground-muted uppercase tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground-secondary leading-relaxed mt-3 flex-1">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials — 80vh */}
      <section className="min-h-[80vh] flex items-center py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-2xl mb-16">
            <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Client Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              What our clients say after going live.
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              Direct quotes from operators running CivoraX systems in production retail and enterprise environments across Nepal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-surface-white border border-border p-8 rounded-2xl flex flex-col hover:border-accent/40 transition-colors duration-300"
              >
                <Quote className="w-8 h-8 text-accent/30 mb-5" />
                <p className="text-base text-foreground-secondary leading-relaxed flex-1">
                  &ldquo;{t.comment}&rdquo;
                </p>
                <div className="mt-6 pt-5 border-t border-border">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < t.rating ? 'fill-amber-400 text-amber-400' : 'text-border'}`}
                      />
                    ))}
                  </div>
                  <div className="font-bold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-foreground-muted font-mono mt-0.5">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/about/our-team"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
            >
              Meet the Engineering Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Let's Connect CTA */}
      <LetsConnect />

      <Footer />
    </div>
  );
}
