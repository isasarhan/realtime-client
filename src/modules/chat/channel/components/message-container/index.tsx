'use client'
import { useEffect, useRef, FC } from 'react';
import Message from './components/message';
import './style.css'
import { useAppStore } from '@/store';
import useChat from '@/services/messages';
import { useUserContext } from '@/context/UserProvider';

interface MessageContainerProps { }

const MessageContainer: FC<MessageContainerProps> = () => {
    const { selectedChat, setMessages, messages } = useAppStore()
    const { getMessages } = useChat()
    const { token, user } = useUserContext()

    useEffect(() => {
        const retreiveMessages = async () => {
            if (!selectedChat || !selectedChat._id || !token) return
            const { messages: receivedMessages } = await getMessages(token, selectedChat._id)
            setMessages(receivedMessages)
        }
        retreiveMessages()
    }, [selectedChat, token])

    const isMessageSent = (id: string) => {
        return user?._id === id
    }
    const anchor = useRef<HTMLSpanElement | null>(null);
    useEffect(() => {
        anchor?.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])
    return (
        <div className='messageContainer flex-grow overflow-y-auto p-4'>
            {
                messages.length > 0 && selectedChat && messages.map(message => (<Message message={message.content} isSender={isMessageSent(message.sender)} />))
            }
            <span ref={anchor}></span>
        </div>
    )
}

export default MessageContainer;
