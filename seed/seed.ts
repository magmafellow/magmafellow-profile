import { unstable_noStore } from 'next/cache'
import { projects, projectsTags, tags, users } from '../mannequin-data'
import {
  createProject,
  createProjectTag,
  createTag,
  createUser,
} from '../queries/insert'

export async function addMannequinProjects() {
  unstable_noStore()
  
  const res = await Promise.all(projects.map((value) => createProject(value)))
  console.log('Mannequin Projects were SUCCESSFULY added')
}

export async function addMannequinTags() {
  unstable_noStore()

  const res = await Promise.all(tags.map((value) => createTag(value)))
  console.log('Mannequin Tags were SUCCESSFULY added')
}

export async function addMannequinProjectsTags() {
  unstable_noStore()

  const res = await Promise.all(
    projectsTags.map((value) => createProjectTag(value))
  )
  console.log('Mannequin ProjectsTags were SUCCESSFULY added')
}

export async function addMannequinUsers() {
  unstable_noStore()

  const res = await Promise.all(users.map((value) => createUser(value)))
  console.log('Mannequin Users were SUCCESSFULY added')
}

export async function addAllMannequinData() {
  unstable_noStore()

  const res = await Promise.all([
    addMannequinProjects(),
    addMannequinTags(),
    addMannequinUsers(),
  ])
  const res2 = await addMannequinProjectsTags()

  console.log('Added All Mannequin Data Successfuly')
}
