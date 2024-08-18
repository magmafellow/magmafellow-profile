import ProjectCardSkeleton from './project-card-skeleton'

export default async function ProjectsCardWrapperSkeleton() {
  return [1, 2, 3].map((value, index) => <ProjectCardSkeleton key={index} />)
}
