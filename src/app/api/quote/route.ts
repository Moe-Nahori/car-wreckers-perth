import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'
import { nanoid } from 'nanoid'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    let imageUrl = null

    // Handle image upload if present
    const file = formData.get('vehicleImage') as File | null
    if (file) {
      try {
        // Generate unique filename
        const fileExtension = path.extname(file.name)
        const fileName = `${nanoid()}${fileExtension}`
        
        // Set up upload path
        const uploadDir = path.join(process.cwd(), 'public', 'uploads')
        const filePath = path.join(uploadDir, fileName)
        
        // Save the file
        const buffer = Buffer.from(await file.arrayBuffer())
        await writeFile(filePath, buffer)
        
        // Set the public URL
        imageUrl = `/uploads/${fileName}`
      } catch (error) {
        console.error('Error saving image:', error)
        return NextResponse.json(
          { error: 'Failed to save image' },
          { status: 500 }
        )
      }
    }

    // Convert form data to object
    const formValues = Object.fromEntries(formData)

    // Here you would typically save to your database
    // For now, we'll just return success
    return NextResponse.json({
      success: true,
      data: {
        ...formValues,
        imageUrl
      }
    })

  } catch (error) {
    console.error('Quote submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit quote' },
      { status: 500 }
    )
  }
}