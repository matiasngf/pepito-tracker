import { Grid, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { Cat } from "./cat"

export const ThreeApp = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <Grid position={[0, -0.01, 0]} args={[10, 10]} />
      <Cat />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="hotpink" />
      </mesh>
    </Canvas>
  )
}
