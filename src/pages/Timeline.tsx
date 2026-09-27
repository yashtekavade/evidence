import { ArrowDown, ArrowRight } from 'lucide-react'
import { timeline } from '../data/site'

export function Timeline() {
  return (
    <div className="timeline-page">
      <section className="shell timeline-hero-new">
        <div className="timeline-title-block">
          <span className="eyebrow">JUNE 2025 → SEPTEMBER 2026</span>
          <h1>Not a résumé.<br /><em>A record of becoming.</em></h1>
        </div>
        <div className="timeline-intro-new">
          <p>What I worked on. What I learned. What I built. And, most importantly, what each phase taught me to look for next.</p>
          <div className="timeline-counter"><strong>{String(timeline.length).padStart(2, '0')}</strong><span>chapters<br />documented</span></div>
        </div>
      </section>

      <section className="shell timeline-track-new">
        {timeline.map((item, index) => (
          <article className="timeline-chapter" key={item.date}>
            <div className="chapter-marker"><span>{String(index + 1).padStart(2, '0')}</span><i /></div>
            <div className="chapter-content">
              <div className="chapter-top"><span className="eyebrow">{item.period}</span><span className="mono">{item.date}</span></div>
              <div className="chapter-head">
                <span className="chapter-eyebrow">{item.eyebrow}</span>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
              </div>
              <div className="chapter-columns">
                <div><span className="column-label">LEARNED</span>{item.learned.map((line) => <div className="chapter-line" key={line}>{line}</div>)}</div>
                <div><span className="column-label">BUILT / EXPLORED</span>{item.built.map((line) => <div className="chapter-line" key={line}>{line}</div>)}</div>
              </div>
              <div className="tag-row chapter-tags">{item.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
              {index < timeline.length - 1 && <div className="chapter-next"><ArrowDown size={13} /> then came the next problem</div>}
            </div>
          </article>
        ))}
      </section>

      <section className="timeline-statement">
        <div className="shell statement-end-grid">
          <span className="eyebrow">THE RULE</span>
          <h2>Don't chase the stack.<br /><em>Follow the problem.</em></h2>
          <p>The tools changed. The pattern didn't: learn what the work demands, build something with it, then document the useful parts.</p>
          <ArrowRight size={25} />
        </div>
      </section>
    </div>
  )
}
