import { z } from 'zod'

export const quoteFormSchema = z.object({
  // Vehicle Details
  make: z.string().min(1, 'Make is required'),
  model: z.string().min(1, 'Model is required'),
  year: z.string()
    .min(1, 'Year is required')
    .regex(/^\d{4}$/, 'Must be a valid year')
    .transform(Number)
    .refine((val) => val >= 1950 && val <= new Date().getFullYear(), {
      message: 'Year must be between 1950 and current year',
    }),
  kilometers: z.string()
    .min(1, 'Kilometers is required')
    .regex(/^\d+$/, 'Must be a valid number')
    .transform(Number)
    .refine((val) => val >= 0 && val <= 1000000, {
      message: 'Kilometers must be between 0 and 1,000,000',
    }),
  condition: z.enum(['excellent', 'good', 'fair', 'poor', 'notRunning'], {
    required_error: 'Please select a condition',
  }),
  description: z.string().optional(),

  // Contact Information
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Must be a valid email address'),
  phone: z.string()
    .min(8, 'Phone number must be at least 8 digits')
    .regex(/^[0-9+\s()-]+$/, 'Must be a valid phone number'),
  suburb: z.string().min(2, 'Suburb is required'),
})

export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Must be a valid email address'),
  phone: z.string()
    .min(8, 'Phone number must be at least 8 digits')
    .regex(/^[0-9+\s()-]+$/, 'Must be a valid phone number'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type QuoteFormData = z.infer<typeof quoteFormSchema>
export type ContactFormData = z.infer<typeof contactFormSchema>