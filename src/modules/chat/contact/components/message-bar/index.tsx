'use client';
import { Attachment, Emoji, Send } from '@/assets/icons';
import type { FC } from 'react';
import './style.css';
import IconButton from '@/common/IconButton';
import { useSocket } from '@/context/SocketProvider';
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useUserContext } from '@/context/UserProvider';
import { useAppStore } from '@/store';
interface MessageBarProps { }
interface FormData {
    sender: string;
    receiver: string;
    messageType: string;
    content: string;
}
const MessageBar: FC<MessageBarProps> = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormData>({})
    const { socket } = useSocket()
    const { token, user } = useUserContext()
    const { selectedChat, addMessage } = useAppStore()

    const onSubmit: SubmitHandler<FormData> = (data) => {
        setValue('content','')
        socket?.emit("sendMessage", {
            sender: user?._id,
            receiver: selectedChat?._id,
            messageType: 'text',
            content: data.content,
        });
        if(!user?._id) return
        addMessage({
            sender: user?._id,
            receiver: selectedChat?._id,
            messageType: "text",
            content: data.content,
        })
    };

    return (
        <div className="messageInputWrapper h-20 flex items-center p-7 w-full border-t-2 border-slate-200">
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-grow items-center gap-4 w-full '>
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-grow messageInput rounded-xl px-4 py-2"
                    {...register("content")}
                />
                <IconButton className='emoji' icon={Emoji} />
                <IconButton className='emoji' icon={Attachment} />
                <IconButton className='messageBtn' icon={Send} type='submit' iconClassName='!w-6 !h-6' />
            </form>

        </div>
    );
};

export default MessageBar;
