'use client'
import { io, Socket } from 'socket.io-client'
import React, { createContext, useContext, useRef, useEffect, ReactNode } from 'react'

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
        socket.current = io("http://localhost:4200", {
            withCredentials: true,
            query: { userId: "671347b8d7476447def9281e" },
        })

        socket.current.on("connect", () => {
            console.log("Connected to socket server with ID:", socket.current?.id)
        })

        socket.current.on("connect_error", (error) => {
            console.error("Connection error:", error)
        })

        socket.current.on("receiveMessage", (message) => {
            console.log("New message received:", message)
        })

        return () => {
            socket.current?.disconnect()
            console.log("Disconnected from socket server")
        }
    }, [])

    return (
        <SocketContext.Provider value={{ socket: socket.current }}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider

export const useSocket = () => {
    const context = useContext(SocketContext)
    if (!context) {
        throw new Error('useSocket must be used within a SocketProvider')
    }
    return context
}
