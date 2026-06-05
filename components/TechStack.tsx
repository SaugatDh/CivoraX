'use client';

import { Monitor, Server, Cloud, HardDrive } from 'lucide-react';

const stackColumns = [
  {
    title: 'FRONTEND',
    icon: Monitor,
    items: [
      {
        name: 'Next.js 15 & React 19',
        detail: 'Server-driven, static optimization',
      },
      {
        name: 'TypeScript',
        detail: 'Strictly typed codebases for zero runtime errors',
      },
      {
        name: 'Tailwind CSS v4 & Motion',
        detail: 'Lightweight, performant styling engines',
      },
    ],
  },
  {
    title: 'BACKEND & DATA',
    icon: Server,
    items: [
      {
        name: 'Go / Golang',
        detail: 'High-concurrency sync engines',
      },
      {
        name: 'Node.js & Redis',
        detail: 'Fast caching and session management',
      },
      {
        name: 'PostgreSQL',
        detail: 'Relational integrity for complex financial tracking',
      },
      {
        name: 'REST + WebSockets',
        detail: 'Real-time bidirectional branch networking',
      },
    ],
  },
  {
    title: 'INFRASTRUCTURE',
    icon: Cloud,
    items: [
      {
        name: 'Standalone Builds',
        detail: 'Can run completely isolated without an internet backbone',
      },
      {
        name: 'Docker Containers',
        detail: 'Consistent environments across any local micro-server',
      },
      {
        name: 'Nginx & PM2',
        detail: 'High-availability process management and reverse proxying',
      },
    ],
  },
  {
    title: 'HARDWARE EDGE',
    icon: HardDrive,
    items: [
      {
        name: 'ESC/POS Thermal Printing',
        detail: 'Direct, networkless receipt compilation',
      },
      {
        name: 'WebUSB & Bluetooth Serial',
        detail: 'Native browser-to-hardware communication channels',
      },
      {
        name: 'Barcode Scanners & Cash Drawer Integrations',
        detail: 'Direct peripheral mapping',
      },
    ],
  },
];

export default function TechStack() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full" id="tech-stack">
      <div className="max-w-3xl mb-16">
        <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
          Technology Stack
        </span>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
          Battle-tested tools, not trendy frameworks.
        </h2>
        <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
          We choose technologies for longevity and maintainability. Every dependency in our stack has a 5+ year support roadmap and is replaceable without rewriting the whole system.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stackColumns.map((col) => {
          const Icon = col.icon;
          return (
            <div
              key={col.title}
              className="bg-surface-white border border-border p-6 rounded-2xl flex flex-col"
            >
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-800 font-mono mb-6 pb-4 border-b border-border">
                <Icon className="w-4 h-4 text-[#4a6b5d]" />
                {col.title}
              </div>
              <ul className="space-y-5 flex-1">
                {col.items.map((item) => (
                  <li key={item.name}>
                    <p className="text-base font-semibold text-foreground leading-snug">
                      {item.name}
                    </p>
                    <p className="text-sm text-foreground-secondary leading-relaxed mt-1">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
