'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import {
  Cpu, Database, Cloud, Wifi, Code2, GitBranch,
  ShieldCheck, FileCheck2, Wrench, BookOpen, Users,
  ArrowRight, Sparkles, ClipboardList, Rocket, Handshake,
  Terminal, Layers,
} from 'lucide-react';

const principles = [
  {
    icon: Cpu,
    title: 'Offline-First Architecture',
    summary: 'Local-first by default, not as a fallback.',
    body: 'Every system we build defaults to local data caching in IndexedDB, SQLite, or a local store server. Branch operations never halt when the internet drops mid-transaction. The sync engine reconciles in the background when connectivity returns, with deterministic conflict resolution rules and a visible audit trail for any manual override.',
  },
  {
    icon: Database,
    title: 'Standard Relational Databases',
    summary: 'PostgreSQL · MySQL · SQLite.',
    body: 'We use mature, open-source relational databases with decades of operational track records. There are no proprietary schemas, no hidden cloud subscriptions, no vendor APIs you cannot escape. You own your data, your schema, and your indexes — fully exportable as standard SQL, fully documented in your repository.',
  },
  {
    icon: Cloud,
    title: 'IRD-Compliant Transaction Logging',
    summary: 'Audit-ready by default, not retrofitted.',
    body: 'Every transaction is logged in a format that meets Nepal&apos;s Inland Revenue Department VAT standards from day one. Invoices carry sequential numbering, immutable timestamps, signed payload hashes, and the full buyer-supplier trail. When IRD audits arrive, you generate the reports in one click — no manual reconciliation, no forensic reconstruction.',
  },
  {
    icon: Wifi,
    title: 'Multi-Branch Sync Engine',
    summary: 'Go-based, conflict-aware, retry-safe.',
    body: 'Our Go-based sync engine handles conflict resolution, exponential retry queues, partial connectivity scenarios, and network partitions — built specifically for the kind of intermittent links that characterize real-world Nepal deployments. Branches can operate for days offline and resync cleanly without data loss.',
  },
];

const processSteps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Discovery & Site Survey',
    body: 'We visit your branches in person. We observe real cashier workflows, document failure modes (connectivity, power cuts, hardware quirks), interview operators, and map out the actual edge cases. We never start coding from a slide deck.',
    duration: '1–2 weeks',
  },
  {
    icon: Layers,
    step: '02',
    title: 'Architecture & Specification',
    body: 'We deliver a written architecture document, a database schema, a sync engine specification, and a detailed delivery scope before any production code is written. You sign off on what will be built — there are no moving targets.',
    duration: '1–2 weeks',
  },
  {
    icon: GitBranch,
    step: '03',
    title: 'Iterative Build',
    body: 'Two-week sprints with working software at the end of each cycle. You see real features in your staging environment, give feedback on real flows, and steer priorities. No big-bang releases, no demo-ware, no hidden layers of polish that vanish under real load.',
    duration: '8–16 weeks',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'On-Site Deployment',
    body: 'We travel to your branch for installation, hardware integration (printers, scanners, cash drawers), staff training in Nepali, and live testing with real transactions. The first live day is supervised by our engineers, not handed off to a vendor partner.',
    duration: '1–2 weeks',
  },
  {
    icon: Handshake,
    step: '05',
    title: 'Open Code Handover',
    body: 'Full source access, infrastructure diagrams, runbooks, and ownership transfer. Your internal team can read, maintain, and extend the system without calling us back. We stay available for advisory retainers — but the dependency is optional, not structural.',
    duration: 'Ongoing advisory',
  },
];

const standards = [
  {
    icon: Code2,
    title: 'Strictly Typed Codebases',
    body: 'TypeScript on the frontend, statically typed Go or TypeScript on the backend. No `any` escapes, no silent nulls, no runtime type drift. The compiler is the first line of defense against regressions.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Baseline',
    body: 'TLS 1.3 in transit, AES-256 at rest, role-based access control on every endpoint, audit logs for every privileged action. We do not ship features that bypass authentication or authorization for convenience.',
  },
  {
    icon: Wrench,
    title: 'Infrastructure as Code',
    body: 'Every deployment is reproducible. Dockerfiles, Nginx configs, PM2 process files, and provisioning scripts live in your repository. A new branch server can be stood up in under an hour from a clean machine.',
  },
  {
    icon: BookOpen,
    title: 'Living Documentation',
    body: 'Architecture decisions, runbooks, and operational playbooks are written alongside the code, not after the fact. New engineers — yours or ours — can onboard against the repository without tribal knowledge transfers.',
  },
  {
    icon: FileCheck2,
    title: 'Tested at the Edges',
    body: 'Unit tests, integration tests, and end-to-end transaction simulations. We deliberately test the failure paths — offline mode, network partitions, partial sync — because those are the scenarios our clients actually face in production.',
  },
  {
    icon: Users,
    title: 'Code Review Discipline',
    body: 'Every commit passes through peer review. No single-author hotfixes land in production. The change log is auditable, the reviewer trail is preserved, and technical debt is tracked as an explicit backlog item rather than disguised as progress.',
  },
];

const engagements = [
  {
    name: 'Bespoke System Build',
    duration: '3–6 months',
    body: 'Full custom engineering for a defined operational problem. Fixed scope, fixed deliverables, fixed handover. Best for greenfield systems and infrastructure modernization projects.',
  },
  {
    name: 'Multi-Branch Rollout',
    duration: '2–4 months per branch',
    body: 'Sequential deployment of an existing system across new branch locations. Includes hardware procurement, on-site installation, staff training, and live-day supervision.',
  },
  {
    name: 'Advisory Retainer',
    duration: 'Ongoing · monthly',
    body: 'A standing engineering relationship for clients who maintain their own codebase but want access to our architects for reviews, incident response, and roadmap guidance.',
  },
];

export default function HowWeWorkPage() {
  return (
    <div className="relative min-h-screen bg-surface text-foreground font-sans selection:bg-accent selection:text-white">
      <Header />

      {/* Section 1: Hero — 90vh */}
      <section className="min-h-[90vh] flex items-center bg-surface-2 border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest">
                  How We Work
                </span>
                <span className="w-8 h-px bg-accent/40" />
                <span className="text-sm font-mono text-foreground-muted uppercase tracking-widest">
                  02 / Engineering Method
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-foreground font-display leading-[1.05]">
                Engineering principles that{' '}
                <span className="text-accent italic">outlast trends.</span>
              </h1>
              <p className="text-base md:text-lg text-foreground-secondary mt-8 leading-relaxed max-w-2xl">
                We reject hypothetical software designs. We build and test against the real failure modes our clients face — internet drops, local power cuts, multi-branch reconciliation drift, and the IRD audit calendar. The principles below are not aspirational. They are the constraints that shape every commit.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-mono text-foreground-muted uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-accent" />
                  Production-First
                </span>
                <span className="text-foreground/30">·</span>
                <span className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-accent" />
                  2-Week Sprints
                </span>
                <span className="text-foreground/30">·</span>
                <span className="flex items-center gap-2">
                  <Handshake className="w-4 h-4 text-accent" />
                  Open Handover
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
                    ▸ METHOD.CONTRACT
                  </span>
                </div>
                <dl className="space-y-5 font-mono text-sm">
                  <div className="flex justify-between border-b border-white/5 pb-3">
                    <dt className="text-white/40 uppercase tracking-wider text-xs">Cadence</dt>
                    <dd className="text-emerald-300">2-week sprints</dd>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-3">
                    <dt className="text-white/40 uppercase tracking-wider text-xs">Codebase</dt>
                    <dd className="text-emerald-300">Strictly typed</dd>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-3">
                    <dt className="text-white/40 uppercase tracking-wider text-xs">Handover</dt>
                    <dd className="text-emerald-300">Open source</dd>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-3">
                    <dt className="text-white/40 uppercase tracking-wider text-xs">Deployment</dt>
                    <dd className="text-emerald-300">On-site supervised</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-white/40 uppercase tracking-wider text-xs">Ownership</dt>
                    <dd className="text-accent text-right">Yours · Always</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Engineering Principles — 90vh */}
      <section className="min-h-[90vh] flex items-center py-24 bg-surface-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Engineering Principles
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              Four constraints that govern every commit.
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              These principles are codified in our architecture review checklist, applied during code review, and referenced in every client delivery contract. They are the reason our systems keep working long after deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group relative bg-surface border border-border p-8 rounded-2xl hover:border-accent/40 transition-colors duration-300 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <span className="text-sm font-mono font-bold text-foreground-muted">
                      P/0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight text-foreground font-display leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm font-mono text-accent uppercase tracking-widest mt-2">
                    {p.summary}
                  </p>
                  <p className="text-base text-foreground-secondary leading-relaxed mt-4 flex-1">
                    {p.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Our Process — 90vh */}
      <section className="min-h-[90vh] flex items-center py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              A predictable five-phase engagement model.
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              The same sequence, applied at different scales, for every client engagement. No surprise scope expansions, no missed handoffs, no orphan infrastructure at the end of the contract.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative bg-surface-white border border-border p-6 rounded-2xl flex flex-col"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#f4f7f5] border border-border flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#4a6b5d]" />
                    </div>
                    <span className="text-2xl font-mono font-black text-accent/30">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary leading-relaxed mt-3 flex-1">
                    {step.body}
                  </p>
                  <div className="mt-5 pt-4 border-t border-border">
                    <span className="text-[10px] font-mono text-foreground-muted uppercase tracking-widest">
                      Duration
                    </span>
                    <p className="text-xs font-mono text-accent mt-1">{step.duration}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Code Standards & Handover — 80vh */}
      <section className="min-h-[80vh] flex items-center py-24 bg-surface-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Code Standards &amp; Handover
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              Production code that survives the next decade.
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              Six non-negotiable standards that run through our codebases. We treat them as delivery commitments, not internal preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-surface border border-border p-6 rounded-2xl flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary leading-relaxed mt-3 flex-1">
                    {s.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Engagement Models — 80vh */}
      <section className="min-h-[80vh] flex items-center py-24 bg-surface-2 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Engagement Models
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              Three ways to work with the studio.
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              Whether you need a greenfield system, a multi-branch rollout, or a long-term engineering partner, the engagement model fits the operational reality — not the other way around.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {engagements.map((e) => (
              <div
                key={e.name}
                className="bg-surface-white border border-border p-8 rounded-2xl flex flex-col hover:border-accent/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest">
                    Model
                  </span>
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-foreground font-display leading-snug">
                  {e.name}
                </h3>
                <p className="text-sm font-mono text-foreground-muted mt-3">
                  {e.duration}
                </p>
                <p className="text-base text-foreground-secondary leading-relaxed mt-5 flex-1">
                  {e.body}
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
                >
                  Discuss Scope
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Connect CTA */}
      <LetsConnect />

      <Footer />
    </div>
  );
}
