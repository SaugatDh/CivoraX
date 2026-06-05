'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, RefreshCw, Layers } from 'lucide-react';

export default function LanderHero() {
  return (
    <section className="relative overflow-hidden bg-surface-3 border-b border-border-3/40 min-h-screen flex items-center pt-10 pb-16 md:py-24" id="landing-hero">
      
      {/* Split Layout: Concrete BG on Right with Smooth Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none flex">
        <div className="w-1/3 h-full bg-surface-3" />
        <div className="w-2/3 h-full relative">
          <Image 
            src="/nepali_tech_hero_bg.png" 
            alt="Concrete column texture" 
            fill
            className="object-cover opacity-[0.45] mix-blend-multiply filter contrast-[1.05] saturate-[0.70]"
            referrerPolicy="no-referrer"
            priority
          />
          {/* Smooth Fade gradients to blend background perfectly */}
          <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-surface-3 via-surface-3/85 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface-3 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-surface-3 to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full" id="hero-grid-wrapper">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Core content, typography, stats & tech pills */}
          <div className="lg:col-span-7 flex flex-col items-start" id="hero-left-column">
            
            {/* Small Studio Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-surface-2/80 border border-border-2 text-foreground-secondary text-[10px] font-mono tracking-wider font-bold uppercase px-3.5 py-1.5 rounded-full mb-8 shadow-sm"
              id="hero-badge"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-pulse" />
              Software Engineering Studio · Kathmandu, Nepal
            </motion.div>

            {/* Custom Editorial Styled Headline matching image */}
            <motion.h1 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[44px] sm:text-[64px] font-medium tracking-tight text-foreground leading-[1.04] mb-6 font-display"
              id="hero-main-title"
            >
              Software built <br />
              <span className="font-serif italic font-medium text-accent-2 tracking-normal">to last.</span>
            </motion.h1>

            {/* Subheading copy */}
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-foreground-secondary text-sm sm:text-base max-w-xl leading-relaxed mb-10"
              id="hero-subtitle"
            >
              We design and engineer web applications, ERP systems, POS platforms, and AI tools — with care, precision, and a long view.
            </motion.p>

            {/* Standard CTAs matching image styles */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-14"
              id="hero-ctas"
            >
              <Link 
                href="/contact" 
                className="bg-accent-2 text-white hover:bg-accent-2-hover transition-all duration-300 rounded-full px-7 py-4 text-xs font-bold uppercase tracking-widest shadow-md inline-flex items-center gap-2"
              >
                <span>Start a project</span>
                <span className="text-sm">→</span>
              </Link>
              <Link 
                href="/products" 
                className="border border-border-3 hover:border-foreground text-foreground bg-transparent transition-all duration-300 rounded-full px-7 py-4 text-xs font-bold uppercase tracking-widest shadow-sm inline-flex items-center"
              >
                See our work
              </Link>
            </motion.div>

            {/* Core Stats Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 sm:gap-8 pb-8 border-b border-border-3/40 w-full max-w-2xl"
              id="hero-metrics"
            >
              <div>
                <div className="text-3xl font-display font-medium text-foreground">12+</div>
                <div className="text-[10px] font-mono font-bold tracking-wider text-foreground-muted uppercase mt-1">Businesses Served</div>
              </div>
              <div>
                <div className="text-3xl font-display font-medium text-foreground">99.9%</div>
                <div className="text-[10px] font-mono font-bold tracking-wider text-foreground-muted uppercase mt-1">Uptime Commitment</div>
              </div>
              <div>
                <div className="text-3xl font-display font-medium text-foreground">Nepal</div>
                <div className="text-[10px] font-mono font-bold tracking-wider text-foreground-muted uppercase mt-1">Built For Local Scale</div>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 w-full max-w-2xl"
              id="hero-tagline"
            >
              <p className="text-[10px] font-mono font-bold tracking-widest text-foreground-muted uppercase">
                Designed to scale, secure, and automate.
              </p>
            </motion.div>

          </div>

          {/* Right Column: Beautiful tilted thermal receipt with background overlap */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative py-6 md:py-12" id="hero-right-column">
            
            {/* Soft subtle glow behind the receipt card */}
            <div className="absolute w-72 h-72 bg-accent-2/10 rounded-full blur-3xl pointer-events-none select-none z-0" />

            {/* Tilted Floating Receipt Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.94, rotate: -0.5 }}
              animate={{ opacity: 1, scale: 1, rotate: -1.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[340px] bg-surface p-6 rounded-md shadow-lg border border-dashed border-border-3 font-mono text-foreground z-10 select-none before:absolute before:inset-x-0 before:-top-2 before:h-2 before:bg-receipt-jagged transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(107,143,113,0.35)]"
              id="hero-thermal-receipt"
            >
              {/* Receipt Header */}
              <div className="text-center pb-4 border-b border-dashed border-border-3 mb-4">
                <span className="text-[9px] text-foreground-muted tracking-widest uppercase block mb-1">
                  Civorax POS · Sale Receipt
                </span>
                <h3 className="text-base font-bold text-foreground font-sans">Green Mart Dharan</h3>
                <p className="text-[10px] text-foreground-secondary mt-0.5">Reg PAN: 608-291-042 · Dharan-8, Koshi</p>
              </div>

              {/* Receipt Itemized List */}
              <div className="space-y-2 text-xs text-foreground border-b border-dashed border-border-3 pb-3 mb-3">
                <div className="flex justify-between items-baseline">
                  <span>Basmati Rice (5kg) × 2</span>
                  <span className="shrink-0 pl-2">Rs. 1,100.00</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Mustard Oil (1L) × 1</span>
                  <span className="shrink-0 pl-2">Rs. 280.00</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span>Tata Salt (1kg) × 3</span>
                  <span className="shrink-0 pl-2">Rs. 150.00</span>
                </div>
              </div>

              {/* Receipt Totals */}
              <div className="space-y-1.5 text-xs text-foreground-secondary mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. 1,530.00</span>
                </div>
                <div className="flex justify-between text-[11px] text-foreground-muted">
                  <span>VAT Compliance (13%)</span>
                  <span>Rs. 198.90</span>
                </div>
              </div>

              {/* Receipt Grand Total */}
              <div className="border-t border-dashed border-border-3 pt-3 pb-3 flex justify-between items-baseline mb-4">
                <span className="text-xs font-bold font-sans">Total Amount</span>
                <span className="text-sm font-extrabold text-foreground">Rs. 1,728.90</span>
              </div>

              {/* Receipt Footer Message */}
              <div className="text-center text-[10px] text-foreground-muted border-t border-dotted border-border-3 pt-3 space-y-1.5">
                <p className="italic">Payment received · Thank you</p>
                <div className="flex items-center justify-center gap-1.5 text-[9px] font-bold text-foreground-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>System online</span>
                </div>
              </div>

            </motion.div>

            {/* Offline-first Sync Badge Sticker matching image */}
            <motion.div
              initial={{ opacity: 0, y: 8, x: 10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="z-20 -mt-1 mr-1 lg:-mr-3 inline-flex items-center gap-1.5 bg-surface/90 backdrop-blur border border-border-3 text-foreground-secondary px-4 py-2 rounded-full text-[10px] font-semibold uppercase tracking-wider shadow-md"
              id="receipt-sticker"
              style={{ transform: 'rotate(1deg)' }}
            >
              <RefreshCw className="w-3 h-3 text-accent-2 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Offline-first sync</span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
