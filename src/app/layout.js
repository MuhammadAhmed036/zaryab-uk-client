import { Inter, Bebas_Neue, Montserrat } from 'next/font/google';
import './globals.css';
import { Navbar, Footer } from '@/components/layout';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata = {
  title: 'Soundwave Media | Gen Z Music Marketing Agency',
  description: 'A Gen Z focused music marketing agency. We create viral campaigns and connect artists with millions of fans through innovative social media strategies.',
  keywords: ['music marketing', 'Gen Z', 'TikTok marketing', 'influencer marketing', 'social media agency', 'music industry'],
  authors: [{ name: 'Soundwave Media' }],
  openGraph: {
    title: 'Soundwave Media | Gen Z Music Marketing Agency',
    description: 'A Gen Z focused music marketing agency creating viral campaigns for artists worldwide.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Soundwave Media',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soundwave Media | Gen Z Music Marketing Agency',
    description: 'A Gen Z focused music marketing agency creating viral campaigns for artists worldwide.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} ${montserrat.variable}`}>
      <body className={`${inter.className} antialiased bg-white text-dark-900`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
