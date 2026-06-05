'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import {
  Code2, Server, Layers, ShieldCheck, Wrench, FileCheck2,
  Terminal, ArrowRight, Sparkles, MapPin, Briefcase,
} from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: 'Saugat Dhungana',
    role: 'Founder &amp; Lead Engineer',
    initials: 'SD',
    bio: 'Full-stack architect specializing in offline-first systems and low-bandwidth optimized applications. Leads the studio&apos;s architecture review board and direct-client engineering engagements.',
    image: 'https://picsum.photos/seed/saugat/400/400',
    focus: 'System Architecture',
  },
  {
    name: 'Anita Sharma',
    role: 'Head of Product',
    initials: 'AS',
    bio: 'Product strategist with deep experience in retail POS workflows and ERP integration across multi-branch operations. Owns client discovery and scope definition.',
    image: 'https://picsum.photos/seed/anita/400/400',
    focus: 'Product Strategy',
  },
  {
    name: 'Bikash Thapa',
    role: 'Backend Engineer',
    initials: 'BT',
    bio: 'Server infrastructure and database synchronization specialist. Builds the Go-based sync engines that keep branches connected across intermittent links.',
    image: 'https://picsum.photos/seed/bikash/400/400',
    focus: 'Sync Engines · Go',
  },
  {
    name: 'Prativa Karki',
    role: 'Frontend Engineer',
    initials: 'PK',
    bio: 'UI/UX craftsperson focused on responsive, accessible interfaces that work flawlessly on mobile and low-end devices across the Nepali retail market.',
    image: 'https://picsum.photos/seed/prativa/400/400',
    focus: 'Frontend · A11y',
  },
  {
    name: 'Roshan Rai',
    role: 'DevOps &amp; Infrastructure',
    initials: 'RR',
    bio: 'Manages deployment clusters, CI/CD pipelines, and server reliability across all CivoraX production environments and on-premise client installations.',
    image: 'https://picsum.photos/seed/roshan/400/400',
    focus: 'DevOps · SRE',
  },
  {
    name: 'Sita Limbu',
    role: 'QA &amp; Compliance Lead',
    initials: 'SL',
    bio: 'Ensures every release meets IRD VAT standards and maintains rigorous testing protocols for all POS modules. Owns the audit log architecture.',
    image: 'https://picsum.photos/seed/sita/400/400',
    focus: 'QA · IRD Compliance',
  },
];

const cultureValues = [
  {
    icon: Code2,
    title: 'Engineering Craft',
    body: 'We treat software as infrastructure. Strictly typed codebases, peer-reviewed commits, reproducible builds, and thorough documentation are non-negotiable.',
  },
  {
    icon: ShieldCheck,
    title: 'Long-Term Thinking',
    body: 'We optimize for the next decade, not the next sprint. Decisions are evaluated against maintainability, security, and ownership transfer — never against short-term velocity.',
  },
  {
    icon: Layers,
    title: 'Plain Communication',
    body: 'No jargon, no marketing veneer, no hidden agendas. We document decisions, surface trade-offs, and write status updates that read like engineering notes.',
  },
  {
    icon: Sparkles,
    title: 'Local Roots',
    body: 'We are Dharan-based, Nepali-led, and accountable to the regional ecosystem. Our roadmap is shaped by the constraints our clients actually operate under.',
  },
];

const hiringRoles = [
  {
    title: 'Senior Backend Engineer (Go)',
    type: 'Full-time · On-site Dharan',
    detail: 'Own sync engine development, conflict resolution patterns, and database performance. 3+ years production Go required.',
  },
  {
    title: 'Frontend Engineer (TypeScript / React)',
    type: 'Full-time · Hybrid',
    detail: 'Build accessible, low-bandwidth UI for retail POS surfaces. Strong TypeScript fundamentals, mobile-first design instincts.',
  },
  {
    title: 'Hardware Integration Engineer',
    type: 'Contract · Dharan / Kathmandu',
    detail: 'ESC/POS printers, WebUSB, Bluetooth serial. Field deployment experience preferred. Comfortable with on-site branch work.',
  },
];

export default function OurTeamPage() {
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
                  Our Team
                </span>
                <span className="w-8 h-px bg-accent/40" />
                <span className="text-sm font-mono text-foreground-muted uppercase tracking-widest">
                  04 / The Engineers
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-foreground mb-6 font-display leading-[1.05]">
                The engineers behind{' '}
                <span className="text-accent italic">CivoraX.</span>
              </h1>
              <p className="text-foreground-secondary text-base md:text-lg max-w-2xl leading-relaxed">
                A tight-knit team of six builders, designers, and operators based in Dharan. We care deeply about craft, reliability, and the long-term partnerships that follow from shipping software that actually works.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-mono text-foreground-muted uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  Dharan · Nepal
                </span>
                <span className="text-foreground/30">·</span>
                <span className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-accent" />
                  6 Core Engineers
                </span>
                <span className="text-foreground/30">·</span>
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-accent" />
                  100% In-House
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
                    ▸ TEAM.ROSTER
                  </span>
                </div>
                <ul className="space-y-4 font-mono text-sm">
                  {TEAM_MEMBERS.map((m) => (
                    <li
                      key={m.name}
                      className="flex items-center justify-between border-b border-white/5 pb-3 last:border-b-0 last:pb-0"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-300 font-bold text-xs flex items-center justify-center shrink-0">
                          {m.initials}
                        </span>
                        <div className="min-w-0">
                          <p className="text-white font-bold truncate">{m.name}</p>
                          <p className="text-[10px] text-white/40 uppercase tracking-wider">
                            {m.focus}
                          </p>
                        </div>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Team Grid — 90vh */}
      <section className="min-h-[90vh] flex items-center py-24 bg-surface border-b border-border w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              The Roster
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              Six engineers. No account managers, no handoffs.
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              Every person you talk to during a CivoraX engagement is an engineer. We do not have a sales team, no separate support queue — the team that scopes the work is the team that ships it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="group bg-surface-white border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-surface-2 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#0f1714]/90 text-emerald-300 font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                    {member.initials}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3
                    className="text-lg font-bold text-foreground"
                    dangerouslySetInnerHTML={{ __html: member.name }}
                  />
                  <p
                    className="text-xs font-mono font-bold text-accent uppercase tracking-wider mt-1"
                    dangerouslySetInnerHTML={{ __html: member.role }}
                  />
                  <p
                    className="text-sm text-foreground-secondary leading-relaxed mt-3 flex-1"
                    dangerouslySetInnerHTML={{ __html: member.bio }}
                  />
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-[10px] font-mono text-foreground-muted uppercase tracking-widest">
                      Focus
                    </span>
                    <p className="text-xs font-mono text-foreground mt-1">
                      {member.focus}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Culture &amp; Values — 80vh */}
      <section className="min-h-[80vh] flex items-center py-24 bg-surface-white border-b border-border w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Culture &amp; Values
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              How we work together, written down.
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              The studio&apos;s operating principles are explicit. They govern how we hire, how we review each other&apos;s work, and how we decide what to build next.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {cultureValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-surface border border-border p-6 rounded-2xl flex flex-col"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-mono font-bold text-foreground-muted">
                      V/0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground leading-snug">
                    {v.title}
                  </h3>
                  <p className="text-base text-foreground-secondary leading-relaxed mt-3 flex-1">
                    {v.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Working With Us — 80vh */}
      <section className="min-h-[80vh] flex items-center py-24 bg-surface border-b border-border w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Working With Us
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              Open roles, internships, and collaborations.
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              We hire slowly and only when the work demands it. When we do, the openings are listed here first — alongside active internship and collaboration tracks.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {hiringRoles.map((role) => (
              <div
                key={role.title}
                className="group bg-surface-white border border-border p-6 rounded-2xl flex flex-col hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest">
                    Open
                  </span>
                </div>
                <h3
                  className="text-lg font-bold text-foreground leading-snug"
                  dangerouslySetInnerHTML={{ __html: role.title }}
                />
                <p
                  className="text-sm font-mono text-foreground-muted mt-2"
                  dangerouslySetInnerHTML={{ __html: role.type }}
                />
                <p
                  className="text-sm text-foreground-secondary leading-relaxed mt-4 flex-1"
                  dangerouslySetInnerHTML={{ __html: role.detail }}
                />
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
                >
                  Apply
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#f4f7f5] border border-border rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">
                Summer Internship Track
              </h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                We host two paid undergraduate engineering interns every summer (June–August). Applications open in March each year via the contact form. Nepali nationals currently enrolled in a CS or related undergraduate program are eligible.
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
