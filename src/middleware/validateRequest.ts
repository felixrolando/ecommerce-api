import type { Request } from 'express'
import { AnyZodObject, ZodError, z } from 'zod'
import { badRequest } from '@hapi/boom'

export async function validateRequest<T extends AnyZodObject> (
  schema: T,
  req: Request
): Promise<z.infer<T>> {
  try {
    return await schema.parseAsync(req)
  } catch (error) {
    if (error instanceof ZodError) {
      throw badRequest(error.message)
    }
    return badRequest(JSON.stringify(error))
  }
}
