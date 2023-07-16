import { Environment, useTexture } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { SRGBColorSpace } from "three"

import { Building } from "../building"

export const Outside = () => {
  const outsideBackground = useTexture("/outside-background.jpg")

  useThree(({ scene }) => {
    outsideBackground.colorSpace = SRGBColorSpace

    scene.background = outsideBackground
  })
  return (
    <>
      <Environment files="/outside.hdr" background={false} />
      <Building />
      <pointLight castShadow position={[10, 5, 0]} color="#e2d8c2" />
    </>
  )
}
