import { ArrowRight, ArrowUpRight, FlaskConical, GraduationCap, Settings2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import ServiceIcon from "../components/ServiceIcon";
import { products, services, projects } from "../data/siteData";

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-grid" />
      <div className="container hero-layout">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
          <span className="eyebrow"><span className="eyebrow-dot" /> ENGINEERING · RESEARCH · TECHNOLOGY EDUCATION</span>
          <h1>Engineering Tomorrow.<br />Building <span className="gradient-text">What’s Next.</span></h1>
          <p>Ariima DeepTech Circle designs advanced laboratory equipment, custom engineering systems, and hands-on learning experiences that connect academic knowledge with real-world technology.</p>
          <div className="hero-actions"><Link className="button button-gradient" to="/lab-equipment">Explore Our Capabilities <ArrowRight size={17} /></Link><Link className="button button-outline" to="/contact">Discuss Your Project</Link></div>
          <div className="hero-pills"><span><FlaskConical /> Laboratory Equipment</span><span><Settings2 /> Engineering Solutions</span><span><GraduationCap /> Technology Education</span></div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }}>
          <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=90" alt="Advanced engineering laboratory equipment" />
          <div className="visual-glow" />
          <div className="floating-label label-top"><span className="status-dot" /> ENGINEERING SYSTEMS <b>ACTIVE</b></div>
          <div className="floating-label label-bottom"><span className="mini-icon"><Sparkles size={17}/></span><span><b>Built around your needs</b><small>Custom equipment · Integrated systems</small></span></div>
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
        </motion.div>
      </div>
    </section>

    <section className="section section-products"><div className="container"><SectionTitle eyebrow="FEATURED LABORATORY EQUIPMENT" title="Specialized technology. Practical learning." description="Advanced laboratory systems designed for hands-on experimentation and real-world understanding." /><div className="product-grid">{products.map(p => <ProductCard key={p.id} product={p} />)}</div><div className="section-action"><Link className="button button-outline" to="/lab-equipment">Explore All Equipment <ArrowUpRight size={16}/></Link></div></div></section>

    <section className="section section-services"><div className="container"><div className="split-heading"><SectionTitle eyebrow="ENGINEERING SERVICES" title="From concept to real-world solutions" description="A flexible range of engineering and development capabilities tailored to academic and industrial needs."/><Link className="text-link" to="/services">View all services <ArrowUpRight size={16}/></Link></div><div className="service-grid">{services.map(s => <article className="service-card" key={s.title}><ServiceIcon name={s.icon as "cpu"} /><h3>{s.title}</h3><p>{s.description}</p><Link to="/services" aria-label={`Explore ${s.title}`} className="card-arrow"><ArrowUpRight size={18}/></Link></article>)}</div></div></section>

    <section className="section learning-band"><div className="container learning-layout"><div><span className="eyebrow">TRAINING & TECHNICAL EDUCATION</span><h2>Learn by building.<br/><span className="gradient-text">Understand by doing.</span></h2><p>Practical, project-oriented learning experiences designed to help students and professionals work with real technologies.</p><Link className="button button-gradient" to="/courses">Explore Courses <ArrowRight size={17}/></Link></div><div className="learning-image"><img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85" alt="Students learning technology" loading="lazy"/><div className="image-caption"><GraduationCap/><span><b>Hands-on learning</b><small>Courses · Workshops · Project mentoring</small></span></div></div></div></section>

    <section className="section"><div className="container"><div className="split-heading"><SectionTitle eyebrow="PROJECTS & EXPERIENCE" title="Real projects. Practical impact." description="Laboratory setups, workshops, and engineering activities grounded in practical implementation."/><Link className="text-link" to="/projects">Explore projects <ArrowUpRight size={16}/></Link></div><div className="project-preview">{projects.slice(0,3).map(p=><article className="project-tile" key={p.title}><img src={p.image} alt={p.title} loading="lazy"/><div><span className="eyebrow">{p.category}</span><h3>{p.title}</h3><p>{p.description}</p></div></article>)}</div></div></section>

    <section className="contact-banner"><div className="container contact-banner-inner"><div><span className="eyebrow">LET'S BUILD SOMETHING MEANINGFUL</span><h2>Have a lab or engineering project in mind?</h2><p>Tell us what you want to build. Let's explore the right solution together.</p></div><Link className="button button-gradient" to="/contact">Start a Conversation <ArrowUpRight size={17}/></Link></div></section>
  </>;
}
