'use client'
import React from 'react'
import './style.css'
import { Send } from '../../assets/icons'
import { useSocket } from '@/context/SocketContext'

type Props = {}
 
const MessageContainer = ({ }: Props) => {
    const { socket } = useSocket()

    const handleClick = () => {
        console.log('hi');
        
        socket?.emit("sendMessage", {
            sender: '6703e42dca051ceecdfdb06c',
            receiver: '6703e45dca051ceecdfdb070',
            messageType: 'text',
            content: 'hello',
        })
    }
    return (
        <div className="h-[10vh] flex justify-center items-center px-8  mb-5">
            <div className='flex-1 flex rounded-md items-center gap-5 pr-5'>
                <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 p-5 bg-transparent rounded-md focus:border-none focus:outline-none"
                />
            </div>
            <div className='flex-1'>
                <button className="messageBtn" onClick={()=>handleClick()}>
                    <span className='messageIcon'><Send /></span>
                </button>
            </div>
        </div>
    )
}
export default  MessageContainer