"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity } from "@/lib/api"

interface ActivityCardProps {
  activity: Activity
}

export function ActivityCard({ activity }: ActivityCardProps) {
  // Format price from cents to dollars/euros
  const formatPrice = (amountInCents: number, currency: string) => {
    const amount = amountInCents / 100

    // Format based on currency
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <Card className="overflow-hidden group transition-all hover:shadow-lg border-0 rounded-xl">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={activity.coverImageUrl || "/placeholder.svg"}
          alt={activity.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Badge className="absolute top-3 right-3 bg-white/90 text-black hover:bg-white">{activity.category}</Badge>
      </div>

      <CardContent className="p-5 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{activity.name}</h3>
          <div className="flex items-center gap-1 text-sm bg-yellow-50 px-2 py-1 rounded-full">
            <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
            <span className="font-medium">{activity.rating}</span>
          </div>
        </div>

        <p className="text-muted-foreground line-clamp-2">{activity.description}</p>

        <div className="flex flex-col gap-2 text-sm pt-1">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{activity.hotelName}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{activity.duration}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-5 pb-5 pt-0 flex items-center justify-between">
        <div className="text-xl font-bold">{formatPrice(activity.price.amountInCents, activity.price.currency)}</div>
        <Button size="sm" className="rounded-full px-4">
          <Link href={`/activities/${activity.id}`}>Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
