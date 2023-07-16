import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useMemo } from "react"
import {
  AnimationClip,
  AnimationMixer,
  type Object3D,
  ShaderMaterial,
  SkinnedMesh,
} from "three"
import type { GLTF } from "three-stdlib"

import { catBodyFragmentShader, catBodyVertexShader } from "./cat-body-shader"

interface CatGLTF extends GLTF {
  nodes: {
    Cat: Object3D
  }
  animations: AnimationClip[]
}

export const Cat = () => {
  const { nodes, animations } = useGLTF("/cat.glb") as CatGLTF

  const { SceneNode, updateMixer, actionPatita } = useMemo(() => {
    // animation mixer
    const mixer = new AnimationMixer(nodes.Cat)

    // actions
    const clipPatita = AnimationClip.findByName(animations, "Take 001")
    const actionPatita = mixer.clipAction(clipPatita)
    actionPatita.repetitions = 3
    actionPatita.clampWhenFinished = true

    // updater
    const updateMixer = (delta: number) => {
      mixer.update(delta)
    }

    const SkinNode = nodes.Cat.getObjectByName("Object_7") as SkinnedMesh
    SkinNode.castShadow = true
    // const prevMaterial = SkinNode.material as MeshPhysicalMaterial

    SkinNode.material = new ShaderMaterial({
      fragmentShader: catBodyFragmentShader,
      vertexShader: catBodyVertexShader,
    })

    const MainNode = nodes.Cat
    MainNode.castShadow = true

    return {
      SceneNode: MainNode,
      updateMixer,
      mixer,
      actionPatita,
    }
  }, [nodes, animations])

  useEffect(() => {
    actionPatita.play()
  }, [actionPatita])

  useFrame((_state, delta) => {
    updateMixer(delta)
  })

  return (
    <group scale={[0.1, 0.1, 0.1]}>
      <primitive object={SceneNode} />
    </group>
  )
}
