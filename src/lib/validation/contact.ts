import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[\d\s\-+$$$$]+$/.test(val), "Please enter a valid phone number"),
  company: z.string().max(100, "Company name must be less than 100 characters").optional(),
  message: z
    .string()
    .min(15, "Message must be at least 15 characters")
    .max(1000, "Message must be less than 1000 characters"),
  honeypot: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>
