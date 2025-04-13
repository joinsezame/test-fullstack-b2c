import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getActivity, Activity } from "@/lib/api"

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement
}

interface BookingFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

export default function ActivityPage() {
  const router = useRouter()
  const { id } = router.query
  const [activity, setActivity] = useState<Activity | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchActivity = async () => {
      try {
        setLoading(true)
        const data = await getActivity(id as string)
        setActivity(data)
      } catch (err) {
        setError("Failed to load activity")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchActivity()
  }, [id])

  const handleSubmit = async (e: React.FormEvent<BookingFormElement>) => {
    e.preventDefault()

    const email = e.currentTarget.elements.email.value
    console.log(email)

    // TODO: Create booking

    const bookingId = "123" // TODO: get booking id from API
    router.push(`/bookings/${bookingId}`)
  }

  if (loading) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !activity) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-red-500">{error || "Activity not found"}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-3">{activity.name}</h1>
        <form onSubmit={handleSubmit}>
          <Input type="email" placeholder="Email" name="email" required />
          <Button type="submit">Réserver</Button>
        </form>
      </div>
    </div>
  )
}
