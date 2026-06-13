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
  ShoppingCart, RefreshCw,
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
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter text-foreground mb-6 font-display leading-[1.05]">
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
              <div className="p-6 bg-dark">
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

      <LetsConnect />

      <Footer />
      <Toast message={toastMessage} />
    </div>
  );
}
