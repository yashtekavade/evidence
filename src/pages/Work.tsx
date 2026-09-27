import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { timeline } from '../data/site'

export function Work() {
  return (
    <div className="work-page">
      <section className="work-hero shell">
        <div className="work-hero-copy">
          <span className="eyebrow">PROFESSIONAL JOURNEY · JUN 2025 → SEP 2026</span>
          <h1>What I was trusted<br /><em>to work on.</em></h1>
          <p>
            A compact record of the problems, systems and domains I moved through professionally — from data engineering to AI-assisted engineering.
          </p>
        </div>
        <div className="work-hero-note">
          <span className="mono">NOT A SKILL LIST</span>
          <strong>{String(timeline.length).padStart(2, '0')}</strong>
          <span>chapters of work</span>
        </div>
      </section>

      <section className="work-intro-band">
        <div className="shell work-intro-grid">
          <span className="vivid-meta">THE THROUGH-LINE</span>
          <p>
            The tools changed quickly. The work kept pulling me toward bigger systems: first moving data, then making sense of it, then automating people-heavy workflows, and now exploring how AI can help understand and modify those systems faster.
          </p>
        </div>
      </section>

      <section className="shell work-journey">
        <div className="work-journey-line" aria-hidden="true" />
        {timeline.map((item, index) => (
          <article className="work-chapter" key={item.date}>
            <div className="work-marker">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <i />
            </div>
            <div className="work-chapter-main">
              <div className="work-chapter-top">
                <span className="eyebrow">{item.period}</span>
                <span className="mono">{item.date}</span>
              </div>
              <div className="work-chapter-title">
                <span>{item.eyebrow}</span>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
              </div>
              <div className="work-chapter-detail">
                <div>
                  <span className="column-label">WHAT I LEARNED</span>
                  {item.learned.map((line) => <div className="work-detail-line" key={line}>{line}</div>)}
                </div>
                <div>
                  <span className="column-label">WHAT I WORKED ON</span>
                  {item.built.map((line) => <div className="work-detail-line" key={line}>{line}</div>)}
                </div>
              </div>
              <div className="tag-row work-tags">
                {item.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}
              </div>
              {index < timeline.length - 1 && (
                <div className="work-next"><ArrowDown size={13} /> next problem</div>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="work-proof">
        <div className="shell work-proof-grid">
          <span className="vivid-meta">WHAT THIS SAYS</span>
          <h2>I don't want a stack<br /><em>to define me.</em></h2>
          <p>
            I want the ability to enter a new problem, understand what it demands, learn quickly, and turn that learning into something another person can use.
          </p>
          <Link className="line-link" to="/projects">SEE WHAT I BUILD OUTSIDE WORK <ArrowUpRight size={14} /></Link>
        </div>
      </section>
    </div>
  )
}
