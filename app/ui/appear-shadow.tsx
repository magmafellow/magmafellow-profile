'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function AppearShadow({
  children,
  id,
  className,
}: {
  children: any
  id: string
  className?: string
}) {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.from(`#${id}`, {
      scrollTrigger: {
        trigger: `#${id}`,
        toggleActions: 'restart resume restart resume',
      },
      opacity: 0.1,
      duration: 1,
      delay: 0.2,
    })
  })

  return <div className={className ? className : ''} id={id}>{children}</div>
}
