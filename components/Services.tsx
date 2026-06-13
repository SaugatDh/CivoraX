'use client';

import { Smartphone, Layers, Receipt, Check } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-24 md:py-32 border-b border-border" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] font-mono text-accent uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Core Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground font-display">
            We specialize in custom systems built for business longevity.
          </h2>
          <p className="text-foreground-secondary text-md mt-4 leading-relaxed">
            We reject short-term trends and bloated setups. Our studio delivers responsive, robust infrastructure tailored carefully to match your real organization workflows, accounting laws, and localized internet variables in Nepal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <div className="bg-surface border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Custom Web App Ecosystems</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Bespoke SaaS engines, member portal systems, and collaborative web platforms optimized for cellular coverage, fast caching, and modern desktop experiences.
              </p>
              <ul className="text-xs text-foreground-muted space-y-1.5 font-mono mt-6">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-accent" /> Clean Next.js & Server Actions</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-accent" /> Fast lightweight data structures</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-accent" /> Native responsive mechanics</li>
              </ul>
            </div>
            <div className="pt-8 text-xs font-mono font-bold text-accent uppercase tracking-wider flex items-center gap-1">
              Reliable Web Frameworks
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-surface border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Core Corporate ERP Engines</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                An all-in-one central command console linking sales journals, procurement structures, stock distribution chains, staff shifts, and double-entry book balancing.
              </p>
              <ul className="text-xs text-foreground-muted space-y-1.5 font-mono mt-6">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-accent" /> Granular Audit Logging</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-accent" /> Integrated Stock Registers</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-accent" /> Automated Multi-Branch Accounts</li>
              </ul>
            </div>
            <div className="pt-8 text-xs font-mono font-bold text-accent uppercase tracking-wider">
              Full-Scale Integrations
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-surface border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <Receipt className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Offline-First VAT Retail POS</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                POS terminals built to keep checkout clerks running smoothly during power grid disruptions or internet blackouts. Automatically registers transactions and streams statistics to cloud accounts.
              </p>
              <ul className="text-xs text-foreground-muted space-y-1.5 font-mono mt-6">
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-accent" /> Local cache with instant browser storage</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-accent" /> Inland Revenue compliant logs</li>
                <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-accent" /> Barcode client & drawer APIs</li>
              </ul>
            </div>
            <div className="pt-8 text-xs font-mono font-bold text-accent uppercase tracking-wider">
              Resilient Store Software
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
