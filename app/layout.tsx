import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-jp',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HATAKU DIMSUM | Dimsum & Gyoza Premium',
  description:
    'HATAKU DIMSUM - Nikmati kelezatan dimsum dan gyoza autentik, dibuat segar setiap hari dengan resep tradisional dan bahan berkualitas terbaik.',
  keywords: [
    'dimsum',
    'gyoza',
    'hataku',
    'siomay',
    'hakau',
    'makanan asia',
    'restoran dimsum',
    'bandung',
  ],
  authors: [{ name: 'HATAKU DIMSUM' }],
  openGraph: {
    title: 'HATAKU DIMSUM | Dimsum & Gyoza Premium',
    description:
      'Nikmati kelezatan dimsum dan gyoza autentik, dibuat segar setiap hari.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'HATAKU DIMSUM',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HATAKU DIMSUM | Dimsum & Gyoza Premium',
    description:
      'Nikmati kelezatan dimsum dan gyoza autentik, dibuat segar setiap hari.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FDF8F3',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfair.variable} ${notoSansJP.variable}`}
    >
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
