import type {Metadata} from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactModal from '@/components/ContactModal';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'CivoraX — Software Studio, Dharan, Nepal',
  description: 'We build high-performance software that works: multi-branch offline-first Retail POS, core ERPs, and bespoke web applications.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="antialiased min-h-screen selection:bg-accent selection:text-white">
        {children}
        <WhatsAppButton />
        <ContactModal />
      </body>
    </html>
  );
}
