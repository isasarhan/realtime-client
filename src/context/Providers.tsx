'use client'
import React, { ReactNode } from 'react'
import SocketProvider from './SocketContext'
import { SnackbarProvider } from 'notistack'

interface ProvidersProps {
    children: ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <>
            <SocketProvider>
                <SnackbarProvider maxSnack={3}>
                    {children}
                </SnackbarProvider>
            </SocketProvider>
        </>
    )
}

export default Providers
