import httpInstance from '../src/httpClient/HttpInstance'

process.env.ERP_URI = 'https://jsonplaceholder.typicode.com/'

class HttpTest {
    async getData() {
        return await httpInstance.get('todos/1')
    }

    async getData404() {
        try {
            return await httpInstance.get('test/1')
        } catch (error: any) {
            return error.response
        }
    }


    async postData(): Promise<any> {
        const mockData = JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
        return await httpInstance.post('posts', mockData)
    }

    async putData(): Promise<any> {
        const mockData = JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
        return await httpInstance.put('posts/1', mockData)
    }

    async deleteData(): Promise<any> {
        return await httpInstance.delete('posts/1')
    }
}

const http = new HttpTest()

describe('Testing http instance method GET', () => {
    it('MOCK API Request', async () => {
        const result = await http.getData()
        expect(result.status).toEqual(200)
        expect(result.headers['content-type']).toBe('application/json; charset=utf-8');

    })
})

describe('Testing http instance method POST', () => {
    it('MOCK API Request', async () => {
        const result = await http.postData()
        expect(result.status).toEqual(201)
        expect(result.headers['content-type']).toBe('application/json; charset=utf-8');
    })
})

describe('Testing http instance method PUT', () => {
    it('MOCK API Request', async () => {
        const result = await http.putData()
        expect(result.status).toEqual(200)
        expect(result.headers['content-type']).toBe('application/json; charset=utf-8');
    })
})

describe('Testing http instance method DELETE', () => {
    it('MOCK API Request', async () => {
        const result = await http.deleteData()
        expect(result.status).toEqual(200)
        expect(result.headers['content-type']).toBe('application/json; charset=utf-8');
    })
})


describe('Testing http instance return 404', () => {
    it('MOCK API Request 404', async () => {
        const result = await http.getData404()
        expect(result.status).toEqual(404)
    })
})