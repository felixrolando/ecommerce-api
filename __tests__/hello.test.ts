import app from '../src/app'
import request from 'supertest'

describe('GET / - a simple api endpoint', () => {
  it('Hello API Request', async () => {
    const result = await request(app).get('/')
    //expect(result.text).toEqual('hello')
    expect(result.statusCode).toEqual(300)
  })
})
