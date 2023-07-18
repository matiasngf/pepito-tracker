export const randomItem = <T>(items: T[]): T => {
  const index = Math.floor(Math.random() * items.length)
  return items[index] as T
}
