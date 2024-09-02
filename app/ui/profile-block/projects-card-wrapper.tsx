import { getLastProjects, getThreeLastProjects } from '@/app/lib/actions/projects'
import { Suspense } from 'react'
import ProjectCardSkeleton from './project-card-skeleton'
import ProjectCard from './project-card'

export default async function ProjectsCardWrapper() {
  const projects = await getLastProjects(50)

  return projects.map((projectObj, index) => <ProjectCard key={index} {...projectObj} />)
}
