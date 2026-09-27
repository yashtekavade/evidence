import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { profile } from '../data/site'

const links = [
  ['WORK', '/work'],
  ['BUILDS', '/projects'],
  ['WRITING', '/posts'],
  ['ABOUT', '/about'],
]

export function Topbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="vivid-topbar">
      <div className="nav-frame vivid-nav-frame">
        <Link className="vivid-wordmark" to="/" onClick={() => setOpen(false)} aria-label="Yashvardhan Tekavade home">
          YASHVARDHAN
        </Link>

        <nav className={open ? 'vivid-nav is-open' : 'vivid-nav'} aria-label="Primary navigation">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
          <a href={profile.github} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            GITHUB <ArrowUpRight size={13} />
          </a>
        </nav>

        <div className="vivid-nav-actions">
          <a className="vivid-contact-button" href={`mailto:${profile.email}`}>CONTACT</a>
          <button className="vivid-menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((value) => !value)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  )
}
