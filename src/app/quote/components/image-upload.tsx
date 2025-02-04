"use client"

import React, { useState, useRef } from 'react'
import { Camera, X } from 'lucide-react'
import LoadingSpinner from '@/components/ui/loading-spinner'
import ErrorMessage from '@/components/ui/error-message'

interface ImageUploadProps {
  onImageChange?: (file: File | null) => void;
  disabled?: boolean;
}

export default function ImageUpload({ onImageChange, disabled }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setIsProcessing(true)
      setError(null)

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        throw new Error('Image must be smaller than 5MB')
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        throw new Error('Please upload an image file')
      }

      // Create preview
      const preview = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result as string)
        reader.onerror = () => reject(new Error('Failed to process image'))
        reader.readAsDataURL(file)
      })

      setPreview(preview)
      onImageChange?.(file)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process image')
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
      onImageChange?.(null)
    } finally {
      setIsProcessing(false)
    }
  }

  const handleRemoveImage = () => {
    setPreview(null)
    setError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    onImageChange?.(null)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={disabled || isProcessing}
        >
          <div className={`${isProcessing ? 'bg-gray-400' : 'bg-green-500'} text-white p-2 rounded-full`}>
            {isProcessing ? (
              <LoadingSpinner size="sm" />
            ) : (
              <Camera className="w-5 h-5" />
            )}
          </div>
          <span>{preview ? 'Change photo' : 'Add vehicle photo'}</span>
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleImageChange}
        className="hidden"
        disabled={disabled || isProcessing}
      />

      {error && (
        <ErrorMessage 
          message={error}
          className="mt-2"
        />
      )}

      {preview && (
        <div className="relative">
          <img
            src={preview}
            alt="Vehicle preview"
            className="w-full rounded-lg border border-gray-200"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={disabled || isProcessing}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}