import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/site'
import { StatusDot } from '../components/StatusDot'
import { PrismArtifact } from '../components/PrismArtifact'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  if (!project) return <div className="shell not-found"><span className="eyebrow">404 / PROJECT</span><h1>Project not found.</h1><Link className="line-link" to="/projects">BACK TO WORK <ArrowUpRight size={14} /></Link></div>

  return (
    <article className="project-detail-new">
      <div className="shell detail-hero-new">
        <Link className="back-link" to="/projects"><ArrowLeft size={14} /> ALL PROJECTS</Link>
        <div className="detail-art"><PrismArtifact /></div>
        <div className="detail-meta-new"><StatusDot status={project.status} /><span className="mono">{project.date}</span></div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <div className="tag-row detail-tags-new">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
        <div className="detail-actions-new">{project.github && <a className="outline-link" href={project.github} target="_blank" rel="noreferrer"><Github size={14} /> GITHUB</a>}{project.live && <a className="line-link" href={project.live} target="_blank" rel="noreferrer">LIVE PROJECT <ArrowUpRight size={14} /></a>}</div>
      </div>
      <div className="shell detail-body-new">
        <div className="detail-copy-new"><span className="eyebrow">THE BUILD</span>{project.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
        <aside className="detail-aside-new"><span className="eyebrow">PROJECT SIGNAL</span><div><span>STATUS</span><strong>{project.status}</strong></div><div><span>STACK</span><strong>{project.tags.join(' · ')}</strong></div><div><span>BUILT</span><strong>{new Date(project.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</strong></div></aside>
      </div>
    </article>
  )
}
