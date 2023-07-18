import { Environment, useTexture } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { SRGBColorSpace } from "three"

import { Table } from "../table"

export const Inside = () => {
  const insideBackground = useTexture("/inside-background.jpg")

  useThree(({ scene }) => {
    insideBackground.colorSpace = SRGBColorSpace

    scene.background = insideBackground
  })
  return (
    <>
      <Environment files="/inside.hdr" background={false} />
      <Table />
      <pointLight castShadow position={[10, 5, 0]} color="#e2d8c2" />
    </>
  )
}
