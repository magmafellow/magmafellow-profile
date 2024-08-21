import styles from './main.module.scss'
import ProjectCard from '../profile-block/project-card'
import ProjectsCardWrapper from '../profile-block/projects-card-wrapper'
import ProjectsCardWrapperSkeleton from '../profile-block/projects-card-wrapper-skeleton'
import { Suspense } from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import Link from 'next/link'
import CommandText from '../command-text/command-text'

export default function ProjectsBlock() {
  return (
    <div className={`${styles.projects}`}>
      <CommandText id="get-blog" path="#/home/magmafellow" command="get-projects" />
      <div className={`${styles.projects_box_title_add}`}>
        <h1 className={`${styles.projects_page_title}`}>Magmafellow&apos;s projects</h1>
        <Link href="/projects/add">
          <FaCirclePlus className={`${styles.projects_addBtn}`} />
        </Link>
      </div>
      <Suspense fallback={<ProjectsCardWrapperSkeleton number={10} />}>
        <ProjectsCardWrapper />
      </Suspense>
    </div>
  )
}