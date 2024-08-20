import { db } from '../db'
import { eq } from 'drizzle-orm'
import {
  projectsTable,
  projectsTagsTable,
  SelectUser,
  tagsTable,
  usersTable,
} from '@/schema'
import { unstable_noStore } from 'next/cache'

export async function deleteUser(id: SelectUser['id']) {
  unstable_noStore()

  await db.delete(usersTable).where(eq(usersTable.id, id))
}

export async function deleteAllProjects() {
  unstable_noStore()

  const res = await db.delete(projectsTable)
  console.log('All Projects were deleted')
}

export async function deleteAllUsers() {
  unstable_noStore()

  const res = await db.delete(usersTable)
  console.log('All Users were deleted')
}

export async function deleteAllTags() {
  unstable_noStore()

  const res = await db.delete(tagsTable)
  console.log('All Tags were deleted')
}

export async function deleteAllProjectsTags() {
  unstable_noStore()
  
  const res = await db.delete(projectsTagsTable)
  console.log('All ProjectsTags were deleted')
}

export async function deleteAllTablesData() {
  unstable_noStore()
  
  const res = await Promise.all([
    deleteAllProjects(),
    deleteAllUsers(),
    deleteAllTags(),
    deleteAllProjectsTags(),
  ])

  console.log('All data was deleted. Database and Tables are still there')
}
