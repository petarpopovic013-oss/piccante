import { Sen, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const sen = Sen({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

export const metadata = {
  title: "Piccante Restaurant",
  description: "Dobro došli u Piccante Restoran - gde se luksuz spaja sa vrhunskom kuhinjom",
  openGraph: {
    title: "Piccante Restaurant",
    description: "Dobro došli u Piccante Restoran - gde se luksuz spaja sa vrhunskom kuhinjom",
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
    description: "Dobro došli u Piccante Restoran - gde se luksuz spaja sa vrhunskom kuhinjom",
    images: ['/images/linkcover.webp'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${sen.variable} ${cormorant.variable} antialiased bg-[#0a0a0a] text-[#ededed] font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
