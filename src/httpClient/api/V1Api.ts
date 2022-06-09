import { AxiosRequestConfig } from "axios";

export const V1Api = {
    brands: {
        getAllBrand(business_id: number): AxiosRequestConfig {
            return {
                url: 'brandForCreate',
                method: 'GET',
                params: { business_id: business_id },
            }
        }
    },
    category: {
        getAllCategory(business_id: number): AxiosRequestConfig {
            return {
                url: 'categoryForCreate',
                method: 'GET',
                params: { business_id: business_id },
            }
        }
    }

} 