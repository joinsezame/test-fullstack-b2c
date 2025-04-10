import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { cors } from "hono/cors"
import { db } from "./database.js"

const app = new Hono()
app.use("*", cors())

type Activity = {
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

app.get("/activities", async (c) => {
  const activities = await db.query<Activity>("activities")
  return c.json(activities)
})

app.get("/activities/:id", async (c) => {
  const activity = await db.getItem<Activity>("activities", c.req.param("id"))
  return c.json(activity)
})

// https://hono.dev/docs/api/request#json
// app.post('/bookings', async (c) => {
// ...
// })

serve(
  {
    fetch: app.fetch,
    port: 3001,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  },
)
