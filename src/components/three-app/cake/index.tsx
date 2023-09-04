import { useGLTF } from "@react-three/drei"
import { useEffect, useMemo } from "react"
import type { Group, Mesh, Object3D } from "three"
import type { GLTF } from "three-stdlib"

import { useIsMobile } from "~/hooks/use-is-mobile"

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

export const Cake = () => {
  const { nodes } = useGLTF("/birthday_cake/scene.gltf") as CakeGLTF

  const isMobile = useIsMobile()

  const { SceneNode } = useMemo(() => {
    const SceneNode = nodes.Sketchfab_Scene.clone()

    return { SceneNode }
  }, [nodes])

  useEffect(() => {
    const scale = isMobile ? 0.0015 : 0.0035

    SceneNode.scale.set(scale, scale, scale)
  }, [isMobile, SceneNode])

  return (
    <group
      position={[isMobile ? -0.3 : 0.3, 0.1, 1.65]}
      rotation={[0, Math.PI * 1.3, 0]}
    >
      <primitive object={SceneNode} />
    </group>
  )
}
