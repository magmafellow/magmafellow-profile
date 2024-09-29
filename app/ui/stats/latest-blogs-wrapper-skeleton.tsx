import LatestBlogSkeleton from "./latest-blog-skeleton"

export default function LatestBlogsWrapperSkeleton({ length }: { length: number }) {
  const arr = []
  for (let i = 0; i < length; i++) {
    arr.push('_')
  }
  
  return arr.map((value, i) => <LatestBlogSkeleton key={i} />)
}