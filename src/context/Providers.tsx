'use client'
import React, { ReactNode } from 'react'
import SocketProvider from './SocketProvider'
import { SnackbarProvider } from 'notistack'
import UserProvider from './UserProvider'
import DarkModeProvider from './ModeProvider'
import TailwindSnackbarProvider from './SnackbarProvider'
import I18nProvider from './TranslationProvider'

interface ProvidersProps {
    children: ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <UserProvider>
            <DarkModeProvider>
                <SocketProvider>
                    <I18nProvider>
                    <SnackbarProvider maxSnack={3}>
                        <TailwindSnackbarProvider>
                            {children}
                        </TailwindSnackbarProvider>
                    </SnackbarProvider>
                    </I18nProvider>
                </SocketProvider>
            </DarkModeProvider>
        </UserProvider>
    )
}

export default Providers
