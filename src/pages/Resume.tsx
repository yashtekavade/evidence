import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile, experiences, stack } from '../data/site'

export function Resume() {
  return (
    <div className="inner-page">
      <div className="shell page-hero split-hero resume-hero">
        <div><span className="eyebrow">RESUME</span><h1>{profile.name}</h1><p>{profile.role}</p></div>
        <a className="outline-link" href={profile.resume}>OPEN / RESUME PDF <ArrowUpRight size={14} /></a>
      </div>
      <div className="shell resume-paper">
        <div className="resume-paper-head"><div><strong>{profile.name}</strong><span>{profile.role}</span></div><div><span>{profile.location}</span><span>{profile.email}</span></div></div>
        <div className="resume-section-new"><span className="eyebrow">EXPERIENCE</span>{experiences.map((x) => <div className="resume-row-new" key={x.role}><div><strong>{x.role}</strong><span>{x.org}</span></div><p>{x.detail}</p></div>)}</div>
        <div className="resume-section-new"><span className="eyebrow">SKILLS</span><div className="resume-skills-new">{stack.map((x) => <span key={x}>{x}</span>)}</div></div>
        <div className="resume-note-new"><span>Latest résumé belongs at</span><code>public/resume.pdf</code></div>
      </div>
      <div className="shell resume-bottom"><Link className="line-link" to="/about">BACK TO ABOUT <ArrowUpRight size={14} /></Link></div>
    </div>
  )
}
