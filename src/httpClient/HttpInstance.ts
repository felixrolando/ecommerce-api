import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

//https://altrim.io/posts/axios-http-client-using-typescript

const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = process.env.ERP_TOKEN;
    if (token != null) {
        if (config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
};

class HttpInstance {

    private static instance: AxiosInstance

    static getInstance<T>(config: AxiosRequestConfig) {
        if (!this.instance) {
            const instance = axios.create({
                baseURL: process.env.ERP_URI,
                headers: {
                    "Content-type": "application/json",
                    // 'Cache-Control': 'no-cache',
                    // 'Pragma': 'no-cache',
                    // 'Expires': '0',
                },
                withCredentials: true,
            });

            instance.interceptors.request.use(injectToken);

            this.instance = instance
        }
        return this.instance.request<T>(config)
    }

}

export default HttpInstance;
