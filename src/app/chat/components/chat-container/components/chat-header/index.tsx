import { Phone, Search, User, Video } from '@/assets/icons';
import Image from 'next/image';
import type { FC } from 'react';
import './style.css'
import IconButton from '@/common/IconButton';

interface ChatHeaderProps { }

const ChatHeader: FC<ChatHeaderProps> = () => {
    return (
        <div className='chatHeader border-b-2 border-slate-200 '>
            <div className='flex p-4 items-center justify-between '>
                <div className='flex items-center'>
                    <span className='me-3'>
                        <Image
                            src={'/avatars/me.png'}
                            alt=''
                            className='rounded-full transition-all overflow-hidden'
                            width="45"
                            height="45"
                        />
                    </span>
                    <h2 className='font-medium'>Issa Sarhan</h2>
                </div>
                <div className='flex space-x-5'>
                    <IconButton icon={Search} iconClassName='!w-5 !h-5'/>
                    <IconButton icon={Phone} iconClassName='!w-5 !h-5'/>
                    <IconButton icon={Video} iconClassName='!w-5 !h-5'/>
                    <IconButton icon={User} iconClassName='!w-5 !h-5'/>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader;
