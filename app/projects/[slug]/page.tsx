import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(item => item.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="container detailPage">
      <Link className="backLink" href="/#projects">← Back to portfolio</Link>
      <section className="panel detailHero">
        <div>
          <span className="label">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="lead">{project.summary}</p>
          <div className="tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
        </div>
        <img src={project.image} alt={project.title} />
      </section>
      <section className="grid3 detailGrid">
        <div className="panel"><h2>Problem</h2><p>{project.problem}</p></div>
        <div className="panel"><h2>Solution</h2><p>{project.solution}</p></div>
        <div className="panel"><h2>Impact</h2><p>{project.impact}</p></div>
      </section>
      <section className="panel"><h2>Workflow</h2><div className="workflow big">{project.workflow.join(" → ")}</div></section>
    </main>
  );
}
