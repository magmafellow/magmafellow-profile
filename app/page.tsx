import { auth } from '@/auth'
import { roboto } from './ui/fonts/roboto'
import { logout } from './lib/actions'
import Link from 'next/link'
import Stats from './ui/stats/main'
import InfoCard from './ui/info-card/main'
import BlogpostTags from './ui/blogpost-tags/main'
import ProfileBlock from './ui/profile-block/main'
import DefaultGrid from './ui/default-grid/main'

export default async function Page() {
  const session = await auth()
  console.log(session)

  return (
    <DefaultGrid>
      <Stats />
      <InfoCard />
      <BlogpostTags />
      <ProfileBlock />
    </DefaultGrid>
  )
}
