import { Bot, Code2, Cpu, Network, Smartphone, Terminal } from "lucide-react";
const icons = { cpu: Cpu, network: Network, bot: Bot, code: Code2, smartphone: Smartphone, terminal: Terminal };
export default function ServiceIcon({ name }: { name: keyof typeof icons }) {
  const Icon = icons[name] || Cpu;
  return <span className="service-icon"><Icon size={23} /></span>;
}
