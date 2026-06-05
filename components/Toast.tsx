'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export default function Toast({ message }: ToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div 
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-foreground text-surface px-5 py-3 rounded-xl text-xs font-mono font-bold shadow-2xl z-[200] flex items-center gap-2 border border-border/10"
          id="toast-notification"
        >
          <Sparkles className="w-4 h-4 text-accent animate-spin" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
