'use server'

import { db } from "@/db"
import { blogs } from "@/mannequin-data"
import { blogsTable, blogsTagsTable, tagsTable } from "@/schema"
import { desc, eq, max } from "drizzle-orm"
import { unstable_noStore } from "next/cache"
import lodash from 'lodash'

export async function addNewTag(tagName: string) {
  unstable_noStore()
  const currId = await getLastTagId()
  const incrementedId = currId + 1
  const r = await db.insert(tagsTable).values({id: incrementedId, name: tagName }).returning()
  return r[0]
}

export async function getTagIdByTagName(tagname: string) {
  unstable_noStore()
  const r = await db.select().from(tagsTable).where(eq(tagsTable.name, tagname))
  if (r.length === 0) {
    const addResult = await addNewTag(tagname)
    return addResult.id
  } else {
    return r[0].id
  }
}

export async function getLastTagId() {
  unstable_noStore()
  const r = await db.select().from(tagsTable).orderBy(desc(tagsTable.id))
  return r[0].id
}
