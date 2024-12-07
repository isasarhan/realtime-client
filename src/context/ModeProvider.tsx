'use client'
import { useContext, createContext, type FC, ReactNode, useState, useEffect } from 'react'

interface DarkModeProviderProps {
    children: ReactNode
}

interface DarkModeContextType {
    darkMode: boolean
    toggleDarkMode(): void
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

export const useDarkModeContext = () => {
    const context = useContext(DarkModeContext)
    if (!context) {
        throw new Error('useDarkModeContext must be used within a DarkModeProvider');
    }
    return context
}

const DarkModeProvider: FC<DarkModeProviderProps> = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem('darkMode') === 'true'
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        const isDarkMode = savedTheme || prefersDark

        setDarkMode(isDarkMode)
        document.documentElement.classList.toggle('dark', isDarkMode)
    }, [])

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        document.documentElement.classList.toggle('dark', newDarkMode);
        localStorage.setItem('darkMode', `${newDarkMode}`);
    }

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeProvider
