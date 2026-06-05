'use client';

import Link from 'next/link';
import { openContactModal } from '@/lib/contactModal';

export default function LetsConnect() {
  return (
    <section className="w-full bg-[#f4f7f5] py-16 px-6 md:px-12 lg:px-16 relative overflow-hidden">
      <svg
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="connectGrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#4a6b5d" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#connectGrid)" />
        <circle cx="320" cy="80" r="60" fill="none" stroke="#4a6b5d" strokeWidth="0.8" />
        <circle cx="360" cy="200" r="80" fill="none" stroke="#4a6b5d" strokeWidth="0.8" />
        <circle cx="300" cy="320" r="100" fill="none" stroke="#4a6b5d" strokeWidth="0.8" />
      </svg>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative z-10">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2420] leading-tight">
            Let&apos;s build a system that works{' '}
            <span className="text-[#4a6b5d]">exactly the way your business runs.</span>
          </h2>
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2">
          <span className="text-[11px] font-mono tracking-[0.2em] text-slate-400 uppercase">
            Reach Out Now!
          </span>
          <a
            href="tel:+9779800000000"
            className="text-2xl md:text-3xl font-extrabold text-[#4a6b5d] tracking-tight hover:opacity-80 transition-opacity"
          >
            +977-980-0000000
          </a>
          <button
            type="button"
            onClick={openContactModal}
            className="mt-2 px-6 py-2.5 bg-[#1a2420] hover:bg-[#4a6b5d] text-white text-xs font-semibold rounded-full shadow-md transition-all duration-200 ease-in-out cursor-pointer"
          >
            Get in touch →
          </button>
        </div>
      </div>
    </section>
  );
}
