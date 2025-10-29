/**
 * Contact API Route
 * Handles POST requests for contact form submissions
 * Simulates async operation with 1 second delay
 */
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    console.log('Contact form submission:', body)
    
    return NextResponse.json(
      { success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false },
      { status: 500 }
    )
  }
}

