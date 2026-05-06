"use client";
import { useState } from "react";
import { profile } from "@/lib/data";

export default function LeadForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const res = await fetch("/api/inquiry", { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="services" className="section funnel">
      <div className="funnelGrid">
        <div>
          <span className="label">💼 Work With Me</span>
          <h2>Let’s automate your workflow in one call.</h2>
          <p>Have a manual process that takes too much time? I can help map the workflow, identify automation opportunities, and recommend a practical AI/no-code solution.</p>
          <div className="serviceList">
            {["AI workflow automation for repetitive admin or content tasks","Google Sheets / Airtable trackers with automated updates","CRM and lead management workflow support","Power BI / Excel dashboards and reporting systems","Process documentation and operations improvement"].map(item => <div key={item}><span className="check">✓</span><span>{item}</span></div>)}
          </div>
          <div className="calendarBox" id="book">
            <strong>Prefer to talk first?</strong>
            <p>Book a consultation directly through Google Calendar.</p>
            <a className="button green" href={profile.calendar} target="_blank" rel="noreferrer">Book Free Automation Call</a>
            <p className="microcopy">Free 30-min call • No commitment • We’ll map your workflow</p>
          </div>
        </div>
        <form className="leadForm" onSubmit={handleSubmit}>
          <h3>Send an Inquiry</h3>
          <p>Tell me what workflow or process you want to improve.</p>
          <label>Name</label><input name="name" placeholder="Your name" required />
          <label>Email</label><input name="email" type="email" placeholder="your@email.com" required />
          <label>What do you need help with?</label>
          <select name="service">
            <option>AI workflow automation</option><option>Dashboard / reporting system</option><option>CRM or lead management workflow</option><option>Social media content automation</option><option>Operations process improvement</option><option>Not sure yet — I need recommendations</option>
          </select>
          <label>Project Details</label><textarea name="message" placeholder="Briefly describe your current process, tools used, and desired outcome." />
          <div className="formActions"><button className="button primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send Inquiry"}</button><a className="button" href={`mailto:${profile.email}?subject=Automation%20Consultation%20Inquiry`}>Email Directly</a></div>
          {status === "sent" && <small className="success">Inquiry received. Add FORM_ENDPOINT in Vercel to forward leads to your email/CRM.</small>}
          {status === "error" && <small className="error">Something went wrong. Please email me directly.</small>}
          {status === "idle" && <small>App-like feature: this form submits to a Next.js API route. Add a webhook later to forward leads to email or CRM.</small>}
        </form>
      </div>
    </section>
  );
}
