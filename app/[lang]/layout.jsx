import { Sen, Cormorant_Garamond } from 'next/font/google';
import '../globals.css';

const sen = Sen({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

export const metadata = {
  title: "Piccante Restaurant | Ekskluzivni Restoran",
  description: "Dobro došli u Piccante Restoran - gde se luksuz spaja sa vrhunskom kuhinjom. Uživajte u autentičnim ukusima i prelepom ambijentu.",
  keywords: ["restoran", "Piccante", "hrana", "večera", "ručak", "luksuzni restoran", "najbolji restoran", "Srbija", "gastronomija"],
  openGraph: {
    title: "Piccante Restaurant",
    description: "Dobro došli u Piccante Restoran - gde se luksuz spaja sa vrhunskom kuhinjom.",
    locale: "sr_RS",
    images: [
      {
        url: '/images/linkcover.webp',
        width: 1200,
        height: 630,
        alt: 'Piccante Restaurant Cover',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Piccante Restaurant",
    description: "Dobro došli u Piccante Restoran - gde se luksuz spaja sa vrhunskom kuhinjom.",
    images: ['/images/linkcover.webp'],
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
};

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  return (
    <html lang={lang} className="dark" translate="no">
      <body
        className={`${sen.variable} ${cormorant.variable} antialiased bg-[#0a0a0a] text-[#ededed] font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
