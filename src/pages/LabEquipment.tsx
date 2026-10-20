import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { products } from "../data/siteData";

export default function LabEquipment() {
  return <><PageHero eyebrow="SPECIALIZED LABORATORY EQUIPMENT" title={<>Purpose-built systems for <span className="gradient-text">hands-on engineering.</span></>} description="Configurable laboratory equipment designed around experiments, curricula, and project-specific requirements."/><section className="section"><div className="container equipment-list">{products.map((p,i)=><article className={`equipment-detail ${i%2 ? "reverse":""}`} key={p.id}><div className="equipment-photo"><img src={p.image} alt={p.title}/><span>{p.tag}</span></div><div className="equipment-info"><span className="eyebrow">SYSTEM {p.number}</span><h2>{p.title}</h2><p className="lead">{p.short}</p><p>{p.description}</p><ul className="feature-list">{p.features.map(f=><li key={f}><CheckCircle2 size={17}/>{f}</li>)}</ul><Link className="button button-gradient" to="/contact">Request a Custom Setup <ArrowUpRight size={17}/></Link></div></article>)}</div></section><section className="contact-banner"><div className="container contact-banner-inner"><div><span className="eyebrow">CUSTOM CONFIGURATIONS</span><h2>Need equipment designed around your curriculum?</h2><p>Share your use case and we can discuss a suitable configuration.</p></div><Link className="button button-gradient" to="/contact">Discuss Your Requirements <ArrowUpRight size={17}/></Link></div></section></>;
}
