import { getLastBlogsMannequin, getLatestBlogs } from "@/app/lib/actions/blogs"
import BlogItem from "./blog-item"

export default async function BlogItemWrapper({ limit }: { limit: number }) {
  const blogs = await getLatestBlogs()
  console.log(blogs)
  
  return blogs.map((blogObj, index) => <BlogItem key={index} {...blogObj} />)
}
