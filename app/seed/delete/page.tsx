import { deleteAllTablesData } from "@/queries/delete";

export const dynamic = 'force-dynamic'

export default async function Page() {
  const res = await deleteAllTablesData()

  return (
    <div>
      <p>Successfuly deleted</p>
    </div>
  )
}
