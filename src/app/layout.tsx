import type { Metadata } from 'next';
import { Instrument_Sans, Newsreader, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
const sans = Instrument_Sans({subsets:['latin'],variable:'--font-sans'});
const serif = Newsreader({subsets:['latin'],variable:'--font-serif',style:['normal','italic']});
const mono = IBM_Plex_Mono({subsets:['latin'],weight:['400','500'],variable:'--font-mono'});
export const metadata: Metadata = {metadataBase:new URL('https://commerceaiq-website.vercel.app'),alternates:{canonical:'/'},title:'CommerceIQ — Intelligence for better commerce',description:'A proposed AI-powered e-commerce intelligence and decision support system. TED University, SENG 491, Fall 2026. Research, team and project documentation.',openGraph:{title:'CommerceIQ — Intelligence for better commerce',description:'Academic research connecting demand forecasting, inventory planning and profitability.',type:'website',images:[{url:'/opengraph-image',width:1200,height:630}]}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>{children}</body></html>}

