'use client'
import React, { ReactNode } from 'react'
import SocketProvider from './SocketProvider'
import { SnackbarProvider } from 'notistack'
import UserProvider from './UserProvider'
import DarkModeProvider from './ModeProvider'
import TailwindSnackbarProvider from './SnackbarProvider'

interface ProvidersProps {
    children: ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <UserProvider>
            <DarkModeProvider>
                <SocketProvider>
                    <SnackbarProvider maxSnack={3}>
                        <TailwindSnackbarProvider>
                            {children}
                        </TailwindSnackbarProvider>
                    </SnackbarProvider>
                </SocketProvider>
            </DarkModeProvider>
        </UserProvider>
    )
}

export default Providers
