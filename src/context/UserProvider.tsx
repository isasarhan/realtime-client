'use client'
import useAuth from '@/services/auth';
import { createContext, useContext, useEffect, useState, type FC, type ReactNode } from 'react';
import Cookies from 'js-cookie'; 
import { IUser } from '@/types';

interface UserProviderProps {
    children: ReactNode
}

interface UserContextType {
    user: IUser | undefined,
    token: string,
    isLoggedIn: boolean,
    signIn(email: string, password: string): Promise<IUser>
    signOut(): void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }
    return context;
};


const UserProvider: FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<IUser>()
    const [token, setToken] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { login } = useAuth()

    const signIn = async (email: string, password: string) => {
        return await login({ email, password }).then((data) => {
            const { token, user } = data            
            setUser(user)
            setToken(token)
            Cookies.set('token', token)
            Cookies.set('currentUser', JSON.stringify(user))
            return data
        })
    }
    const signOut = () => {
        Cookies.remove('token')
        Cookies.remove('currentUser')
        setIsLoggedIn(false);
        setToken('')
        setUser({ firstName: '', lastName: '', email: '' })
        return
    }

    useEffect(() => {
        const retreiveUserInfo = () => {
            const storedUser = Cookies.get("currentUser")
            const storedToken = Cookies.get('token')
            if (storedUser && storedToken) {
                const parsedUser = JSON.parse(storedUser);
                setIsLoggedIn(true)
                setUser(parsedUser)
                setToken(storedToken)
            }
        }
        retreiveUserInfo()
    }, [token])
    return (
        <UserContext.Provider value={{ token: token, user: user, signIn: signIn, signOut: signOut, isLoggedIn: isLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
