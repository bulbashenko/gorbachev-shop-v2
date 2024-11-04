import { Afacad } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavigationMenu from "./components/NavigationMenu";
import Header from "./components/Header";
import { CurrencyProvider } from './contexts/CurrencyContext';
import { CartProvider } from './contexts/CartContext';
import { Analytics } from "@vercel/analytics/react"
import Providers from "./components/Providers";

const neue_machina = localFont({
  src: [
    {
      path: './fonts/PPNeueMachina-InktrapRegular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/PPNeueMachina-InktrapRegularItalic.otf',
      weight: '400',
      style: 'italic'
    }
  ]
});

const afacad = Afacad({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Gorbachev: A Store of Style and Quality",
  description: "Discover exclusive collections and premium quality products at Gorbachev. Elevate your style with elegance and sophistication.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark bg-background text-foreground" >
      <Providers>
      <CartProvider>
      <CurrencyProvider>
      <body className={`${afacad.className} `}>
        <Analytics />
        <Header />
        <NavigationMenu />
        {children}
      </body>
      </CurrencyProvider>
      </CartProvider>
      </Providers>
    </html>
  );
}
