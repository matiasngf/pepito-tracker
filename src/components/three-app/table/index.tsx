import { useGLTF } from "@react-three/drei"
import { useMemo } from "react"
import { Mesh, MeshPhysicalMaterial, type Object3D } from "three"
import type { GLTF } from "three-stdlib"

interface CatGLTF extends GLTF {
  nodes: {
    Table: Object3D
  }
}

export const Table = () => {
  const { nodes } = useGLTF("/table.glb") as CatGLTF
  const { SceneNode } = useMemo(() => {
    const tableMaterial = new MeshPhysicalMaterial({
      color: "#7f331b",
      roughness: 0.9,
      metalness: 0.0,
    })

    nodes.Table.traverse((node) => {
      if (node instanceof Mesh) {
        node.material = tableMaterial
        node.receiveShadow = true
      }
    })

    return {
      SceneNode: nodes.Table.clone(true),
    }
  }, [nodes])

  return (
    <group scale={[2, 2, 2]} position={[-0.3, -3.75, 0.3]}>
      <primitive object={SceneNode} />
    </group>
  )
}
