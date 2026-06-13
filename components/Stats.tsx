'use client';

import { motion } from 'motion/react';

export default function Stats() {
  const statsList = [
    { value: '16+', label: 'Active Corporate Setups', detail: 'Deployments in Kathmandu, Dharan, & Pokhara.' },
    { value: '99.99%', label: 'Cloud Engine Uptime', detail: 'Highly available server clusters backing data.' },
    { value: 'Rs. 1.48L+', label: 'Daily Ledger Transactions', detail: 'Fully synced VAT logs verified securely.' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 text-center">
      {statsList.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="border-t border-border pt-6"
        >
          <div className="text-5xl font-mono font-extrabold text-accent">
            {stat.value}
          </div>
          <div className="font-mono uppercase tracking-widest text-xs text-foreground-muted mt-1">
            {stat.label}
          </div>
          <p className="text-sm text-foreground-secondary mt-3 leading-relaxed max-w-[200px] mx-auto">
            {stat.detail}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
