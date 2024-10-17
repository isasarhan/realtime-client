'use client';
import { Send } from '@/assets/icons';
import type { FC } from 'react';
import './style.css';

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
        <div className="h-32 flex items-center p-4 w-full border-t-2 border-slate-200"> 
            {/* Flex container for input and button */}
            <div className='flex flex-grow items-center gap-5 w-full'>
                {/* Input should take all available space */}
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-grow messageInput rounded-md px-4 py-2"
                />
                {/* Button should stay fixed */}
                <button className="messageBtn flex-shrink-0" onClick={handleClick}>
                    <span className='messageIcon'><Send /></span>
                </button>
            </div>
        </div>
    );
};

export default MessageBar;
