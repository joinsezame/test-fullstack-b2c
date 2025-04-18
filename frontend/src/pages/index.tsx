import { ActivityCard } from "@/components/activity-card"
import { useEffect, useState } from "react"
import { Activity, getActivities } from "@/lib/api"

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true)
        const data = await getActivities()
        setActivities(data)
      } catch (err) {
        setError("Failed to load activities")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchActivities()
  }, [])

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Discover Experiences</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore and book amazing hotel activities without booking a room
          </p>
        </div>
        {loading && <div className="text-center py-12">Loading...</div>}
        {error && <div className="text-center py-12">Error: {error}</div>}
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
