import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
 
// Combine Tailwind CSS classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format date to a readable string
export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

// Generate URL-friendly slug
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

// Convert snake_case or kebab-case to Title Case
export function toTitleCase(text: string) {
  return text
    .replace(/[-_]+/g, ' ')
    .replace(/\w\S*/g, (word) => (
      word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
    ))
}

// Get value safely from nested object path
export function getNestedValue(obj: any, path: string) {
  return path.split('.').reduce((acc, part) => acc?.[part], obj)
}

// Generate random string of specified length
export function generateId(length = 6) {
  return Math.random().toString(36).substring(2, length + 2)
}

// Format phone number to (08) XXXX XXXX format
export function formatPhoneNumber(phone: string) {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]} ${match[3]}`
  }
  return phone
}

// Format currency to AUD
export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD'
  }).format(amount)
}

// Get readable file size
export function getReadableFileSize(bytes: number) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let size = bytes
  let unitIndex = 0
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex++
  }
  
  return `${Math.round(size * 100) / 100} ${units[unitIndex]}`
}

// Validate email address
export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Get time ago string (e.g., "2 hours ago")
export function getTimeAgo(date: string | Date) {
  const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000)
  let interval = seconds / 31536000
  
  if (interval > 1) return Math.floor(interval) + ' years ago'
  interval = seconds / 2592000
  if (interval > 1) return Math.floor(interval) + ' months ago'
  interval = seconds / 86400
  if (interval > 1) return Math.floor(interval) + ' days ago'
  interval = seconds / 3600
  if (interval > 1) return Math.floor(interval) + ' hours ago'
  interval = seconds / 60
  if (interval > 1) return Math.floor(interval) + ' minutes ago'
  return Math.floor(seconds) + ' seconds ago'
}