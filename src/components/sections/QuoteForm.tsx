'use client';

import { useState, useRef } from 'react';
import { BUTTON_TEXT } from '@/config/constants';
import { Camera } from 'lucide-react';
import LoadingSpinner from '@/components/ui/loading-spinner';
import ErrorMessage from '@/components/ui/error-message';
import { useAsync } from '@/hooks/use-async';

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  partInfo?: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [vehicleImage, setVehicleImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { execute: submitForm, loading: isSubmitting, error: submitError } = useAsync(
    async (data: FormData) => {
      const response = await fetch('http://localhost:8005/api/quotes', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Failed to submit quote request');
      }

      return response.json();
    }
  );

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError(null);
    const file = e.target.files?.[0];
    
    if (!file) return;

    try {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        throw new Error('Please upload an image file');
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        throw new Error('Image size should be less than 5MB');
      }

      setVehicleImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : 'Error uploading image');
      clearImage();
    }
  };

  const clearImage = () => {
    setVehicleImage(null);
    setImagePreview(null);
    setUploadError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      if (vehicleImage) {
        formDataToSend.append('vehicleImage', vehicleImage);
      }

      await submitForm(formDataToSend);
      
      // Reset form on success
      setFormData({ name: '', email: '', phone: '', message: '' });
      clearImage();
      alert('Quote request submitted successfully!');
    } catch (error) {
      console.error('Error submitting quote:', error);
      // Error is handled by useAsync hook
    }
  };

  return (
    <section id="quote-form" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Get an Instant Quote</h2>

          {(submitError || uploadError) && (
            <ErrorMessage 
              message={uploadError || submitError}
              className="mb-6"
            />
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Vehicle Details</label>
              <textarea
                required
                className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Please provide details about your vehicle (make, model, year, condition)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={isSubmitting}
              />
            </div>

            {/* Image Upload Section */}
            <div>
              <label className="block text-gray-700 mb-2">Vehicle Image (Optional)</label>
              <div className="space-y-4">
                <div className="flex gap-2">
                  {/* File Upload Button */}
                  <div className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      ref={fileInputRef}
                      className="hidden"
                      id="vehicle-image-upload"
                      disabled={isSubmitting}
                    />
                    <label
                      htmlFor="vehicle-image-upload"
                      className={`block w-full cursor-pointer bg-gray-50 hover:bg-gray-100 text-gray-700 py-3 px-4 rounded-lg border border-gray-300 text-center transition-colors ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      Upload Image
                    </label>
                  </div>

                  {/* Camera Capture Button */}
                  <div className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={handleImageChange}
                      className="hidden"
                      id="vehicle-image-capture"
                      disabled={isSubmitting}
                    />
                    <label
                      htmlFor="vehicle-image-capture"
                      className={`block w-full cursor-pointer bg-gray-50 hover:bg-gray-100 text-gray-700 py-3 px-4 rounded-lg border border-gray-300 text-center transition-colors ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      <Camera className="inline-block mr-2 h-5 w-5" />
                      Take Photo
                    </label>
                  </div>
                </div>

                {/* Image Preview */}
                {imagePreview && (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Vehicle preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={clearImage}
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-bold text-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              suppressHydrationWarning
            >
              {isSubmitting ? (
                <>
                  <LoadingSpinner size="sm" />
                  Submitting...
                </>
              ) : (
                BUTTON_TEXT.CTA
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}