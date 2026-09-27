import { ArrowUpRight, Mail } from 'lucide-react'
import { profile, stack, experiences } from '../data/site'
import { PrismArtifact } from '../components/PrismArtifact'

export function About() {
  return (
    <div className="inner-page about-page-new">
      <section className="shell about-hero-new">
        <div className="about-art"><PrismArtifact small /></div>
        <div>
          <span className="eyebrow">ABOUT</span>
          <h1>{profile.name}</h1>
          <p>{profile.role}. I work where data engineering, automation, applied AI, and software start to overlap.</p>
        </div>
      </section>
      <section className="shell about-grid-new">
        <div className="about-long">
          <span className="eyebrow">THE LONG VERSION</span>
          <p>I started with computer science, found my way into data engineering, and then kept moving toward the places where data becomes a product, a decision, or a useful workflow.</p>
          <p>That has meant production pipelines, Spark, cloud services, business automation, AI workflows, and increasingly user-facing applications. I like problems where the first solution is messy and the interesting work is figuring out what the system should actually look like.</p>
          <p>This website exists because I want a record of that progression — not just a list of technologies, but evidence of how I learned to use them.</p>
          <div className="inline-actions"><a className="line-link" href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={14} /></a><a className="line-link" href={`mailto:${profile.email}`}>EMAIL <Mail size={14} /></a></div>
        </div>
        <aside className="about-side-new">
          <div className="info-block-new"><span className="eyebrow">EDUCATION</span><strong>MIT World Peace University</strong><span>B.Tech, Computer Science</span></div>
          <div className="info-block-new"><span className="eyebrow">EXPERIENCE</span>{experiences.map((x) => <div className="experience-row-new" key={x.role}><strong>{x.role}</strong><span>{x.org}</span></div>)}</div>
          <div className="info-block-new"><span className="eyebrow">TOOLS I USE</span><div className="tag-row">{stack.map((x) => <span className="tag" key={x}>{x}</span>)}</div></div>
        </aside>
      </section>
    </div>
  )
}
