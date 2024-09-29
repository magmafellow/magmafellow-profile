'use server'

import { db } from "@/db"
import { blogs } from "@/mannequin-data"
import { blogsTable, blogsTagsTable, tagsTable } from "@/schema"
import { eq, max } from "drizzle-orm"
import { unstable_noStore } from "next/cache"


export async function getLastBlogsMannequin(limit: number) {
  await new Promise((resolve, reject) => {  // artificial delay
    setTimeout(() => resolve(1), 1500)
  })

  const array = []

  for (let i = 0; i < limit; i++) {
    array[i] = blogs[i]
  }

  return array
}

export async function getTotalBlogsNumber() {
  const res = await db.select().from(blogsTable)
  return res.length
}

export async function getLatestBlogs(limit: number = 99) {
  unstable_noStore()
  
  const res = await db.select().from(blogsTable).limit(limit).orderBy(blogsTable.date_created)
  return res
}

export async function getTagsToBlog(blogId: number, limit: number) {
  unstable_noStore()
  
  const res = await db.select().from(blogsTagsTable).where(eq(blogsTagsTable.blog_id, blogId)).leftJoin(tagsTable, eq(blogsTagsTable.tag_id, tagsTable.id)).limit(limit ? limit : 99)
  return res.map((val) => val.tags_table?.name)
}

export async function findHighestIdFromBlogs() {
  unstable_noStore()
  
  const q1 = await db.select({ value: max(blogsTable.id) }).from(blogsTable)
  return q1[0].value
}
