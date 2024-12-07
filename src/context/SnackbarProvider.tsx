'use client'
import { Close } from '@/assets/icons';
import { createContext, ReactNode, useContext, useEffect, useState, type FC } from 'react';

interface SnackbarProviderProps {
    children: ReactNode
}
export enum Varient {
    Primary = 'bg-violet-500 ',
    Success = 'bg-emerald-600',
}
interface EnqueueSnackbarProps {
    message: string;
    varient?: Varient
}
interface SnackbarContextType {
    max?: number;
    enqueueSnackbar({ message, varient }: EnqueueSnackbarProps): void
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined)

export const useTailwindSnackbar = () => {
    const context = useContext(SnackbarContext)
    if (!context) {
        throw new Error('useSnackbar must be used within a SnackbarProvider');
    }
    return context
}

const SnackbarProvider: FC<SnackbarProviderProps> = ({ children }) => {
    const [messages, setMessages] = useState<EnqueueSnackbarProps[]>([])
    const [show, setShow] = useState(false);

    const enqueueSnackbar = ({ message, varient }: EnqueueSnackbarProps) => {
        setMessages(prev => [...prev, { message: message, varient: varient }])
        setShow(true)
    }
    useEffect(() => {
        const resetMessages = () => {
            setTimeout(() => {
                setShow(false)
                setTimeout(() => {
                    setMessages([])
                }, 3000)
            }, 7000)
        }
        resetMessages()
    }, [messages, show])

    return (
        <SnackbarContext.Provider value={{ enqueueSnackbar }}>
            <div className="fixed top-5 right-0 space-y-2 z-50">
                {
                    messages.map((message) => (
                        <div className={`
                    ${show ? ' -translate-x-6 opacity-100' : '  -translate-x-0 opacity-0'}
                    ${message.varient}  transition-all  bg-emerald-600 text-white p-4 rounded-md  flex justify-between items-center`}>
                            <p className='text-white'>{message.message}</p>
                            <button className="text-white">
                                <span ><Close className='w-5 h-5' /></span>
                            </button>
                        </div>
                    ))
                }
            </div>
            {children}
        </SnackbarContext.Provider>
    );
}

export default SnackbarProvider;
