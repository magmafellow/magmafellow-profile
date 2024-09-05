'use server'

import { asc, between, count, eq, getTableColumns, sql } from 'drizzle-orm'
import projectsDataPlaceholder from '@/app/ui/profile-block/projects-data-placeholder'
import { unstable_noStore } from 'next/cache'
import { db } from '@/db'
import { projectsTable, projectsTagsTable, tagsTable } from '@/schema'
import { isNumeric } from '../utils'

export async function getProjectById(id: string) {
  if(!isNumeric(id)) {
    return false
  }
  const res = await db.select().from(projectsTable).where(eq(projectsTable.id, Number(id)))
  return res[0]
}

export async function getThreeLastProjectsPlaceholder() {
  unstable_noStore()

  await new Promise((resolve, reject) => {
    // artificial delay
    setTimeout(() => resolve(1), 3000)
  })

  return projectsDataPlaceholder
}

export async function getThreeLastProjects() {
  unstable_noStore()
  
  const res = await db.select().from(projectsTable).limit(3)
  return res
}

export async function getLastProjects(limit: number | undefined) {
  unstable_noStore()
  
  const res = await db.select().from(projectsTable).limit(limit ? limit : 99)
  return res
}

export async function getAllTagsByProjectId(projectId: number, limit?: number) {
  unstable_noStore()
  
  // const res = await db.select().from(projectsTagsTable).where(eq(projectsTagsTable.project_id, projectId)).limit(limit ? limit : 999)
  const res = await db.select().from(projectsTagsTable).leftJoin(tagsTable, eq(projectsTagsTable.tag_id, tagsTable.id)).where(eq(projectsTagsTable.project_id, projectId)).limit(limit ? limit : 999)
  return res
}

export async function getTotalProjectsNumber(){
  unstable_noStore()
  
  // const r = await new Promise((resolve, reject) => {  // aritifcial delay
  //   // async code...
  //   setTimeout(() => resolve(Infinity), 5500)
  // })
  
  const res = await db.select({ count: count() }).from(projectsTable)
  return res[0].count
}
