'use client'
import { io, Socket } from 'socket.io-client'
import React, { createContext, useContext, useRef, useEffect, ReactNode } from 'react'
import { useUserContext } from './UserProvider'
import { useAppStore } from '@/store'

type SocketContextType = {
    socket: Socket | null
}

const SocketContext = createContext<SocketContextType | undefined>(undefined)

type Props = {
    children: ReactNode
}

const SocketProvider = ({ children }: Props) => {
    const socket = useRef<Socket | null>(null)
    const { user } = useUserContext()
    const { addMessage } = useAppStore()

    useEffect(() => {
        if (!user) return
        socket.current = io("http://localhost:4200", {
            withCredentials: true,
            query: { userId: user._id },
        })

        socket.current.on("connect", () => {
            console.log("Connected to socket server with ID:", socket.current?.id)
        })

        socket.current.on("connect_error", (error) => {
            console.error("Connection error:", error)
        })

        socket.current.on("receiveMessage", (message) => {
            console.log("New message received:", message)
            addMessage(message)
        })

        return () => {
            socket.current?.disconnect()
            console.log("Disconnected from socket server")
        }
    }, [user])

    return (
        <SocketContext.Provider value={{ socket: socket.current }}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider

export const useSocket = (): SocketContextType => {
    const context = useContext(SocketContext)
    if (!context) {
        throw new Error('useSocket must be used within a SocketProvider')
    }
    return context
}
