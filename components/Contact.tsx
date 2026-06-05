'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Send, Check } from 'lucide-react';

interface ContactProps {
  contactName: string;
  setContactName: (val: string) => void;
  contactEmail: string;
  setContactEmail: (val: string) => void;
  contactCategory: string;
  setContactCategory: (val: string) => void;
  contactMessage: string;
  setContactMessage: (val: string) => void;
  formSubmitted: boolean;
  setFormSubmitted: (val: boolean) => void;
  inquiryId: string;
  setInquiryId: (val: string) => void;
  showToast: (msg: string) => void;
}

export default function Contact({
  contactName,
  setContactName,
  contactEmail,
  setContactEmail,
  contactCategory,
  setContactCategory,
  contactMessage,
  setContactMessage,
  formSubmitted,
  setFormSubmitted,
  inquiryId,
  setInquiryId,
  showToast,
}: ContactProps) {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail) {
      showToast('Please fill in your name and email');
      return;
    }
    setInquiryId(`#CIV-${Math.floor(Math.random() * 90000 + 10000)}`);
    setFormSubmitted(true);
    showToast('Inquiry received. Thank you!');
  };

  return (
    <section className="min-h-[90vh] flex items-center py-24 md:py-32 bg-surface-2 border-b border-border" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Contact Details Left */}
          <div className="lg:col-span-5" id="contact-info">
            <div className="text-[11px] font-mono text-accent uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Work With Us
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground font-display">
              Let&apos;s build something beautiful.
            </h2>
            <p className="text-sm text-foreground-secondary mt-4 leading-relaxed mb-8">
              Connect with our Dharan studio. Tell us about your operational constraints, branch counts, or specific legacy data architectures, and we will formulate an actionable scope of work report.
            </p>

            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono text-foreground-muted uppercase font-bold block mb-1">DIRECT STUDIO EMAIL</span>
                <a href="mailto:info@civorax.com" className="text-accent font-semibold hover:underline text-base font-mono">
                  info@civorax.com
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono text-foreground-muted uppercase font-bold block mb-1">HQ WORKSTATION</span>
                <p className="text-sm text-foreground font-medium leading-relaxed">
                  CivoraX Tech Pvt. Ltd. <br />
                  Putali Line-12, Dharan, <br />
                  Koshi Province, Nepal
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono text-foreground-muted uppercase font-bold block mb-1">HQ OPERATING SEQUENCE</span>
                <p className="text-xs text-foreground-secondary">
                  Sunday &mdash; Friday, 09:00 AM to 06:00 PM NPT
                </p>
              </div>
            </div>
          </div>

          {/* Live Contact Form Right */}
          <div className="lg:col-span-7" id="contact-form-wrapper">
            <div className="bg-white border border-border rounded-2xl p-6 lg:p-8 shadow-xl">
              
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleContactSubmit}
                    className="space-y-5"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-border">
                      <span className="text-[10px] font-mono text-foreground-muted font-bold uppercase">
                        STUDIO INQUIRY CODE: CIVX_INQ
                      </span>
                      <span className="text-[10px] font-mono text-accent font-bold uppercase flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                        Ready
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-bold text-foreground uppercase tracking-wider mb-2 block font-mono">
                          Client Name *
                        </label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Saugat Dhungana"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder-foreground-muted/60 focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-foreground uppercase tracking-wider mb-2 block font-mono">
                          Direct Email *
                        </label>
                        <input 
                          type="email" 
                          required
                          placeholder="e.g. info@client.com"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder-foreground-muted/60 focus:outline-none focus:border-accent transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-foreground uppercase tracking-wider mb-2 block font-mono">
                        Target Core Platform
                      </label>
                      <select 
                        value={contactCategory}
                        onChange={(e) => setContactCategory(e.target.value)}
                        className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                      >
                        <option>POS System</option>
                        <option>ERP / Business System</option>
                        <option>Web Application</option>
                        <option>Bespoke System Calculation</option>
                        <option>General Collaboration Desk</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-foreground uppercase tracking-wider mb-2 block font-mono">
                        System Specifications & Context
                      </label>
                      <textarea 
                        rows={4}
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="List branch scale, user limits, or estimated timetarget..."
                        className="w-full bg-surface border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder-foreground-muted/60 focus:outline-none focus:border-accent transition-colors resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-accent hover:bg-accent-hover text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow flex items-center justify-center gap-2"
                    >
                      File Studio Inquiry
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8" strokeWidth={3} />
                    </div>
                    
                    <span className="text-[10px] font-mono text-foreground-muted uppercase font-bold block mb-1">
                      RECEIPT TRANSMITTED OK
                    </span>
                    <h3 className="text-2xl font-bold text-foreground font-display">Inquiry Registered</h3>
                    <p className="text-sm text-foreground-secondary mt-3 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-foreground">{contactName}</strong>! Our software coordination team in Putali Line, Dharan, has generated registration log <strong>{inquiryId}</strong>. We will write back to <strong>{contactEmail}</strong> within 12 operating hours.
                    </p>

                    <div className="mt-8 pt-6 border-t border-border max-w-sm mx-auto">
                      <button 
                        onClick={() => {
                          setFormSubmitted(false);
                          setContactName('');
                          setContactEmail('');
                          setContactMessage('');
                        }}
                        className="text-xs font-mono font-bold text-accent hover:underline uppercase tracking-wider"
                      >
                        [ Clear & File Another Ticket ]
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
