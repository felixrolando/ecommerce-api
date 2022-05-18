import { z } from 'zod'

export const registerUserValidator = z.object({
  user: z.string(),
  password: z.string(),
  name: z.string()
})

export const loginUserValidator = z.object({
  user: z.string(),
  password: z.string()
})
