'use client';
import { Attachment, Emoji, Send } from '@/assets/icons';
import type { FC } from 'react';
import './style.css';
import IconButton from '@/common/IconButton';
import { useSocket } from '@/context/SocketContext';
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
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
        formState: { errors },
    } = useForm<FormData>({})
    const { socket } = useSocket()

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log('data', data);
        
        socket?.emit("sendMessage", {
            sender: '671347b8d7476447def9281e',
            receiver: '67135161d8a23d73b4b771c1',
            messageType: 'text',
            content: data.content,
        });
    };

    return (
        <div className="messageInputWrapper h-32 flex items-center p-4 w-full border-t-2 border-slate-200">
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-grow items-center gap-5 w-full '>
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-grow messageInput rounded-xl px-4 py-2"
                    {...register("content")}
                />
                <IconButton className='emoji' icon={Emoji}  />
                <IconButton className='emoji' icon={Attachment} />
                <IconButton className='messageBtn' icon={Send} type='submit' iconClassName='!w-6 !h-6' />
            </form>

        </div>
    );
};

export default MessageBar;
