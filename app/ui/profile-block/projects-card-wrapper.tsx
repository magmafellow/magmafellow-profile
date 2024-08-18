import { getThreeLastProjects } from '@/app/lib/actions/projects'
import { Suspense } from 'react'
import ProjectCardSkeleton from './project-card-skeleton'
import ProjectCard from './project-card'

export default async function ProjectsCardWrapper() {
  const projects = await getThreeLastProjects()

  return projects.map((projectObj, index) => <ProjectCard {...projectObj} />)
}
