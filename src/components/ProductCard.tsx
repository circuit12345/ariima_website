import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/siteData";

export default function ProductCard({ product }: { product: typeof products[number] }) {
  return <article className="product-card">
    <div className="product-image"><img src={product.image} alt={product.title} loading="lazy" /><span className="product-number">{product.number}</span><span className="product-tag">{product.tag}</span></div>
    <div className="product-body"><h3>{product.title}</h3><p>{product.short}</p><ul>{product.features.slice(0, 4).map(f => <li key={f}><CheckCircle2 size={15} />{f}</li>)}</ul><Link className="text-link" to="/lab-equipment">Explore system <ArrowUpRight size={16} /></Link></div>
  </article>;
}
