import { HttpInstance } from "../HttpInstance";

class BrandService extends HttpInstance {

    async getAllBrands(): Promise<any> {
        return await this.get('todos/1')
    }

}

export default new BrandService();