import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import { projects } from "../data/siteData";

const filters = ["All", ...Array.from(new Set(projects.map(p=>p.category)))];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = useMemo(()=>filter==="All" ? projects : projects.filter(p=>p.category===filter),[filter]);
  return <><PageHero eyebrow="PROJECTS & EXPERIENCE" title={<>Real projects. <span className="gradient-text">Practical impact.</span></>} description="A selection of laboratory setups, workshops, and technology activities reflected in our experience and reference portfolio."/><section className="section"><div className="container"><div className="filter-row" role="group" aria-label="Filter projects">{filters.map(f=><button key={f} className={filter===f?"filter-chip active":"filter-chip"} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="project-grid">{visible.map(p=><article className="project-card" key={p.title}><div className="project-image"><img src={p.image} alt={p.title} loading="lazy"/></div><div className="project-card-copy"><span className="eyebrow">{p.category}</span><h3>{p.title}</h3><p>{p.description}</p></div></article>)}</div><p className="disclaimer">Portfolio imagery and descriptions should be reviewed and replaced with verified project photographs and details before publication.</p></div></section></>;
}
