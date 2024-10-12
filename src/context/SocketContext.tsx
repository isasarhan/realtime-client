'use client'
import { SERVER } from '@/lib/config' // Ensure this path is correct
import React, { createContext, useContext, ReactNode, useRef, useEffect } from 'react'
import { io, Socket } from 'socket.io-client' // Import Socket type

type SocketContextType = {
    socket: Socket | null
}

const SocketContext = createContext<SocketContextType | undefined>(undefined)

type Props = {
    children: ReactNode
}

const SocketProvider = ({ children }: Props) => {
    const socket = useRef<Socket | null>(null)

    useEffect(() => {
        socket.current = io(SERVER, {
            withCredentials: true,
            query: { userId: "6703e42dca051ceecdfdb06c" },
        });

        socket.current.on("connect", () => {
            console.log("Connected to socket server");
        });
        const handleReceiveMessage = (message: any) => {
            console.log(message);
        };

        socket.current.on("receiveMessage", handleReceiveMessage);

        return () => {
            socket.current?.disconnect()
        }
    }, [])

    return (
        <SocketContext.Provider value={{ socket: socket.current }}>
            {children}
        </SocketContext.Provider>
    )
}

export const useSocket = () => {
    const context = useContext(SocketContext)
    if (!context) {
        throw new Error('useSocket must be used within a SocketProvider')
    }
    return context
}

export default SocketProvider
