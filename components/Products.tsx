'use client';

import { useState } from 'react';
import { openContactModal } from '@/lib/contactModal';

const BRANCH_METRICS = {
  dharan: {
    sales: 'Rs. 1,48,200',
    activeUsers: 8,
    syncPercentage: 100,
    stockLevel: 'Healthy (88%)',
    recentEvent: 'Dharan Main branch synced 47 checkout tokens successfully.'
  },
  kathmandu: {
    sales: 'Rs. 4,12,500',
    activeUsers: 24,
    syncPercentage: 100,
    stockLevel: 'Moderate (64%)',
    recentEvent: 'VAT ledger entry validated by Kathmandu central accounting.'
  },
  biratnagar: {
    sales: 'Rs. 95,400',
    activeUsers: 4,
    syncPercentage: 94,
    stockLevel: 'Critical (38%)',
    recentEvent: 'Biratnagar local server switched to offline backup pool.'
  }
};

export default function Products() {
  const [selectedBranch, setSelectedBranch] = useState<'dharan' | 'kathmandu' | 'biratnagar'>('dharan');

  return (
    <section className="min-h-[80vh] flex items-center py-24 md:py-32 border-b border-border" id="products">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="max-w-2xl mb-16">
          <div className="text-[11px] font-mono text-accent uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Enterprise Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground font-display">
            Built to manage high-volume, multi-branch complexity.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Product 1 - Retail POS with active item list */}
          <div className="bg-surface border border-border p-6 lg:p-8 rounded-2xl flex flex-col justify-between" id="product-pos-panel">
            <div>
              <span className="bg-accent/10 text-accent font-mono text-xs px-2.5 py-1 rounded-md font-bold uppercase mb-4 inline-block">
                Proprietary POS Engine
              </span>
              <h3 className="text-2xl font-bold mb-3 text-foreground font-display">CivoraX Retail POS Client</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed mb-6">
                Perfectly suited for local supermarkets, hardware warehouses, and restaurant groups. Links physical receipt printers, payment drawers, and barcode scanners directly via browser USB endpoints without native binary wrappers.
              </p>

              <div className="bg-white border border-border rounded-xl p-4 space-y-3 mb-6">
                <div className="flex justify-between items-center text-xs font-mono font-bold text-foreground-muted">
                  <span>INTEGRATION PROTOCOLS</span>
                  <span className="text-emerald-500">ACTIVE</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-surface p-2.5 rounded-lg border border-border flex items-center gap-2">
                    <span className="text-emerald-500">✔</span>
                    <div>
                      <p className="font-bold text-foreground">Thermal Raw API</p>
                      <p className="text-[10px] text-foreground-muted">ESC/POS Printer Ready</p>
                    </div>
                  </div>
                  
                  <div className="bg-surface p-2.5 rounded-lg border border-border flex items-center gap-2">
                    <span className="text-emerald-500">✔</span>
                    <div>
                      <p className="font-bold text-foreground">Dual-Sync</p>
                      <p className="text-[10px] text-foreground-muted">Cloud / Local replicas</p>
                    </div>
                  </div>

                  <div className="bg-surface p-2.5 rounded-lg border border-border flex items-center gap-2">
                    <span className="text-emerald-500">✔</span>
                    <div>
                      <p className="font-bold text-foreground">Dynamic VAT logs</p>
                      <p className="text-[10px] text-foreground-muted">Instant audit XMLs</p>
                    </div>
                  </div>

                  <div className="bg-surface p-2.5 rounded-lg border border-border flex items-center gap-2">
                    <span className="text-emerald-500">✔</span>
                    <div>
                      <p className="font-bold text-foreground">Barcode Parser</p>
                      <p className="text-[10px] text-foreground-muted">USB/BT Native listeners</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={openContactModal}
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover font-mono uppercase tracking-wider cursor-pointer"
              >
                Schedule pos audit demo →
              </button>
            </div>
          </div>

          {/* Product 2 - Core ERP with Interactive Branch Telemetry */}
          <div className="bg-surface border border-border p-6 lg:p-8 rounded-2xl flex flex-col justify-between" id="product-erp-panel">
            <div>
              <span className="bg-accent/10 text-accent font-mono text-xs px-2.5 py-1 rounded-md font-bold uppercase mb-4 inline-block">
                Regional ERP Framework
              </span>
              <h3 className="text-2xl font-bold mb-3 text-foreground font-display">CivoraX Core ERP Console</h3>
              <p className="text-sm text-foreground-secondary leading-relaxed mb-6">
                Aggregate raw material ledgers and branches under a single pane of glass. Optimize stock movements, track distribution channels, and access real-time metrics across your branches.
              </p>

              {/* Interactive branch explorer widget */}
              <div className="bg-white border border-border rounded-xl p-4 mb-6" id="branch-monitor">
                <div className="flex items-center justify-between pb-2 border-b border-border mb-3">
                  <span className="text-xs font-mono font-bold text-foreground-muted">BRANCH PERFORMANCE MONITOR</span>
                  <span className="text-[10px] font-mono bg-amber-500/10 text-amber-700 px-1.5 py-0.5 rounded font-bold uppercase">
                    Live Telemetry
                  </span>
                </div>

                {/* Branch selector tabs */}
                <div className="flex gap-2 mb-3.5">
                  {(['dharan', 'kathmandu', 'biratnagar'] as const).map((branch) => (
                    <button 
                      key={branch}
                      onClick={() => setSelectedBranch(branch)}
                      className={`flex-1 text-xs py-1.5 rounded-lg font-mono uppercase font-bold transition-all ${
                        selectedBranch === branch 
                          ? 'bg-foreground text-surface' 
                          : 'bg-surface text-foreground-secondary border border-border'
                      }`}
                    >
                      {branch}
                    </button>
                  ))}
                </div>

                {/* Selected Branch detail values */}
                <div className="grid grid-cols-2 gap-3 mb-3.5 bg-surface p-3 rounded-lg border border-border" id="branch-metrics-details">
                  <div>
                    <span className="text-[10px] font-mono text-foreground-muted uppercase">TODAY&apos;S JOURNAL TOTAL</span>
                    <p className="text-sm font-extrabold text-foreground font-mono mt-0.5">
                      {BRANCH_METRICS[selectedBranch].sales}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-foreground-muted uppercase">STAFF ON SHIFT</span>
                    <p className="text-sm font-extrabold text-foreground font-mono mt-0.5">
                      {BRANCH_METRICS[selectedBranch].activeUsers} members
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-foreground-muted uppercase">PROVINCE SYNC STATUS</span>
                    <p className="text-sm font-extrabold text-emerald-600 font-mono mt-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                      {BRANCH_METRICS[selectedBranch].syncPercentage}% Complete
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-foreground-muted uppercase">INVENTORY DECK LEVEL</span>
                    <p className="text-sm font-extrabold text-foreground font-mono mt-0.5">
                      {BRANCH_METRICS[selectedBranch].stockLevel}
                    </p>
                  </div>
                </div>

                <p className="text-[11px] text-foreground-secondary font-mono bg-white p-2.5 rounded border border-border italic">
                  <strong>Last Event:</strong> &ldquo;{BRANCH_METRICS[selectedBranch].recentEvent}&rdquo;
                </p>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={openContactModal}
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover font-mono uppercase tracking-wider cursor-pointer"
              >
                Get in touch →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
export { BRANCH_METRICS };
