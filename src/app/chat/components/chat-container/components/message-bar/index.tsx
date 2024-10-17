'use client';
import { Attachment, Emoji, Send } from '@/assets/icons';
import type { FC } from 'react';
import './style.css';
import IconButton from '@/common/IconButton';

interface MessageBarProps {}

const MessageBar: FC<MessageBarProps> = () => {
    const handleClick = () => {
        // socket?.emit("sendMessage", {
        //     sender: '6703e42dca051ceecdfdb06c',
        //     receiver: '6703e45dca051ceecdfdb070',
        //     messageType: 'text',
        //     content: 'hello',
        // });
    };

    return (
        <div className="messageInputWrapper h-32 flex items-center p-4 w-full border-t-2 border-slate-200"> 
            <div className='flex flex-grow items-center gap-5 w-full '>
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-grow messageInput rounded-xl px-4 py-2"
                />
                <IconButton className='emoji' icon={Emoji} onClick={handleClick}/>
                <IconButton className='emoji' icon={Attachment} onClick={handleClick}/>
                <IconButton className='messageBtn' icon={Send} onClick={handleClick} iconClassName='!w-6 !h-6'/>
                
            </div>
        </div>
    );
};

export default MessageBar;
