export function StatusDot({ status }: { status: 'active' | 'wip' | 'archived' }) {
  return (
    <span className={`status status-${status}`}>
      <i />
      {status === 'wip' ? 'WIP' : status === 'active' ? 'ACTIVE' : 'ARCHIVED'}
    </span>
  )
}
