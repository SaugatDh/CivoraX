'use client';

import { motion } from 'motion/react';

export default function Stats() {
  const statsList = [
    { value: '16+', label: 'Active Corporate Setups', detail: 'Deployments in Kathmandu, Dharan, & Pokhara.' },
    { value: '99.99%', label: 'Cloud Engine Uptime', detail: 'Highly available server clusters backing data.' },
    { value: 'Rs. 1.48L+', label: 'Daily Ledger Transactions', detail: 'Fully synced VAT logs verified securely.' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10" id="landing-stats">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
        {statsList.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 bg-surface/20 border border-border/50 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="text-4xl md:text-5xl font-mono font-bold text-accent tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-foreground uppercase tracking-wider font-sans mt-3">
                {stat.label}
              </div>
            </div>
            <p className="text-foreground-secondary text-xs leading-normal mt-2 font-mono">
              {stat.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
