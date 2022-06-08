import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

class HttpInstance {
    private instance: AxiosInstance;

    private get getInstance(): AxiosInstance {
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
        const token = process.env.ERP_TOKEN;
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
        return response.data
    }

    private responseError(error: AxiosError): Promise<AxiosError> {
        return Promise.reject(error);
    }

    public get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.getInstance.get<T, R>(url, config);
    }

    public post<T = any, R = AxiosResponse<T>>(
        url: string,
        data?: T,
        config?: AxiosRequestConfig
    ): Promise<R> {
        return this.getInstance.post<T, R>(url, data, config);
    }

    public put<T = any, R = AxiosResponse<T>>(
        url: string,
        data?: T,
        config?: AxiosRequestConfig
    ): Promise<R> {
        return this.getInstance.put<T, R>(url, data, config);
    }

    public delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.getInstance.delete<T, R>(url, config);
    }

    public getErrorData(error: AxiosError): AxiosResponse | any {
        if (error.response) {
            return error.response
        }

    }

}

export default new HttpInstance();
