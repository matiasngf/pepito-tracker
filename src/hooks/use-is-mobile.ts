import { useThree } from "@react-three/fiber"
import { useMemo, useState } from "react"

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })

  useThree(({ size }) => {
    if (size.width !== canvasSize.width || size.height !== canvasSize.height) {
      setCanvasSize(size)
    }
  })

  useMemo(() => {
    const aspect = canvasSize.width / canvasSize.height
    setIsMobile(aspect < 1)
  }, [canvasSize])

  return isMobile
}
