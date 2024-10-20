import { auth } from '@/auth'
import { roboto } from './ui/fonts/roboto'
import { logout } from './lib/actions'
import Link from 'next/link'
import Stats from './ui/stats/main'
import InfoCard from './ui/info-card/main'
import BlogpostTags from './ui/blogpost-tags/main'
import ProfileBlock from './ui/profile-block/main'
import DefaultGrid from './ui/default-grid/main'
import StatsLoading from './ui/stats/loading-placeholder'
import LoadingMain from './ui/loading-main/main'

export default function Page() {
  // const session = await auth()
  // console.log(session)

  return (
    <DefaultGrid>
      <StatsLoading />
      <InfoCard />
      <BlogpostTags />
      <LoadingMain />
    </DefaultGrid>
  )
}
