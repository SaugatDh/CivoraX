'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import {
  MapPin, ArrowRight, Quote, Building2, Users, Code2,
  Lock, Briefcase, GraduationCap, ChevronLeft, ChevronRight,
} from 'lucide-react';

const stats = [
  { number: '6', label: 'Core Engineers & Designers' },
  { number: '3+', label: 'Regional Hubs & Nodes' },
  { number: '100%', label: 'In-House Code Production' },
  { number: '0', label: 'Vendor Lock-in' },
];

const locations = [
  {
    region: 'Koshi HQ',
    address: 'Putali Line, Dharan',
    primary: true,
  },
  {
    region: 'Bagmati Hub',
    address: 'Tinkune, Kathmandu',
    primary: false,
  },
  {
    region: 'Gandaki Node',
    address: 'Pokhara Lakeside',
    primary: false,
  },
];

const testimonials = [
  {
    quote:
      'Internet drops are no longer an operational barrier — transactions queue locally and sync cleanly when links return. Our staff can process sales during load-shedding without any disruption, and the IRD reports generate correctly every time.',
    name: 'Ramesh Karki',
    role: 'Owner, Karki General Store — Dharan',
    initials: 'RK',
  },
  {
    quote:
      'We migrated from a cloud POS that failed every monsoon. CivoraX\'s offline-first system has been running for six months without a single transaction loss. The multi-branch sync gives me real-time inventory across all three locations.',
    name: 'Sunita Thapa',
    role: 'Operations Manager, Thapa Trading Co. — Kathmandu',
    initials: 'ST',
  },
  {
    quote:
      'The codebase is clean, documented, and our internal team can maintain it without vendor dependency. That was the deciding factor — owning our software instead of renting it.',
    name: 'Bikash Gurung',
    role: 'CTO, Gurung Logistics — Pokhara',
    initials: 'BG',
  },
  {
    quote:
      'IRD compliance was always a headache with our old system. CivoraX built tax logging natively into the POS — audits are straightforward now, and we no longer dread tax season.',
    name: 'Prativa Sharma',
    role: 'Finance Lead, Sharma Enterprises — Dharan',
    initials: 'PS',
  },
];

const teamMembers = [
  {
    name: 'Saugat Dhungana',
    role: 'Founder & Lead Engineer',
    initials: 'SD',
    bio: 'Full-stack architect specializing in offline-first systems and low-bandwidth optimized applications. Leads the studio\'s architecture review board and direct-client engineering engagements.',
    focus: 'System Architecture & Offline Sync',
  },
  {
    name: 'Dheeraj Uparkoti',
    role: 'Backend Engineer',
    initials: 'DU',
    bio: 'Server infrastructure and database synchronization specialist. Builds the Go-based sync engines that keep branches connected across intermittent links and power transitions.',
    focus: 'Go Engines & DB Infrastructure',
  },
  {
    name: 'Aarav Thapa',
    role: 'Frontend Engineer',
    initials: 'AT',
    bio: 'UI craftsperson focused on responsive, accessible interfaces that work flawlessly on mobile, low-end devices, and constrained cellular networks across the Nepali retail market.',
    focus: 'Low-bandwidth Accessibility & UI Craft',
  },
];

export default function AboutPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative min-h-screen bg-surface text-foreground font-sans selection:bg-accent selection:text-white">
      <Header />

      {/* Section 1: Header Block — About Us */}
      <section className="min-h-[90vh] flex items-center bg-surface-2 border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground font-display leading-[1.08]">
                We build software engineered to last under Nepal&apos;s real operational conditions.
              </h1>
              <p className="text-base md:text-lg text-foreground-secondary mt-6 leading-relaxed max-w-xl">
                CivoraX Tech Pvt. Ltd. is a high-discipline systems engineering studio building
                offline-first retail POS, multi-branch ERPs, and bespoke corporate web portals
                from Putali Line, Dharan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl bg-surface-3 border border-border overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <Building2 className="w-12 h-12 text-foreground-muted mx-auto mb-4" />
                  <p className="text-sm font-mono text-foreground-muted uppercase tracking-wider">
                    CivoraX Studio — Dharan
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-dark text-white px-4 py-2 rounded-lg">
                <span className="text-xs font-mono tracking-wider uppercase">Estd. 2026</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: The Mission — Text Left, Image Right */}
      <section className="min-h-[90vh] py-24 bg-surface-white border-b border-border flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground font-display leading-[1.1]">
                Helping Local Enterprises Scale Without Interruption
              </h2>
              <p className="text-base md:text-lg text-foreground-secondary mt-6 leading-relaxed">
                We engineer offline-first architectures so retail and multi-branch operations
                never halt when local internet drops or power transitions occur. Every transaction
                queues locally, every branch stays operational, and every sync resolves cleanly
                when connectivity returns.
              </p>
              <p className="text-base text-foreground-secondary mt-4 leading-relaxed">
                Our systems are built for Nepal&apos;s infrastructure realities — inconsistent power,
                intermittent cellular links, and the need for IRD-compliant tax logging that works
                without a live connection.
              </p>
              <div className="mt-8 flex items-center gap-4 text-sm font-mono text-foreground-muted">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Offline-First
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  IRD Compliant
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Zero Downtime
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-[4/3] rounded-2xl bg-surface-2 border border-border overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                      </svg>
                    </div>
                    <p className="text-xs font-mono text-foreground-muted uppercase tracking-wider">
                      Technical Architecture Schema
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Story — Image Left, Text Right */}
      <section className="min-h-[90vh] py-24 bg-surface border-b border-border flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-[4/3] rounded-2xl bg-surface-2 border border-border overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Users className="w-12 h-12 text-foreground-muted mx-auto mb-4" />
                    <p className="text-xs font-mono text-foreground-muted uppercase tracking-wider">
                      Engineers Collaborating
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground font-display leading-[1.1]">
                How We Started
              </h2>
              <p className="text-base md:text-lg text-foreground-secondary mt-6 leading-relaxed">
                Founded in 2026 in Dharan, CivoraX was born from a core group of engineers who
                rejected brittle, trend-chasing frameworks. We saw too many businesses fail because
                their software depended on constant internet connectivity and proprietary platforms
                they could never truly own.
              </p>
              <p className="text-base text-foreground-secondary mt-4 leading-relaxed">
                Our founding conviction: deliver fully transparent codebases, data sovereignty, and
                robust IRD tax compliance natively — not as afterthoughts. Every system we ship is
                designed so a local engineering team can read, maintain, and extend it for the next
                decade without calling the original builders back.
              </p>
              <div className="mt-8 p-4 bg-surface-2 rounded-xl border border-border">
                <p className="text-sm font-mono text-foreground-muted italic leading-relaxed">
                  &ldquo;We build software the way infrastructure should be built — with the assumption
                  that conditions will be imperfect, and the system must work anyway.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3.5: Meet Our Team */}
      <section className="min-h-[90vh] py-24 bg-surface-2 border-b border-border flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-4">
              The Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground font-display">
              Meet Our Team
            </h2>
            <p className="text-base text-foreground-secondary mt-4 leading-relaxed max-w-2xl mx-auto">
              Six engineers. No account managers. Every person you talk to is a builder.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface-white border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-surface-3 flex items-center justify-center relative">
                  <span className="text-4xl font-display font-bold text-foreground-muted">
                    {member.initials}
                  </span>
                  <div className="absolute top-3 right-3 bg-dark/90 text-accent-2 font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                    {member.initials}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-xs font-mono font-bold text-accent uppercase tracking-wider mt-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-foreground-secondary leading-relaxed mt-3">
                    {member.bio}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-[10px] font-mono text-foreground-muted uppercase tracking-widest">
                      Focus
                    </span>
                    <p className="text-xs font-mono text-foreground mt-1">{member.focus}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: CivoraX by the Numbers — Stats Grid */}
      <section className="py-24 bg-surface-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-4">
              By The Numbers
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground font-display">
              CivoraX By The Numbers
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-display font-extrabold tracking-tighter text-foreground">
                  {stat.number}
                </div>
                <div className="w-12 h-px bg-accent mx-auto my-4" />
                <p className="text-sm font-mono text-foreground-secondary uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Customer Voices — Testimonials Carousel */}
      <section className="min-h-[90vh] py-24 bg-surface border-b border-border flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground font-display">
              What Our Customers Say
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-surface-white border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden h-[380px] flex flex-col">
              <Quote className="w-10 h-10 text-accent/20 absolute top-6 left-6" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                  className="flex-1 flex flex-col"
                >
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed relative z-10 pt-6 flex-1">
                    &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                  </blockquote>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-2 border border-border flex items-center justify-center shrink-0">
                      <span className="text-sm font-display font-bold text-foreground-muted">
                        {testimonials[currentTestimonial].initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-xs font-mono text-foreground-muted uppercase tracking-wider">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls — outside the card */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentTestimonial
                        ? 'bg-accent w-6'
                        : 'bg-border hover:bg-foreground-muted'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-border hover:border-accent/40 hover:bg-surface-2 flex items-center justify-center transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4 text-foreground-secondary" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-border hover:border-accent/40 hover:bg-surface-2 flex items-center justify-center transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4 text-foreground-secondary" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Growing Better Together — Careers & Internships */}
      <section className="min-h-[90vh] py-24 bg-surface-2 border-b border-border flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-4">
              Join Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground font-display">
              Growing Better Together
            </h2>
            <p className="text-lg text-foreground-secondary mt-4 leading-relaxed max-w-2xl mx-auto">
              Throw your ideas into production. Be a part of it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-surface-white border border-border rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-display mb-3">
                Careers at CivoraX
              </h3>
              <p className="text-base text-foreground-secondary leading-relaxed flex-1">
                Direct application lane for engineers who value engineering craft over marketing
                hype. We hire engineers who want to build production systems that work under real
                conditions — not polished demos that break in the field.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-mono font-bold text-accent uppercase tracking-wider hover:gap-3 transition-all"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-surface-white border border-border rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground font-display mb-3">
                Summer Internship Track
              </h3>
              <p className="text-base text-foreground-secondary leading-relaxed flex-1">
                A paid track for undergraduate CS engineering students in Nepal to build production
                software. Two positions every summer (June–August). Nepali nationals enrolled in
                a CS or related program are eligible. Applications open in March.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-mono font-bold text-accent uppercase tracking-wider hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7: Locations & Footprint */}
      <section className="min-h-[90vh] py-24 bg-surface-white border-b border-border flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-4">
              Our Footprint
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground font-display">
              Rooted in Dharan, Reaching Across Nepal
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.region}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-6 rounded-2xl border ${
                  loc.primary
                    ? 'bg-dark border-dark-border text-white'
                    : 'bg-surface border-border'
                }`}
              >
                <MapPin className={`w-5 h-5 mb-3 ${loc.primary ? 'text-accent' : 'text-accent'}`} />
                <h3 className={`text-lg font-bold font-display ${loc.primary ? 'text-white' : 'text-foreground'}`}>
                  {loc.region}
                </h3>
                <p className={`text-sm mt-2 ${loc.primary ? 'text-white/70' : 'text-foreground-secondary'}`}>
                  {loc.address}
                </p>
                {loc.primary && (
                  <span className="inline-block mt-3 text-[10px] font-mono text-accent uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                    Headquarters
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LetsConnect />
      <Footer />
    </div>
  );
}
