'use client';

export default function Values() {
  return (
    <section className="py-24 md:py-32 border-b border-border" id="values">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5" id="values-intro">
            <div className="text-[11px] font-mono text-accent uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Our Code of Ethics
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground font-display">
              Software is human work. We keep it honest.
            </h2>
            <p className="text-sm text-foreground-secondary leading-relaxed mt-4">
              We believe Nepal&apos;s digital transformation doesn&apos;t require over-marketed buzzwords or third-party cloud tools that break during connectivity lags. We focus on rigorous testing, clean architecture, and long-term partnership values.
            </p>
            
            <div className="mt-8 p-4 bg-surface-2 rounded-xl border border-border inline-flex items-center gap-3">
              <span className="text-2xl">🇳🇵</span>
              <div className="text-xs font-mono font-medium text-foreground">
                Locally sourced engineers, globally recognized practices.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6" id="values-grid">
            
            <div className="bg-surface border border-border p-6 rounded-2xl">
              <span className="text-lg font-mono font-black text-accent mb-3 block">01</span>
              <h4 className="text-base font-bold text-foreground mb-2 font-display">Extreme Simplicity</h4>
              <p className="text-xs text-foreground-secondary leading-relaxed">
                We strip architectural bloat on every module. If we can achieve reliable databases or transactions without bloated third-party SDK dependencies, we choose custom simplicity.
              </p>
            </div>

            <div className="bg-surface border border-border p-6 rounded-2xl">
              <span className="text-lg font-mono font-black text-accent mb-3 block">02</span>
              <h4 className="text-base font-bold text-foreground mb-2 font-display">Transparent Disclosures</h4>
              <p className="text-xs text-foreground-secondary leading-relaxed">
                We don&apos;t hide limitations. If a POS system needs physical hardware adjustments or specific local network subnets, we present clear upfront blueprints immediately.
              </p>
            </div>

            <div className="bg-surface border border-border p-6 rounded-2xl">
              <span className="text-lg font-mono font-black text-accent mb-3 block">03</span>
              <h4 className="text-base font-bold text-foreground mb-2 font-display">Resilience & Caching</h4>
              <p className="text-xs text-foreground-secondary leading-relaxed">
                Local networks can be unstable. We write software prioritizing safe local transactional buffers, instant retries, and high persistence mechanisms.
              </p>
            </div>

            <div className="bg-surface border border-border p-6 rounded-2xl">
              <span className="text-lg font-mono font-black text-accent mb-3 block">04</span>
              <h4 className="text-base font-bold text-foreground mb-2 font-display">Unwavering Support</h4>
              <p className="text-xs text-foreground-secondary leading-relaxed">
                Deployment is only phase one. We provide on-site operational handoffs, clean documentation archives, and responsive software maintenance scopes.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
