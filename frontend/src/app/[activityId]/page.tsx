import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getActivity } from "@/lib/api"
import { createBooking } from "./action"

export default async function ActivityPage({ params }: { params: { activityId: string } }) {
  const activity = await getActivity(params.activityId)

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-3">{activity.name}</h1>
      </div>
      <div>
        <form action={createBooking}>
          <Input type="email" placeholder="Email" name="email" required />
          <Button type="submit">Réserver</Button>
        </form>
      </div>
    </div>
  )
}
