import ProjectCardSkeleton from './project-card-skeleton'

export default async function ProjectsCardWrapperSkeleton({
  limit,
}: {
  limit: number
}) {
  return Array.from(Array(limit).keys()).map((value, index) => (
    <ProjectCardSkeleton key={index} />
  ))
}
