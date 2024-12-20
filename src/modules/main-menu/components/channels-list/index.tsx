import SearchInput from '@/common/SearchInput';
import { useUserContext } from '@/context/UserProvider';
import useChannels from '@/services/channels';
import { useAppStore } from '@/store';
import { IChannel } from '@/types';
import React, { FC, useEffect, useState } from 'react';
import AddChannelModal from './components/add-channel-modal';
import { Add } from '@/assets/icons';
import ChannelContainer from './components/channel-chat';
import { useTranslation } from 'react-i18next';

export interface ChannelsListProps {

}
const ChannelsList: FC<ChannelsListProps> = () => {
    const [channels, setChannels] = useState<IChannel[]>([])
    const { getAllUserChannels } = useChannels()
    const { token, user } = useUserContext()
    const [openModal, setOpenModal] = useState(false)
    const [filteredChannels, setFilteredChannels] = useState<IChannel[]>([])
    const { t } = useTranslation()

    const handleSearch = (query: string) => {
        if (query === '') return setFilteredChannels(channels)
        const trimmedQuery = query.toLowerCase().trim()
        const filtered = channels.filter(channel => channel.name.toLowerCase().includes(trimmedQuery))
        setFilteredChannels(filtered)
    }
    useEffect(() => {
        const getAll = async () => {
            if (user?._id) {
                const result = await getAllUserChannels(token, user?._id)
                setChannels(result)
                setFilteredChannels(result)
            }
        }
        getAll()
    }, [token])

    const handleOpenModal = () => {
        setOpenModal(true)
    }
    return (
        <>
            <div className='p-5'>
                <div className='flex justify-between'>
                    <h2 className='text-xl text-slate-700 font-bold dark:!text-white'>{t("channels.title")}</h2>
                    <Add className='h-5 w-5 cursor-pointer' onClick={handleOpenModal} />
                </div>
                <AddChannelModal openModal={openModal} onCancel={() => setOpenModal(false)}
                    title='Create New Channel' description='This is the content of the modal. You can put anything here!' />
                <SearchInput handleSearch={handleSearch} />
            </div>
            <div className='flex-grow overflow-y-auto p-3'>
                <div className="flex flex-col h-full chatList relative">
                    <div className="flex-grow overflow-y-auto m-3">
                        <ul>
                            {
                                filteredChannels && filteredChannels.map((channel, index) => (
                                    <ChannelContainer channel={channel} key={index} />
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChannelsList;