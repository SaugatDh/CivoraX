'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Products from '@/components/Products';
import Simulator from '@/components/Simulator';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import Toast from '@/components/Toast';
import { CartItem, InventoryItem } from '@/components/types';
import { motion } from 'motion/react';
import {
  ShoppingCart, RefreshCw, Cpu, Wifi, Server, Printer,
  HardDrive, BarChart3, Shield, Cable, Cloud, Terminal,
  ArrowRight, Boxes, ScanLine, ArrowLeftRight,
} from 'lucide-react';

export default function ProductsPage() {
  const [cart, setCart] = useState<CartItem[]>([
    { id: 'item-1', name: 'Basmati Rice 5kg', price: 950, quantity: 1 },
    { id: 'item-2', name: 'Mustard Oil 1L', price: 280, quantity: 2 },
    { id: 'item-4', name: 'Tata Salt 1kg', price: 50, quantity: 3 },
  ]);
  const [isOnline, setIsOnline] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncedCount, setSyncedCount] = useState(14);
  const [pendingSyncCount, setPendingSyncCount] = useState(0);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (item: InventoryItem) => {
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      setCart(cart.map(c => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c));
    } else {
      setCart([...cart, { id: item.id, name: item.name, price: item.price, quantity: 1 }]);
    }
    showToast(`Added ${item.name} to POS checkout`);
    if (!isOnline) {
      setPendingSyncCount(prev => prev + 1);
    }
  };

  const handleSync = () => {
    if (pendingSyncCount === 0) {
      showToast('All transaction buffers are fully synchronized');
      return;
    }
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncedCount(prev => prev + pendingSyncCount);
      setPendingSyncCount(0);
      showToast('Offline transactions safely pushed to Koshi cluster');
    }, 1800);
  };

  return (
    <div className="relative min-h-screen bg-surface text-foreground font-sans selection:bg-accent selection:text-white">
      <Header />

      {/* Section 1: Product Hub Hero — 90vh (Live Dashboard Layout) */}
      <section className="min-h-[90vh] flex items-center bg-surface-2 border-b border-border relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
          {/* Centered heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-surface border border-border text-accent text-sm font-mono px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              Runtime UI Suite
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-foreground mb-6 font-display leading-[1.05]">
              Production-Grade{' '}
              <span className="text-accent italic">Retail and Enterprise Software.</span>
            </h1>
            <p className="text-foreground-secondary text-base md:text-lg leading-relaxed">
              A live snapshot of our deployed systems across Koshi and Bagmati. The dashboard below renders real production telemetry — counters, sync state, and transaction throughput from active branches.
            </p>
          </div>

          {/* Live Dashboard Preview */}
          <div className="bg-surface-white border border-border rounded-3xl overflow-hidden shadow-sm">
            {/* Dashboard top bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-mono font-bold text-foreground uppercase tracking-widest">
                  ▸ Live Production Snapshot
                </span>
                <span className="text-sm font-mono text-foreground-muted">· {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono text-foreground-muted uppercase tracking-widest hidden sm:inline">
                  Scope:
                </span>
                <span className="text-sm font-mono text-accent uppercase tracking-widest font-bold">
                  All Branches
                </span>
              </div>
            </div>

            {/* Stat cards row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border border-b border-border">
              <div className="p-6">
                <p className="text-sm font-mono text-foreground-muted uppercase tracking-widest mb-2">
                  Transactions / 24h
                </p>
                <p className="text-3xl font-mono font-extrabold text-foreground">
                  1,284
                </p>
                <p className="text-sm font-mono text-emerald-600 mt-1 flex items-center gap-1">
                  ▲ 12.4% vs yesterday
                </p>
              </div>
              <div className="p-6">
                <p className="text-sm font-mono text-foreground-muted uppercase tracking-widest mb-2">
                  Active Terminals
                </p>
                <p className="text-3xl font-mono font-extrabold text-foreground">
                  36<span className="text-base text-foreground-muted font-normal">/38</span>
                </p>
                <p className="text-sm font-mono text-foreground-muted mt-1">
                  2 in maintenance
                </p>
              </div>
              <div className="p-6">
                <p className="text-sm font-mono text-foreground-muted uppercase tracking-widest mb-2">
                  Branches Online
                </p>
                <p className="text-3xl font-mono font-extrabold text-foreground">
                  11<span className="text-base text-foreground-muted font-normal">/12</span>
                </p>
                <p className="text-sm font-mono text-amber-600 mt-1">
                  1 syncing (Gandaki)
                </p>
              </div>
              <div className="p-6">
                <p className="text-sm font-mono text-foreground-muted uppercase tracking-widest mb-2">
                  IRD Submissions
                </p>
                <p className="text-3xl font-mono font-extrabold text-foreground">
                  100%
                </p>
                <p className="text-sm font-mono text-emerald-600 mt-1">
                  ✓ All branches compliant
                </p>
              </div>
            </div>

            {/* Chart + Activity feed row */}
            <div className="grid lg:grid-cols-3 divide-x divide-border">
              {/* Sales chart */}
              <div className="lg:col-span-2 p-6">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-sm font-mono font-bold text-foreground uppercase tracking-widest">
                    Hourly Throughput
                  </h3>
                  <span className="text-sm font-mono text-foreground-muted">
                    Last 12 hours · Rs.
                  </span>
                </div>
                {/* Bar chart */}
                <div className="flex items-end gap-2 h-48">
                  {[
                    { h: '08', v: 32 }, { h: '09', v: 58 }, { h: '10', v: 78 },
                    { h: '11', v: 64 }, { h: '12', v: 88 }, { h: '13', v: 72 },
                    { h: '14', v: 56 }, { h: '15', v: 68 }, { h: '16', v: 82 },
                    { h: '17', v: 94 }, { h: '18', v: 76 }, { h: '19', v: 48 },
                  ].map((bar) => (
                    <div key={bar.h} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full flex items-end h-full">
                        <div
                          className="w-full bg-accent/80 hover:bg-accent rounded-t-md transition-colors relative group"
                          style={{ height: `${bar.v}%` }}
                        >
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-foreground-muted opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {(bar.v * 1000).toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-foreground-muted">{bar.h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity feed */}
              <div className="p-6 bg-[#0f1714]">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <h3 className="text-sm font-mono font-bold text-emerald-300 uppercase tracking-widest">
                    Event Stream
                  </h3>
                </div>
                <ul className="space-y-3 text-[11px] font-mono text-emerald-300/80">
                  <li className="flex gap-2">
                    <span className="text-foreground/30">14:23</span>
                    <span className="flex-1">CHK · DHARAN-01 · Rs. 2,480</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground/30">14:22</span>
                    <span className="flex-1 text-sky-300">SYNC · BAGMATI-04 · OK</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground/30">14:21</span>
                    <span className="flex-1">VAT · KATH-02 · LOG #1482</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground/30">14:20</span>
                    <span className="flex-1">CHK · DHARAN-03 · Rs. 1,950</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground/30">14:19</span>
                    <span className="flex-1 text-amber-300">RETRY · GANDAKI · 3s</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground/30">14:18</span>
                    <span className="flex-1">CHK · BIRAT-01 · Rs. 880</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-foreground/30">14:17</span>
                    <span className="flex-1 text-sky-300">SYNC · KOSHI-02 · OK</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dashboard footer */}
            <div className="flex items-center justify-between px-6 py-3 border-t border-border bg-surface text-sm font-mono text-foreground-muted">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                All sync engines nominal
              </span>
              <span>REQ/s: 284 · LATENCY: 42ms · ERR: 0.01%</span>
            </div>
          </div>
        </div>
      </section>

      {/* POS Working Simulator Workspace Section */}
      <Simulator
        cart={cart}
        isOnline={isOnline}
        isSyncing={isSyncing}
        pendingSyncCount={pendingSyncCount}
        syncedCount={syncedCount}
        handleAddToCart={handleAddToCart}
        handleSync={handleSync}
        setIsOnline={setIsOnline}
        showToast={showToast}
      />

      {/* Static Products Spec Matrices Section */}
      <Products />

      {/* Section 4: Deployment & Hardware Ecosystem — 90vh */}
      <section className="min-h-[90vh] flex items-center py-24 bg-surface border-b border-border w-full" id="deployment-ecosystem">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Deployment &amp; Hardware Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              Direct hardware integration. Zero native wrappers.
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              Our systems talk to receipt printers, barcode scanners, and cash drawers directly through browser-native protocols. No Electron shells, no proprietary drivers, no vendor lock-in at the hardware layer.
            </p>
          </div>

          {/* Hardware Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-surface-white border border-border p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground leading-snug">
                Thermal Receipt Printers
              </h3>
              <p className="text-sm text-foreground-secondary leading-relaxed mt-3">
                ESC/POS command set over USB, serial, or network. Epson, Star, Citizen, and generic 58mm/80mm models work out of the box. Renders logos, QR codes, and IRD-mandated fiscal blocks.
              </p>
              <p className="text-xs font-mono text-accent uppercase tracking-widest mt-4">
                Protocol · ESC/POS
              </p>
            </div>

            <div className="bg-surface-white border border-border p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                <ScanLine className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground leading-snug">
                Barcode Scanners
              </h3>
              <p className="text-sm text-foreground-secondary leading-relaxed mt-3">
                USB HID keyboard-emulation scanners and Bluetooth serial scanners both supported via WebUSB and Web Bluetooth APIs. EAN, UPC, Code-128, and QR payloads parsed client-side.
              </p>
              <p className="text-xs font-mono text-accent uppercase tracking-widest mt-4">
                Protocol · WebUSB / BT
              </p>
            </div>

            <div className="bg-surface-white border border-border p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                <Boxes className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground leading-snug">
                Cash Drawer Pulses
              </h3>
              <p className="text-sm text-foreground-secondary leading-relaxed mt-3">
                RJ-11 cash drawer kick via connected printer or direct RJ-12 relay module. Automatic open on cash payment, manual override, and shift reconciliation tracking.
              </p>
              <p className="text-xs font-mono text-accent uppercase tracking-widest mt-4">
                Protocol · RJ-11 / RJ-12
              </p>
            </div>

            <div className="bg-surface-white border border-border p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                <HardDrive className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground leading-snug">
                Local Store Servers
              </h3>
              <p className="text-sm text-foreground-secondary leading-relaxed mt-3">
                Compact NUC-class or Raspberry Pi 5 deployments run the full stack locally. Internet is optional, not required. Central office pulls deltas when the link is up.
              </p>
              <p className="text-xs font-mono text-accent uppercase tracking-widest mt-4">
                Hardware · x86 / ARM
              </p>
            </div>
          </div>

          {/* Deployment Modes row */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f4f7f5] border border-border p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Cloud className="w-4 h-4 text-accent" />
                <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-foreground">
                  Cloud-Hosted
                </h4>
              </div>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Managed on your private cloud instance (AWS, DigitalOcean, Hetzner). CivoraX provisions the container, manages TLS, and configures nightly backups. You retain full root access.
              </p>
            </div>
            <div className="bg-[#f4f7f5] border border-border p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Server className="w-4 h-4 text-accent" />
                <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-foreground">
                  On-Premise
                </h4>
              </div>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Installed on a local server inside your office or branch. Internet is optional. We deliver the Docker stack, train your IT staff, and hand over the runbook.
              </p>
            </div>
            <div className="bg-[#f4f7f5] border border-border p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <HardDrive className="w-4 h-4 text-accent" />
                <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-foreground">
                  Hybrid Sync
                </h4>
              </div>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Local branch servers replicate with a central cloud instance via our Go-based sync engine. Conflict-aware, retry-safe, and partition-tolerant across days of disconnection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Operational Resilience Matrix — 80vh */}
      <section className="min-h-[80vh] flex items-center py-24 bg-surface-white border-b border-border w-full" id="resilience-matrix">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl mb-16">
            <span className="text-sm font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              Operational Resilience Matrix
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground font-display leading-[1.1]">
              Engineered for the conditions your branch actually faces.
            </h2>
            <p className="text-base text-foreground-secondary mt-5 leading-relaxed max-w-2xl">
              The matrix below maps real-world failure modes to the architectural patterns we ship. Every row is a constraint we tested against, not a feature we benchmarked.
            </p>
          </div>

          <div className="overflow-x-auto border border-border rounded-2xl bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left bg-surface-2 border-b border-border">
                  <th className="px-6 py-4 text-sm font-mono font-bold uppercase tracking-widest text-foreground-muted">
                    Failure Mode
                  </th>
                  <th className="px-6 py-4 text-sm font-mono font-bold uppercase tracking-widest text-foreground-muted">
                    System Response
                  </th>
                  <th className="px-6 py-4 text-sm font-mono font-bold uppercase tracking-widest text-foreground-muted">
                    Data Outcome
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-surface-white/50 transition-colors">
                  <td className="px-6 py-5 font-semibold text-foreground">Internet drops mid-shift</td>
                  <td className="px-6 py-5 text-foreground-secondary">
                    Sales auto-queue to local IndexedDB / SQLite buffer
                  </td>
                  <td className="px-6 py-5 text-emerald-600 font-mono text-xs uppercase tracking-widest">
                    Zero data loss
                  </td>
                </tr>
                <tr className="hover:bg-surface-white/50 transition-colors">
                  <td className="px-6 py-5 font-semibold text-foreground">Power outage &lt; 5s</td>
                  <td className="px-6 py-5 text-foreground-secondary">
                    UPS-buffered local server; auto-resume on return
                  </td>
                  <td className="px-6 py-5 text-emerald-600 font-mono text-xs uppercase tracking-widest">
                    Continuous operation
                  </td>
                </tr>
                <tr className="hover:bg-surface-white/50 transition-colors">
                  <td className="px-6 py-5 font-semibold text-foreground">Power outage &gt; 30 min</td>
                  <td className="px-6 py-5 text-foreground-secondary">
                    Graceful shutdown; offline resume on boot
                  </td>
                  <td className="px-6 py-5 text-emerald-600 font-mono text-xs uppercase tracking-widest">
                    Auto-recovery
                  </td>
                </tr>
                <tr className="hover:bg-surface-white/50 transition-colors">
                  <td className="px-6 py-5 font-semibold text-foreground">Branch server offline for 3 days</td>
                  <td className="px-6 py-5 text-foreground-secondary">
                    Local DB continues; sync resumes on link return
                  </td>
                  <td className="px-6 py-5 text-emerald-600 font-mono text-xs uppercase tracking-widest">
                    Eventual consistency
                  </td>
                </tr>
                <tr className="hover:bg-surface-white/50 transition-colors">
                  <td className="px-6 py-5 font-semibold text-foreground">Printer disconnected</td>
                  <td className="px-6 py-5 text-foreground-secondary">
                    Receipt queues to local storage; replays on reconnect
                  </td>
                  <td className="px-6 py-5 text-emerald-600 font-mono text-xs uppercase tracking-widest">
                    No reprint drift
                  </td>
                </tr>
                <tr className="hover:bg-surface-white/50 transition-colors">
                  <td className="px-6 py-5 font-semibold text-foreground">IRD audit request</td>
                  <td className="px-6 py-5 text-foreground-secondary">
                    One-click export of VAT-compliant XML / CSV
                  </td>
                  <td className="px-6 py-5 text-emerald-600 font-mono text-xs uppercase tracking-widest">
                    Instant submission
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
            >
              Request Resilience Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <LetsConnect />

      <Footer />
      <Toast message={toastMessage} />
    </div>
  );
}
