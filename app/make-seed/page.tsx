import { addMannequinProjects } from "@/seed"

export default async function Page(){
  const res = await addMannequinProjects()
  
  return (
    <div>
      <p>Successfuly seeded!</p>
    </div>
  )
}