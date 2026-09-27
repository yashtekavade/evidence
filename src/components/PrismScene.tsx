import { useEffect, useRef } from 'react'
import * as THREE from 'three'

type PrismSceneProps = {
  small?: boolean
}

function makeCube(material: THREE.Material, size = 1) {
  const group = new THREE.Group()
  const geometry = new THREE.BoxGeometry(size, size, size)
  const mesh = new THREE.Mesh(geometry, material)
  group.add(mesh)

  const edges = new THREE.EdgesGeometry(geometry, 25)

  const white = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: 0xfffdf9, transparent: true, opacity: 0.92 })
  )
  group.add(white)

  const red = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: 0xff2a2a, transparent: true, opacity: 0.85 })
  )
  red.position.x = 0.018
  red.position.z = -0.018
  group.add(red)

  const blue = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: 0x2a7fff, transparent: true, opacity: 0.82 })
  )
  blue.position.x = -0.018
  blue.position.z = 0.018
  group.add(blue)

  const green = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: 0x2aff2a, transparent: true, opacity: 0.62 })
  )
  green.position.x = 0.014
  green.position.y = -0.012
  group.add(green)

  const inner = new THREE.Mesh(
    new THREE.BoxGeometry(size * 0.74, size * 0.74, size * 0.74),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.18 })
  )
  group.add(inner)

  return group
}

export function PrismScene({ small = false }: PrismSceneProps) {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x101010, 0.036)

    const camera = new THREE.PerspectiveCamera(27, 1, 0.1, 100)
    camera.position.set(0, 0, 8.4)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.22
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const root = new THREE.Group()
    root.rotation.set(-0.13, 0.24, 0.18)
    scene.add(root)

    const glass = new THREE.MeshPhysicalMaterial({
      color: 0x12151a,
      metalness: 0.15,
      roughness: 0.16,
      transmission: 0.12,
      transparent: true,
      opacity: 0.5,
      clearcoat: 0.85,
      clearcoatRoughness: 0.12,
    })

    const cubeSize = small ? 0.58 : 1.02
    const cubes = Array.from({ length: 5 }, () => makeCube(glass, cubeSize))
    cubes.forEach((cube) => root.add(cube))

    const diagonal = [
      [-1.0, 1.1, 0],
      [0.0, 0.52, 0],
      [0.45, -0.16, 0],
      [0.9, -0.84, 0],
      [0.12, -1.32, 0.32],
    ]

    const cluster = [
      [-0.72, 0.66, 0],
      [0.2, 0.66, 0],
      [-0.72, -0.31, 0],
      [0.2, -0.31, 0],
      [-0.25, -1.12, 0.2],
    ]

    cubes.forEach((cube, index) => {
      const [x, y, z] = diagonal[index]
      cube.position.set(x, y, z)
      cube.rotation.set(index * 0.06, index * -0.08, index * 0.12)
    })

    const ambient = new THREE.AmbientLight(0xffffff, 0.72)
    scene.add(ambient)

    const key = new THREE.PointLight(0x8fb8ff, 18, 12, 1.8)
    key.position.set(2.4, 2.8, 4.6)
    scene.add(key)

    const red = new THREE.PointLight(0xff2a2a, 9, 9, 2)
    red.position.set(1.8, -2.1, 2.1)
    scene.add(red)

    const cyan = new THREE.PointLight(0x2a7fff, 11, 11, 2)
    cyan.position.set(-2.8, 0.8, 2.7)
    scene.add(cyan)

    const lime = new THREE.PointLight(0x2aff2a, 5, 8, 2.2)
    lime.position.set(0.2, -2.4, 1.7)
    scene.add(lime)

    const haloGeometry = new THREE.TorusGeometry(small ? 2.35 : 3.55, small ? 0.018 : 0.028, 12, 180)
    const halo = new THREE.Mesh(
      haloGeometry,
      new THREE.MeshBasicMaterial({
        color: 0x4e6277,
        transparent: true,
        opacity: 0.18,
      })
    )
    halo.rotation.x = Math.PI * 0.54
    halo.rotation.y = -0.28
    halo.position.z = -0.75
    scene.add(halo)

    const halo2Material = (halo.material as THREE.MeshBasicMaterial).clone()
    halo2Material.opacity = 0.11
    const halo2 = new THREE.Mesh(haloGeometry, halo2Material)
    halo2.scale.set(1.13, 1.13, 1.13)
    halo2.rotation.x = Math.PI * 0.51
    halo2.rotation.z = 0.18
    scene.add(halo2)

    const dustGeometry = new THREE.BufferGeometry()
    const dustCount = small ? 90 : 220
    const dustPositions = new Float32Array(dustCount * 3)
    for (let i = 0; i < dustCount; i += 1) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 9
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 6
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 5
    }
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3))
    const dust = new THREE.Points(
      dustGeometry,
      new THREE.PointsMaterial({ color: 0xa9bac9, size: small ? 0.012 : 0.018, transparent: true, opacity: 0.3 })
    )
    scene.add(dust)

    let progress = 0
    let targetProgress = 0
    let pointerX = 0
    let pointerY = 0
    let targetPointerX = 0
    let targetPointerY = 0

    const handlePointer = (event: PointerEvent) => {
      targetPointerX = (event.clientX / window.innerWidth - 0.5) * 2
      targetPointerY = (event.clientY / window.innerHeight - 0.5) * 2
    }

    const updateScrollTarget = () => {
      const rect = mount.getBoundingClientRect()
      const viewport = Math.max(window.innerHeight, 1)
      const raw = (viewport * 0.5 - rect.top) / Math.max(rect.height, viewport)
      targetProgress = THREE.MathUtils.clamp(raw, 0, 1)
    }

    window.addEventListener('pointermove', handlePointer, { passive: true })
    window.addEventListener('scroll', updateScrollTarget, { passive: true })
    window.addEventListener('resize', updateScrollTarget)

    const resize = () => {
      const width = Math.max(mount.clientWidth, 1)
      const height = Math.max(mount.clientHeight, 1)
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(mount)
    resize()
    updateScrollTarget()

    const clock = new THREE.Clock()

    const animate = () => {
      frameRef.current = window.requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      progress += (targetProgress - progress) * 0.055
      pointerX += (targetPointerX - pointerX) * 0.045
      pointerY += (targetPointerY - pointerY) * 0.045

      root.rotation.y += 0.0018
      root.rotation.x = -0.13 + pointerY * 0.035
      root.rotation.z = 0.16 + pointerX * 0.02 + Math.sin(elapsed * 0.38) * 0.014
      root.position.x = pointerX * 0.12
      root.position.y = pointerY * -0.06

      cubes.forEach((cube, index) => {
        const from = diagonal[index]
        const to = cluster[index]
        const phase = THREE.MathUtils.smoothstep(progress, 0.08, 0.92)
        const wobble = Math.sin(elapsed * 0.82 + index * 0.9) * 0.035
        cube.position.x = THREE.MathUtils.lerp(from[0], to[0], phase) + wobble
        cube.position.y = THREE.MathUtils.lerp(from[1], to[1], phase) + Math.cos(elapsed * 0.64 + index) * 0.028
        cube.position.z = THREE.MathUtils.lerp(from[2], to[2], phase) + Math.sin(elapsed * 0.55 + index) * 0.06

        cube.rotation.x = index * 0.06 + elapsed * (0.035 + index * 0.003)
        cube.rotation.y = index * -0.08 - elapsed * 0.026
        cube.rotation.z = index * 0.12 + Math.sin(elapsed * 0.4 + index) * 0.07
      })

      halo.rotation.z += 0.0008
      halo.rotation.y = -0.28 + Math.sin(elapsed * 0.25) * 0.025
      halo2.rotation.z -= 0.0005
      dust.rotation.y += 0.00025
      dust.rotation.x = Math.sin(elapsed * 0.12) * 0.05

      const glow = 0.9 + Math.sin(elapsed * 0.74) * 0.14
      key.intensity = 18 * glow
      red.intensity = 9 + Math.sin(elapsed * 0.61 + 1) * 2
      cyan.intensity = 11 + Math.sin(elapsed * 0.47 + 2) * 2
      lime.intensity = 5 + Math.sin(elapsed * 0.53 + 3) * 1.4

      const cameraZ = small ? 7.6 : 8.4
      camera.position.z += (cameraZ - camera.position.z) * 0.02
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }

      window.removeEventListener('pointermove', handlePointer)
      window.removeEventListener('scroll', updateScrollTarget)
      window.removeEventListener('resize', updateScrollTarget)
      resizeObserver.disconnect()

      geometryCleanup(root)
      halo.geometry.dispose()
      halo2.geometry.dispose()
      dustGeometry.dispose()
      ;(dust.material as THREE.Material).dispose()
      glass.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [small])

  return <div ref={mountRef} className={small ? 'prism-scene prism-scene-small' : 'prism-scene'} aria-hidden="true" />
}

function geometryCleanup(object: THREE.Object3D) {
  object.traverse((child) => {
    if (child instanceof THREE.Mesh || child instanceof THREE.LineSegments) {
      child.geometry.dispose()
      const materials = Array.isArray(child.material) ? child.material : [child.material]
      materials.forEach((material) => material.dispose())
    }
  })
}
