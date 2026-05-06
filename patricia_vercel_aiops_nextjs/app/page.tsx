import ProjectExplorer from "@/components/ProjectExplorer";
import LeadForm from "@/components/LeadForm";
import { badges, profile, tools } from "@/lib/data";

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="container navInner">
          <div className="logo">{profile.brand}</div>
          <div className="navLinks">
            <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#services">Work With Me</a><a href="#badges">Certifications</a><a href="#experience">Experience</a><a className="navCta" href="#book">Book a Call</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container heroGrid">
          <div className="portraitWrap"><div className="portraitRing" /><img className="portrait" src="/profile.jpeg" alt="Portrait of Patricia Maureen Tamura-Ramos" /></div>
          <div>
            <p className="introKicker">Hello, I'm</p>
            <h1>Patricia Maureen <span className="nameGradient">Tamura-Ramos</span></h1>
            <p className="headline">{profile.headline}</p>
            <p className="lead">I help small businesses, teams, and founders reduce manual work by building AI-powered workflows, dashboards, trackers, and automation systems that keep operations organized and moving.</p>
            <div className="contactChips"><a className="chip" href={`mailto:${profile.email}`}>✉ {profile.email}</a><span className="chip">📍 {profile.location}</span><a className="chip" href={profile.linkedin} target="_blank">in LinkedIn Profile</a><a className="chip" href={profile.credly} target="_blank">🏅 Credly Profile</a></div>
            <div className="heroActions"><a className="button primary" href="#services">Work With Me</a><a className="button" href="#projects">View Projects</a><a className="button" href="/Patricia-Tamura-Resume.pdf" download>Download Resume</a></div>
          </div>
        </div>
      </header>

      <main className="container">
        <section id="about" className="section grid2">
          <div className="panel"><h2 className="sectionTitle"><span>✦</span> About Me</h2><p>I help businesses turn manual processes into automated workflows using AI, no-code tools, and structured operations thinking. From content automation to reporting systems, I design solutions that reduce workload, improve visibility, and help teams move faster.</p><div className="metricRow"><div className="metric"><strong>AI</strong><span>Workflow Design</span></div><div className="metric"><strong>Ops</strong><span>Process Improvement</span></div><div className="metric"><strong>Data</strong><span>Reporting & Insights</span></div></div></div>
          <div className="panel"><h2 className="sectionTitle"><span>◎</span> Client-Focused Highlights</h2><div className="highlightList"><div><span className="check">✓</span><span>Builds end-to-end AI workflows using n8n, Copilot, Google Workspace, and CRM tools</span></div><div><span className="check">✓</span><span>Turns scattered business processes into organized trackers, dashboards, and automated workflows</span></div><div><span className="check">✓</span><span>Designs reporting systems that help clients monitor status, actions, and next steps clearly</span></div><div><span className="check">✓</span><span>Combines corporate operations experience with practical freelance and virtual assistant execution</span></div><div><span className="check">✓</span><span>Keeps human review and approval in place while automating repetitive work</span></div></div></div>
        </section>

        <section id="skills" className="section panel"><h2 className="sectionTitle"><span>⌘</span> Core Competencies</h2><div className="competencies"><div className="comp"><span>🤖</span>AI Automation & Workflow Design</div><div className="comp"><span>⚙</span>Business Process Optimization</div><div className="comp"><span>📊</span>Reporting, Dashboards & Trackers</div><div className="comp"><span>📣</span>CRM, Lead Generation & Client Ops</div><div className="comp"><span>🧠</span>AI Prompting & Agentic Workflows</div><div className="comp"><span>🗂</span>Project & Stakeholder Coordination</div><div className="comp"><span>🌐</span>SEO, Content & Virtual Operations</div></div></section>

        <ProjectExplorer />
        <LeadForm />

        <section id="badges" className="section panel"><h2 className="sectionTitle"><span>✧</span> Certifications & Badges</h2><div className="grid4">{badges.map(badge => <div className="badgeCard" key={badge.title}><a href={badge.link} target="_blank"><img src={badge.image} alt={badge.title} /><h3>{badge.title}</h3></a><p>{badge.issuer}</p><a className="miniBtn" href={badge.link} target="_blank">View Credential ↗</a></div>)}<div className="badgeCard credlyCard"><div><div className="bigIcon">🏅</div><h3>View All My Credentials on Credly</h3><p>Verified certifications, credentials, and achievements.</p><a className="miniBtn" href={profile.credly} target="_blank">View Credly Profile</a></div></div></div></section>

        <section id="experience" className="section grid2">
          <div className="panel"><h2 className="sectionTitle"><span>▣</span> Professional Experience</h2><div className="timeline"><div className="role"><div className="roleDot" /><div><h3>Business Operations Senior Analyst <span>Present</span></h3><p>Client Operations | Global Technology Services</p><ul><li>Partnered with leadership to sustain profitability through workforce deployment and financial alignment.</li><li>Mentored analysts to build dashboards and business reviews.</li><li>Delivered executive-level insights to senior stakeholders.</li></ul></div></div><div className="role"><div className="roleDot" /><div><h3>Business Operations Analyst <span>Jun 2022 - Dec 2024</span></h3><p>Client Operations | Workforce Planning & Forecasting</p><ul><li>Led workforce capacity planning and financial forecasting aligned with profitability and utilization targets.</li><li>Partnered with cross-functional teams to drive operational strategy execution.</li></ul></div></div><div className="role"><div className="roleDot" /><div><h3>Business Operations Associate <span>Jan 2020 - Jun 2022</span></h3><p>Learning Operations | Budget Planning & Risk Review</p><ul><li>Supported training strategy, budget planning, and cost optimization.</li><li>Consolidated multi-source data for executive decision-making.</li></ul></div></div></div></div>
          <div className="panel"><h2 className="sectionTitle"><span>✦</span> Outside / Virtual Experience</h2><div className="timeline"><div className="role"><div className="roleDot" /><div><h3>Virtual Assistant / Data Operations Specialist</h3><p>Managed end-to-end data workflows including research, cleaning, structuring, and validation to support business decisions.</p></div></div><div className="role"><div className="roleDot" /><div><h3>CRM & Lead Generation Specialist</h3><p>Utilized LinkedIn Sales Navigator, PipeDrive, and outreach strategies to generate qualified leads.</p></div></div><div className="role"><div className="roleDot" /><div><h3>SEO & Digital Support</h3><p>Performed keyword research, content optimization, and internal linking strategies to improve visibility and traffic.</p></div></div><div className="role"><div className="roleDot" /><div><h3>Automation & Process Support</h3><p>Built lightweight automation workflows for recurring tasks, reporting, and follow-ups to improve efficiency.</p></div></div><div className="role"><div className="roleDot" /><div><h3>Customer Support & Operations</h3><p>Handled customer inquiries, issue resolution, and support workflows while maintaining service quality.</p></div></div></div></div>
        </section>

        <section className="section grid2"><div className="panel"><h2 className="sectionTitle"><span>⚙</span> Tools & Technologies</h2><div className="toolGrid">{tools.map(tool => <div className="tool" key={tool}><span>•</span>{tool}</div>)}</div></div><div className="panel"><h2 className="sectionTitle"><span>🎓</span> Education & Accomplishments</h2><p><strong>Bachelor of Science in Electronics Engineering</strong><br />AMA Computer College - Cavite | Cum Laude | Licensed Electronics Engineer and Electronics Technician</p><p><strong>Recognition:</strong> Insight Builder Award, Maharlika Best People of the Year, Gantimpala Awards, and multiple leadership commendations.</p></div></section>

        <section className="section panel"><h2 className="sectionTitle"><span>🚀</span> What I Bring to the Table</h2><div className="grid3"><div className="bringCard"><h3>AI + Ops Integration</h3><p>I combine business operations knowledge with automation and AI tools to drive smarter, faster decisions.</p></div><div className="bringCard"><h3>End-to-End Thinking</h3><p>From data to execution — I design solutions that are not just insights, but actionable systems.</p></div><div className="bringCard"><h3>Client-Ready Delivery</h3><p>I build outputs that are executive-ready, scalable, and aligned with business impact.</p></div></div></section>
      </main>

      <section id="contact" className="footerCta"><div className="container footerInner"><div><h2>Ready to simplify your workflow?</h2><div>Send an inquiry or book a consultation so we can identify what can be automated first.</div></div><div className="heroActions"><a className="button" href={`mailto:${profile.email}`}>Email Me</a><a className="button primary" href="#book">Book a Call</a></div></div></section>
      <footer>© 2026 Patricia Maureen Tamura-Ramos • AI Automation & Business Operations Portfolio</footer>
    </>
  );
}
