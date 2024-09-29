import Stats from '@/app/ui/stats/main'
import InfoCard from '@/app/ui/info-card/main'
import BlogpostTags from '@/app/ui/blogpost-tags/main'
import BlogBlock from '../ui/blog-block/main'
import DefaultGrid from '../ui/default-grid/main'

export const metadata = {
  title: 'blog | magmafellow'
}

export default async function Page() {
  return (
    <DefaultGrid>
      <Stats />
      <InfoCard />
      <BlogpostTags />
      <BlogBlock />
    </DefaultGrid>
  )
}
