import { Environment } from "@react-three/drei"

import { Table } from "../table"

export const Inside = () => {
  return (
    <>
      <Environment files="/inside.hdr" background={false} />
      <Table />
      <pointLight castShadow position={[10, 5, 0]} color="#e2d8c2" />
    </>
  )
}
