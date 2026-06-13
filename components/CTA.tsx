'use client';

import { ArrowRight, Code2, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <div className="max-w-[90rem] mx-auto px-6 lg:px-10 min-h-screen flex flex-col justify-center" id="landing-cta">
      <div className="relative overflow-hidden rounded-3xl bg-dark text-surface border border-dark-border">
        {/* Background grid accent */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="ctaGrid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="var(--color-accent-2)"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>

        {/* Terminal frame edge */}
        <div className="absolute top-0 left-0 right-0 flex items-center gap-2 px-6 py-3 border-b border-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-xs font-mono tracking-widest uppercase" style={{ color: 'color-mix(in srgb, var(--color-accent-2), transparent 30%)' }}>
            ▸ MANIFESTO.SH
          </span>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16 py-12 md:py-16 text-center">
          <span className="text-xs font-mono text-accent tracking-widest uppercase font-bold block mb-6">
            The Studio Philosophy
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter font-display leading-[1.05] text-white">
            We give you the code.{' '}
            <span className="text-accent italic">You own it forever.</span>
          </h2>

          <p className="text-base md:text-lg text-white/60 leading-relaxed mt-8 max-w-2xl mx-auto">
            No subscriptions. No lock-in. Just software that works.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-white font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              Deploy Your System
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/about"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-mono font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 border border-white/10"
            >
              <BookOpen className="w-4 h-4 text-accent" />
              Read Our Code Standards
            </Link>
          </div>

          {/* Inline meta line */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-white/40 uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-pulse" />
              SOVEREIGN DEPLOYMENT
            </span>
            <span className="text-white/20">·</span>
            <span>NO FORCED UPDATES</span>
            <span className="text-white/20">·</span>
            <span>VENDOR INDEPENDENT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
