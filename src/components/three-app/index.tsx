import { ContactShadows, PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { usePepitoStore } from "~/hooks/use-pepito"

import { Cat } from "./cat"
import { Outside } from "./outside"

export const ThreeApp = () => {
  const isOutside = usePepitoStore((state) => state.isOutside)

  return (
    <Canvas
      shadows
      onCreated={({ gl }) => {
        gl.outputColorSpace = "srgb"
      }}
      camera={{
        near: 0.1,
        far: 30,
      }}
    >
      {isOutside && <Outside />}
      <ContactShadows
        opacity={0.5}
        scale={4}
        blur={3}
        far={5}
        position={[0, 0.0, 0]}
        resolution={256}
        color="#000000"
      />
      <Cat />
      <PerspectiveCamera
        makeDefault
        position={[-4, 1, 3]}
        rotation={[0.0, -1.2, 0]}
      />
    </Canvas>
  )
}
