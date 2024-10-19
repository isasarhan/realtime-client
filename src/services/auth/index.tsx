import useAxios from '../axios';

interface User {
    email: string,
    password: string
}
const useAuth = () => {
    const instance = useAxios()
    var url = `/auth`;
    const login = async (user: User) => {
        let res = await instance.post(`${url}/login`, user)
        return res.data
    };
    return { login };
}

export default useAuth;
