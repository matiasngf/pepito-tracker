import { create } from "zustand"

export interface UsePepito {
  isOutside: boolean
  setOutside: (isOutside: boolean) => void
}

export const usePepitoStore = create<UsePepito>((set) => ({
  isOutside: true,
  setOutside: (isOutside) => set({ isOutside }),
}))
