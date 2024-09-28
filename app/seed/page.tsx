import { addAllMannequinData, addMannequinProjects, addMannequinTags } from "@/seed/seed"

export default async function Page(){
  // const res = await addMannequinProjects()  // added
  // const res = await addMannequinTags()  // added
  // const res = await addAllMannequinData()
  
  return (
    <div>
      <p>Go to /seed/seed or /seed/delete or /seed/(specific)</p>
    </div>
  )
}
