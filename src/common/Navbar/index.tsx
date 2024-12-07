'use client'
import { FC, useEffect } from 'react'
import './style.css'
import { ChatLogo, Contacts, Globe, LogOut, Message, Moon, Settings, Sun, User, Users } from '@/assets/icons'
import Image from 'next/image'
import IconButton from '../IconButton'
import { useUserContext } from '@/context/UserProvider'
import { useRouter } from 'next/navigation'
import { MenuItems, useAppStore } from '@/store'
import { useDarkModeContext } from '@/context/ModeProvider'
import { useTailwindSnackbar, Varient } from '@/context/SnackbarProvider'
type NavbarProps = {}

const Navbar: FC<NavbarProps> = () => {
    const { signOut } = useUserContext()
    const router = useRouter()
    const { setSelectedMenu } = useAppStore()
    const { darkMode, toggleDarkMode } = useDarkModeContext()
    const { enqueueSnackbar } = useTailwindSnackbar()
    const signOutHandler = () => {
        signOut()
        router.refresh()
    }
    const handleMenuClick = (menu: MenuItems) => {
        setSelectedMenu(menu)
    }
    return (
        <nav className='navbar p-4'>
            <div className='mx-auto py-3 relative flex justify-between items-center flex-col  h-full'>
                <div>
                    <IconButton icon={ChatLogo} />
                </div>
                <div className='flex flex-col items-center space-y-5 justify-between'>
                    <IconButton className='text-slate-400 focus:!text-white' icon={User}
                        onClick={() => handleMenuClick(MenuItems.Profile)} />
                    <IconButton className='text-slate-400 focus:!text-white' icon={Message}
                        onClick={() => handleMenuClick(MenuItems.Chats)} />

                    <IconButton className='text-slate-400 focus:!text-white' icon={Users}
                        onClick={() => handleMenuClick(MenuItems.Channels)} />
                    <IconButton className='text-slate-400 focus:!text-white' icon={Contacts} />
                    <IconButton className='text-slate-400 focus:!text-white' icon={Settings}
                        onClick={() => handleMenuClick(MenuItems.Settings)} />
                </div>
                <div className='flex flex-col items-center space-y-5 justify-between'>
                    <IconButton className='text-slate-400 focus:!text-white'
                        icon={Globe} onClick={() => enqueueSnackbar({ message: 'message', varient: Varient.Primary })} />
                    <IconButton className='text-slate-400 focus:!text-white' icon={darkMode ? Moon : Sun} onClick={toggleDarkMode} />
                    <IconButton className='text-slate-400 focus:!text-white' icon={LogOut} onClick={signOutHandler} />
                    <button className='userIcon'>
                        <Image src="/avatars/me.png" alt="" width="40" height="40" />
                    </button>
                </div>
            </div>
        </nav>
    )

}

export default Navbar