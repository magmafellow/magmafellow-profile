import { getTotalProjectsNumber } from "@/app/lib/actions/projects";

export default async function ProjectsNumber() {
  const res = await getTotalProjectsNumber()
  return res
}