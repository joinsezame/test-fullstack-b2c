export type Activity = {
  id: string
  name: string
  description: string
  hotelName: string
  coverImageUrl: string
  price: {
    amountInCents: number
    currency: string
  }
  rating: number
  location: string
  category: string
  duration: string
}

export async function getActivities(): Promise<Activity[]> {
  const response = await fetch("http://localhost:3001/activities")

  if (!response.ok) {
    throw new Error("Failed to fetch activities")
  }

  return response.json()
}

export async function getActivity(id: string): Promise<Activity> {
  const response = await fetch(`http://localhost:3001/activities/${id}`)

  if (!response.ok) {
    throw new Error("Failed to fetch activity")
  }

  return response.json()
}
