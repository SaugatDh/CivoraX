'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

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
          <div className="lg:col-span-12 flex flex-col items-start" id="hero-left-column">
            
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
              className="text-[44px] sm:text-[64px] font-extrabold tracking-tighter text-foreground leading-[1.04] mb-6 font-display"
              id="hero-main-title"
            >
              Software that runs <br />
              your business,{' '}
              <span className="font-mono italic font-extrabold text-accent-2 tracking-normal">not the other way.</span>
            </motion.h1>

            {/* Subheading copy */}
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-foreground-secondary text-base sm:text-lg max-w-xl leading-relaxed mb-10"
              id="hero-subtitle"
            >
              We build ERP, POS, and web systems for businesses in Nepal. No internet? Still works. IRD billing? Already handled.
            </motion.p>

            {/* Standard CTAs matching image styles */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
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
                <div className="text-3xl font-mono font-extrabold text-foreground">12+</div>
                <div className="text-[10px] font-mono font-bold tracking-wider text-foreground-muted uppercase mt-1">Businesses Served</div>
              </div>
              <div>
                <div className="text-3xl font-mono font-extrabold text-foreground">99.9%</div>
                <div className="text-[10px] font-mono font-bold tracking-wider text-foreground-muted uppercase mt-1">Uptime Commitment</div>
              </div>
              <div>
                <div className="text-3xl font-mono font-extrabold text-foreground">Nepal</div>
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

        </div>
      </div>
    </section>
  );
}
