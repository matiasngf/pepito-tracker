import { LensFlare } from "@andersonmancini/lens-flare"
import { Environment } from "@react-three/drei"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"

import { Building } from "../building"

export const Outside = () => {
  return (
    <>
      <Environment files="/outside.hdr" background={false} />
      <Building />
      <pointLight castShadow position={[10, 5, 0]} color="#e2d8c2" />
      <EffectComposer>
        <LensFlare
          blendFunction={BlendFunction.SCREEN}
          opacity={0.2}
          position={{ x: 20, y: 3, z: 4 }}
          aditionalStreaks={false}
          animated={false}
          glareSize={0.02}
          starPoints={5}
          haloScale={1}
        />
        <Bloom intensity={0.5} />
      </EffectComposer>
    </>
  )
}
