'use client';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
const links=[['Overview','overview'],['Research','research'],['Approach','approach'],['Team','team'],['Documents','documents']];
export default function Navbar(){const [open,setOpen]=useState(false);return <header className="site-header"><div className="nav-inner"><a className="wordmark" href="#overview" aria-label="CommerceIQ home">Commerce<span>IQ</span><i aria-hidden="true"/></a><nav aria-label="Main navigation" id="main-nav" className={open?'nav-links open':'nav-links'}>{links.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{label}</a>)}</nav><a className="nav-academic" href="#project-info">TEDU / SENG 491 <ArrowUpRight size={13}/></a><button className="menu-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="main-nav" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header>}
