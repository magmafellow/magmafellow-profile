import { auth } from '@/auth'
import { roboto } from './ui/fonts/roboto'
import { logout } from './lib/actions'
import Link from 'next/link'
import Stats from './ui/stats/stats'

export default async function Page() {
  const session = await auth()
  console.log(session)

  return (
    <Stats />
  )
}
