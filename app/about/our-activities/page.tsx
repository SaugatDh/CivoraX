'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import {
  Rocket, Handshake, Lightbulb, Cpu, GitBranch, BookOpen,
  Users, Code2, Globe, ArrowRight, Github, Calendar,
  Terminal, Sparkles, Mic, Building,
} from 'lucide-react';

const activities = [
  {
    icon: Rocket,
    title: 'Open Source Contributions',
    summary: 'Production-grade libraries, MIT-licensed.',
    body: 'We maintain and contribute to open-source tooling for offline-first POS systems, Nepali VAT compliance libraries, and Go-based sync engines. Our internal abstractions are extracted into public packages only after they survive at least one production engagement.',
    metric: '8 public repos',
  },
  {
    icon: Lightbulb,
    title: 'Tech Workshops &amp; Talks',
    summary: 'In-person, in Nepali, free to attend.',
    body: 'Regular workshops on full-stack development, system architecture, and resilient software practices for working developers. Sessions run on weekends in Dharan, Kathmandu, and Pokhara. All materials are published openly after each session.',
    metric: '24 sessions / yr',
  },
  {
    icon: Handshake,
    title: 'Community Engagement',
    summary: 'College partnerships and mentorship.',
    body: 'Active partnerships with local colleges and tech communities in Dharan, Kathmandu, and Pokhara. We mentor final-year projects, host studio tours for CS students, and run a paid summer-internship track for two undergraduate engineers each year.',
    metric: '3 college partners',
  },
  {
    icon: Cpu,
    title: 'Research &amp; Development',
    summary: 'Edge computing, mesh, resilience.',
    body: 'Internal R&D focused on edge computing, mesh networking, and resilient architectures for Nepal&apos;s infrastructure realities. We allocate roughly 15% of engineering time to long-horizon exploration that does not bill to client engagements.',
    metric: '15% engineering time',
  },
];

const events = [
  {
    icon: Mic,
    badge: 'Past',
    title: 'Nepal Software Architecture Conference 2025',
    detail: 'Three of our engineers presented on offline-first POS architecture and Go-based sync patterns to an audience of 280 developers in Lalitpur.',
  },
  {
    icon: BookOpen,
    badge: 'Past',
    title: 'Dharan Engineering Bootcamp · Q1 2025',
    detail: 'A 6-week part-time curriculum covering TypeScript, PostgreSQL, and systems design. 18 participants completed the program; 6 are now in engineering roles locally.',
  },
  {
    icon: Terminal,
    badge: 'Ongoing',
    title: 'Open Sync Engine Office Hours',
    detail: 'Weekly office hours for engineers integrating our Go-based sync engine into their own systems. Free, public, no sales pitch.',
  },
  {
    icon: Building,
    badge: 'Upcoming',
    title: 'Putali Line Studio Tour · Nov 2026',
    detail: 'Open studio tour for final-year CS students from Dharan-based colleges. Tour the production stack, meet the engineering team, ask anything.',
  },
];

const repos = [
  {
    name: 'civorax/nepali-vat',
    language: 'TypeScript',
    description: 'VAT calculation, IRD-compliant invoice numbering, and fiscal XML export for Nepali tax structures.',
    stars: '142',
  },
  {
    name: 'civorax/sync-engine',
    language: 'Go',
    description: 'Conflict-aware, partition-tolerant sync engine designed for intermittent-connectivity environments.',
    stars: '318',
  },
  {
    name: 'civorax/escpos-tools',
    language: 'TypeScript',
    description: 'Browser-side ESC/POS command compiler for thermal receipt printers. No native binary wrappers.',
    stars: '87',
  },
  {
    name: 'civorax/ird-submit',
    language: 'TypeScript',
    description: 'Reference client for the IRD billing module submission API. Handles retry, signing, and audit log generation.',
    stars: '54',
  },
  {
    name: 'civorax/pos-offline-buffer',
    language: 'TypeScript',
    description: 'IndexedDB transaction queue with deterministic replay. Designed for retail POS resilience testing.',
    stars: '201',
  },
  {
    name: 'civorax/nepali-date',
    language: 'TypeScript',
    description: 'Bikram Sambat ↔ Gregorian date conversion, fiscal year helpers, and Nepali number formatting utilities.',
    stars: '96',
  },
];

const communityStats = [
  { value: '3', label: 'College partners', detail: 'Dharan, Kathmandu, Pokhara' },
  { value: '24', label: 'Workshops / year', detail: 'Free, open to public' },
  { value: '8', label: 'OSS libraries', detail: 'MIT-licensed' },
  { value: '280+', label: 'Devs reached', detail: 'Across 12 events' },
];

export default function OurActivitiesPage() {
  return (
    <div className="relative min-h-screen bg-surface text-foreground font-sans selection:bg-accent selection:text-white">
      <Header />

      {/* Section 1: Hero — 90vh */}
      <section className="min-h-[90vh] flex items-center bg-surface-2 border-b border-border relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest">
                  Our Activities
                </span>
                <span className="w-8 h-px bg-accent/40" />
                <span className="text-sm font-mono text-foreground-muted uppercase tracking-widest">
                  03 / Beyond Client Work
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-foreground mb-6 font-display leading-[1.05]">
                What we do{' '}
                <span className="text-accent italic">beyond client work.</span>
              </h1>
              <p className="text-foreground-secondary text-base md:text-lg max-w-2xl leading-relaxed">
                We actively contribute to the Nepali tech ecosystem through open-source tooling, free public workshops, college partnerships, and an internal R&D program. The work is uncompensated, undelayed, and unhidden.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-mono text-foreground-muted uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-accent" />
                  8 OSS Repos
                </span>
                <span className="text-foreground/30">·</span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  3 College Partners
                </span>
                <span className="text-foreground/30">·</span>
                <span className="flex items-center gap-2">
                  <Mic className="w-4 h-4 text-accent" />
                  12+ Events / Yr
                </span>
              </div>
            </div>

            {/* Right terminal panel */}
            <div className="lg:col-span-5">
              <div className="bg-[#0f1714] text-surface rounded-2xl p-8 border border-[#1a2420]">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-3 text-sm font-mono text-emerald-300/70 tracking-widest uppercase">
                    ▸ ACTIVITY.INDEX
                  </span>
                </div>
                <ul className="space-y-4 font-mono text-sm">
                  <li className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-white/60 flex items-center gap-2">
                      <Code2 className="w-3.5 h-3.5 text-accent" />
                      Open Source
                    </span>
                    <span className="text-emerald-300">8 public repos</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-white/60 flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-accent" />
                      Workshops
                    </span>
                    <span className="text-emerald-300">24 sessions / yr</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-white/60 flex items-center gap-2">
                      <Building className="w-3.5 h-3.5 text-accent" />
                      College Partners
                    </span>
                    <span className="text-emerald-300">3 active</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-white/60 flex items-center gap-2">
                      <Lightbulb className="w-3.5 h-3.5 text-accent" />
                      R&amp;D Allocation
                    </span>
                    <span className="text-emerald-300">15% eng. time</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-white/60 flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-accent" />
                      Devs Reached
                    </span>
                    <span className="text-accent">280+ across events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Activities Grid — 90vh */}
      <section className="min-h-[90vh] flex items-center py-24 bg-surface border-b border-border w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Four Pillars of Community Work
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              Where the studio spends its non-billable hours.
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              Every pillar has measurable output — repos published, attendees reached, students placed, prototypes shipped. We do not treat community work as marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((a, i) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.title}
                  className="group relative bg-surface-white border border-border p-8 rounded-2xl hover:border-accent/40 transition-colors duration-300 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <span className="text-sm font-mono font-bold text-foreground-muted">
                      A/0{i + 1}
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-medium tracking-tight text-foreground font-display leading-snug"
                    dangerouslySetInnerHTML={{ __html: a.title }}
                  />
                  <p className="text-sm font-mono text-accent uppercase tracking-widest mt-2">
                    {a.summary}
                  </p>
                  <p
                    className="text-base text-foreground-secondary leading-relaxed mt-4 flex-1"
                    dangerouslySetInnerHTML={{ __html: a.body }}
                  />
                  <div className="mt-5 pt-4 border-t border-border">
                    <span className="text-[10px] font-mono text-foreground-muted uppercase tracking-widest">
                      Output
                    </span>
                    <p className="text-sm font-mono text-accent mt-1">{a.metric}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Events &amp; Workshops — 80vh */}
      <section className="min-h-[80vh] flex items-center py-24 bg-surface-white border-b border-border w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Events &amp; Workshops
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              Talks, bootcamps, and public office hours.
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              A running log of the events we have hosted, the conferences we have presented at, and the sessions still open for registration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((e) => {
              const Icon = e.icon;
              return (
                <div
                  key={e.title}
                  className="bg-surface border border-border p-6 rounded-2xl flex flex-col"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#f4f7f5] border border-border flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#4a6b5d]" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-1 rounded ${
                      e.badge === 'Upcoming'
                        ? 'bg-accent/10 text-accent'
                        : e.badge === 'Ongoing'
                        ? 'bg-emerald-500/10 text-emerald-600'
                        : 'bg-foreground/5 text-foreground-muted'
                    }`}>
                      {e.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-snug">
                    {e.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary leading-relaxed mt-3 flex-1">
                    {e.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Open Source Repositories — 80vh */}
      <section className="min-h-[80vh] flex items-center py-24 bg-surface border-b border-border w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <Github className="w-4 h-4 text-accent" />
              <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest">
                Open Source Repositories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              Libraries extracted from production code.
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              Every public repo is MIT-licensed and developed in the open. We publish after a library has shipped to at least one production engagement — never as a side experiment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((r) => (
              <a
                key={r.name}
                href={`https://github.com/${r.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface-white border border-border p-6 rounded-2xl hover:border-accent/40 transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <GitBranch className="w-5 h-5 text-foreground-muted" />
                  <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest">
                    {r.language}
                  </span>
                </div>
                <h3 className="text-base font-mono font-bold text-foreground leading-snug break-all">
                  {r.name}
                </h3>
                <p className="text-sm text-foreground-secondary leading-relaxed mt-3 flex-1">
                  {r.description}
                </p>
                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-mono text-foreground-muted">
                    ★ {r.stars}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Community Impact — 80vh */}
      <section className="min-h-[80vh] flex items-center py-24 bg-surface-white border-b border-border w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Community Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              The numbers behind the work.
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              We track our community work the same way we track client engagements — with concrete metrics and public output.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {communityStats.map((s) => (
              <div
                key={s.label}
                className="bg-surface border border-border p-6 rounded-2xl"
              >
                <p className="text-5xl font-mono font-black text-accent leading-none">
                  {s.value}
                </p>
                <p className="text-sm font-bold text-foreground mt-3">
                  {s.label}
                </p>
                <p className="text-xs text-foreground-muted font-mono mt-1">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#f4f7f5] border border-border rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">
                Want to collaborate on community work?
              </h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                We welcome co-hosted workshops, joint research projects with academic partners, and OSS contribution from any engineer working on similar problems. Reach out via the{' '}
                <Link href="/contact" className="text-accent font-mono underline underline-offset-2">
                  contact form
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <LetsConnect />

      <Footer />
    </div>
  );
}
