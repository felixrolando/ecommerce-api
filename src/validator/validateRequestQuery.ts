import { Request, Response } from 'express'
import { AnyZodObject } from 'zod'
export function validateRequestQuery (schema: AnyZodObject): any {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const method = descriptor.value
    descriptor.value = function (...args: any) {
      const request = args[0] as Request
      const response = args[1] as Response

      try {
        schema.parse(request)
        return method.apply(this, args)
      } catch (error) {
        response.status(400).json({ message: error })
      }
    }

    return descriptor
  }
}
