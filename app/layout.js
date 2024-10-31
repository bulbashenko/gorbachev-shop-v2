import { Afacad } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavigationMenu from "./components/NavigationMenu";
import Header from "./components/Header";
import { CurrencyProvider } from './contexts/CurrencyContext';
import { CartProvider } from './contexts/CartContext';
import { Analytics } from "@vercel/analytics/react"

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark bg-background text-foreground" >
      <Analytics>
      <CartProvider>
      <CurrencyProvider>
      <body className={`${afacad.className} `}>
        <Header />
        <NavigationMenu />
        {children}
      </body>
      </CurrencyProvider>
      </CartProvider>
      </Analytics>
    </html>
  );
}
