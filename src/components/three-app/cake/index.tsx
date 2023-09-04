import { useGLTF } from "@react-three/drei"
import { useMemo } from "react"
import type { Group, Mesh, Object3D } from "three"
import type { GLTF } from "three-stdlib"

interface CakeGLTF extends GLTF {
  nodes: {
    Sketchfab_Scene: Group
    Sketchfab_model: Object3D
    "411606c6078b4683b58b24911d93df3ffbx": Object3D
    RootNode: Object3D
    Cube007: Object3D
    Cube007_Chocolate_0: Mesh
    Plane004: Object3D
    Plane004_Icecream2003_0: Mesh
    Plane004_Icecream2001_0: Mesh
    Cube002: Object3D
    Cube002_Chocolate_0: Mesh
    Circle: Object3D
    Circle_Material001_0: Mesh
  }
}

const objectScale = 0.004

export const Cake = () => {
  const { nodes } = useGLTF("/birthday_cake/scene.gltf") as CakeGLTF

  const { SceneNode } = useMemo(() => {
    const SceneNode = nodes.Sketchfab_Scene.clone()

    return { SceneNode }
  }, [nodes])

  return (
    <group
      position={[0.3, 0.1, 1.65]}
      rotation={[0, Math.PI * 1.3, 0]}
      scale={[objectScale, objectScale, objectScale]}
    >
      <primitive object={SceneNode} />
    </group>
  )
}
