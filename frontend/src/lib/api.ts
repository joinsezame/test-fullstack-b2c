// Define the Activity type according to the provided schema
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

// Function to fetch activities from the API
export async function getActivities(): Promise<Activity[]> {
  try {
    // Replace with your actual API endpoint
    const response = await fetch("http://localhost:3001/activities", {
      cache: "no-store", // Ensure fresh data on each request
    })

    if (!response.ok) {
      throw new Error("Failed to fetch activities")
    }

    return response.json()
  } catch (error) {
    console.error("Error fetching activities:", error)
    return [] // Return empty array in case of error
  }
}

export async function getActivity(id: string): Promise<Activity> {
  try {
    const response = await fetch(`http://localhost:3001/activities/${id}`, {
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error("Failed to fetch activity")
    }

    return response.json()
  } catch (error) {
    console.error("Error fetching activity:", error)
    throw error
  }
}
