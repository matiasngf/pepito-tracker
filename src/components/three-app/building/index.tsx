import { useTexture } from "@react-three/drei"
import { useMemo } from "react"
import { RepeatWrapping } from "three"

export const Building = () => {
  const texture = useTexture("/floor-texture.jpg")

  const map = useMemo(() => {
    const map = texture.clone()
    map.wrapS = map.wrapT = RepeatWrapping
    map.repeat.set(1, 1)
    return map
  }, [texture])
  return (
    <group>
      <mesh
        rotation={[0, Math.PI * 1.5, 0]}
        receiveShadow
        position={[-1.5, -0.501, 0]}
      >
        <boxGeometry args={[16, 1, 5]} />
        <meshPhysicalMaterial map={map} />
      </mesh>
    </group>
  )
}
