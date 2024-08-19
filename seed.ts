import { projects } from "./mannequin-data";
import { createProject, createProjectTag, createTag, createUser } from "./queries/insert";

export async function addMannequinProjects() {
  // fresh-fashioned
  const res = await Promise.all(projects.map((value) => createProject(value)))
  
  // old-fashioned
  // for (let i = 0; i < projects.length; i++) {
  //   const res = await createProject(projects[i])
  // }

  console.log('Mannequin Projects were SUCCESSFULY added')
}
