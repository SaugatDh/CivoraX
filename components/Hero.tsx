'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Plus, Minus, Wifi, WifiOff } from 'lucide-react';
import { CartItem } from './types';

interface HeroProps {
  cart: CartItem[];
  isOnline: boolean;
  isSyncing: boolean;
  pendingSyncCount: number;
  syncedCount: number;
  subtotal: number;
  vat: number;
  total: number;
  handleUpdateQuantity: (id: string, delta: number) => void;
  handleSync: () => void;
  toggleConnection: () => void;
  setCart: (cart: CartItem[]) => void;
}

export default function Hero({
  cart,
  isOnline,
  isSyncing,
  pendingSyncCount,
  syncedCount,
  subtotal,
  vat,
  total,
  handleUpdateQuantity,
  handleSync,
  toggleConnection,
  setCart,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 border-b border-border" id="hero-section">
      {/* Techie / Nepali themed Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" id="hero-bg-wrapper">
        <Image 
          src="/nepali_tech_hero_bg.png" 
          alt="CivoraX Tech and Nepal Background" 
          fill
          className="object-cover opacity-[0.25] mix-blend-multiply filter contrast-[1.08] saturate-[0.85]"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/60 to-surface" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/20 via-transparent to-surface/70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10" id="hero-content">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline */}
          <div className="lg:col-span-7 flex flex-col items-start" id="hero-headline-column">
            
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-surface-2 border border-border text-foreground-secondary text-xs font-mono px-3 py-1.5 rounded-full mb-6"
              id="hero-badge"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Software Studio · Dharan, Nepal
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-foreground leading-[1.1] mb-6 font-display"
              id="hero-main-title"
            >
              We build software <br className="hidden sm:inline" /> 
              <span className="text-accent italic">that actually works.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-foreground-secondary max-w-xl leading-relaxed mb-8"
              id="hero-subtitle"
            >
              High-performance web apps, offline-first Point of Sale platforms, and robust corporate management engines. Engineered natively to empower ambitious businesses across Koshi Province and wider Nepal.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
              id="hero-ctas"
            >
              <a 
                href="#contact" 
                className="bg-accent text-white font-medium px-8 py-4 rounded-full hover:bg-accent-hover transition-all duration-300 shadow-md flex items-center gap-2 text-sm"
              >
                Start a project
                <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="#simulator" 
                className="bg-white border border-border text-foreground font-medium px-8 py-4 rounded-full hover:border-foreground transition-all duration-300 shadow-sm text-sm"
              >
                Play with live POS
              </a>
            </motion.div>

            {/* Multi-Branch Metadata */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border w-full max-w-md"
              id="hero-metrics"
            >
              <div>
                <div className="text-2xl font-semibold text-foreground font-mono">16+</div>
                <div className="text-xs text-foreground-muted mt-1 font-medium tracking-wider uppercase">Active In Nepal</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-foreground font-mono">99.9%</div>
                <div className="text-xs text-foreground-muted mt-1 font-medium tracking-wider uppercase">Uptime Score</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-foreground font-mono">Offline</div>
                <div className="text-xs text-foreground-muted mt-1 font-medium tracking-wider uppercase">Vault Sync Ready</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Interactive POS Receipt Panel */}
          <div className="lg:col-span-5 flex justify-center" id="hero-receipt-column">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotate: -1.5 }}
              animate={{ opacity: 1, scale: 1, rotate: -1 }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-xl border border-dashed border-border relative overflow-hidden"
              id="hero-receipt-card"
            >
              {/* Vintage Thermal style watermark heading */}
              <div className="text-center pb-4 border-b border-dashed border-border mb-4">
                <span className="text-[10px] font-mono text-accent tracking-widest uppercase font-bold block">
                  CIVORAX RETAIL ENGINE v2.5
                </span>
                <h3 className="text-lg font-bold text-foreground mt-1 tracking-tight font-display">Green Mart Pvt. Ltd.</h3>
                <p className="text-[11px] text-foreground-muted font-mono mt-0.5">Dharan-12, Koshi Province | PAN: 608291042</p>
              </div>

              {/* Cart simulation header status */}
              <div className="flex items-center justify-between text-xs font-mono font-bold text-foreground-secondary mb-3 bg-surface p-2 rounded">
                <span>ITEMIZED ITEMS ({cart.length})</span>
                <span className="text-accent flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                  LIVE CHECKOUT
                </span>
              </div>

              {/* Simulated item table list */}
              <div className="space-y-3 max-h-48 overflow-y-auto mb-4 pr-1">
                <AnimatePresence initial={false}>
                  {cart.map((item) => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="flex items-center justify-between text-xs border-b border-dotted border-border pb-2 group"
                    >
                      <div className="flex-1 min-w-0 pr-2">
                        <p className="font-medium text-foreground truncate">{item.name}</p>
                        <p className="text-[11px] text-foreground-muted font-mono">
                          Rs. {item.price} × {item.quantity}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button 
                          onClick={() => handleUpdateQuantity(item.id, -1)} 
                          className="w-5 h-5 rounded-md bg-surface border border-border flex items-center justify-center text-foreground hover:bg-border"
                        >
                          <Minus className="w-2.5 h-2.5" />
                        </button>
                        <span className="font-mono font-semibold text-foreground w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => handleUpdateQuantity(item.id, 1)} 
                          className="w-5 h-5 rounded-md bg-surface border border-border flex items-center justify-center text-foreground hover:bg-border"
                        >
                          <Plus className="w-2.5 h-2.5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {cart.length === 0 && (
                  <div className="text-center py-6">
                    <p className="text-xs text-foreground-muted italic">The POS register is empty</p>
                    <button 
                      onClick={() => setCart([
                        { id: 'item-1', name: 'Basmati Rice 5kg', price: 950, quantity: 1 },
                        { id: 'item-2', name: 'Mustard Oil 1L', price: 280, quantity: 2 }
                      ])}
                      className="mt-2 text-xs font-mono font-bold text-accent hover:underline"
                    >
                      [ Restore Defaults ]
                    </button>
                  </div>
                )}
              </div>

              {/* Subtotals & Taxes */}
              <div className="border-t border-dashed border-border pt-3 text-xs font-mono space-y-1.5 text-foreground-secondary">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[11px] text-foreground-muted">
                  <span>VAT (13%)</span>
                  <span>Rs. {vat.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-foreground pt-2 border-t border-border">
                  <span>GRAND TOTAL</span>
                  <span className="text-accent">Rs. {total.toLocaleString()}</span>
                </div>
              </div>

              {/* Offline-first Synchronization Telemetry Panel */}
              <div className="mt-4 pt-3 border-t border-dashed border-border bg-surface p-3 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-foreground-muted uppercase">Offline Sync Registry</span>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${isOnline ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
                    <span className="text-[10px] font-bold font-mono text-foreground-secondary">
                      {isOnline ? 'ONLINE' : 'OFFLINE BUFFER'}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-foreground-secondary leading-tight mb-2">
                  {isOnline 
                    ? 'Connected securely to Koshi-central database. Pushing live records.' 
                    : 'Network severed. Accumulating sales data locally inside browser IndexedDB.'}
                </p>

                <div className="flex items-center justify-between gap-2 mt-2">
                  <button 
                    onClick={toggleConnection}
                    className="text-[10px] font-mono bg-white border border-border px-2 py-1 rounded text-foreground-secondary hover:border-foreground"
                  >
                    Toggle Network
                  </button>
                  <button 
                    onClick={handleSync}
                    disabled={isSyncing}
                    className={`text-[10px] font-mono px-3 py-1 rounded text-white flex items-center gap-1 ${
                      pendingSyncCount > 0 
                        ? 'bg-accent hover:bg-accent-hover cursor-pointer' 
                        : 'bg-foreground-muted/60 cursor-not-allowed'
                    }`}
                  >
                    {isSyncing ? (
                      <>
                        <span className="w-1.5 h-1.5 border-t border-white rounded-full animate-spin" />
                        Syncing...
                      </>
                    ) : (
                      `Sync Now (${pendingSyncCount})`
                    )}
                  </button>
                </div>
              </div>

              <div className="mt-4 text-center">
                <span className="text-[9px] font-mono text-foreground-muted uppercase">Generated via CivoraX POS client module</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
