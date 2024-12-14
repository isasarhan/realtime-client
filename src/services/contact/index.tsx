import httpService from "../axios";


const useContacts = () => {
    const instance = httpService.instance
    let url = `/users`;

    const getAllContacts = async () => {
        return await instance.get(`${url}`).then((res) => {
            return res.data
        })
    }
    return { getAllContacts }
}

export default useContacts