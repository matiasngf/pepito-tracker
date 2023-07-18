import Link from "next/link"
import { useState } from "react"
import ReactModal from "react-modal"

import { clx } from "~/utils/clx"

export interface AboutProps {
  className?: string
}

export const About = ({ className }: AboutProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={clx(
          "aspect-square border w-8 flex items-center justify-center rounded-full border-white/50 bg-background-light/20",
          className
        )}
      >
        <span className="text-white/70 font-bold">?</span>
      </button>
      <ReactModal
        onRequestClose={() => setIsOpen(false)}
        overlayClassName="fixed inset-0 bg-white/20 flex items-center justify-center p-4"
        className="bg-white/80 p-8 rounded-lg max-w-sm"
        isOpen={isOpen}
      >
        <div className="space-y-4">
          <p>Hi! I'm Matias Gonzalez. A web developer from Argentina 🧉.</p>
          <p>
            I sometimes do experiments with threejs. You can check them out at{" "}
            <Link
              className="text-blue-800"
              target="_blank"
              href="https://matiasgf.dev"
            >
              matiasgf.dev
            </Link>
            .
          </p>
          <p>
            <Link
              className="text-blue-800"
              target="_blank"
              href="https://twitter.com/PepitoTheCat"
            >
              @PepitoTheCat
            </Link>{" "}
            <Link
              className="text-blue-800"
              target="_blank"
              href="https://twitter.com/matiNotFound"
            >
              @matiNotFound
            </Link>
          </p>
          <p>
            <b>3D models credits: </b>
            This work is based on the models{" "}
            <ModelCredit
              modelName="Cat [Soul Suspect]"
              modelUrl="cat-murdered-soul-suspect-836312def1b84e588866500a2bf79f0f"
              authorName="mark2580"
              authorUrl="mark2580"
            />{" "}
            and{" "}
            <ModelCredit
              modelName="Wooden Table"
              modelUrl="wooden-table-c0f6e92135be4206a0b5de58c9d5f336"
              authorName="Ygor L.Cavalcante"
              authorUrl="ygorofflc"
            />
            . The models, materials, and animations were modified to fit this
            project.
          </p>
        </div>
      </ReactModal>
    </>
  )
}

interface ModelCreditProps {
  modelName: string
  modelUrl: string
  authorName: string
  authorUrl: string
}

const ModelCredit = ({
  modelName,
  modelUrl,
  authorName,
  authorUrl,
}: ModelCreditProps) => {
  return (
    <span>
      <Link
        target="_blank"
        href={`https://sketchfab.com/3d-models/${modelUrl}`}
        className="text-blue-800"
      >
        <i>"{modelName}"</i>
      </Link>{" "}
      by{" "}
      <Link
        className="text-blue-800"
        target="_blank"
        href={`https://sketchfab.com/${authorUrl}`}
      >
        {authorName}
      </Link>
    </span>
  )
}
