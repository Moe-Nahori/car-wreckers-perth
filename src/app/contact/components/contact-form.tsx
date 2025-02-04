"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { contactFormSchema } from "@/lib/validations/forms"
import LoadingSpinner from "@/components/ui/loading-spinner"
import ErrorMessage from "@/components/ui/error-message"
import { ZodError } from "zod"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationError, setValidationError] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setValidationError(null)
    setSubmitError(null)
    setSubmitSuccess(false)

    try {
      const formData = new FormData(event.currentTarget)
      const data = Object.fromEntries(formData)
      
      // Validate form data
      const validatedData = contactFormSchema.parse(data)

      // Submit form
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validatedData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit contact form. Please try again.')
      }

      // Reset form on success
      event.currentTarget.reset()
      setSubmitSuccess(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })

    } catch (error) {
      console.error('Contact form error:', error)
      
      // Handle validation errors
      if (error instanceof ZodError) {
        setValidationError(error.errors.map(err => err.message).join('. '))
      } else {
        setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

        {submitSuccess && (
          <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
            Message sent successfully! We will contact you shortly.
          </div>
        )}

        {(validationError || submitError) && (
          <ErrorMessage 
            message={validationError || submitError}
            className="mb-4"
          />
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input 
                id="firstName" 
                name="firstName" 
                required
                disabled={isSubmitting}
                className="focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input 
                id="lastName" 
                name="lastName" 
                required
                disabled={isSubmitting}
                className="focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              required
              disabled={isSubmitting}
              className="focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input 
              id="phone" 
              name="phone" 
              type="tel" 
              required
              disabled={isSubmitting}
              className="focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input 
              id="subject" 
              name="subject" 
              required
              disabled={isSubmitting}
              className="focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              name="message"
              placeholder="How can we help you?"
              className="min-h-[120px] focus:ring-2 focus:ring-primary"
              required
              disabled={isSubmitting}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <LoadingSpinner size="sm" />
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}