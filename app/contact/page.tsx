'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import Toast from '@/components/Toast';
import Contact from '@/components/Contact';
import {
  MapPin, Mail, Phone, Clock, MessageCircle, Building2,
  ArrowRight, ShieldCheck, Timer, Sparkles, CheckCircle2,
  FileText, Wrench, Handshake, Calendar, AlertCircle,
} from 'lucide-react';

const branches = [
  {
    city: 'Koshi HQ',
    location: 'Dharan-12, Putali Line',
    province: 'Koshi Province',
    type: 'Headquarters',
    email: 'info@civorax.com',
    phone: '+977-976-5432100',
    hours: 'Sun-Fri · 9AM-6PM',
  },
  {
    city: 'Bagmati Hub',
    location: 'Tinkune, Kathmandu',
    province: 'Bagmati Province',
    type: 'Regional Office',
    email: 'kathmandu@civorax.com',
    phone: '+977-980-1234567',
    hours: 'Sun-Fri · 9AM-6PM',
  },
  {
    city: 'Gandaki Node',
    location: 'Pokhara Lakeside',
    province: 'Gandaki Province',
    type: 'Field Office',
    email: 'pokhara@civorax.com',
    phone: '+977-984-7654321',
    hours: 'Sun-Fri · 10AM-5PM',
  },
];

const faqs = [
  {
    q: 'What is your typical project timeline?',
    a: 'A standard retail POS deployment takes 4-6 weeks including on-site installation. Multi-branch ERP systems range from 8-16 weeks depending on branch count and data migration scope. Bespoke portal builds are scoped individually after the architecture audit.',
  },
  {
    q: 'Do you work with businesses outside Nepal?',
    a: 'Our primary focus is the Nepali market and our software is IRD-compliant by design. We do take on regional projects in South Asia on a case-by-case basis, particularly where offline-first architecture and intermittent connectivity are operational realities.',
  },
  {
    q: 'What happens after deployment?',
    a: 'Every project includes a 90-day post-launch support period with on-call incident response. We also offer annual maintenance contracts and provide full source code handover with documentation at the end of each engagement — your codebase, your infrastructure, your sovereignty.',
  },
  {
    q: 'Can you migrate data from our existing system?',
    a: 'Yes. We have migration scripts for the most common legacy POS and ERP systems used in Nepal — including Tally, IMS, and several custom in-house builds. Custom migrations are scoped as a separate work package with a fixed-price quote after a data audit.',
  },
  {
    q: 'Do you offer retainer-based support?',
    a: 'Yes. Our advisory retainer covers monthly architecture reviews, incident response, and roadmap guidance for clients who maintain their own codebase. Retainers start at a 6-month minimum and give you direct access to our lead engineers.',
  },
  {
    q: 'Is the source code really handed over?',
    a: 'Yes — full source access, infrastructure diagrams, runbooks, and ownership transfer is included in every engagement. We do not lock clients into proprietary code or third-party dependencies that cannot be replaced. Your codebase remains readable, maintainable, and extendable by any competent engineering team.',
  },
];

const processTimeline = [
  {
    icon: FileText,
    step: '01',
    title: 'Inquiry Triage',
    body: 'Your form submission is reviewed by a lead architect within 24 hours. We acknowledge receipt immediately and flag any urgent operational blockers.',
    sla: '< 24h',
  },
  {
    icon: Timer,
    step: '02',
    title: 'Discovery Call',
    body: 'A 45-minute video or in-person call to understand your branch structure, transaction volumes, hardware inventory, and the specific failure modes you need solved.',
    sla: 'Day 2-3',
  },
  {
    icon: Wrench,
    step: '03',
    title: 'Architecture Proposal',
    body: 'We deliver a written architecture document, fixed-scope deliverable list, timeline, and transparent cost breakdown. No vague estimates, no surprise change orders.',
    sla: 'Day 5-7',
  },
  {
    icon: Handshake,
    step: '04',
    title: 'Kickoff & Onboarding',
    body: 'Once the proposal is signed, we schedule the kickoff workshop, provision your staging environment, and begin the engagement with named engineers and weekly status calls.',
    sla: 'Week 2',
  },
];

const sla = [
  { label: 'Inquiry Response', value: '< 24 hours', detail: 'On business days' },
  { label: 'Architecture Audit', value: '5-7 days', detail: 'After discovery call' },
  { label: 'Incident Response', value: '< 4 hours', detail: 'For production clients' },
  { label: 'Quarterly Review', value: 'Every 90 days', detail: 'Active engagements only' },
];

function ContactFormWrapper({ showToast }: { showToast: (msg: string) => void }) {
  const searchParams = useSearchParams();

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactCategory, setContactCategory] = useState(() => {
    const categoryParam = searchParams.get('category');
    return categoryParam ? decodeURIComponent(categoryParam) : 'POS System';
  });
  const [contactMessage, setContactMessage] = useState(() => {
    const messageParam = searchParams.get('message');
    return messageParam ? decodeURIComponent(messageParam) : '';
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  return (
    <Contact
      contactName={contactName}
      setContactName={setContactName}
      contactEmail={contactEmail}
      setContactEmail={setContactEmail}
      contactCategory={contactCategory}
      setContactCategory={setContactCategory}
      contactMessage={contactMessage}
      setContactMessage={setContactMessage}
      formSubmitted={formSubmitted}
      setFormSubmitted={setFormSubmitted}
      inquiryId={inquiryId}
      setInquiryId={setInquiryId}
      showToast={showToast}
    />
  );
}

export default function ContactPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen bg-surface text-foreground font-sans selection:bg-accent selection:text-white">
      <Header />

      {/* Section 1: Hero — 90vh */}
      <section className="min-h-[90vh] flex items-center bg-surface-2 border-b border-border relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest">
                  Get In Touch
                </span>
                <span className="w-8 h-px bg-accent/40" />
                <span className="text-sm font-mono text-foreground-muted uppercase tracking-widest">
                  06 / Contact Studio
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-foreground mb-6 font-display leading-[1.05]">
                Initiate your custom system{' '}
                <span className="text-accent italic">scoping guide.</span>
              </h1>
              <p className="text-foreground-secondary text-base md:text-lg max-w-2xl leading-relaxed">
                File an inquiry with our Dharan studio. State your regional warehouses, transaction scales, hardware inventory, or budget targets — our lead architects will construct an actionable technical proposal within the week.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-mono text-foreground-muted uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <Timer className="w-4 h-4 text-accent" />
                  &lt; 24h Reply
                </span>
                <span className="text-foreground/30">·</span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  Encrypted Transit
                </span>
                <span className="text-foreground/30">·</span>
                <span className="flex items-center gap-2">
                  <Handshake className="w-4 h-4 text-accent" />
                  No Sales Funnel
                </span>
              </div>
            </div>

            {/* Right SLA panel */}
            <div className="lg:col-span-5">
              <div className="bg-[#0f1714] text-surface rounded-2xl p-8 border border-[#1a2420]">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-3 text-sm font-mono text-emerald-300/70 tracking-widest uppercase">
                    ▸ RESPONSE.SLA
                  </span>
                </div>
                <ul className="space-y-5">
                  {sla.map((s) => (
                    <li key={s.label} className="flex items-start justify-between border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                      <div>
                        <p className="text-sm font-mono text-white/40 uppercase tracking-wider">
                          {s.label}
                        </p>
                        <p className="text-sm font-mono text-white/60 mt-0.5">{s.detail}</p>
                      </div>
                      <p className="text-base font-mono font-bold text-emerald-300">{s.value}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono text-emerald-300/70 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Studio monitoring · All channels online
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Contact Form — 90vh */}
      <Suspense fallback={
        <section className="min-h-[90vh] flex items-center py-24 bg-surface-2 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full text-center text-sm font-mono text-foreground-muted">
            Loading inquiry system interface modules...
          </div>
        </section>
      }>
        <ContactFormWrapper showToast={showToast} />
      </Suspense>

      {/* Section 3: Direct Channels — 80vh */}
      <section className="min-h-[80vh] flex items-center py-24 bg-surface-white border-b border-border w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Direct Channels
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              Prefer to reach us directly?
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              Four direct lines into the studio. Pick the channel that matches the urgency of your inquiry — all routes land with the same engineering team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="mailto:info@civorax.com"
              className="group bg-surface border border-border p-6 rounded-2xl hover:border-accent/40 hover:shadow-md transition-all flex flex-col"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-5">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
              <p className="text-sm text-foreground-secondary font-mono">info@civorax.com</p>
              <p className="text-xs text-foreground-muted mt-3 flex-1">
                Best for formal inquiries, RFPs, and detailed briefs. Replies within 24 hours on business days.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-accent">
                Send email
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>

            <a
              href="https://wa.me/9779765432100"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface border border-border p-6 rounded-2xl hover:border-accent/40 hover:shadow-md transition-all flex flex-col"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-5">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">WhatsApp</h3>
              <p className="text-sm text-foreground-secondary font-mono">+977-976-5432100</p>
              <p className="text-xs text-foreground-muted mt-3 flex-1">
                Quickest route. Our lead architects respond to operational emergencies and live build questions.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-accent">
                Open chat
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>

            <a
              href="tel:+9779765432100"
              className="group bg-surface border border-border p-6 rounded-2xl hover:border-accent/40 hover:shadow-md transition-all flex flex-col"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-5">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Phone</h3>
              <p className="text-sm text-foreground-secondary font-mono">+977-976-5432100</p>
              <p className="text-xs text-foreground-muted mt-3 flex-1">
                Direct line to the Dharan studio. Best for voice conversations and scheduled deep-dive sessions.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-accent">
                Call now
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>

            <div className="bg-surface border border-border p-6 rounded-2xl flex flex-col">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Studio Hours</h3>
              <p className="text-sm text-foreground-secondary font-mono">Sun-Fri · 9AM-6PM NPT</p>
              <p className="text-xs text-foreground-muted mt-3 flex-1">
                Office is closed on Saturdays. Production clients have a 24/7 incident response channel via the retainer.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-foreground-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Currently Open
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Engagement Timeline (NEW) — 80vh */}
      <section className="min-h-[80vh] flex items-center py-24 bg-surface border-b border-border w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Engagement Timeline
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              What happens after you file an inquiry.
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              A predictable four-step path from first contact to kickoff. Every step has a documented SLA and a named owner on our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processTimeline.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative bg-surface-white border border-border p-6 rounded-2xl flex flex-col"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#f4f7f5] border border-border flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#4a6b5d]" />
                    </div>
                    <span className="text-2xl font-mono font-black text-accent/30">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary leading-relaxed mt-3 flex-1">
                    {step.body}
                  </p>
                  <div className="mt-5 pt-4 border-t border-border">
                    <span className="text-[10px] font-mono text-foreground-muted uppercase tracking-widest">
                      SLA
                    </span>
                    <p className="text-xs font-mono text-accent mt-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {step.sla}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: Office Locations + Map — 90vh */}
      <section className="min-h-[90vh] flex items-center py-24 bg-surface-2 border-b border-border w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-4 flex flex-col">
              <div className="mb-8">
                <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
                  Office Locations
                </span>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
                  Visit our studios.
                </h2>
                <p className="text-base text-foreground-secondary mt-5 leading-relaxed">
                  Three regional offices across Nepal&apos;s major economic corridors. Walk-ins are welcome during operating hours, though we recommend scheduling ahead for in-depth technical discussions.
                </p>
              </div>

              <div className="space-y-4 flex-1">
                {branches.map((b) => (
                  <div key={b.city} className="bg-surface-white border border-border p-5 rounded-2xl">
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base font-bold text-foreground">{b.city}</h3>
                          <span className="text-[10px] font-mono font-bold text-accent uppercase bg-accent/10 px-1.5 py-0.5 rounded">
                            {b.type}
                          </span>
                        </div>
                        <p className="text-sm text-foreground-secondary mt-1">{b.location}</p>
                        <p className="text-xs text-foreground-muted font-mono mt-0.5">{b.province}</p>
                        <div className="mt-3 pt-3 border-t border-border grid grid-cols-2 gap-2 text-[10px] font-mono text-foreground-secondary">
                          <span className="flex items-center gap-1">
                            <Mail className="w-3 h-3 text-accent" />
                            {b.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-accent" />
                            {b.hours}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-border min-h-[500px] bg-surface-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56521.659275476!2d87.2648!3d26.8132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e1a4a82d487bd5%3A0x2f6a0e5c0b2a4e5a!2sDharan%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CivoraX Office Location - Dharan, Nepal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ — 80vh */}
      <section className="min-h-[80vh] flex items-center py-24 bg-surface-white border-b border-border w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Common Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              Frequently asked.
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              The questions we hear most often from prospective clients. If yours isn&apos;t covered here, the form above reaches a lead architect directly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((f, i) => (
              <div key={i} className="bg-surface border border-border p-6 rounded-2xl">
                <h3 className="text-base font-bold text-foreground mb-3 flex items-start gap-3">
                  <span className="text-accent font-mono text-xs mt-1 shrink-0">0{i + 1}</span>
                  {f.q}
                </h3>
                <p className="text-sm text-foreground-secondary leading-relaxed pl-7">
                  {f.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-[#f4f7f5] border border-border rounded-2xl flex items-start gap-4">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-foreground mb-1">
                Still have questions?
              </h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Reach the lead architects directly via <a href="mailto:info@civorax.com" className="text-accent font-mono">info@civorax.com</a> or open a WhatsApp chat. We respond to every inquiry, typically within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LetsConnect />

      <Footer />
      <Toast message={toastMessage} />
    </div>
  );
}
