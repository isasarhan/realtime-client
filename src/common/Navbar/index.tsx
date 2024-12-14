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
import { useTranslation } from 'react-i18next'
import Dropdown, { Direction } from '../Dropdown'
import Cookies from 'js-cookie'
type NavbarProps = {}

const Navbar: FC<NavbarProps> = () => {
    const { signOut } = useUserContext()
    const router = useRouter()
    const { setSelectedMenu } = useAppStore()
    const { darkMode, toggleDarkMode } = useDarkModeContext()
    const { i18n, t } = useTranslation()
    const signOutHandler = () => {
        signOut()
        router.refresh()
    }
    const handleMenuClick = (menu: MenuItems) => {
        setSelectedMenu(menu)
    }
    interface Ilang {
        nativeName: string
    }
    const lngs: Record<string, Ilang> = {
        en: { nativeName: 'English' },
        ar: { nativeName: 'Arabic' },
        fr: { nativeName: 'French' }
    }

    const langSwitchHandler = (lng: string) => {
        i18n.changeLanguage((lng))
        Cookies.set('i18next', lng)
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
                    <IconButton className='text-slate-400 focus:!text-white' icon={Contacts}
                        onClick={() => handleMenuClick(MenuItems.Contacts)} />
                    <IconButton className='text-slate-400 focus:!text-white' icon={Settings}
                        onClick={() => handleMenuClick(MenuItems.Settings)} />
                </div>

                <div className='flex flex-col items-center space-y-5 justify-between'>
                    <Dropdown direction={Direction.Right} icon={Globe}
                        className='text-slate-400 focus:!text-white' iconStyle='w-6 h-7'>
                        {Object.keys(lngs).map((lng) => (
                            <button key={lng} className='z-50 cursor-pointer disabled:text-violet-500 disabled:text-opacity-55 disabled:font-semibold'
                                disabled={i18n.resolvedLanguage === lng}
                                onClick={() => langSwitchHandler(lng)}>{lngs[lng].nativeName}
                            </button>
                        ))}
                    </Dropdown>
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