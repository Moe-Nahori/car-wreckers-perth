import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations/forms';
import { AppError, ERROR_CODES } from '@/lib/error-handling';
import { ZodError } from 'zod';
import { companyInfo } from '@/config/company-info';

// Simulate a database insertion delay
const SIMULATED_DELAY = 1000;

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate request data
    const validatedData = contactFormSchema.parse(body);

    // In production, you would:
    // 1. Store the message in your database
    // 2. Send notification email to staff
    // 3. Send confirmation email to customer

    // For now, we'll simulate processing with a delay
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY));

    // Send success response
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      data: {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        ...validatedData
      }
    });

  } catch (error) {
    console.error('Contact form API error:', error);

    // Handle validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid form data',
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      );
    }

    // Handle known application errors
    if (error instanceof AppError) {
      return NextResponse.json(
        { 
          success: false,
          message: error.message,
          code: error.code
        },
        { status: error.status }
      );
    }

    // Handle network/server errors
    const isNetworkError = error instanceof Error && 
      ['NetworkError', 'AbortError', 'TypeError'].includes(error.name);

    if (isNetworkError) {
      return NextResponse.json(
        { 
          success: false,
          message: 'A network error occurred. Please check your connection and try again.',
          code: ERROR_CODES.NETWORK_ERROR
        },
        { status: 503 }
      );
    }

    // Handle unknown errors
    return NextResponse.json(
      { 
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
        code: ERROR_CODES.SERVER_ERROR
      },
      { status: 500 }
    );
  }
}