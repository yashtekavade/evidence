import { Link } from 'react-router-dom'
export function NotFound() { return <div className="shell not-found"><span className="eyebrow">404 / NOT FOUND</span><h1>That page left the pipeline.</h1><p>Nothing is here yet. Start back at the homepage.</p><Link className="outline-link" to="/">BACK HOME</Link></div> }
