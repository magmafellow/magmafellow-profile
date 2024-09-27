import { getLastProjects, getMostRatingProjects, getThreeLastProjects } from '@/app/lib/actions/projects'
import { Suspense } from 'react'
import ProjectCardSkeleton from './project-card-skeleton'
import ProjectCard from './project-card'

export default async function ProjectsCardWrapper({ limit }: { limit: number }) {
  const projects = await getMostRatingProjects(limit)
  return projects.map((projectObj, index) => <ProjectCard key={index} {...projectObj} />)
}
