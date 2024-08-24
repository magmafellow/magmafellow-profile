'use server'

import { unstable_noStore } from 'next/cache'
import { blogs, blogsTags, projects, projectsTags, tags, users } from '../mannequin-data'
import {
  createBlog,
  createBlogTag,
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

export async function addMannequinBlogs() {
  unstable_noStore()

  const res = await Promise.all(blogs.map((value) => createBlog(value)))
  console.log('Mannequin Blogs were SUCCESSFULY added')
}

export async function addMannequinBlogsTags() {
  unstable_noStore()

  const res = await Promise.all(blogsTags.map((value) => createBlogTag(value)))
  console.log('Mannequin BlogsTags were SUCCESSFULY added')
}


export async function addAllMannequinData() {
  unstable_noStore()

  const res = await Promise.all([
    addMannequinProjects(),
    addMannequinTags(),
    addMannequinUsers(),
    addMannequinBlogs(),
  ])
  const res2 = await addMannequinProjectsTags()
  const res3 = await addMannequinBlogsTags()

  console.log('Added All Mannequin Data Successfuly')
}
