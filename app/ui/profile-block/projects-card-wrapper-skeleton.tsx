import ProjectCardSkeleton from './project-card-skeleton'

export default async function ProjectsCardWrapperSkeleton({number}: {number: number}) {
  return Array.from(Array(number).keys()).map((value, index) => <ProjectCardSkeleton key={index} />)
}
