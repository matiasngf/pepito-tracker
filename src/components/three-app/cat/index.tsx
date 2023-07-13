import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useMemo } from "react"
import { AnimationClip, AnimationMixer, type Object3D } from "three"
import type { GLTF } from "three-stdlib"

interface CatGLTF extends GLTF {
  nodes: {
    Cat: Object3D
  }
  animations: AnimationClip[]
}

export const Cat = () => {
  const { nodes, animations } = useGLTF("/cat.glb") as CatGLTF

  const { SceneNode, updateMixer } = useMemo(() => {
    const mixer = new AnimationMixer(nodes.Cat)
    const clip = AnimationClip.findByName(animations, "Take 001")
    const action = mixer.clipAction(clip)

    const updateMixer = (delta: number) => {
      mixer.update(delta)
    }

    action.play()

    return {
      SceneNode: nodes.Cat,
      updateMixer,
    }
  }, [nodes, animations])

  useFrame((_state, delta) => {
    updateMixer(delta)
  })

  return (
    <group scale={[0.1, 0.1, 0.1]}>
      <primitive object={SceneNode} />
    </group>
  )
}
