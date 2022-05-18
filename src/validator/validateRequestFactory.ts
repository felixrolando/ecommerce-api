import { AnyZodObject } from 'zod'
import { validateRequestQuery } from './validateRequestQuery'
import { validateRequestBody } from './validateRequestBody'

type Tvalidate = 'query' | 'body'

export function validateRequestFactory (schema: AnyZodObject, prop: Tvalidate = 'query'): Function {
  if (prop === 'query') {
    return validateRequestQuery(schema)
  }
  return validateRequestBody(schema)
}
