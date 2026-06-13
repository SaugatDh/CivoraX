'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import Header from '@/components/Header';
import LanderHero from '@/components/LanderHero';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import { ShoppingCart, Building2, Globe } from 'lucide-react';

const builds = [
  {
    icon: ShoppingCart,
    title: 'Offline-First POS',
    description: 'Retail checkout that works without internet. Sales queue locally, sync when connected.',
    tag: 'Retail',
  },
  {
    icon: Building2,
    title: 'Multi-Branch ERP',
    description: 'Unified inventory, accounting, and reporting across all branches in real time.',
    tag: 'Distribution',
  },
  {
    icon: Globe,
    title: 'Bespoke Web Portals',
    description: 'Custom client portals, booking systems, and internal tools built for Nepal.',
    tag: 'Services',
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-surface text-foreground font-sans selection:bg-accent selection:text-white">
      <Header />

      <main className="flex flex-col flex-1">
        <LanderHero />

        {/* What We Build */}
        <section className="py-12 md:py-16 bg-surface-white border-b border-border">
          <div className="max-w-[90rem] mx-auto px-6 lg:px-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-3">
                What We Build
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground font-display">
                Three products. One studio.
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {builds.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-surface border border-border p-8 rounded-2xl hover:border-accent/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
                  >
                    <span className="text-[11px] font-mono font-bold text-accent uppercase tracking-widest mb-3">{item.tag}</span>
                    <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground font-display mb-2">{item.title}</h3>
                    <p className="text-base text-foreground-secondary leading-relaxed flex-1">{item.description}</p>
                    <Link
                      href="/products"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:gap-2.5 transition-all duration-200"
                    >
                      Learn more <span className="text-xs">→</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats + Testimonial */}
        <section className="py-16 bg-[var(--surface-2)] border-b border-border">
          <div className="max-w-[90rem] mx-auto px-6 lg:px-10 w-full">
              <div className="text-center mb-12">
                <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-3">
                  By The Numbers
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground font-display">
                  Real results, real businesses.
                </h2>
              </div>
              <Stats />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 max-w-2xl mx-auto border-l-2 border-accent pl-6"
            >
              <blockquote className="text-xl md:text-2xl italic text-foreground leading-relaxed">
                Internet drops are no longer an operational barrier — transactions queue locally
                and sync cleanly when links return.
              </blockquote>
              <p className="text-sm font-semibold text-foreground mt-4">
                — Ramesh Karki
              </p>
              <p className="text-xs text-foreground-muted mt-0.5">
                Karki General Store, Dharan
              </p>
            </motion.div>
          </div>
        </section>

        <CTA />
      </main>

      <LetsConnect />
      <Footer />
    </div>
  );
}
