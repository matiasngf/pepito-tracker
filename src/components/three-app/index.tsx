import { PerspectiveCamera } from "@react-three/drei"
import { Canvas, useThree } from "@react-three/fiber"
import { useMemo, useState } from "react"

import { usePepitoStore } from "~/hooks/use-pepito"

import { Background } from "./background"
import { Cake } from "./cake"
import { Cat } from "./cat"
import { Inside } from "./inside"
import { Outside } from "./outside"

export const ThreeApp = () => {
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
      <Scene />
    </Canvas>
  )
}

const Scene = () => {
  const isOutside = usePepitoStore((state) => state.isOutside)

  const [isMobile, setIsMobile] = useState(false)
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })

  useThree(({ size }) => {
    if (size.width !== canvasSize.width || size.height !== canvasSize.height) {
      setCanvasSize(size)
    }
  })

  useMemo(() => {
    const aspect = canvasSize.width / canvasSize.height
    setIsMobile(aspect < 1)
  }, [canvasSize])

  const isBirthday = new Date().getMonth() === 8 && new Date().getDate() === 4

  return (
    <>
      <Background isOutside={isOutside} />
      <group position={[isMobile ? 0 : 0, 0, isMobile ? 1 : 0]}>
        {isOutside ? <Outside /> : <Inside />}
        <Cat />
      </group>
      {isBirthday && <Cake />}
      <PerspectiveCamera
        makeDefault
        position={[-4, 1, 3]}
        rotation={[0.0, -1.2, 0]}
      />
    </>
  )
}
