import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-frame">
        <div className="footer-top">
          <div>
            <span className="eyebrow">LET'S KEEP BUILDING</span>
            <h2>One problem at a time.</h2>
          </div>
          <a className="footer-contact" href={`mailto:${profile.email}`}>
            {profile.email} <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="footer-grid">
          <div className="footer-copy">Professional work, personal builds, and the notes connecting the two.</div>
          <div className="footer-links">
            <Link to="/work">Work</Link>
            <Link to="/projects">Builds</Link>
            <Link to="/posts">Writing</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="footer-links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
            <a href={profile.substack} target="_blank" rel="noreferrer">Substack <ArrowUpRight size={13} /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Yashvardhan Tekavade</span>
          <span>REACT / VITE / STATIC FRONTEND</span>
        </div>
      </div>
    </footer>
  )
}
