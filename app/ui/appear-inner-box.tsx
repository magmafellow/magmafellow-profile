'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function AppearInnerBox({
  children,
  id,
  onBackEnterRestart
}: {
  children: any
  id: string
  onBackEnterRestart: boolean
}) {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(
    () => {
      gsap.fromTo(`#${id}`, {
        scrollTrigger: {
          trigger: `#${id}`,
          start: 'top 100%',
          end: 'bottom top',
          // markers: true,
          toggleActions: `play resume ${onBackEnterRestart ? 'restart' : 'none'} none`,
        },
        y: 24,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'elastic.out',
      })
    },
  )

  return (
    <div id={id}>
      {children}
    </div>
  )
}
