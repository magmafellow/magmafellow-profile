import styles from './projects.module.scss'

import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from './project-card'
import { getThreeLastProjects } from '@/app/lib/actions/projects'
import { Suspense } from 'react'
import ProjectCardSkeleton from './project-card-skeleton'
import ProjectsCardWrapper from './projects-card-wrapper'
import ProjectsCardWrapperSkeleton from './projects-card-wrapper-skeleton'

export default async function Projects() {
  return (
    <div className={`${styles.projects}`}>
      <Suspense
        fallback={<ProjectsCardWrapperSkeleton limit={3}></ProjectsCardWrapperSkeleton>}
      >
        <ProjectsCardWrapper limit={3} />
      </Suspense>
    </div>
  )
}
