import { blogs } from "@/mannequin-data"


export async function getLastBlogsMannequin(limit: number) {
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1500)
  })

  const array = []

  for (let i = 0; i < limit; i++) {
    array[i] = blogs[i]
  }

  return array
}
