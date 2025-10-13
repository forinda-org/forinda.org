import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Enter a valid business email address."),
  company: z.string().min(2, "Company name must be at least 2 characters."),
  message: z
    .string()
    .min(10, "Share a bit more context for our solution architects."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const contactFormDefaults: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  message: "",
};
