import Stats from '@/app/ui/stats/main'
import InfoCard from '@/app/ui/info-card/main'
import BlogpostTags from '@/app/ui/blogpost-tags/main'
import DefaultGrid from '@/app/ui/default-grid/main'
import BlogSpecific from '@/app/ui/blog-specific/main'

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <DefaultGrid>
      <Stats />
      <InfoCard />
      <BlogpostTags />
      <BlogSpecific blogId={params.id} />
    </DefaultGrid>
  )
}
