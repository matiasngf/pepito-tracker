import { useTexture } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useMemo } from "react"
import { SRGBColorSpace } from "three"

export interface BackgroundProps {
  isOutside: boolean
}

export const Background = ({ isOutside }: BackgroundProps) => {
  const { insideMap, outsideMap } = useTexture({
    insideMap: "/inside-background.jpg",
    outsideMap: "/outside-background.jpg",
  })

  const map = useMemo(() => {
    const m = isOutside ? outsideMap : insideMap
    m.colorSpace = SRGBColorSpace
    return m
  }, [isOutside, outsideMap, insideMap])

  useThree(({ scene, size }) => {
    const canvasAspect = size.width / size.height
    const imageAspect = 1920 / 1080
    scene.background = map
    const factor = imageAspect / canvasAspect

    scene.background.offset.x = factor > 1 ? (1 - 1 / factor) / 2 : 0
    scene.background.repeat.x = factor > 1 ? 1 / factor : 1
    scene.background.offset.y = factor > 1 ? 0 : (1 - factor) / 2
    scene.background.repeat.y = factor > 1 ? 1 : factor
  })

  return null
}
