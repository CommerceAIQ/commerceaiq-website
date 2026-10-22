'use client';
import {project} from '@/data/project';
import copy from '../../content/site-text.json';

import navigation from '../../content/navigation.json';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
const links = navigation.links;
export default function Navbar(){const [open,setOpen]=useState(false);return <header className="site-header"><div className="nav-inner"><a className="wordmark" href="#overview" aria-label={navigation.homeLabel}>{project.brand.prefix}<span>{project.brand.accent}</span><i aria-hidden="true"/></a><nav aria-label={navigation.navigationLabel} id="main-nav" className={open?'nav-links open':'nav-links'}>{links.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{label}</a>)}</nav><a className="nav-academic" href="#project-info">{copy.navigation.tedu_seng_491}<ArrowUpRight size={13}/></a><button className="menu-toggle" aria-label={open?navigation.closeMenu:navigation.openMenu} aria-expanded={open} aria-controls="main-nav" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header>}
