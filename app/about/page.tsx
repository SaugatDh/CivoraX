'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import {
  MapPin, ArrowRight, Quote, ChevronLeft, ChevronRight,
} from 'lucide-react';

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
      'Internet drops don\'t stop us — transactions queue locally and sync when the connection returns. Our staff can process sales during load-shedding without any disruption, and the IRD reports generate correctly every time.',
    name: 'Ramesh Karki',
    role: 'Owner, Karki General Store — Dharan',
    initials: 'RK',
  },
  {
    quote:
      'We moved from a cloud POS that failed every monsoon. CivoraX\'s offline-first system has been running for six months without losing a single transaction. The multi-branch sync gives me real-time inventory across all three locations.',
    name: 'Sunita Thapa',
    role: 'Operations Manager, Thapa Trading Co. — Kathmandu',
    initials: 'ST',
  },
  {
    quote:
      'The code is clean, documented, and our internal team can maintain it without depending on a vendor. That was the deciding factor — owning our software instead of renting it.',
    name: 'Bikash Gurung',
    role: 'CTO, Gurung Logistics — Pokhara',
    initials: 'BG',
  },
  {
    quote:
      'IRD compliance was always a headache with our old system. CivoraX built tax logging directly into the POS — audits are straightforward now, and we no longer dread tax season.',
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
    bio: 'Full-stack engineer focused on offline-first systems and apps that work on slow connections. Leads architecture decisions and works directly with clients.',
    focus: 'System Architecture & Offline Sync',
    color: 'bg-accent/10 text-accent',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Dheeraj Uparkoti',
    role: 'Backend Engineer',
    initials: 'DU',
    bio: 'Handles servers and databases. Builds Go sync engines that keep branches connected when internet and power are unreliable.',
    focus: 'Go Engines & DB Infrastructure',
    color: 'bg-accent-2/10 text-accent-2',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    name: 'Aarav Thapa',
    role: 'Frontend Engineer',
    initials: 'AT',
    bio: 'Frontend engineer who builds responsive, accessible interfaces that work well on cheap phones and slow mobile connections in Nepal.',
    focus: 'Mobile-First UI & Accessibility',
    color: 'bg-dark/5 text-foreground',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
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

      {/* Section 1: Hero — About Us */}
      <section className="py-20 md:py-28 bg-surface-2 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground font-display leading-[1.08]">
              We build software that works under Nepal&apos;s real conditions.
            </h1>
            <p className="text-base md:text-lg text-foreground-secondary mt-6 leading-relaxed max-w-2xl mx-auto">
              CivoraX Tech Pvt. Ltd. is a small engineering studio in Dharan that builds
              offline-first retail POS, multi-branch ERPs, and custom web portals.
            </p>

            {/* Compact Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-2xl mx-auto">
              {[
                { value: '6', label: 'Engineers' },
                { value: '3+', label: 'Regional Hubs' },
                { value: '100%', label: 'In-House Code' },
                { value: '0', label: 'Vendor Lock-in' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-mono font-extrabold text-accent">{stat.value}</div>
                  <div className="text-xs font-mono text-foreground-muted uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Story */}
      <section className="py-20 md:py-24 bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground font-display leading-[1.1]">
              How We Started
            </h2>
            <p className="text-base md:text-lg text-foreground-secondary mt-6 leading-relaxed">
              CivoraX started in 2026 in Dharan. A group of engineers got tired of watching
              businesses fail because their software needed constant internet or locked them
              into platforms they couldn&apos;t control.
            </p>
            <p className="text-base text-foreground-secondary mt-4 leading-relaxed">
              We believe in giving clients their code. No hidden dependencies, no vendor
              lock-in, full IRD compliance from day one. Your team should be able to read,
              maintain, and extend the code without calling us back.
            </p>
            <p className="text-base text-foreground-secondary mt-4 leading-relaxed">
              We mainly serve Nepal, where our software is IRD-compliant by design. We
              sometimes take on projects elsewhere in South Asia, especially where bad
              connectivity is a real problem.
            </p>
            <div className="mt-8 p-6 bg-surface-2 rounded-xl border border-border">
              <p className="text-sm font-mono text-foreground-muted italic leading-relaxed">
                &ldquo;We build software the way infrastructure should be built — with the assumption
                that conditions will be imperfect, and the system must work anyway.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Team */}
      <section className="py-20 md:py-24 bg-surface-2 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
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
                className="bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300"
              >
                <div className={`aspect-[4/3] ${member.color} flex items-center justify-center relative`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover absolute inset-0"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <span className="text-4xl font-display font-bold relative z-10">
                    {member.initials}
                  </span>
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

      {/* Section 4: Testimonials */}
      <section className="py-20 md:py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
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
            <div className="bg-surface-2 border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden h-[380px] flex flex-col">
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
                    <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center shrink-0">
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

            {/* Navigation Controls */}
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

      {/* Section 5: Locations */}
      <section className="py-20 md:py-24 bg-surface-2 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-4">
              Our Footprint
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground font-display">
              Based in Dharan. Working Across Nepal.
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
                <MapPin className="w-5 h-5 mb-3 text-accent-2" />
                <h3 className={`text-lg font-bold font-display ${loc.primary ? 'text-white' : 'text-foreground'}`}>
                  {loc.region}
                </h3>
                <p className={`text-sm mt-2 ${loc.primary ? 'text-white/70' : 'text-foreground-secondary'}`}>
                  {loc.address}
                </p>
                {loc.primary && (
                  <span className="inline-block mt-3 text-[10px] font-mono text-accent-2 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
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
