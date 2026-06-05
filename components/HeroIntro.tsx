'use client';

import Link from 'next/link';

export default function HeroIntro() {
  return (
    <section className="w-full bg-[#f4f7f5]/30 py-20 lg:py-32 px-6 lg:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative">
      {/* Left Column - Engineered Copy (Span 7) */}
      <div className="lg:col-span-7">
        <span className="text-[10px] font-mono tracking-[0.25em] text-[#4a6b5d] uppercase bg-[#4a6b5d]/10 px-2.5 py-1 rounded-md inline-block mb-6">
          System Architecture // Intro
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1a2420] leading-[1.1]">
          We build <span className="text-[#4a6b5d]">Resilient Infrastructure</span> for Nepal&apos;s real operational conditions.
        </h2>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed mt-6 max-w-xl">
          CivoraX is a software engineering studio from Dharan specializing in offline-first retail POS, multi-branch ERP, and bespoke web portals. We write <span className="text-[#1a2420] font-semibold">Production Code</span> that handles intermittent connectivity, power transitions, and local VAT compliance — without third-party cloud subscriptions or vendor lock-in.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#4a6b5d] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-[#3d5a4d] transition-all duration-300 shadow-sm"
          >
            Explore Capabilities <span>→</span>
          </Link>
          <Link
            href="/about"
            className="text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-[#4a6b5d] transition-colors"
          >
            About the Studio →
          </Link>
        </div>
      </div>

      {/* Right Column - The CivoraX Core Engine Graphic (Span 5) */}
      <div className="lg:col-span-5 w-full bg-[#1a2420] p-6 rounded-2xl shadow-xl relative border border-slate-800/40 min-h-[320px] flex flex-col justify-between overflow-hidden">
        {/* Top bar - terminal header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#4a6b5d]/80 uppercase">Live · Dharan-Main</span>
          </div>
          <span className="font-mono text-[10px] text-[#4a6b5d]/50">v2.4.1</span>
        </div>

        {/* Middle - system tracking data */}
        <div className="space-y-1.5 font-mono text-[11px] text-[#4a6b5d]/60 mt-4">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500/80">▸</span>
            <span>NODE.BRANCH.KOSHI</span>
            <span className="ml-auto text-emerald-500/80">SYNC</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500/80">▸</span>
            <span>NODE.BRANCH.BAGMATI</span>
            <span className="ml-auto text-emerald-500/80">SYNC</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-500/80">▸</span>
            <span>NODE.BRANCH.GANDAKI</span>
            <span className="ml-auto text-amber-400/80">RETRY</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500/60">▸</span>
            <span>OFFLINE.BUFFER.LOCAL</span>
            <span className="ml-auto text-slate-500/60">142.8 KB</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500/60">▸</span>
            <span>VAT.LOG.IRD_COMPLIANT</span>
            <span className="ml-auto text-slate-500/60">PASS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500/60">▸</span>
            <span>UPTIME.LAST_30D</span>
            <span className="ml-auto text-slate-500/60">99.82%</span>
          </div>
        </div>

        {/* Bottom - matrix/schematic lines */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-1.5">
            <div className="h-1 flex-1 bg-[#4a6b5d]/40 rounded-full" />
            <div className="h-1 w-3/5 bg-[#4a6b5d]/30 rounded-full" />
            <div className="h-1 w-4/5 bg-[#4a6b5d]/50 rounded-full" />
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-1 w-2/3 bg-[#4a6b5d]/20 rounded-full" />
            <div className="h-1 flex-1 bg-[#4a6b5d]/30 rounded-full" />
            <div className="h-1 w-1/2 bg-[#4a6b5d]/40 rounded-full" />
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-1 w-1/2 bg-[#4a6b5d]/35 rounded-full" />
            <div className="h-1 w-4/5 bg-[#4a6b5d]/25 rounded-full" />
            <div className="h-1 flex-1 bg-[#4a6b5d]/45 rounded-full" />
          </div>
          <div className="flex items-center justify-between pt-2 font-mono text-[10px] text-[#4a6b5d]/50">
            <span>REQ/s <span className="text-emerald-500/80">284</span></span>
            <span>LAT <span className="text-emerald-500/80">42ms</span></span>
            <span>ERR <span className="text-emerald-500/80">0.01%</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
