import { ExternalLink } from 'lucide-react'
import { posts } from '../data/site'

export function Posts() {
  return (
    <div className="inner-page">
      <div className="shell page-hero split-hero">
        <div><span className="eyebrow">THINK / POSTS</span><h1>Notes from<br /><em>learning in public.</em></h1></div>
        <p>Long-form writing lives on Substack. This page is the index — what I wrote, when, and why I thought it was worth writing down.</p>
      </div>
      <div className="shell archive-list">
        {posts.map((post, index) => (
          <a key={post.slug} className="article-row" href={post.link || '#'} target={post.link ? '_blank' : undefined} rel={post.link ? 'noreferrer' : undefined}>
            <span className="article-number mono">{String(index + 1).padStart(2, '0')}</span>
            <span className="article-date mono">{post.date}</span>
            <span className="article-main"><span className="article-title">{post.title}</span><span className="article-subject">{post.subject}</span><span className="tag-row">{post.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</span></span>
            <ExternalLink size={17} className="article-icon" />
          </a>
        ))}
      </div>
    </div>
  )
}
