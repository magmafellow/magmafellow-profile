import { auth } from '@/auth'
import { roboto } from './ui/fonts/roboto'
import { logout } from './lib/actions'
import Link from 'next/link'
import Stats from './ui/stats/main'
import InfoCard from './ui/info-card/main'
import BlogpostTags from './ui/blogpost-tags/main'
import ProfileBlock from './ui/profile-block/main'
import DefaultGrid from './ui/default-grid/main'
import AppearInnerBox from './ui/appear-inner-box'

export default async function Page() {
  // const session = await auth()
  // console.log(session)

  // demo delay
  // await new Promise((resolve, reject) => {
  //   setTimeout(() => resolve(true), 1000)
  // })

  return (
    <DefaultGrid>
      <Stats />
      <AppearInnerBox onBackEnterRestart={false} id="appear-info-card">
        <InfoCard />
      </AppearInnerBox>
      <BlogpostTags />
      <ProfileBlock />
    </DefaultGrid>
  )
}
