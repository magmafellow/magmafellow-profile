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
      gsap.from(`#${id}`, {
        scrollTrigger: {
          trigger: `#${id}`,
          start: 'top 100%',
          end: 'bottom top',
          // markers: true,
          toggleActions: `play resume ${onBackEnterRestart ? 'restart' : 'none'} none`,
        },
        y: 24,
        scale: 0.8,
        opacity: 0.3,
        duration: 0.7,
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
