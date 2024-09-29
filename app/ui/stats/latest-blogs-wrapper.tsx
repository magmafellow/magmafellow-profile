import { getLatestBlogs } from "@/app/lib/actions/blogs"
import LatestBlog from "./latest-blog"

export default async function LatestBlogsWrapper() {
  const latestBlogs = await getLatestBlogs(3)
  
  return latestBlogs.map((blog, i) => <LatestBlog key={i} {...blog} />)
}
