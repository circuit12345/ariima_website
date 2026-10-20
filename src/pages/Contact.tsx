import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, MessageSquare } from "lucide-react";
import PageHero from "../components/PageHero";

const interests = ["Automotive Car-in-Table Lab","LEO Satellite Ground Station","Custom Linux-Based HIL","Embedded Systems","IoT & Industrial Automation","Robotics & Drone Development","Website Development","Mobile Applications","Technical Training","Custom Laboratory Setup","Other"];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setSent(true);
    form.reset();
  }
  return <><PageHero eyebrow="CONTACT ARIIMA" title={<>Let's build something <span className="gradient-text">meaningful.</span></>} description="Tell us about your laboratory, product, software, or training requirement. We'll use the details to understand the kind of solution you need."/><section className="section"><div className="container contact-layout"><div className="contact-aside"><span className="eyebrow">START A CONVERSATION</span><h2>Have a lab or engineering project in mind?</h2><p>Share your idea, current challenge, or learning goals. We can explore a suitable approach together.</p><div className="contact-info"><span><MapPin/><span><b>Location</b><small>Chennai, India</small></span></span><span><MessageSquare/><span><b>Project enquiries</b><small>Use the enquiry form to describe your requirement.</small></span></span><span><Mail/><span><b>Email</b><small>Add your official contact email before publishing.</small></span></span></div><div className="contact-art"><div className="radar-ring"/><div className="radar-ring ring-two"/><span>IDEA <ArrowUpRight/></span></div></div><form className="contact-form" onSubmit={submit}><h3>Tell us what you're planning</h3><p>Fields marked * are required.</p><div className="form-grid"><label>Full name *<input name="name" placeholder="Your full name" required /></label><label>Organization / Institution<input name="organization" placeholder="Company, college, or organization" /></label><label>Work email *<input name="email" type="email" placeholder="you@example.com" required /></label><label>Phone number<input name="phone" type="tel" placeholder="Optional" /></label><label className="full-field">Area of interest *<select name="interest" required defaultValue=""><option value="" disabled>Select an option</option>{interests.map(i=><option key={i}>{i}</option>)}</select></label><label className="full-field">Project or requirement description *<textarea name="message" rows={5} placeholder="Tell us about your project, goals, or requirements..." required /></label></div>{error && <p className="form-error">{error}</p>}{sent && <div className="success-message"><CheckCircle2/> Form validated locally. Connect a backend or form service to deliver enquiries.</div>}<button className="button button-gradient form-submit" type="submit">Submit Enquiry <ArrowUpRight size={17}/></button><small className="form-note">Demo form: submission is not sent to an email address until a backend or form service is connected.</small></form></div></section></>;
}
