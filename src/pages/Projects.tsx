import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/site'
import { ProjectCard } from '../components/ProjectCard'

const tags = ['all', 'data-engineering', 'aws', 'python', 'web', 'ai', 'automation', 'power-bi', 'systems']

export function Projects() {
  const [active, setActive] = useState('all')
  const filtered = useMemo(() => active === 'all'
    ? projects
    : projects.filter((p) => p.tags.includes(active) || (active === 'data-engineering' && ['etl', 'airflow', 'spark'].some((t) => p.tags.includes(t))) || (active === 'automation' && p.tags.includes('vba'))), [active])

  return (
    <div className="inner-page">
      <div className="shell page-hero compact-hero">
        <div>
          <span className="eyebrow">WORK / PROJECTS</span>
          <h1>Built things.<br /><em>Learned things.</em></h1>
        </div>
        <p>A working archive of real builds, experiments, and older artifacts that explain how the path got here.</p>
      </div>
      <div className="shell filter-wrap">
        <div className="filter-bar">{tags.map((tag) => <button key={tag} className={active === tag ? 'filter is-active' : 'filter'} onClick={() => setActive(tag)}>{tag}</button>)}</div>
      </div>
      <div className="shell project-grid archive-grid">{filtered.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      <div className="shell archive-footer"><span className="mono">{String(filtered.length).padStart(2, '0')} PROJECTS IN VIEW</span><Link className="line-link" to="/work">SEE THE PROFESSIONAL JOURNEY <ArrowRight size={14} /></Link></div>
    </div>
  )
}
