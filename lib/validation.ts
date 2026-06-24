import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.email("Enter a valid email address"),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  eventType: z.string().min(2, "Select an event type"),
  eventDate: z.string().min(1, "Choose an event date"),
  venue: z.string().trim().min(2, "Tell us the venue or area").max(160),
  guestCount: z.coerce.number().int().min(1).max(100000),
  budget: z.string().min(1, "Select a budget range"),
  services: z.array(z.string()).min(1, "Choose at least one service"),
  message: z.string().trim().max(1500).optional(),
  website: z.string().max(0).optional(),
});
export type BookingInput = z.infer<typeof bookingSchema>;
export type BookingFormInput = z.input<typeof bookingSchema>;

export const newsletterSchema = z.object({ email: z.email("Enter a valid email address"), website: z.string().max(0).optional() });
export type NewsletterInput = z.infer<typeof newsletterSchema>;



