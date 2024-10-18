import { z } from 'zod'

export const signInSchemaCredentials = z.object({
  pseudonim: z.string().min(3),
  password: z.string().min(4),
})

export const signUpSchemaCredentials = z.object({
  pseudonim: z.string().min(3),
  password: z.string().min(4),
  password_repeat: z.string().min(4),
})

export const updateProfileSchema = z.object({
  name: z.string().min(3),
  pseudonim: z.string().min(3),
})

export const blogCreateSchema = z.object({
  title: z.string().min(5, 'Title field should contain at least 5 chars'),
  bite: z.string().min(10, 'Bite field should contain at least 10 chars'),
  content: z.string().min(30, 'Content field should be at least 30 chars'),
  minToRead: z.coerce.number(),
  tags: z.string().min(1, 'Tags is required field'),
})

export const contactSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Input is not an email'),
  content: z.string().min(1, 'Content is required'),
})
