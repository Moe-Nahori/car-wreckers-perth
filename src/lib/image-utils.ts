import sharp from 'sharp'
import { writeFile } from 'fs/promises'
import path from 'path'
import { nanoid } from 'nanoid'

export interface ProcessedImage {
  fileName: string
  url: string
  width: number
  height: number
  size: number
}

export async function processAndSaveImage(
  file: File,
  maxWidth = 1920,
  quality = 80
): Promise<ProcessedImage> {
  try {
    // Convert File to Buffer
    const buffer = Buffer.from(await file.arrayBuffer())
    
    // Process image with sharp
    const processed = await sharp(buffer)
      .resize(maxWidth, null, { withoutEnlargement: true })
      .jpeg({ quality })
      .toBuffer()
    
    // Generate unique filename
    const fileName = `${nanoid()}.jpg`
    const uploadDir = path.join(process.cwd(), 'public', 'uploads')
    const filePath = path.join(uploadDir, fileName)
    
    // Save processed image
    await writeFile(filePath, processed)
    
    // Get image metadata
    const metadata = await sharp(processed).metadata()
    
    return {
      fileName,
      url: `/uploads/${fileName}`,
      width: metadata.width || 0,
      height: metadata.height || 0,
      size: processed.length,
    }
  } catch (error) {
    console.error('Error processing image:', error)
    throw new Error('Failed to process image')
  }
}

export function validateImage(file: File): boolean {
  // Check file size (5MB)
  if (file.size > 5 * 1024 * 1024) {
    throw new Error('Image must be smaller than 5MB')
  }

  // Check file type
  if (!file.type.startsWith('image/')) {
    throw new Error('File must be an image')
  }

  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
  if (!allowedTypes.includes(file.type)) {
    throw new Error('Only JPEG, PNG, and WebP images are allowed')
  }

  return true
}