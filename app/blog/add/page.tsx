import Stats from '@/app/ui/stats/main'
import InfoCard from '@/app/ui/info-card/main'
import BlogpostTags from '@/app/ui/blogpost-tags/main'
import AddBlogBlock from '@/app/ui/add-blog-block/main'
import DefaultContainer from '@/app/ui/default-container/main'

export default async function Page() {
  return (
    <DefaultContainer>
      <AddBlogBlock />
    </DefaultContainer>
  )
}

