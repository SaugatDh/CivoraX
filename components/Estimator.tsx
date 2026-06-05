'use client';

import { useState } from 'react';
import { Calculator, ChevronRight } from 'lucide-react';

interface EstimatorProps {
  setContactCategory: (cat: string) => void;
  setContactMessage: (msg: string) => void;
  showToast: (msg: string) => void;
}

export default function Estimator({
  setContactCategory,
  setContactMessage,
  showToast,
}: EstimatorProps) {
  const [selectedModules, setSelectedModules] = useState<string[]>(['pos', 'inventory']);

  // Compute estimatedCost on the fly instead of tracking with useState & useEffect
  const estimatedCost = selectedModules.reduce((acc, mod) => {
    if (mod === 'pos') return acc + 45000;
    if (mod === 'inventory') return acc + 30000;
    if (mod === 'accounts') return acc + 25000;
    if (mod === 'sync') return acc + 20000;
    return acc;
  }, 0);

  const toggleModule = (id: string) => {
    if (selectedModules.includes(id)) {
      setSelectedModules(selectedModules.filter(m => m !== id));
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-surface-2 border-b border-border" id="estimator">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] font-mono text-accent uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Smart Budget Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground font-display">
            Plan your system roadmap & estimate setup costs.
          </h2>
          <p className="text-foreground-secondary text-sm mt-3 leading-relaxed">
            Every system we assemble is bespoke. Define your operational specifications using the calculator below, and evaluate estimated project expenses and immediate deployment checklist structures.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Step Selection Left */}
          <div className="lg:col-span-7 bg-surface p-6 lg:p-8 rounded-2xl border border-border" id="estimator-modules-panel">
            <h3 className="text-base font-bold text-foreground uppercase font-mono tracking-wider mb-4 pb-2 border-b border-border flex items-center gap-2">
              <Calculator className="w-5 h-5 text-accent" />
              Select Required Infrastructure Modules
            </h3>

            <div className="space-y-4">
              
              {/* Module 1 */}
              <div 
                onClick={() => toggleModule('pos')}
                className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex items-start gap-3.5 ${
                  selectedModules.includes('pos') 
                    ? 'bg-white border-accent ring-1 ring-accent' 
                    : 'bg-white/60 border-border hover:border-foreground'
                }`}
              >
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                  selectedModules.includes('pos') ? 'bg-accent border-accent' : 'border-border'
                }`}>
                  {selectedModules.includes('pos') && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-foreground">Offline Retail POS Client Modules</span>
                    <span className="text-xs font-mono font-bold text-accent">Rs. 45,000 onwards</span>
                  </div>
                  <p className="text-xs text-foreground-secondary mt-1">Includes ESC/POS printer integrations, offline storage buffer, tax invoicing registers, and IRD-approved logging format structure.</p>
                </div>
              </div>

              {/* Module 2 */}
              <div 
                onClick={() => toggleModule('inventory')}
                className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex items-start gap-3.5 ${
                  selectedModules.includes('inventory') 
                    ? 'bg-white border-accent ring-1 ring-accent' 
                    : 'bg-white/60 border-border hover:border-foreground'
                }`}
              >
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                  selectedModules.includes('inventory') ? 'bg-accent border-accent' : 'border-border'
                }`}>
                  {selectedModules.includes('inventory') && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-foreground">Warehouse & Stock Inventory Control</span>
                    <span className="text-xs font-mono font-bold text-accent">Rs. 30,000 onwards</span>
                  </div>
                  <p className="text-xs text-foreground-secondary mt-1">Monitors stock quantities, tracks raw material logistics, warns on supply shortage, and coordinates multi-warehouse alerts.</p>
                </div>
              </div>

              {/* Module 3 */}
              <div 
                onClick={() => toggleModule('accounts')}
                className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex items-start gap-3.5 ${
                  selectedModules.includes('accounts') 
                    ? 'bg-white border-accent ring-1 ring-accent' 
                    : 'bg-white/60 border-border hover:border-foreground'
                }`}
              >
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                  selectedModules.includes('accounts') ? 'bg-accent border-accent' : 'border-border'
                }`}>
                  {selectedModules.includes('accounts') && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-foreground">Double-Entry Accounting & Ledger Module</span>
                    <span className="text-xs font-mono font-bold text-accent">Rs. 25,000 onwards</span>
                  </div>
                  <p className="text-xs text-foreground-secondary mt-1">Automatic double-entry bookkeeping, daily revenue statements, expense logs, and streamlined tax return compilation layouts.</p>
                </div>
              </div>

              {/* Module 4 */}
              <div 
                onClick={() => toggleModule('sync')}
                className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex items-start gap-3.5 ${
                  selectedModules.includes('sync') 
                    ? 'bg-white border-accent ring-1 ring-accent' 
                    : 'bg-white/60 border-border hover:border-foreground'
                }`}
              >
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                  selectedModules.includes('sync') ? 'bg-accent border-accent' : 'border-border'
                }`}>
                  {selectedModules.includes('sync') && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-foreground">Multi-Branch Synchronization Network</span>
                    <span className="text-xs font-mono font-bold text-accent">Rs. 20,000 onwards</span>
                  </div>
                  <p className="text-xs text-foreground-secondary mt-1">Establishes real-time peer communication sockets. Connect branches securely to share catalog databases across Dharan, Kathmandu and Pokhara.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Calculations Result Summary Right */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-border shadow-md" id="estimator-calculations-panel">
            <span className="text-[10px] font-mono text-foreground-muted uppercase block mb-1">PROJECT SUMMARY SHEET</span>
            <h3 className="text-xl font-bold text-foreground font-display">Bespoke Price Analysis</h3>

            {selectedModules.length > 0 ? (
              <div className="mt-6 space-y-4">
                <div className="space-y-2 pb-4 border-b border-border">
                  <div className="text-xs font-mono font-bold text-foreground-secondary">MODULE ESTIMATES</div>
                  {selectedModules.map(mod => {
                    const names: Record<string, string> = {
                      pos: 'POS Client Invoicing Suite',
                      inventory: 'Inventory & Stock registers',
                      accounts: 'Double-entry general ledgers',
                      sync: 'Secure multi-branch syncing'
                    };
                    const prizes: Record<string, number> = {
                      pos: 45000,
                      inventory: 30000,
                      accounts: 25000,
                      sync: 20000
                    };
                    return (
                      <div key={mod} className="flex justify-between text-xs text-foreground-secondary font-mono bg-surface p-2 rounded">
                        <span>• {names[mod]}</span>
                        <span className="font-bold">Rs. {prizes[mod].toLocaleString()}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between items-center py-2 text-foreground">
                  <span className="text-xs font-bold uppercase tracking-wider text-foreground-muted">Project Total</span>
                  <span className="text-2xl font-extrabold text-accent font-mono">
                    Rs. {estimatedCost.toLocaleString()}
                  </span>
                </div>

                <div className="bg-surface p-3 rounded-xl border border-border text-xs text-foreground-secondary leading-snug">
                  <span className="font-mono text-accent font-semibold uppercase block mb-1">Roadmap Framework</span>
                  <span>This pricing estimation includes the base source license codes, on-site setup within Koshi province, custom training sessions, and 12-month direct support covering code level bugs.</span>
                </div>

                <button 
                  onClick={() => {
                    setContactCategory('Bespoke System Calculation');
                    setContactMessage(`Hi CivoraX, I estimated my project using your roadmap calculator. Modules selected: ${selectedModules.join(', ')}. Target Budget: Rs. ${estimatedCost.toLocaleString()}. Please contact me.`);
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    showToast('Estimator configuration synced with Contact Form');
                  }}
                  className="w-full bg-foreground hover:bg-accent text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  Lock estimated price in Inquiry
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="py-12 text-center text-xs text-foreground-muted italic">
                Select one or more software modules to analyze costing benchmarks.
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
