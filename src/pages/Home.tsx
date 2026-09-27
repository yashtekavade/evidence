import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { posts, profile, projects, stack, timeline } from '../data/site'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHead } from '../components/SectionHead'
import { PrismScene } from '../components/PrismScene'
import '../vivid-motion.css'

const heroWords = [
  'Data.',
  'Automation.',
  'AI.',
  'Products.',
]

export function Home() {
  const [heroScene, setHeroScene] = useState(0)

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('.motion-hero')
    if (!hero) return undefined

    let raf = 0
    const update = () => {
      const rect = hero.getBoundingClientRect()
      const travel = Math.max(hero.offsetHeight - window.innerHeight, 1)
      const progress = Math.min(1, Math.max(0, -rect.top / travel))
      const nextScene = Math.min(3, Math.floor(progress * 4))
      setHeroScene(nextScene)
      raf = 0
    }

    const onScroll = () => {
      if (raf === 0) raf = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  const featured = projects.filter((p) => p.featured).slice(0, 3)
  const latest = posts.slice(0, 4)
  const current = timeline[timeline.length - 1]!

  return (
    <div className="vivid-home">
      <section className="motion-hero" data-scene={heroScene}>
        <div className="motion-hero-sticky">
          <div className="motion-aura motion-aura-left" />
          <div className="motion-aura motion-aura-right" />
          <div className="motion-ring motion-ring-one" />
          <div className="motion-ring motion-ring-two" />
          <PrismScene />

          <div className="motion-copy motion-copy-intro">
            <span className="motion-eyebrow">YASHVARDHAN TEKAVADE</span>
            <h1>
              I build
              <br />
              <span>systems.</span>
            </h1>
            <p>
              Data engineering, automation, applied AI and software — following the problem until something useful exists.
            </p>
          </div>

          <div className="motion-copy motion-copy-build">
            <span className="motion-eyebrow">THE WORK CHANGES. THE CURIOSITY DOESN'T.</span>
            <h2>
              From pipelines
              <br />
              <span>to products.</span>
            </h2>
            <p>One problem leads to another. One tool opens the next door.</p>
          </div>

          <div className="motion-copy motion-copy-transition">
            <span className="motion-eyebrow">WORK / LEARN / BUILD / REPEAT</span>
            <h2>Make the<br /><span>next thing.</span></h2>
            <p>Projects, notes and experiments are the visible trail. The real work is the learning between them.</p>
          </div>

          <div className="motion-copy motion-copy-philosophy">
            <span className="motion-eyebrow">MY APPROACH</span>
            <h2>
              Follow the
              <br />
              <span>problem.</span>
            </h2>
            <p>
              I don't want a stack to define the work. I want the work to tell me what to learn next.
            </p>
          </div>

          <div className="motion-hero-footer">
            <Link className="motion-link" to="/projects">EXPLORE THE WORK <ArrowRight size={14} /></Link>
            <Link className="motion-scroll" to="/work">
              <span>FOLLOW THE JOURNEY</span>
              <ArrowDown size={14} />
            </Link>
            <span className="motion-now"><i /> CURRENTLY · {current.period}</span>
          </div>

          <div className="motion-wordline" aria-hidden="true">
            {heroWords.map((word) => <span key={word}>{word}</span>)}
          </div>
        </div>
      </section>

      <section className="vivid-strip" aria-label="Technology stack">
        <div className="vivid-strip-track">
          {[...stack, ...stack].map((item, index) => (
            <span key={`${item}-${index}`}>{item}<b>+</b></span>
          ))}
        </div>
      </section>

      <section className="section shell vivid-section">
        <SectionHead
          kicker="01 / PERSONAL BUILDS"
          title="Things I build outside the job."
          action={<Link className="line-link" to="/projects">VIEW ALL BUILDS <ArrowUpRight size={14} /></Link>}
        />
        <div className="project-grid featured-grid vivid-work-grid">
          {featured.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>

      <section className="vivid-statement vivid-statement-motion">
        <div className="shell vivid-statement-grid">
          <span className="vivid-meta">02 / HOW I WORK</span>
          <div>
            <p className="vivid-statement-lede">The tools keep changing. The way I think about the work is getting clearer.</p>
            <h2>I follow problems,<br /><span>not stacks.</span></h2>
          </div>
          <p className="vivid-statement-copy">From production pipelines to business automation, dashboards, agents, and user-facing products — I keep moving toward the point where engineering meets something another person can actually use.</p>
          <Link className="line-link" to="/about">READ THE LONG VERSION <ArrowUpRight size={14} /></Link>
        </div>
      </section>

      <section className="section shell vivid-section">
        <SectionHead
          kicker="03 / WRITING"
          title="Notes from the workbench."
          action={<Link className="line-link" to="/posts">READ ALL <ArrowUpRight size={14} /></Link>}
        />
        <div className="post-list vivid-post-list">
          {latest.map((post, index) => (
            <a
              className="post-row"
              href={post.link || `/posts#${post.slug}`}
              target={post.link ? '_blank' : undefined}
              rel={post.link ? 'noreferrer' : undefined}
              key={post.slug}
            >
              <span className="post-index mono">0{index + 1}</span>
              <span className="post-date mono">{post.date}</span>
              <span className="post-copy"><strong>{post.title}</strong><span>{post.subject}</span></span>
              <ArrowUpRight className="post-arrow" size={18} />
            </a>
          ))}
        </div>
      </section>

      <section className="vivid-journey vivid-journey-motion">
        <div className="shell vivid-journey-grid">
          <div>
            <span className="vivid-meta">04 / PROFESSIONAL JOURNEY</span>
            <h2>June 2025<br /><span>→ September 2026</span></h2>
            <p>A compact record of the professional problems, systems and domains that have shaped how I work.</p>
            <Link className="vivid-outline" to="/work">OPEN PROFESSIONAL JOURNEY <ArrowRight size={14} /></Link>
          </div>
          <div className="vivid-journey-art" aria-hidden="true">
            <PrismScene small />
          </div>
        </div>
      </section>

      <section className="section shell vivid-section">
        <SectionHead kicker="05 / WORKING VOCABULARY" title="The stack, as I actually use it." />
        <div className="vivid-stack-cloud">
          {stack.map((item, index) => <span key={item} className={`cloud-word cloud-${index % 6}`}>{item}</span>)}
        </div>
      </section>

      <section className="vivid-contact">
        <div className="shell vivid-contact-inner">
          <span className="vivid-meta">06 / NEXT</span>
          <h2>Have a problem worth<br /><span>figuring out?</span></h2>
          <a href={`mailto:${profile.email}`} className="vivid-contact-link">LET'S TALK <ArrowUpRight size={21} /></a>
        </div>
      </section>
    </div>
  )
}
