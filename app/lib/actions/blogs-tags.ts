'use server'

import { db } from "@/db"
import { blogs } from "@/mannequin-data"
import { blogsTable, blogsTagsTable, tagsTable } from "@/schema"
import { desc, eq, max } from "drizzle-orm"
import { unstable_noStore } from "next/cache"
import { blogCreateSchema } from "../defenitions"
import lodash from 'lodash'

export async function addNewBlogTag(blogId: number, tagId: number) {
  unstable_noStore()
  const currId = await getLastIdBlogTag()
  const incrementedId = currId + 1
  await db.insert(blogsTagsTable).values({id: incrementedId, blog_id: blogId, tag_id: tagId})
}

export async function getTagsByBlogId(blogId: number) {
  unstable_noStore()
  const r = await db.select().from(blogsTagsTable).innerJoin(tagsTable, eq(blogsTagsTable.tag_id, tagsTable.id)).where(eq(blogsTagsTable.blog_id, blogId))
  return r.map((item) => item.tags_table.name)
}

export async function getLastIdBlogTag() {
  unstable_noStore()
  const r = await db.select().from(blogsTagsTable).orderBy(desc(blogsTagsTable.id))
  return r[0].id
}
