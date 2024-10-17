import { FC } from 'react'
import './style.css'
import { ChatLogo, Contacts, Globe, Message, Settings, Sun, User, Users } from '@/assets/icons'
import Image from 'next/image'
import IconButton from '../IconButton'
type NavbarProps = {}

const Navbar: FC<NavbarProps> = () => {
    {
        return (
            <nav className='navbar p-4'>
                <div className='mx-auto py-3 relative flex justify-between items-center flex-col  h-full'>
                    <div>
                        <IconButton icon={ChatLogo}/>
                    </div>
                    <div className='flex flex-col items-center space-y-5 justify-between'>
                        <IconButton className='text-slate-400 focus:!text-white' icon={User} />
                        <IconButton className='text-slate-400 focus:!text-white' icon={Message} />
                        <IconButton className='text-slate-400 focus:!text-white' icon={Users} />
                        <IconButton className='text-slate-400 focus:!text-white' icon={Contacts} />
                        <IconButton className='text-slate-400 focus:!text-white' icon={Settings} />
                    </div>
                    <div className='flex flex-col items-center space-y-5 justify-between'>
                        <IconButton className='text-slate-400 focus:!text-white' icon={Globe} />
                        <IconButton className='text-slate-400 focus:!text-white' icon={Sun} />
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