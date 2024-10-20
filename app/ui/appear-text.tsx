'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function AppearText({
  children,
  id,
  onBackEnterRestart
}: {
  children: string
  id: string
  onBackEnterRestart: boolean
}) {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(
    () => {
      gsap.to(`#${id}`, {
        scrollTrigger: {
          trigger: `#${id}`,
          start: 'top 100%',
          end: 'bottom top',
          // markers: true,
          toggleActions: `play resume ${onBackEnterRestart ? 'restart' : 'none'} none`,
        },
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'elastic.out',
        // delay: 0.3,
      })
    },
  )

  return (
    <span id={id} className="inline-block">
      {children}
    </span>
  )
}
