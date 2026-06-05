'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9779800000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-20 right-6 z-30 flex items-center gap-2"
    >
      <span className="hidden sm:block rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-foreground-secondary shadow-md opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
        Let&apos;s Chat!
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110">
        <MessageCircle className="h-6 w-6" />
      </span>
    </a>
  );
}
