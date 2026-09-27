import { ReactNode } from 'react'

export function SectionHead({ kicker, title, action }: { kicker: string; title: string; action?: ReactNode }) {
  return (
    <div className="section-head">
      <div>
        <span className="eyebrow">{kicker}</span>
        <h2>{title}</h2>
      </div>
      {action}
    </div>
  )
}
