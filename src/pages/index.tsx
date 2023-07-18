import type { FieldSet, Records } from "airtable"
import type { GetStaticProps, InferGetStaticPropsType } from "next"
import { useEffect } from "react"

import { ThreeApp } from "~/components/three-app"
import { usePepitoStore } from "~/hooks/use-pepito"
import { client } from "~/utils/client"

const reg = /^Pépito is ((?:back home)|(?:out)) (\([\d:]+\))/

interface TableFields extends FieldSet {
  username: string
  "full-text": string
}

const getIsOut = (data: Records<TableFields>) => {
  const fields = data
    .map((record) => record.fields)
    .filter((field) => {
      if (field.username !== "PepitoTheCat") return false
      return field["full-text"].match(reg)
    })

  if (fields.length === 0) return { isOut: false, time: "()" }

  const last = (fields[0] as TableFields)["full-text"]
  const [, isOut, time] = last.match(reg) as RegExpMatchArray

  return { isOut: isOut === "out", time: time || "()" }
}

export const getStaticProps: GetStaticProps<{
  isOut: boolean
  time: string
}> = async () => {
  const data = await client
    .base("appFnSlQs8KcS0lrH")
    .table<TableFields>("tblrLmhSalYAwcX3X")
    .select({
      sort: [{ field: "time", direction: "desc" }],
    })
    .all()

  const { isOut, time } = getIsOut(data)

  return {
    props: {
      isOut,
      time,
    },
    revalidate: 60,
  }
}

const Page = ({
  isOut,
  time,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const setIsOutside = usePepitoStore((state) => state.setOutside)

  useEffect(() => {
    setIsOutside(isOut)
  }, [isOut, setIsOutside])

  const isOutside = usePepitoStore((state) => state.isOutside)
  return (
    <div className="relative w-screen h-screen">
      <ThreeApp />
      <div className="absolute bottom-10 flex justify-center w-full">
        <h1 className="text-white text-4xl opacity-50">
          Pépito is {isOutside ? "out" : "back home"} {time}
        </h1>
      </div>
    </div>
  )
}

export default Page
