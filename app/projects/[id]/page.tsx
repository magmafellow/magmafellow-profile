import Stats from '@/app/ui/stats/main'
import InfoCard from '@/app/ui/info-card/main'
import BlogpostTags from '@/app/ui/blogpost-tags/main'
import DefaultGrid from '@/app/ui/default-grid/main'
import ProjectSpecific from '@/app/ui/project-specific/main'

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <DefaultGrid>
      <Stats />
      <InfoCard />
      <BlogpostTags />
      <ProjectSpecific projectId={params.id} />
    </DefaultGrid>
  )
}
