import httpService from "../axios";

const useChat = () => {
    const instance = httpService.instance
    let url = `/messages`;

    const getMessages = async (token: string, receiver: string) => {
        return httpService.assignToken(token) ?
            await instance.get(`${url}/all/${receiver}`).then((res) => {
                return res.data
            }) : null
    }
    return { getMessages }
}

export default useChat