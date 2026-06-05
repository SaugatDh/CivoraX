'use client';

import { ArrowRight, Code2, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10" id="landing-cta">
      <div className="relative overflow-hidden rounded-3xl bg-[#0f1714] text-surface border border-[#1a2420]">
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
                stroke="#4a6b5d"
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
          <span className="ml-3 text-xs font-mono text-emerald-300/70 tracking-widest uppercase">
            ▸ MANIFESTO.SH
          </span>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-8 md:px-16 py-20 md:py-28 text-center">
          <span className="text-xs font-mono text-accent tracking-widest uppercase font-bold block mb-6">
            The Studio Philosophy
          </span>

          <h2 className="text-4xl md:text-6xl font-medium tracking-tight font-display leading-[1.05] text-white">
            Let&apos;s build infrastructure that{' '}
            <span className="text-accent italic">lasts for decades.</span>
          </h2>

          <p className="text-base md:text-lg text-white/60 leading-relaxed mt-8 max-w-2xl mx-auto">
            Software should not break when an external subscription vendor changes
            their pricing rules. We hand over completely compiled, decoupled code
            networks that run indefinitely on your private cloud instances or
            bare-metal local office servers. You keep total data sovereignty, zero
            forced updates, and absolute software independence.
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
              href="/about/how-we-work"
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-mono font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 border border-white/10"
            >
              <BookOpen className="w-4 h-4 text-accent" />
              Read Our Code Standards
            </Link>
          </div>

          {/* Inline meta line */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-white/40 uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
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
