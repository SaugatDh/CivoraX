'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import {
  ArrowRight, Briefcase, GraduationCap, Code2, Users, Heart,
} from 'lucide-react';

const openings = [
  {
    icon: Code2,
    title: 'Backend Engineer',
    type: 'Full-time',
    location: 'Dharan / Remote',
    description: 'Build Go-based sync engines and PostgreSQL infrastructure for offline-first systems. Work on real production code that handles intermittent connectivity and branch synchronization.',
  },
  {
    icon: Users,
    title: 'Frontend Engineer',
    type: 'Full-time',
    location: 'Dharan / Remote',
    description: 'Craft responsive, accessible interfaces for retail POS and ERP dashboards. Optimize for low-bandwidth, mobile-first experiences across Nepali market devices.',
  },
];

const values = [
  { icon: Code2, title: 'Real Production Code', text: 'No toy projects. Every line ships to live systems serving businesses across Nepal.' },
  { icon: Users, title: 'Direct Mentorship', text: 'Work directly with senior engineers. No layers of management between you and the craft.' },
  { icon: Heart, title: 'Meaningful Impact', text: 'Your code keeps shops running during load-shedding and internet outages.' },
];

export default function CareerPage() {
  return (
    <div className="relative min-h-screen bg-surface text-foreground font-sans selection:bg-accent selection:text-white">
      <Header />

      {/* Hero */}
      <section className="min-h-[90vh] flex items-center bg-surface-2 border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-4">
                Careers
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground font-display leading-[1.08]">
                Build software that{' '}
                <span className="text-accent italic">works under real conditions.</span>
              </h1>
              <p className="text-base md:text-lg text-foreground-secondary mt-6 leading-relaxed max-w-2xl">
                We hire engineers who want to build production systems — not polished demos
                that break in the field. Throw your ideas into production. Be a part of it.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#openings"
                  className="inline-flex items-center gap-2 bg-accent text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-accent-hover transition-all duration-300"
                >
                  View Openings <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#internship"
                  className="text-xs font-semibold uppercase tracking-wider text-foreground-secondary hover:text-accent transition-colors"
                >
                  Internship Track →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
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
                Why CivoraX
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground font-display leading-[1.1]">
                Engineering craft over marketing hype.
              </h2>
              <p className="text-base md:text-lg text-foreground-secondary mt-6 leading-relaxed">
                We don&apos;t chase trends. We build offline-first systems that survive
                Nepal&apos;s real infrastructure — intermittent power, unreliable internet,
                and the need for IRD-compliant tax logging that works without a live connection.
              </p>
              <p className="text-base text-foreground-secondary mt-4 leading-relaxed">
                Every engineer here writes production code from day one. No code reviews
                that take weeks. No sprint meetings about sprint meetings. Just building
                systems that matter.
              </p>
            </motion.div>

            <div className="space-y-4">
              {values.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4 p-5 bg-surface border border-border rounded-xl"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground">{item.title}</h4>
                      <p className="text-xs text-foreground-secondary mt-1">{item.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="min-h-[90vh] py-24 bg-surface border-b border-border flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-4">
              Open Positions
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground font-display">
              Join the Studio
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {openings.map((job, i) => {
              const Icon = job.icon;
              return (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-surface-white border border-border rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 flex flex-col"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-display mb-1">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs font-mono text-foreground-muted uppercase tracking-wider mb-3">
                    <span>{job.type}</span>
                    <span className="text-border">·</span>
                    <span>{job.location}</span>
                  </div>
                  <p className="text-sm text-foreground-secondary leading-relaxed flex-1">
                    {job.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-mono font-bold text-accent uppercase tracking-wider hover:gap-3 transition-all"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Summer Internship */}
      <section id="internship" className="min-h-[90vh] py-24 bg-surface-2 border-b border-border flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-accent" />
              </div>
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-4">
                Internship Track
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground font-display leading-[1.1]">
                Summer Internship Program
              </h2>
              <p className="text-base md:text-lg text-foreground-secondary mt-6 leading-relaxed">
                A paid track for undergraduate CS engineering students in Nepal to build
                production software. Two positions every summer (June–August).
              </p>
              <p className="text-base text-foreground-secondary mt-4 leading-relaxed">
                Nepali nationals enrolled in a CS or related program are eligible.
                Applications open in March. You&apos;ll work on real features, not toy projects.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-accent text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-accent-hover transition-all duration-300"
              >
                Apply for Internship <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="bg-surface-white border border-border rounded-2xl p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <span className="text-sm font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Real Production Work</h4>
                    <p className="text-xs text-foreground-secondary mt-1">Ship code that runs in live businesses across Nepal.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <span className="text-sm font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Direct Mentorship</h4>
                    <p className="text-xs text-foreground-secondary mt-1">Work side-by-side with senior engineers daily.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <span className="text-sm font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Paid Position</h4>
                    <p className="text-xs text-foreground-secondary mt-1">Competitive stipend for the full summer duration.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <span className="text-sm font-bold">04</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Portfolio & Reference</h4>
                    <p className="text-xs text-foreground-secondary mt-1">Leave with production code and a strong reference.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <LetsConnect />
      <Footer />
    </div>
  );
}
