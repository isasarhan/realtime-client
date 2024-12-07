import { Phone, Search, User, Video } from '@/assets/icons';
import Image from 'next/image';
import type { FC } from 'react';
import './style.css'
import IconButton from '@/common/IconButton';
import { useAppStore } from '@/store';

interface ChannelHeaderProps { }

const ChannelHeader: FC<ChannelHeaderProps> = () => {
    const { selectedChannel } = useAppStore()
    return (
        <div className='chatHeader border-b-2 border-slate-200 dark:bg-slate-900 dark:text-white'>
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
                    <h2 className='font-medium'>{selectedChannel?.name}</h2>
                </div>
                <div className='flex space-x-5'>
                    <IconButton icon={Search} />
                    <IconButton icon={Phone} />
                    <IconButton icon={Video} />
                    <IconButton icon={User} />
                </div>
            </div>
        </div>
    )
}

export default ChannelHeader;
