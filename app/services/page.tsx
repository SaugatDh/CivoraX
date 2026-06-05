'use client';

import Header from '@/components/Header';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import {
  Shield, Smartphone, HardDrive, Terminal,
  Monitor, Database, Cloud, Cpu, GitBranch,
  CheckCircle2, ArrowRight, Zap, Lock,
  Layers, Server, Wifi, FileText,
} from 'lucide-react';
import Link from 'next/link';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Site Survey',
    description: 'We visit your branches, observe real workflows, document failure modes (connectivity, power, hardware), and interview staff. We deliver a written architecture document and a clear specification before writing code.',
    duration: '1-2 weeks',
  },
  {
    number: '02',
    title: 'Architecture & Prototype',
    description: 'We build a working prototype on your hardware at one branch. You validate the real-world interaction model before we scale. No mockups, no slideshows — running software on real thermal printers.',
    duration: '2-3 weeks',
  },
  {
    number: '03',
    title: 'Iterative Build & Deploy',
    description: 'Two-week sprints with working software at the end of each cycle. We deploy to additional branches progressively, gathering operational feedback that shapes the next iteration. No big-bang releases.',
    duration: '4-10 weeks',
  },
  {
    number: '04',
    title: 'On-Site Rollout & Training',
    description: 'We travel to every branch for installation, staff training in Nepali, and live testing with real transactions. Each site goes live with full operational handover documentation.',
    duration: '2-4 weeks',
  },
  {
    number: '05',
    title: 'Support & Code Handover',
    description: '90-day post-launch support included. We then provide full source code handover, infrastructure documentation, and optional annual maintenance. You own the system entirely.',
    duration: 'Ongoing',
  },
];

const techStack = [
  { category: 'Frontend', items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Motion'] },
  { category: 'Backend', items: ['Go (Sync Engine)', 'Node.js', 'PostgreSQL', 'Redis', 'REST + WebSockets'] },
  { category: 'Infrastructure', items: ['Standalone Builds', 'Cloud Run', 'Docker', 'Nginx', 'PM2'] },
  { category: 'Hardware', items: ['ESC/POS Thermal', 'WebUSB', 'Bluetooth Serial', 'Barcode Scanners', 'Cash Drawers'] },
];

const industries = [
  {
    icon: Layers,
    title: 'Retail & Supermarkets',
    description: 'Multi-branch grocery chains, hardware stores, and boutique retailers. We handle barcode scanning, weight-based pricing, mixed payment flows, and end-of-day reconciliation.',
  },
  {
    icon: Server,
    title: 'Distribution & Wholesale',
    description: 'B2B distributors managing inventory across regional warehouses. Stock transfers, purchase orders, supplier ledgers, and credit management.',
  },
  {
    icon: Wifi,
    title: 'Restaurants & Cafés',
    description: 'Table management, KOT routing, split bills, and quick-service modes. Offline-capable terminals that survive kitchen-floor network chaos.',
  },
  {
    icon: FileText,
    title: 'Service Businesses',
    description: 'Studios, clinics, and consultancies needing appointment booking, invoicing, and client records with IRD-compliant receipts.',
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-surface text-foreground font-sans selection:bg-accent selection:text-white">
      <Header />

      {/* Hero — full viewport */}
      <section className="min-h-[90vh] flex items-center bg-surface-2 border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column — Main Copy */}
            <div>
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-3">
                System Architecture // Intro
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
                We build <span className="text-accent italic">Resilient Infrastructure</span> for Nepal&apos;s real operational conditions.
              </h1>
              <p className="text-base md:text-lg text-foreground-secondary mt-6 leading-relaxed max-w-2xl">
                CivoraX is a software engineering studio from Dharan specializing in offline-first retail POS, multi-branch ERP, and bespoke web portals. We write Production Code that handles intermittent connectivity, power transitions, and local VAT compliance — without third-party cloud subscriptions or vendor lock-in.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-accent-2 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-accent-2-hover transition-all duration-300 shadow-sm"
                >
                  Explore Capabilities <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/about/introduction"
                  className="text-xs font-semibold uppercase tracking-wider text-foreground-secondary hover:text-accent transition-colors"
                >
                  About the Studio →
                </Link>
              </div>
            </div>

            {/* Right Column — Terminal Window */}
            <div className="w-full">
              <div className="rounded-2xl overflow-hidden border border-[#1a2420]/20 bg-[#0f1714] shadow-2xl shadow-[#1a2420]/10">
                {/* Terminal Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#1a2420] border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                    <span className="ml-3 text-[11px] font-mono text-emerald-300/90 tracking-wide">
                      Live · Dharan-Main
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-white/40 tracking-wide">
                    v2.4.1
                  </span>
                </div>

                {/* Active Node Sync Stream */}
                <div className="px-5 py-5 font-mono text-[11px] leading-relaxed">
                  <div className="flex justify-between text-emerald-300/70">
                    <span>▸ NODE.BRANCH.KOSHI</span>
                    <span className="text-emerald-400">[SYNC_SUCCESS]</span>
                  </div>
                  <div className="flex justify-between text-emerald-300/70 mt-1.5">
                    <span>▸ NODE.BRANCH.BAGMATI</span>
                    <span className="text-emerald-400">[SYNC_SUCCESS]</span>
                  </div>
                  <div className="flex justify-between text-emerald-300/70 mt-1.5">
                    <span>▸ NODE.BRANCH.GANDAKI</span>
                    <span className="text-amber-400">[RETRY_DELAY_3S]</span>
                  </div>
                  <div className="flex justify-between text-emerald-300/70 mt-1.5">
                    <span>▸ OFFLINE.BUFFER.LOCAL</span>
                    <span className="text-sky-300">[142.8 KB // STAGED]</span>
                  </div>
                  <div className="flex justify-between text-emerald-300/70 mt-1.5">
                    <span>▸ VAT.LOG.IRD_COMPLIANT</span>
                    <span className="text-emerald-400">[PASS_SECURE]</span>
                  </div>
                  <div className="flex justify-between text-emerald-300/70 mt-1.5">
                    <span>▸ UPTIME.LAST_30D</span>
                    <span className="text-emerald-400">[99.82%]</span>
                  </div>
                </div>

                {/* Metrics Footer Bar */}
                <div className="flex items-center justify-between px-5 py-3 bg-[#1a2420]/60 border-t border-white/5 font-mono text-[10px] tracking-wider">
                  <span className="flex items-center gap-1.5 text-emerald-300/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    REQ/s: 284
                  </span>
                  <span className="text-emerald-300/80">LATENCY: 42ms</span>
                  <span className="text-emerald-300/80">ERR_RATE: 0.01%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core capabilities — full viewport via Services component */}
      <Services />

      {/* Engineering Philosophy — 80vh+ */}
      <section className="min-h-[80vh] flex items-center py-24 max-w-7xl mx-auto px-6 lg:px-10 border-b border-border w-full">
        <div className="w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Technical Directives
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground font-display">
              Our technical guidelines for high-durability software production.
            </h2>
            <p className="text-sm text-foreground-secondary mt-4 leading-relaxed max-w-2xl">
              Every line of code we write is governed by four engineering principles. These aren&apos;t aspirational — they&apos;re non-negotiable constraints baked into our development process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 bg-surface-white border border-border p-6 rounded-2xl">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground font-display">Dynamic Cellular Responsiveness</h4>
                <p className="text-xs text-foreground-secondary leading-relaxed mt-2">
                  We design interfaces under strict packet size budgets. Every element must render perfectly on 4G rural cellular connections with minimal layout shifts. We avoid heavy UI client libraries that bog down local hardware.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-surface-white border border-border p-6 rounded-2xl">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                <HardDrive className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground font-display">Resilient Browser Cache Layers</h4>
                <p className="text-xs text-foreground-secondary leading-relaxed mt-2">
                  Instead of demanding perfect uptime, our POS terminals trust the client completely. Using indexed client-side transactional registers, users can record transactions continuously without central server checks. The queues are balanced in chunks.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-surface-white border border-border p-6 rounded-2xl">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground font-display">Robust Raw ESC/POS Direct Routing</h4>
                <p className="text-xs text-foreground-secondary leading-relaxed mt-2">
                  Our printing interfaces bypass complex middleware layers entirely. We build native WebUSB or serial streams that pipe byte strings directly to thermal cash register receipt printers, preventing common driver failures.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-surface-white border border-border p-6 rounded-2xl">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground font-display">Strict Inland Revenue Ledger Compliance</h4>
                <p className="text-xs text-foreground-secondary leading-relaxed mt-2">
                  Nepali tax laws require sequential and unaltered billing records. Every receipt model we build generates verifiable SHA verification tags, making records always ready for seamless corporate financial audits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process — full viewport */}
      <section className="min-h-[90vh] flex items-center py-24 bg-surface-white border-b border-border w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Engagement Process
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground font-display">
              From first call to live deployment.
            </h2>
            <p className="text-sm text-foreground-secondary mt-4 leading-relaxed max-w-2xl">
              A predictable five-phase engagement. No surprises, no scope creep, no hidden costs. Every phase produces tangible deliverables you can review and approve.
            </p>
          </div>

          <div className="space-y-4">
            {processSteps.map((step, i) => (
              <div key={step.number} className="grid md:grid-cols-12 gap-6 items-start bg-surface border border-border p-6 md:p-8 rounded-2xl hover:shadow-md transition-all">
                <div className="md:col-span-2">
                  <div className="text-5xl font-extrabold text-accent/20 font-display leading-none">{step.number}</div>
                  <div className="text-[10px] font-mono text-foreground-muted uppercase tracking-wider mt-2">{step.duration}</div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-xl font-bold text-foreground font-display mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground-secondary leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack — full viewport */}
      <section className="min-h-[80vh] flex items-center py-24 max-w-7xl mx-auto px-6 lg:px-10 border-b border-border w-full">
        <div className="w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Technology Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground font-display">
              Battle-tested tools, not trendy frameworks.
            </h2>
            <p className="text-sm text-foreground-secondary mt-4 leading-relaxed max-w-2xl">
              We choose technologies for longevity and maintainability. Every dependency in our stack has a 5+ year support roadmap and is replaceable without rewriting the whole system.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack) => {
              const Icon =
                stack.category === 'Frontend' ? Monitor :
                stack.category === 'Backend' ? Server :
                stack.category === 'Infrastructure' ? Cloud :
                HardDrive;
              return (
                <div key={stack.category} className="bg-surface-white border border-border p-6 rounded-2xl">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 font-mono mb-4">
                    <Icon className="w-4 h-4 text-[#4a6b5d]" />
                    {stack.category}
                  </div>
                  <ul className="space-y-2">
                    {stack.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve — full viewport */}
      <section className="min-h-[80vh] flex items-center py-24 bg-surface-white border-b border-border w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground font-display">
              Domain expertise across Nepali commerce.
            </h2>
            <p className="text-sm text-foreground-secondary mt-4 leading-relaxed max-w-2xl">
              We&apos;ve deployed production systems across retail, distribution, hospitality, and services. Each domain has its own quirks — we&apos;ve learned them the hard way so you don&apos;t have to.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.title} className="bg-surface border border-border p-8 rounded-2xl hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-display mb-3">{ind.title}</h3>
                  <p className="text-sm text-foreground-secondary leading-relaxed">{ind.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why CivoraX — full viewport closing pitch */}
      <section className="min-h-[80vh] flex items-center py-24 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-3">
                Why CivoraX
              </span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground font-display">
                We&apos;re not a generic agency. We&apos;re engineers who live with the systems we build.
              </h2>
              <p className="text-sm text-foreground-secondary mt-6 leading-relaxed">
                Most software consultancies ship code and disappear. We stay involved. We&apos;ve physically traveled to remote branches in Dharan, Pokhara, and Biratnagar to install, train, and debug on-site. We answer support calls within 12 hours. We don&apos;t hide behind project managers — you talk directly to the engineers writing your code.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-extrabold text-accent font-display">12+</div>
                  <div className="text-xs text-foreground-secondary mt-1">Production systems deployed</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-accent font-display">3</div>
                  <div className="text-xs text-foreground-secondary mt-1">Provinces covered</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-accent font-display">12hr</div>
                  <div className="text-xs text-foreground-secondary mt-1">Support response time</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-accent font-display">100%</div>
                  <div className="text-xs text-foreground-secondary mt-1">Code ownership transfer</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: Lock, title: 'No Vendor Lock-in', text: 'You own the code, the data, and the infrastructure from day one.' },
                { icon: Zap, title: 'Offline-First by Default', text: 'Every system works without internet. Sync happens in the background.' },
                { icon: GitBranch, title: 'Open Code Handover', text: 'Full repository access with documentation. No proprietary traps.' },
                { icon: Database, title: 'Standard Databases', text: 'PostgreSQL, MySQL, SQLite. Exportable, portable, yours.' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 p-5 bg-surface-white border border-border rounded-xl">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground mb-1">{item.title}</h4>
                      <p className="text-xs text-foreground-secondary leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <LetsConnect />

      <Footer />
    </div>
  );
}
