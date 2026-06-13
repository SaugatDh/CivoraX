'use client';

import { ShoppingCart, Building2, FileLock2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const capabilities = [
  {
    title: 'Offline-First Retail POS',
    icon: ShoppingCart,
    description:
      'Designed for high-throughput retail stores facing unstable connections. The database syncs completely locally in your browser or local store server. Sales data queue invisibly and sync up to the central ledger automatically the minute the internet connection returns. Supports instant receipt printing and peripheral scanners with near-zero latency.',
    spec: 'LOCAL-FIRST · SYNC-AWARE',
  },
  {
    title: 'Multi-Branch Enterprise ERP',
    icon: Building2,
    description:
      'A unified cockpit built to link warehouses, regional offices, and point-of-sale endpoints across separate provinces. Track real-time inventory transfers, cross-docking operations, and centralized user permissions. Includes robust audit logs to catch discrepancies before they hit your books.',
    spec: 'FEDERATED · AUDIT-READY',
  },
  {
    title: 'Bespoke Portals & VAT Compliance',
    icon: FileLock2,
    description:
      'Tailored web applications built with ironclad security frameworks. Features a fully integrated billing module that syncs securely with local tax authority portals (IRD compliance), handling local VAT structures natively without requiring expensive, third-party intermediary subscription platforms.',
    spec: 'SECURE · IRD-NATIVE',
  },
];

export default function Capabilities() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full" id="capabilities">
      <div className="max-w-3xl mb-16">
        <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
          System Blueprint
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground font-display leading-[1.1]">
          Modular software built to resolve real operational barriers.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {capabilities.map((cap) => {
          const Icon = cap.icon;
          return (
            <article
              key={cap.title}
              className="group relative bg-surface-white border border-border p-8 rounded-2xl flex flex-col hover:border-accent/40 transition-colors duration-300"
            >
              {/* Icon header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#f4f7f5] border border-border flex items-center justify-center">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <span className="text-xs font-mono font-bold text-foreground-muted uppercase tracking-widest">
                  {cap.spec}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-extrabold tracking-tighter text-foreground font-display leading-snug">
                {cap.title}
              </h3>

              {/* Description */}
              <p className="text-base text-foreground-secondary leading-relaxed mt-4 flex-1">
                {cap.description}
              </p>

              {/* Footer link */}
              <Link
                href="/career"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
              >
                Read Specification
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              {/* Faded watermark number */}
              <span
                aria-hidden="true"
                className="absolute top-4 right-6 text-[60px] font-mono font-black text-foreground/[0.04] leading-none select-none pointer-events-none"
              >
                0{capabilities.indexOf(cap) + 1}
              </span>
            </article>
          );
        })}
      </div>
    </div>
  );
}
