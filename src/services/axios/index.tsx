import { SERVER } from "@/lib/config";
import axios from "axios";

const useAxios = () => {

    const instance = axios.create({
        baseURL: SERVER + "/api",
        timeout: 30000,
        timeoutErrorMessage: "Time out !",
    });

    instance.interceptors.request.use(config => {
        return config;
    }, error => {
        return Promise.reject(error);
    });

    instance.interceptors.response.use(null, error => {
        const expectedError =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (!expectedError) {
            console.log(error);
        }
        return Promise.reject(error);
    });

    return instance;
};

export default useAxios;