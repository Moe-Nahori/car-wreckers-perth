"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import ImageUpload from "./image-upload"

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [vehicleImage, setVehicleImage] = useState<File | null>(null)
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [condition, setCondition] = useState("")
  const { toast } = useToast()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(event.currentTarget)
      
      // Add image if selected
      if (vehicleImage) {
        formData.append('vehicleImage', vehicleImage)
      }

      const response = await fetch('/api/quote', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to submit quote')
      }

      // Reset form
      event.currentTarget.reset()
      setVehicleImage(null)
      setMake("")
      setModel("")
      setCondition("")
      
      toast({
        title: "Quote Submitted",
        description: "We'll get back to you shortly with a quote.",
      })

    } catch (error) {
      console.error('Quote submission error:', error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit quote. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* Vehicle Details */}
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Vehicle Details</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="make">Make</Label>
              <Select name="make" value={make} onValueChange={setMake}>
                <SelectTrigger id="make">
                  <SelectValue placeholder="Select make" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="holden">Holden</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                  <SelectItem value="mazda">Mazda</SelectItem>
                  <SelectItem value="hyundai">Hyundai</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="model">Model</Label>
              <Select name="model" value={model} onValueChange={setModel}>
                <SelectTrigger id="model">
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  {!make ? (
                    <SelectItem value="placeholder">Select make first</SelectItem>
                  ) : make === "toyota" ? (
                    <>
                      <SelectItem value="corolla">Corolla</SelectItem>
                      <SelectItem value="camry">Camry</SelectItem>
                      <SelectItem value="hilux">HiLux</SelectItem>
                      <SelectItem value="rav4">RAV4</SelectItem>
                      <SelectItem value="prado">Prado</SelectItem>
                    </>
                  ) : make === "holden" ? (
                    <>
                      <SelectItem value="commodore">Commodore</SelectItem>
                      <SelectItem value="cruze">Cruze</SelectItem>
                      <SelectItem value="captiva">Captiva</SelectItem>
                      <SelectItem value="colorado">Colorado</SelectItem>
                      <SelectItem value="astra">Astra</SelectItem>
                    </>
                  ) : make === "ford" ? (
                    <>
                      <SelectItem value="ranger">Ranger</SelectItem>
                      <SelectItem value="falcon">Falcon</SelectItem>
                      <SelectItem value="territory">Territory</SelectItem>
                      <SelectItem value="focus">Focus</SelectItem>
                      <SelectItem value="mustang">Mustang</SelectItem>
                    </>
                  ) : make === "mazda" ? (
                    <>
                      <SelectItem value="mazda3">Mazda3</SelectItem>
                      <SelectItem value="cx5">CX-5</SelectItem>
                      <SelectItem value="bt50">BT-50</SelectItem>
                      <SelectItem value="mazda2">Mazda2</SelectItem>
                      <SelectItem value="cx3">CX-3</SelectItem>
                    </>
                  ) : make === "hyundai" ? (
                    <>
                      <SelectItem value="i30">i30</SelectItem>
                      <SelectItem value="tucson">Tucson</SelectItem>
                      <SelectItem value="santafe">Santa Fe</SelectItem>
                      <SelectItem value="accent">Accent</SelectItem>
                      <SelectItem value="elantra">Elantra</SelectItem>
                    </>
                  ) : null}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Vehicle Photos</Label>
            <ImageUpload onImageChange={setVehicleImage} disabled={isSubmitting} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="year">Year</Label>
              <Input id="year" name="year" type="number" placeholder="e.g. 2015" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="kilometers">Kilometers</Label>
              <Input id="kilometers" name="kilometers" type="number" placeholder="e.g. 150000" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="condition">Vehicle Condition</Label>
            <Select name="condition" value={condition} onValueChange={setCondition}>
              <SelectTrigger id="condition">
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="excellent">Excellent</SelectItem>
                <SelectItem value="good">Good</SelectItem>
                <SelectItem value="fair">Fair</SelectItem>
                <SelectItem value="poor">Poor</SelectItem>
                <SelectItem value="notRunning">Not Running</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Additional Details</Label>
            <Textarea 
              id="description" 
              name="description"
              placeholder="Please describe any damage, missing parts, or other relevant information"
            />
          </div>
        </div>
      </Card>

      {/* Contact Information */}
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="suburb">Suburb</Label>
            <Input id="suburb" name="suburb" required />
          </div>
        </div>
      </Card>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Get Quote'}
      </Button>
    </form>
  )
}