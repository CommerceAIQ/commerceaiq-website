import seo from '../../content/seo.json';
import type { Metadata } from 'next';
import { Instrument_Sans, Newsreader, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
const sans = Instrument_Sans({subsets:['latin'],variable:'--font-sans'});
const serif = Newsreader({subsets:['latin'],variable:'--font-serif',style:['normal','italic']});
const mono = IBM_Plex_Mono({subsets:['latin'],weight:['400','500'],variable:'--font-mono'});
export const metadata: Metadata = {metadataBase:new URL(seo.siteUrl),alternates:{canonical:'/'},title:seo.title,description:seo.description,openGraph:{title:seo.title,description:seo.socialDescription,type:'website',images:[{url:'/opengraph-image',width:1200,height:630}]}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang={seo.language}><body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>{children}</body></html>}

