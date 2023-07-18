import { Environment } from "@react-three/drei"

import { Building } from "../building"

export const Outside = () => {
  return (
    <>
      <Environment files="/outside.hdr" background={false} />
      <Building />
      <pointLight castShadow position={[10, 5, 0]} color="#e2d8c2" />
    </>
  )
}
