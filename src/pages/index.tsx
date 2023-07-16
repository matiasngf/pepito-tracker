import { ThreeApp } from "~/components/three-app"
import { usePepitoStore } from "~/hooks/use-pepito"

const Page = () => {
  const isOutside = usePepitoStore((state) => state.isOutside)
  return (
    <div className="relative w-screen h-screen">
      <ThreeApp />
      <div className="absolute bottom-10 flex justify-center w-full">
        <h1 className="text-white text-4xl opacity-50">
          Pépito is {isOutside ? "out" : "back home"}
        </h1>
      </div>
    </div>
  )
}

export default Page
