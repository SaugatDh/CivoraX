'use client';

import { Cpu, Plus, Wifi, WifiOff } from 'lucide-react';
import { CartItem, InventoryItem } from './types';

// Predefined mock inventory items for the POS simulator
const POS_INVENTORY: InventoryItem[] = [
  { id: 'item-1', name: 'Basmati Rice 5kg', price: 950, category: 'Grocery', icon: '🌾' },
  { id: 'item-2', name: 'Mustard Oil 1L', price: 280, category: 'Grocery', icon: '🍶' },
  { id: 'item-3', name: 'Dharan Black Pork 1kg', price: 650, category: 'Fresh', icon: '🥩' },
  { id: 'item-4', name: 'Tata Salt 1kg', price: 50, category: 'Grocery', icon: '🧂' },
  { id: 'item-5', name: 'Pure Ghee 1L', price: 820, category: 'Dairy', icon: '🧈' },
  { id: 'item-6', name: 'Koshi Ortho Tea 500g', price: 240, category: 'Beverage', icon: '🍃' },
];

interface SimulatorProps {
  cart: CartItem[];
  isOnline: boolean;
  isSyncing: boolean;
  pendingSyncCount: number;
  syncedCount: number;
  handleAddToCart: (item: InventoryItem) => void;
  handleSync: () => void;
  setIsOnline: (isOnline: boolean) => void;
  showToast: (msg: string) => void;
}

export default function Simulator({
  isOnline,
  isSyncing,
  pendingSyncCount,
  syncedCount,
  handleAddToCart,
  handleSync,
  setIsOnline,
  showToast,
}: SimulatorProps) {
  return (
    <section className="min-h-[90vh] flex items-center py-24 md:py-32 bg-surface-2 border-b border-border" id="simulator">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Simulator Left Panel: Instructions/Context */}
          <div className="lg:col-span-5" id="simulator-context">
            <div className="text-[11px] font-mono text-accent uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Interactive Demo Room
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground font-display">
              Test-drive our systems in real-time.
            </h2>
            <p className="text-sm text-foreground-secondary mt-4 leading-relaxed mb-6">
              Most web agencies present code static mocks. We want to show you the architectural robustness we build. Try adjusting items on the inventory desk to the right, add items to the cart, sever network connectivity, and test how our software caches data offline.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Configure Inventory Items</h4>
                  <p className="text-xs text-foreground-secondary mt-0.5">Click the plus icons to supply goods from Koshi farms directly into the register desk cart.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Toggle Local Internet Offline</h4>
                  <p className="text-xs text-foreground-secondary mt-0.5">Demark the online network switch. Note how the browser acts as a local node cluster storing pending items seamlessly.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Resync To Regional Cloud</h4>
                  <p className="text-xs text-foreground-secondary mt-0.5">Turn the internet toggle back on, click Synchronize, and watch the background worker push cached records safely.</p>
                </div>
              </div>
            </div>

            {/* Stack items label */}
            <div className="pt-6 border-t border-border">
              <p className="text-xs font-mono font-bold text-foreground-muted uppercase">SYSTEM BLUEPRINT STACK</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-surface border border-border text-xs font-mono text-foreground-secondary px-2.5 py-1 rounded-md">React Context Store</span>
                <span className="bg-surface border border-border text-xs font-mono text-foreground-secondary px-2.5 py-1 rounded-md">IndexedDB local replica</span>
                <span className="bg-surface border border-border text-xs font-mono text-foreground-secondary px-2.5 py-1 rounded-md">Go Sync Engine</span>
              </div>
            </div>
          </div>

          {/* Simulator Right Panel: The Workstation */}
          <div className="lg:col-span-7" id="simulator-sandbox">
            <div className="bg-surface border border-border rounded-2xl shadow-lg p-6 lg:p-8">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border mb-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground font-display flex items-center gap-1.5" id="simulator-terminal-title">
                    <Cpu className="w-5 h-5 text-accent" />
                    CivoraX Terminal Register Simulator
                  </h3>
                  <p className="text-xs text-foreground-secondary">Interactive testing terminal to evaluate store automation algorithms.</p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-center">
                  <span className="text-xs font-mono font-medium text-foreground-secondary">Local Node:</span>
                  <span className="bg-surface-2 border border-border text-xs font-mono px-2 py-1 rounded font-bold">
                    Dharan_Node_01
                  </span>
                </div>
              </div>

              {/* Sub layout: items matrix */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-xs font-mono font-bold text-foreground-muted uppercase mb-3">Store Inventory Items</h4>
                  <div className="grid grid-cols-1 gap-2.5" id="simulator-item-grid">
                    {POS_INVENTORY.map((item) => (
                      <div 
                        key={item.id}
                        className="bg-white border border-border p-3 rounded-xl flex items-center justify-between hover:border-foreground transition-colors group"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-lg bg-surface w-8 h-8 rounded-lg flex items-center justify-center border border-border">
                            {item.icon}
                          </span>
                          <div>
                            <p className="text-xs font-bold text-foreground">{item.name}</p>
                            <p className="text-[11px] text-foreground-muted font-mono">Rs. {item.price}</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => handleAddToCart(item)}
                          className="bg-accent/10 hover:bg-accent text-accent hover:text-white p-1.5 rounded-lg transition-colors"
                          title="Add item"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cart and State values */}
                <div className="p-4 bg-white border border-border rounded-xl flex flex-col justify-between" id="simulator-caching-telemetry">
                  <div>
                    <div className="flex justify-between items-center pb-2 border-b border-border mb-3">
                      <span className="text-xs font-mono font-bold text-foreground-secondary">Buffer Registry</span>
                      <div className="flex items-center gap-1">
                        {isOnline ? (
                          <Wifi className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <WifiOff className="w-3.5 h-3.5 text-amber-500" />
                        )}
                        <span className="text-[10px] font-mono font-bold">
                          {isOnline ? 'ONLINE' : 'CACHING'}
                        </span>
                      </div>
                    </div>

                    <div className="text-[11px] text-foreground-secondary space-y-1 font-mono">
                      <div className="flex justify-between">
                        <span>Sync Status:</span>
                        <span className="font-bold text-foreground">
                          {isOnline ? 'Secured Koshi DB' : 'Offline Buffering'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Buffered Bills:</span>
                        <span className={`font-bold ${pendingSyncCount > 0 ? 'text-accent' : 'text-foreground-muted'}`}>
                          {pendingSyncCount} sales log
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pushed Sales:</span>
                        <span className="font-bold text-slate-800">{syncedCount} total</span>
                      </div>
                      <div className="flex justify-between">
                        <span>VAT Records:</span>
                        <span className="font-bold text-foreground">Inland Revenue Ready</span>
                      </div>
                    </div>

                    {pendingSyncCount > 0 && (
                      <div className="mt-4 p-2 bg-amber-500/15 border border-amber-500/25 rounded text-[11px] text-amber-800 leading-snug">
                        <strong>Offline Caching active:</strong> {pendingSyncCount} transactions stored. Turning back inline will upload logs safely to central Dharan office.
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-border mt-4">
                    <div className="text-xs font-mono font-semibold text-foreground-muted mb-2">NETWORK LATENCY EMULATOR</div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => {
                          setIsOnline(true);
                          showToast('Connected central telemetry');
                        }}
                        className={`flex-1 text-xs py-2 rounded-lg font-mono font-bold transition-all ${
                          isOnline 
                            ? 'bg-emerald-500 text-white shadow-sm' 
                            : 'bg-surface text-foreground-secondary border border-border'
                        }`}
                      >
                        ✓ Cloud Connected
                      </button>
                      <button 
                        onClick={() => {
                          setIsOnline(false);
                          showToast('Severed server link. offline caching configured');
                        }}
                        className={`flex-1 text-xs py-2 rounded-lg font-mono font-bold transition-all ${
                          !isOnline 
                            ? 'bg-amber-600 text-white shadow-sm' 
                            : 'bg-surface text-foreground-secondary border border-border'
                        }`}
                      >
                        ⚠ Offline Caching
                      </button>
                    </div>

                    <button 
                      onClick={handleSync}
                      disabled={pendingSyncCount === 0 || isSyncing}
                      className={`w-full text-xs py-2.5 rounded-lg font-bold font-mono mt-2 transition-all flex items-center justify-center gap-1.5 ${
                        pendingSyncCount > 0 && isOnline
                          ? 'bg-accent text-white hover:bg-accent-hover' 
                          : 'bg-border text-foreground-muted cursor-not-allowed'
                      }`}
                    >
                      {isSyncing ? 'Pushing Transactions to ERP...' : `Safely Push Cached Records (${pendingSyncCount})`}
                    </button>
                  </div>

                </div>
              </div>

              {/* Subtitle about Nepali Accounting compliance */}
              <div className="bg-surface border border-border p-4 rounded-xl text-xs text-foreground-secondary leading-relaxed flex items-start gap-2.5">
                <span className="text-base">📋</span>
                <div>
                  <span className="font-bold text-foreground">Inland Revenue Department (IRD) Approved Logging:</span> Our offline sales data structure computes billing records that strictly conform to local VAT laws in Nepal, with consecutive secure invoice codes generated locally and synced reliably.
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
export { POS_INVENTORY };
