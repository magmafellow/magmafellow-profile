export default async function getStats() {
  const [projects, blogs, abroad] = await Promise.all([
    getTotalProjects(),
    getTotalBlogs(),
    getTotalAbroad(),
  ])
  return {
    projects,
    blogs,
    abroad,
  }
}

export async function getTotalProjects(): Promise<number> {
  await new Promise((resolve, reject) => {
    //  artificial delay
    setTimeout(() => resolve(true), 1500)
  })

  return 21
}

export async function getTotalBlogs(): Promise<number> {
  await new Promise((resolve, reject) => {
    //  artificial delay
    setTimeout(() => resolve(true), 1500)
  })

  return 7
}

export async function getTotalAbroad(): Promise<number> {
  await new Promise((resolve, reject) => {
    //  artificial delay
    setTimeout(() => resolve(true), 1000)
  })

  return 3
}
