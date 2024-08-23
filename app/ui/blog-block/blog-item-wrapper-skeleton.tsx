import BlogItemSkeleton from './blog-item-skeleton'

export default async function BlogItemWrapperSkeleton({
  limit,
}: {
  limit: number
}) {
  return Array.from(Array(limit).keys()).map((value, index) => (
    <BlogItemSkeleton key={index} />
  ))
}
