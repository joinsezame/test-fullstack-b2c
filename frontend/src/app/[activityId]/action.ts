"use server"

import { redirect } from "next/navigation"

export async function createBooking(formData: FormData) {
  const entries = Object.fromEntries(formData.entries())
  console.log(entries)

  // TODO: Create booking
  const bookingId = "123"

  redirect(`/booking/${bookingId}`)
}
