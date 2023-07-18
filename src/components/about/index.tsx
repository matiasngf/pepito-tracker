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
        </div>
      </ReactModal>
    </>
  )
}
