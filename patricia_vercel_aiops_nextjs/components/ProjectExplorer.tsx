"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function ProjectExplorer() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  const visible = useMemo(() => filter === "All" ? projects : projects.filter(p => p.category === filter), [filter]);
  const featured = visible.find(p => p.featured);
  const regular = visible.filter(p => !p.featured);

  return (
    <section id="projects" className="section panel">
      <div className="sectionHeader">
        <h2><span>▣</span> Featured Projects & Solutions</h2>
        <div className="filterBar">
          {categories.map(cat => <button key={cat} className={filter === cat ? "active" : ""} onClick={() => setFilter(cat)}>{cat}</button>)}
        </div>
      </div>
      <div className="projectGrid">
        {featured && (
          <article className="projectCard featuredCase">
            <img src={featured.image} alt={featured.title} />
            <div className="projectBody">
              <span className="label">⭐ Featured Case Study</span>
              <h3>{featured.title}</h3>
              <p>{featured.summary}</p>
              <div className="caseColumns">
                <div className="miniPanel"><strong>Problem</strong><p>{featured.problem}</p></div>
                <div className="miniPanel"><strong>Solution</strong><p>{featured.solution}</p></div>
                <div className="miniPanel"><strong>Impact</strong><p>{featured.impact}</p></div>
                <div className="miniPanel"><strong>Business Value</strong><p>Useful for small business owners, VAs, freelancers, and social media managers needing a lightweight content system.</p></div>
              </div>
              <div className="workflow">{featured.workflow.join(" → ")}</div>
              <div className="tags">{featured.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
              <Link className="miniBtn" href={`/projects/${featured.slug}`}>View case study →</Link>
            </div>
          </article>
        )}
        {regular.map(project => (
          <article className="projectCard" key={project.slug}>
            <img src={project.image} alt={project.title} />
            <div className="projectBody">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
              <Link className="miniBtn" href={`/projects/${project.slug}`}>Details →</Link>
            </div>
          </article>
        ))}
      </div>
      <div className="privacyNote">*All internal project screenshots are generalized and sanitized to protect confidentiality.</div>
    </section>
  );
}
