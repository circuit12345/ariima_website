import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import ServiceIcon from "../components/ServiceIcon";
import { services } from "../data/siteData";

export default function Services() {
  return <><PageHero eyebrow="ENGINEERING SERVICES" title={<>From concept to <span className="gradient-text">working solutions.</span></>} description="Flexible engineering and digital development services for institutions, product teams, and industry."/><section className="section"><div className="container"><SectionTitle eyebrow="OUR CAPABILITIES" title="One partner for connected technologies" description="Combine hardware, firmware, software, and learning experiences around the needs of your project."/><div className="service-grid service-grid-large">{services.map(s=><article className="service-card" key={s.title}><ServiceIcon name={s.icon as "cpu"}/><h3>{s.title}</h3><p>{s.description}</p><Link className="text-link" to="/contact">Discuss this service <ArrowUpRight size={16}/></Link></article>)}</div></div></section><section className="section section-services"><div className="container"><SectionTitle eyebrow="HOW WE WORK" title="A practical, collaborative process"/><div className="process-grid">{["Discover the requirement","Define the architecture","Build and integrate","Test and refine","Handover and support"].map((s,i)=><div className="process-step" key={s}><span>0{i+1}</span><b>{s}</b></div>)}</div></div></section><section className="contact-banner"><div className="container contact-banner-inner"><div><h2>Have a specific engineering challenge?</h2><p>Let's define the scope and find the right path forward.</p></div><Link className="button button-gradient" to="/contact">Discuss Your Project <ArrowUpRight size={17}/></Link></div></section></>;
}
