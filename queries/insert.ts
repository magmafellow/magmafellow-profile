import { db } from '../db'
import {
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
}

export async function createUser(data: InsertUser) {
  const res = await db.insert(usersTable).values(data)
}

export async function createTag(data: InsertTag) {
  const res = await db.insert(tagsTable).values(data)
}

export async function createProjectTag(data: InsertProjectTag) {
  const res = await db.insert(projectsTagsTable).values(data)
}


