'use server'

import { createBlog } from "@/queries/insert"
import { findHighestIdFromBlogs } from "../actions/blogs"
import { blogCreateSchema } from "../defenitions"

export async function createBlogDispatch(prevState: any, formData: FormData) {
  const data = {
    title: formData.get('title'),
    bite: formData.get('bite'),
    content: formData.get('content'),
  }

  const parsed = blogCreateSchema.safeParse(data)

  if (!parsed.success) {
    return {
      error: {
        credentials: 'credentials are not valid'
      }
    }
  } else {
    const hightestId = await findHighestIdFromBlogs()
    const blogObj = {
      ...parsed.data,
      id: hightestId! + 1,
    }
    const res = await createBlog(blogObj)
  }
}
