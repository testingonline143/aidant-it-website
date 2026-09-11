"use client";
import { useEffect, useState } from "react";
export default function Header({ onMenuClick, open = false }) {
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>40);window.addEventListener("scroll",onScroll);return()=>window.removeEventListener("scroll",onScroll)},[]);
  return <header id="siteHeader" className={scrolled?"scrolled":""}><a href="/" className="logo">AIDANT<span>·</span>IT</a><button className="menu-btn" id="navToggle" aria-expanded={open} aria-controls="sidePanel" onClick={onMenuClick}><span className="mtext">Menu</span><span className="bars"><span></span><span></span><span></span></span></button></header>;
}
