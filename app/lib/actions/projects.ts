import projectsDataPlaceholder from "@/app/ui/profile-block/projects-data-placeholder"


export async function getThreeLastProjects(){
  await new Promise((resolve, reject) => {  // artificial delay
    setTimeout(() => resolve(1), 3000)
  })

  return projectsDataPlaceholder
}
