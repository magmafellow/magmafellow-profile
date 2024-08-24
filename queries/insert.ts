import { blogsTags } from '@/mannequin-data'
import { db } from '../db'
import {
  blogsTable,
  blogsTagsTable,
  InsertBlog,
  InsertBlogTag,
  InsertProject,
  InsertProjectTag,
  InsertTag,
  InsertUser,
  projectsTable,
  projectsTagsTable,
  SelectProject,
  SelectProjectTag,
  SelectTag,
  SelectUser,
  tagsTable,
  usersTable,
} from '../schema'


export async function createProject(data: InsertProject) {
  const res = await db.insert(projectsTable).values(data)
  console.log('created Project data')
}

export async function createUser(data: InsertUser) {
  const res = await db.insert(usersTable).values(data)
  console.log('created User data')
}

export async function createTag(data: InsertTag) {
  const res = await db.insert(tagsTable).values(data)
  console.log('created Tag data')
}

export async function createProjectTag(data: InsertProjectTag) {
  const res = await db.insert(projectsTagsTable).values(data)
  console.log('created ProjectTag data')
}

export async function createBlog(data: InsertBlog) {
  const res = await db.insert(blogsTable).values(data)
  console.log('created Blog Data')
}

export async function createBlogTag(data: InsertBlogTag) {
  const res = await db.insert(blogsTagsTable).values(data)
  console.log('created BlogTag data')
}
