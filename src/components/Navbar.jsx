import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [["Home", "#home"], ["Services", "#services"], ["About", "#about"], ["Process", "#process"], ["Portfolio", "#portfolio"], ["Testimonials", "#testimonials"]];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 20); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.classList.toggle("nav-open", open); return () => document.body.classList.remove("nav-open"); }, [open]);
  const href = (hash) => location.pathname === "/" ? hash : `/${hash}`;
  return <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}><div className="nav-shell"><Link className="nav-brand" to="/"><span>N</span><b>NOVO <small>MEDIA</small></b></Link><nav className="nav-links">{links.map(([label,hash]) => <a href={href(hash)} key={label}>{label}</a>)}<Link to="/contact">Contact</Link></nav><Link className="nav-cta" to="/contact">Get Free Strategy Call <i>→</i></Link><button className={`nav-toggle ${open ? "open" : ""}`} onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><i /><i /></button></div><div className={`mobile-menu ${open ? "open" : ""}`}>{links.map(([label,hash]) => <a href={href(hash)} onClick={() => setOpen(false)} key={label}>{label}<span>→</span></a>)}<Link to="/contact" onClick={() => setOpen(false)} className="button button-primary">Get Free Strategy Call →</Link></div></header>;
}
export default Navbar;
