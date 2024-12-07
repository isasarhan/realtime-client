import { IChannel } from "@/types";
import httpService from "../axios";


const useChannels = () => {
    const instance = httpService.instance
    let url = `/channels`;

    const getAllChannels = async (token: string) => {
        return httpService.assignToken(token) ?
            await instance.get(`${url}`).then((res) => {
                return res.data
            }) : []
    }

    const getAllUserChannels = async (token: string, id: string) => {
        return httpService.assignToken(token) ?
            await instance.get(`${url}/user/${id}`).then((res) => {
                return res.data
            }) : []
    }

    const addChannel = async (token: string, channel: IChannel) => {
        return httpService.assignToken(token) ?
            await instance.post(`${url}`, channel).then((res) => {
                return res.data
            }) : {}
    }

    return { getAllChannels, getAllUserChannels, addChannel }
}

export default useChannels