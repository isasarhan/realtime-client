import { FC } from 'react'
import './style.css'
import { ChatLogo, Contacts, Globe, Message, Settings, Sun, User, Users } from '@/assets/icons'
import Image from 'next/image'
import IconButton from '../IconButton'
type NavbarProps = {}

const Navbar: FC<NavbarProps> = () => {
    {
        return (
            <nav className='navbar'>
                <div className='mx-auto py-3 relative flex justify-between items-center flex-col h-screen'>
                    <div>
                        <IconButton icon={ChatLogo}/>
                    </div>
                    <div className='flex flex-col items-center space-y-5 justify-between'>
                        <IconButton icon={User} />
                        <IconButton icon={Message} />
                        <IconButton icon={Users} />
                        <IconButton icon={Contacts} />
                        <IconButton icon={Settings} />
                    </div>
                    <div className='flex flex-col items-center space-y-5 justify-between'>
                        <IconButton icon={Globe} />
                        <IconButton icon={Sun} />
                        <button className='userIcon'>
                            <Image src="/avatars/me.png" alt="" width="40" height="40" />
                        </button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar