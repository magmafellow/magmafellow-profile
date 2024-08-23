import { getLastBlogsMannequin } from "@/app/lib/actions/blogs"
import BlogItem from "./blog-item"

export default async function BlogItemWrapper({ limit }: { limit: number }) {
  const blogs = await getLastBlogsMannequin(3)
  
  return blogs.map((blogObj, index) => <BlogItem key={index} {...blogObj} />)
}
