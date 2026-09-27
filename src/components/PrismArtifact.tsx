export function PrismArtifact({ small = false }: { small?: boolean }) {
  return (
    <div className={small ? 'prism prism-small' : 'prism'} aria-hidden="true">
      <div className="prism-aura prism-aura-red" />
      <div className="prism-aura prism-aura-blue" />
      <div className="prism-aura prism-aura-green" />
      <div className="prism-haze prism-haze-one" />
      <div className="prism-haze prism-haze-two" />
      <div className="prism-ring prism-ring-one" />
      <div className="prism-ring prism-ring-two" />
      <div className="prism-cube cube-one">
        <span className="cube-edge edge-red" />
        <span className="cube-edge edge-blue" />
        <span className="cube-edge edge-white" />
        <span className="cube-core" />
      </div>
      <div className="prism-cube cube-two">
        <span className="cube-edge edge-green" />
        <span className="cube-edge edge-blue" />
        <span className="cube-edge edge-white" />
        <span className="cube-core" />
      </div>
      <div className="prism-cube cube-three">
        <span className="cube-edge edge-red" />
        <span className="cube-edge edge-green" />
        <span className="cube-edge edge-white" />
        <span className="cube-core" />
      </div>
      <div className="prism-cube cube-four">
        <span className="cube-edge edge-blue" />
        <span className="cube-edge edge-green" />
        <span className="cube-edge edge-white" />
        <span className="cube-core" />
      </div>
      <div className="prism-cube cube-five">
        <span className="cube-edge edge-red" />
        <span className="cube-edge edge-blue" />
        <span className="cube-edge edge-white" />
        <span className="cube-core" />
      </div>
      <div className="prism-glint glint-one" />
      <div className="prism-glint glint-two" />
      <div className="prism-glint glint-three" />
    </div>
  )
}
