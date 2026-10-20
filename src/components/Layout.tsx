import { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ArrowUpRight, CircuitBoard } from "lucide-react";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Lab Equipment", "/lab-equipment"],
  ["Engineering Services", "/services"],
  ["Courses", "/courses"],
  ["Projects", "/projects"],
  ["Contact", "/contact"]
];

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link className="brand" to="/" onClick={() => setOpen(false)}>
            <span className="brand-mark"><CircuitBoard size={28} /></span>
            <span><b>Ariima</b><small>DeepTech Circle</small></span>
          </Link>
          <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
          <nav className={open ? "main-nav open" : "main-nav"}>
            {nav.map(([label, path]) => (
              <NavLink key={path} to={path} end={path === "/"} onClick={() => setOpen(false)}>{label}</NavLink>
            ))}
            <Link className="button button-small button-gradient nav-cta" to="/contact" onClick={() => setOpen(false)}>Discuss Your Project <ArrowUpRight size={16} /></Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Link className="brand" to="/">
              <span className="brand-mark"><CircuitBoard size={28} /></span>
              <span><b>Ariima</b><small>DeepTech Circle</small></span>
            </Link>
            <p className="footer-intro">Advanced laboratory equipment, engineering solutions, and practical technology education.</p>
          </div>
          <div><h4>Explore</h4><Link to="/about">About Ariima</Link><Link to="/lab-equipment">Lab Equipment</Link><Link to="/projects">Projects</Link></div>
          <div><h4>Capabilities</h4><Link to="/services">Engineering Services</Link><Link to="/courses">Courses & Workshops</Link><Link to="/contact">Plan a Laboratory</Link></div>
          <div><h4>Start a conversation</h4><p>Have a lab or engineering project in mind?</p><Link className="text-link" to="/contact">Tell us about it <ArrowUpRight size={15} /></Link></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Ariima DeepTech Circle</span><span>Engineering Tomorrow. Building What’s Next.</span></div>
      </footer>
    </>
  );
}
