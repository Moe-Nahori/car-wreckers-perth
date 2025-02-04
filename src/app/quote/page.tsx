"use client"

import React, { useState } from 'react'
import ImageUpload from './components/image-upload'
import LoadingSpinner from '@/components/ui/loading-spinner'
import ErrorMessage from '@/components/ui/error-message'
import { useAsync } from '@/hooks/use-async'

export default function QuotePage() {
  const [vehicleImage, setVehicleImage] = useState<File | null>(null)
  const [formData, setFormData] = useState<FormData | null>(null)

  // Use our custom hook for handling the submission
  const { loading: isSubmitting, error, execute: submitForm } = useAsync(async (data: FormData) => {
    const response = await fetch('/api/quote', {
      method: 'POST',
      body: data,
    })

    if (!response.ok) {
      throw new Error('Failed to submit quote. Please try again.')
    }

    return response.json()
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    
    // Add the image if one was selected
    if (vehicleImage) {
      form.append('vehicleImage', vehicleImage)
    }

    try {
      await submitForm(form)
      // Reset form on success
      e.currentTarget.reset()
      setVehicleImage(null)
      alert('Thank you! We will contact you shortly.')
    } catch (error) {
      // Error will be handled by the useAsync hook
      console.error('Submission error:', error)
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto">
        {error && (
          <ErrorMessage
            message={error}
            className="mb-6"
          />
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-2xl font-bold text-center">Get an Instant Quote</h1>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Vehicle Details</label>
              <textarea
                name="vehicleDetails"
                required
                placeholder="Please provide details about your vehicle (make, model, year, condition)"
                className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Vehicle Photo (Optional)</label>
              <ImageUpload onImageChange={setVehicleImage} disabled={isSubmitting} />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting && <LoadingSpinner size="sm" />}
            {isSubmitting ? 'Submitting...' : 'Get Quote'}
          </button>
        </form>
      </div>
    </main>
  )
}