'use server'

import { db } from "@/db"
import { blogs } from "@/mannequin-data"
import { blogsTable, blogsTagsTable, tagsTable } from "@/schema"
import { desc, eq, max } from "drizzle-orm"
import { unstable_noStore } from "next/cache"
import { blogCreateSchema } from "../defenitions"
import lodash from 'lodash'
import { addNewBlogTag } from "./blogs-tags"
import { getTagIdByTagName } from "./tags"

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

export async function getBlogById(blogId: number) {
  unstable_noStore()
  const r = await db.select().from(blogsTable).where(eq(blogsTable.id, blogId))
  return r[0]
}

export async function getTotalBlogsNumber() {
  unstable_noStore()
  const res = await db.select().from(blogsTable)
  return res.length
}

export async function getLatestBlogs(limit: number = 99) {
  unstable_noStore()

  // demo delay
  // await new Promise((resolve, reject) => {
  //   setTimeout(() => resolve(true), 5000)
  // })
  
  const res = await db.select().from(blogsTable).limit(limit).orderBy(blogsTable.date_created)
  return res
}

export async function getTagsToBlog(blogId: number, limit: number) {
  unstable_noStore()
  
  const res = await db.select().from(blogsTagsTable).where(eq(blogsTagsTable.blog_id, blogId)).innerJoin(tagsTable, eq(blogsTagsTable.tag_id, tagsTable.id)).limit(limit ? limit : 99)
  return res.map((item) => item.tags_table.name)
}

export async function findHighestIdFromBlogs() {
  unstable_noStore()
  
  const q1 = await db.select({ value: max(blogsTable.id) }).from(blogsTable)
  return q1[0].value
}

export async function addNewBlogPost(prevState: any, formData: FormData) {
  unstable_noStore()
  
  const formObject = {
    title: formData.get('title'),
    bite: formData.get('bite'),
    content: formData.get('content'),
    minToRead: formData.get('minToRead'),
    tags: formData.get('tags'),
  }

  const parsed = blogCreateSchema.safeParse(formObject)
  if(!parsed.success) {
    return {
      error: 'Fields do not pass requirements'
    }
  } else {
    const lastBlogPostId = await getLastIdToBlogPost()
    const blogTags = parsed.data.tags.split(',').map((tag) => lodash.trim(tag))
    
    console.log({ ...parsed.data, id: lastBlogPostId })
    const incrementedId = lastBlogPostId + 1
    await db.insert(blogsTable).values({ ...parsed.data, id: incrementedId })

    blogTags.forEach(async (tag) => {
      const tagId = await getTagIdByTagName(tag)
      await addNewBlogTag(incrementedId, tagId)
    })

    return {
      success: 'New Blog Post was added.'
    }
  }
}

export async function getLastIdToBlogPost() {
  return (await db.select().from(blogsTable).orderBy(desc(blogsTable.id)))[0].id
}
