'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Smartphone, Layers, Receipt, ArrowRight } from 'lucide-react';

export default function ServicesPreview() {
  const previews = [
    {
      icon: <Receipt className="w-5 h-5 text-accent" />,
      title: 'Offline-First VAT POS',
      desc: 'Local checkout registers that cache sales ledger files in browser IndexedDB pools when power or fiber networks drop.'
    },
    {
      icon: <Layers className="w-5 h-5 text-accent" />,
      title: 'Enterprise Core ERPs',
      desc: 'Central accounting commands syncing real-time sales, dual-ledgers ledger reports, and stock metrics securely.'
    },
    {
      icon: <Smartphone className="w-5 h-5 text-accent" />,
      title: 'Bespoke Corporate Web Apps',
      desc: 'Dynamic, high-speed SaaS systems, custom member pipelines and client portal terminals optimized for GSM networks.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10" id="landing-services-preview">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div className="max-w-xl">
          <div className="text-[11px] font-mono text-accent uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Ecosystem Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground font-display">
            Modular software built to resolve real operational barriers.
          </h2>
        </div>
        <Link 
          href="/services"
          className="text-sm font-semibold tracking-wider uppercase font-mono text-accent hover:text-accent-hover flex items-center gap-1 shrink-0 group self-start md:self-end"
        >
          View Technical Matrix
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {previews.map((pre, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-surface border border-border p-7 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                {pre.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-display">{pre.title}</h3>
              <p className="text-xs text-foreground-secondary leading-relaxed">
                {pre.desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/60">
              <span className="text-[10px] font-mono text-foreground-muted uppercase">Active Modules available</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
