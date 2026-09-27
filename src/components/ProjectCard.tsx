import { ArrowUpRight, Github, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Project } from '../data/site'
import { StatusDot } from './StatusDot'
import { PrismArtifact } from './PrismArtifact'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        <PrismArtifact small />
        <div className="project-visual-index">{project.date.slice(0, 4)} / {project.slug.toUpperCase()}</div>
      </div>
      <div className="project-card-body">
        <div className="project-meta">
          <StatusDot status={project.status} />
          <span className="mono">{project.date}</span>
        </div>
        <Link to={`/projects/${project.slug}`} className="project-title">
          {project.title}<ArrowUpRight size={19} />
        </Link>
        <p>{project.description}</p>
        <div className="tag-row">{project.tags.slice(0, 4).map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
        <div className="card-links">
          <Link to={`/projects/${project.slug}`}>VIEW PROJECT <ArrowUpRight size={13} /></Link>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              <ExternalLink size={13} /> LIVE
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              <Github size={13} /> GITHUB
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
