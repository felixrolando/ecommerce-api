import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export abstract class HttpInstance {
    private instance: AxiosInstance;

    private get httpInstance(): AxiosInstance {
        return this.instance != null ? this.instance : this.initHttp();
    }

    private initHttp() {
        const headers = this.headers();
        const http = axios.create({
            baseURL: process.env.ERP_URI,
            headers,
            withCredentials: true,
        });

        http.interceptors.request.use(this.request, this.requestError);
        http.interceptors.response.use(this.response, this.responseError);

        return http;
    }

    private headers() {
        const headers: Readonly<Record<string, string | boolean>> = {
            Accept: "application/json",
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Credentials": true,
            "X-Requested-With": "XMLHttpRequest",
        };
        return headers
    }

    private request(config: AxiosRequestConfig): AxiosRequestConfig {
        const token = null;
        if (token != null) {
            if (config.headers) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    }

    private requestError = (error: AxiosError): Promise<AxiosError> => {
        return Promise.reject(error);
    }

    private response(response: AxiosResponse): AxiosResponse {
        return response
    }

    private responseError(error: AxiosError): Promise<AxiosError> {
        return Promise.reject(error);
    }

    protected get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.httpInstance.get<T, R>(url, config);
    }

    protected post<T = any, R = AxiosResponse<T>>(
        url: string,
        data?: T,
        config?: AxiosRequestConfig
    ): Promise<R> {
        return this.httpInstance.post<T, R>(url, data, config);
    }

    protected put<T = any, R = AxiosResponse<T>>(
        url: string,
        data?: T,
        config?: AxiosRequestConfig
    ): Promise<R> {
        return this.httpInstance.put<T, R>(url, data, config);
    }

    protected delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.httpInstance.delete<T, R>(url, config);
    }

}
