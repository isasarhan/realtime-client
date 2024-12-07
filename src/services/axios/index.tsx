import { SERVER } from "@/lib/config";
import axios, { AxiosInstance } from "axios";
class HttpService {
    public instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL: SERVER + "/api",
            timeout: 30000,
            timeoutErrorMessage: "Time out !",
        });
        this.instance.interceptors.response.use(null, error => {
            const expectedError =
                error.response &&
                error.response.status >= 400 &&
                error.response.status < 500;

            if (!expectedError) {
                console.log(error);
            }
            return Promise.reject(error);
        });

    }
    assignToken = (token: string) => {
        if (!token || token === '') return false
        this.instance.interceptors.request.use(config => {
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        }, error => {
            return Promise.reject(error);
        });
        return true
    }
}

export default new HttpService()

