import { IChannel } from "@/types";
import httpService from "../axios";


const useChannels = () => {
    const instance = httpService.instance
    let url = `/channels`;

    const getAllChannels = async () => {
        return await instance.get(`${url}`).then((res) => {
            return res.data
        })
    }

    const getAllUserChannels = async (id: string) => {
        return await instance.get(`${url}/user/${id}`).then((res) => {
            return res.data
        })
    }

    const addChannel = async (channel: IChannel) => {
        return await instance.post(`${url}`, channel).then((res) => {
            return res.data
        })
    }

    return { getAllChannels, getAllUserChannels, addChannel }
}

export default useChannels