import type {Metadata} from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactModal from '@/components/ContactModal';
import ScrollToTop from '@/components/ScrollToTop';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'CivoraX — Software Studio, Dharan, Nepal',
  description: 'We build software that works: offline-first Retail POS, ERPs, and web applications for businesses in Nepal.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="antialiased min-h-screen selection:bg-accent selection:text-white">
        {children}
        <WhatsAppButton />
        <ContactModal />
        <ScrollToTop />
      </body>
    </html>
  );
}
