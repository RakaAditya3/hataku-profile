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
  title: {
    default: 'Hataku Dimsum - Dimsum & Gyoza Premium Porong Sidoarjo',
    template: '%s | Hataku Dimsum',
  },
  description:
    'Hataku Dimsum - Nikmati kelezatan dimsum dan gyoza autentik khas Porong, Sidoarjo. Dibuat segar setiap hari dengan resep tradisional dan bahan berkualitas terbaik. Tersedia mentai signature, mentai spesial, dan berbagai varian lezat.',
  keywords: [
    'Hataku Dimsum',
    'Hataku',
    'dimsum Porong',
    'dimsum Sidoarjo',
    'dimsum premium',
    'gyoza Porong',
    'mentai dimsum',
    'dimsum enak Sidoarjo',
    'jual dimsum Porong',
    'dimsum halal',
    'siomay Porong',
    'hakau Sidoarjo',
    'makanan asia',
    'restoran dimsum Sidoarjo',
  ],
  authors: [{ name: 'Hataku Dimsum' }],
  creator: 'Hataku Dimsum',
  publisher: 'Hataku Dimsum',
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    title: 'Hataku Dimsum - Dimsum & Gyoza Premium Porong Sidoarjo',
    description:
      'Nikmati kelezatan dimsum dan gyoza autentik khas Porong, Sidoarjo. Dibuat segar setiap hari dengan resep tradisional.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Hataku Dimsum',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Hataku Dimsum - Dimsum Premium Porong Sidoarjo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hataku Dimsum - Dimsum & Gyoza Premium',
    description:
      'Nikmati kelezatan dimsum dan gyoza autentik khas Porong, Sidoarjo.',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },
  alternates: {
    canonical: '/',
  },
  category: 'food',
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
