'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Estimator from '@/components/Estimator';
import Footer from '@/components/Footer';
import LetsConnect from '@/components/LetsConnect';
import Toast from '@/components/Toast';

export default function PricingPage() {
  const router = useRouter();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // When locking in the price, redirect to /contact with encoded query parameters
  const handleSetContactCategory = (cat: string) => {
    // Just a placeholder for props compatibility, handled in redirect
  };

  const handleSetContactMessage = (msg: string) => {
    // Redirect with message prefilled
    const encodedMsg = encodeURIComponent(msg);
    router.push(`/contact?message=${encodedMsg}&category=Bespoke%20System%20Calculation`);
  };

  return (
    <div className="relative min-h-screen bg-surface text-foreground font-sans selection:bg-accent selection:text-white">
      <Header />

      {/* Pricing Header Banner */}
      <section className="bg-surface-2 border-b border-border py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block mb-3">
              ESTIMATION & SCOPING ENGINE
            </span>
            <h1 className="text-4xl font-medium tracking-tight text-foreground font-display">
              Modular Roadmap Planner
            </h1>
            <p className="text-sm text-foreground-secondary mt-3 leading-relaxed">
              Plan and estimate your system parameters accurately. Check or uncheck modules below to view direct budget breakdowns and start custom staging guides.
            </p>
          </div>
        </div>
      </section>

      {/* Budget Calculator Module */}
      <Estimator
        setContactCategory={handleSetContactCategory}
        setContactMessage={handleSetContactMessage}
        showToast={showToast}
      />

      <LetsConnect />

      <Footer />
      <Toast message={toastMessage} />
    </div>
  );
}
