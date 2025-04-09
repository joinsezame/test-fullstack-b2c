import { ActivityCard } from "@/components/activity-card"
import { getActivities } from "@/lib/api"

export default async function ActivitiesPage() {
  // Fetch activities from the API
  const activities = await getActivities()

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Discover Experiences</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore and book amazing hotel activities without booking a room
          </p>
        </div>

        {activities.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No activities found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
