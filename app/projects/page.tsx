import Stats from '@/app/ui/stats/main'
import InfoCard from '@/app/ui/info-card/main'
import BlogpostTags from '@/app/ui/blogpost-tags/main'
import ProjectsBlock from '../ui/projects-block/main'
import DefaultGrid from '../ui/default-grid/main'

export default async function Page() {
  return (
    <DefaultGrid>
      <Stats />
      <InfoCard />
      <BlogpostTags />
      <ProjectsBlock />
    </DefaultGrid>
  )
}
