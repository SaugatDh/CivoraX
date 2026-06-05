'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import { motion, AnimatePresence } from 'motion/react';
import { Network, Server, RefreshCw, Radio, HardDrive, Cpu, ShieldCheck } from 'lucide-react';

// Live telemetry mock feeds representing system activity
const DEPLOYMENT_NODES = [
  { id: 'node-dharan', name: 'Koshi HQ Node (Dharan)', region: 'Koshi Province', type: 'Central Ledger Cluster', activeTerminals: 16, latency: '4ms', uptime: '99.99%', status: 'ONLINE' },
  { id: 'node-ktm', name: 'Bagmati Hub (Kathmandu)', region: 'Bagmati Province', type: 'Multi-Tenant Replica', activeTerminals: 32, latency: '18ms', uptime: '99.97%', status: 'ONLINE' },
  { id: 'node-biratnagar', name: 'Biratnagar Fork (Industrial)', region: 'Koshi Province', type: 'Local Cache Peer', activeTerminals: 8, latency: '12ms', uptime: '99.95%', status: 'ONLINE' },
  { id: 'node-pokhara', name: 'Gandaki Node (Pokhara)', region: 'Gandaki Province', type: 'Local Cache Peer', activeTerminals: 12, latency: '22ms', uptime: '99.98%', status: 'ONLINE' }
];

export default function DeploymentsPage() {
  const [activeNode, setActiveNode] = useState(DEPLOYMENT_NODES[0]);
  const [realtimeTxCounter, setRealtimeTxCounter] = useState(148204);
  const [simulatedPings, setSimulatedPings] = useState<number[]>([12, 14, 11, 24, 18, 15, 13, 11, 15, 12]);

  // Simulated live ticking transactional logs
  useEffect(() => {
    const timer = setInterval(() => {
      setRealtimeTxCounter(prev => prev + Math.floor(Math.random() * 3) + 1);
      setSimulatedPings(prev => {
        const next = [...prev.slice(1), Math.floor(Math.random() * 15) + 10];
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-surface text-foreground font-sans selection:bg-accent selection:text-white">
      <Header />

      {/* Deployments page Hero */}
      <section className="bg-surface-2 border-b border-border py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              LIVE SYSTEM INFRASTRUCTURE
            </span>
            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-foreground font-display mb-6">
              Nepal Territorial <span className="text-accent italic">Terminal Network.</span>
            </h1>
            <p className="text-sm text-foreground-secondary leading-relaxed max-w-xl">
              CivoraX terminals operate as high-resilience local clusters. Our distributed double-entry network syncs decentralized store records directly to our secure private nodes when online, guaranteeing seamless accounting logs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Deployment Telemetry Dashboard */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Interactive Territorial Map Illustration Panel */}
          <div className="lg:col-span-7 bg-surface border border-border rounded-2xl p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground font-display flex items-center gap-1.5">
                    <Network className="w-5 h-5 text-accent" />
                    Regional System Node Map
                  </h3>
                  <p className="text-xs text-foreground-secondary">Interactive node mesh routing localized ledger packets across Nepal.</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] font-mono font-bold text-foreground-secondary uppercase">Sync Mesh Active</span>
                </div>
              </div>

              {/* Graphical representation of Nepal regional sync circles */}
              <div className="relative h-64 bg-white/70 border border-border rounded-xl overflow-hidden flex items-center justify-center p-6 mb-6">
                
                {/* Decorative circuit backline lines */}
                <svg className="absolute inset-0 w-full h-full text-border/60 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="20%" y1="50%" x2="50%" y2="40%" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
                  <line x1="50%" y1="40%" x2="80%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
                  <line x1="50%" y1="40%" x2="55%" y2="80%" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
                  <line x1="55%" y1="80%" x2="20%" y2="50%" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
                </svg>

                {/* Animated active packet flow circles */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute w-48 h-48 rounded-full border border-accent/10 pointer-events-none"
                />

                {/* Interactive Node indicators overlaying graphical coordinates */}
                <div className="absolute top-[45%] left-[20%]">
                  <button 
                    onClick={() => setActiveNode(DEPLOYMENT_NODES[3])} // Pokhara
                    className={`relative w-4 h-4 rounded-full flex items-center justify-center transition-all ${
                      activeNode.id === 'node-pokhara' 
                        ? 'bg-accent ring-4 ring-accent/20 scale-125' 
                        : 'bg-foreground-secondary hover:bg-accent'
                    }`}
                  >
                    <span className="absolute bottom-5 text-[10px] font-bold font-mono text-foreground-secondary uppercase whitespace-nowrap bg-white/95 px-1.5 py-0.5 rounded border border-border">Pokhara</span>
                  </button>
                </div>

                <div className="absolute top-[35%] left-[50%]">
                  <button 
                    onClick={() => setActiveNode(DEPLOYMENT_NODES[1])} // KTM
                    className={`relative w-4 h-4 rounded-full flex items-center justify-center transition-all ${
                      activeNode.id === 'node-ktm' 
                        ? 'bg-accent ring-4 ring-accent/20 scale-125' 
                        : 'bg-foreground-secondary hover:bg-accent'
                    }`}
                  >
                    <span className="absolute bottom-5 text-[10px] font-bold font-mono text-foreground-secondary uppercase whitespace-nowrap bg-white/95 px-1.5 py-0.5 rounded border border-border">Kathmandu</span>
                  </button>
                </div>

                <div className="absolute top-[45%] left-[78%]">
                  <button 
                    onClick={() => setActiveNode(DEPLOYMENT_NODES[0])} // Dharan
                    className={`relative w-4 h-4 rounded-full flex items-center justify-center transition-all ${
                      activeNode.id === 'node-dharan' 
                        ? 'bg-accent ring-4 ring-accent/20 scale-125' 
                        : 'bg-foreground-secondary hover:bg-accent'
                    }`}
                  >
                    <span className="absolute bottom-5 text-[10px] font-bold font-mono text-foreground-secondary uppercase whitespace-nowrap bg-white/95 px-1.5 py-0.5 rounded border border-border">Dharan HQ</span>
                  </button>
                </div>

                <div className="absolute top-[75%] left-[72%]">
                  <button 
                    onClick={() => setActiveNode(DEPLOYMENT_NODES[2])} // Biratnagar
                    className={`relative w-4 h-4 rounded-full flex items-center justify-center transition-all ${
                      activeNode.id === 'node-biratnagar' 
                        ? 'bg-accent ring-4 ring-accent/20 scale-125' 
                        : 'bg-foreground-secondary hover:bg-accent'
                    }`}
                  >
                    <span className="absolute top-5 text-[10px] font-bold font-mono text-foreground-secondary uppercase whitespace-nowrap bg-white/95 px-1.5 py-0.5 rounded border border-border">Biratnagar</span>
                  </button>
                </div>

                {/* Legend indicator */}
                <div className="absolute bottom-3 left-3 flex items-center gap-3 bg-white/90 px-2.5 py-1.5 rounded-md border border-border text-[10px] font-mono text-foreground-secondary">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>Selected Node</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground-secondary" />
                    <span>Active Peering Nodes</span>
                  </div>
                </div>

              </div>
            </div>

            <p className="text-xs text-foreground-secondary font-mono leading-relaxed bg-surface-2 p-3 rounded-lg border border-border">
              💡 <strong>Interactive Hint:</strong> Click the geographical node triggers above on the Nepal circuit schematics diagram to query targeted regional sync parameters.
            </p>
          </div>

          {/* Selective Node Telemetry Panel */}
          <div className="lg:col-span-5 bg-white border border-border p-6 lg:p-8 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[10px] font-mono text-foreground-muted uppercase block mb-1">NODE METRIC CONSOLE</span>
              <h3 className="text-xl font-bold text-foreground font-display">{activeNode.name}</h3>
              <p className="text-xs text-foreground-secondary font-mono mt-1">{activeNode.region} · {activeNode.type}</p>

              <div className="mt-8 space-y-4">
                
                <div className="flex justify-between items-center py-2.5 border-b border-border text-xs">
                  <span className="font-mono text-foreground-muted uppercase">Active Registers</span>
                  <span className="font-bold text-foreground font-mono bg-surface-2 px-2.5 py-1 rounded">
                    {activeNode.activeTerminals} client terminals
                  </span>
                </div>

                <div className="flex justify-between items-center py-2.5 border-b border-border text-xs">
                  <span className="font-mono text-foreground-muted uppercase">Peering Latency</span>
                  <span className="font-bold font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded flex items-center gap-1">
                    <Radio className="w-3 h-3 animate-pulse" />
                    {activeNode.latency} (Clean)
                  </span>
                </div>

                <div className="flex justify-between items-center py-2.5 border-b border-border text-xs">
                  <span className="font-mono text-foreground-muted uppercase">Uptime Score (7d)</span>
                  <span className="font-bold text-foreground font-mono">
                    {activeNode.uptime}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2.5 text-xs">
                  <span className="font-mono text-foreground-muted uppercase font-bold">Node Status</span>
                  <span className="bg-emerald-500/10 text-emerald-700 font-bold font-mono px-2 py-0.5 rounded text-[10px] uppercase">
                    {activeNode.status}
                  </span>
                </div>

              </div>

              {/* Latency line chart emulator */}
              <div className="mt-6 pt-5 border-t border-border">
                <span className="text-[10px] font-mono text-foreground-muted uppercase block mb-2">Live Node Ping (ms)</span>
                <div className="h-10 flex items-end gap-1 select-none pointer-events-none">
                  {simulatedPings.map((ping, idx) => (
                    <div 
                      key={idx}
                      style={{ height: `${(ping / 40) * 100}%` }}
                      className="flex-1 bg-accent/25 border-t border-accent rounded-t-sm"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border mt-6">
              <span className="text-[10px] font-mono text-foreground-muted uppercase block mb-1">PROVINCIAL SECURITY</span>
              <p className="text-[11px] text-foreground-secondary leading-snug">
                Data inside Koshi HQ clusters is replicated on internal NVMe disks with cryptographic SHA-256 block chains to verify invoices consecutively.
              </p>
            </div>
          </div>

        </div>

        {/* Dynamic global metrics row */}
        <div className="grid md:grid-cols-4 gap-6 bg-surface-2 border border-border p-6 rounded-2xl">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-foreground-muted uppercase block">Total Synced Node Pools</span>
              <span className="text-base font-extrabold text-foreground font-mono">4 Active Clusters</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
              <RefreshCw className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-foreground-muted uppercase block">Total System Bill Actions</span>
              <span className="text-base font-extrabold text-foreground font-mono">
                {realtimeTxCounter.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-foreground-muted uppercase block">Active Registers Online</span>
              <span className="text-base font-extrabold text-foreground font-mono">68 Registers</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-foreground-muted uppercase block">IRD Server Sync</span>
              <span className="text-base font-extrabold text-emerald-600 font-mono">100% Compliant</span>
            </div>
          </div>

        </div>

      </section>

      <LetsConnect />

      <Footer />
    </div>
  );
}
