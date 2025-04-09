"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function ActivityFilters() {
  const [priceRange, setPriceRange] = useState([0, 200])

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-medium">Price Range</h3>
        <Slider
          defaultValue={[0, 200]}
          max={300}
          step={10}
          value={priceRange}
          onValueChange={setPriceRange}
          className="py-4"
        />
        <div className="flex items-center justify-between">
          <span className="text-sm">${priceRange[0]}</span>
          <span className="text-sm">${priceRange[1]}</span>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="font-medium">Categories</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="wellness" />
            <Label htmlFor="wellness">Wellness & Spa</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="culinary" />
            <Label htmlFor="culinary">Culinary Experiences</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="sports" />
            <Label htmlFor="sports">Sports & Recreation</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="pool" />
            <Label htmlFor="pool">Pool Access</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="fitness" />
            <Label htmlFor="fitness">Fitness</Label>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="font-medium">Duration</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="1-hour" />
            <Label htmlFor="1-hour">1 Hour</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="2-3-hours" />
            <Label htmlFor="2-3-hours">2-3 Hours</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="half-day" />
            <Label htmlFor="half-day">Half Day (4-5 Hours)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="full-day" />
            <Label htmlFor="full-day">Full Day</Label>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="font-medium">Rating</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="4-5-stars" />
            <Label htmlFor="4-5-stars">4+ Stars</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="3-4-stars" />
            <Label htmlFor="3-4-stars">3-4 Stars</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="below-3-stars" />
            <Label htmlFor="below-3-stars">Below 3 Stars</Label>
          </div>
        </div>
      </div>
    </div>
  )
}
