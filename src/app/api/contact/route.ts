import { NextResponse } from "next/server"
import { contactSchema } from "@/lib/validation/contact"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // TODO: Implement email sending logic here
    // For now, we'll just log the data and return success
    console.log("[v0] Contact form submission:", validatedData)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ message: "Thank you for contacting us! We will get back to you soon." }, { status: 200 })
  } catch (error) {
    console.error("[v0] Contact form error:", error)

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json({ message: "Invalid form data. Please check your inputs." }, { status: 400 })
    }

    return NextResponse.json({ message: "Something went wrong. Please try again later." }, { status: 500 })
  }
}
