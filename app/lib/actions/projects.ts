import projectsDataPlaceholder from "@/app/ui/profile-block/projects-data-placeholder"


export async function getThreeLastProjects(){
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 12300)
  })

  return projectsDataPlaceholder
}
