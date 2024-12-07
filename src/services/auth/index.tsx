import httpService from '../axios';

interface User {
    email: string,
    password: string
}
const useAuth = () => {
    const instance = httpService.instance
    let url = `/auth`;
    const login = async (user: User) => {
        return await instance.post(`${url}/login`, user).then((res)=>{
            return res.data
        })
        
    };
    return { login };
}

export default useAuth;
