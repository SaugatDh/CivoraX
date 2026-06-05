'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    window.addEventListener('civorax:open-contact-modal', open);
    window.addEventListener('civorax:close-contact-modal', close);
    return () => {
      window.removeEventListener('civorax:open-contact-modal', open);
      window.removeEventListener('civorax:close-contact-modal', close);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300 animate-fadeIn"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-5">
          <div>
            <h3
              id="contact-modal-title"
              className="text-xl font-extrabold text-[#1a2420] leading-tight"
            >
              Get in touch
            </h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Tell us about your project. We respond within 24 hours.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close contact form"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-[#1a2420] hover:bg-slate-100 transition-colors shrink-0 ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsOpen(false);
          }}
          className="space-y-4"
        >
          <div>
            <label htmlFor="cm-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Full Name
            </label>
            <input
              id="cm-name"
              type="text"
              required
              placeholder="Ramesh Karki"
              className="w-full mt-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4a6b5d]"
            />
          </div>

          <div>
            <label htmlFor="cm-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Corporate Email
            </label>
            <input
              id="cm-email"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full mt-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4a6b5d]"
            />
          </div>

          <div>
            <label htmlFor="cm-phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Contact Phone
            </label>
            <input
              id="cm-phone"
              type="tel"
              required
              placeholder="+977-98XXXXXXXX"
              className="w-full mt-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4a6b5d]"
            />
          </div>

          <div>
            <label htmlFor="cm-details" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Project Details
            </label>
            <textarea
              id="cm-details"
              rows={4}
              required
              placeholder="Briefly describe your project scope, timeline, and key requirements…"
              className="w-full mt-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4a6b5d] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2.5 bg-[#1a2420] text-white font-semibold text-sm rounded-lg hover:bg-[#4a6b5d] transition-colors"
          >
            Submit Inquiry
          </button>

          <p className="text-[10px] text-slate-400 text-center font-mono uppercase tracking-wider pt-1">
            Encrypted in transit · No spam · Replies in 24h
          </p>
        </form>
      </div>
    </div>
  );
}
