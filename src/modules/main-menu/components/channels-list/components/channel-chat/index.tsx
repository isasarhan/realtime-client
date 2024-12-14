import type { FC } from 'react';
import './style.css'
import { useAppStore } from '@/store';
import { IChannel } from '@/types';


interface ChannelContainerProps {
    channel: IChannel
}

const ChannelContainer: FC<ChannelContainerProps> = ({ channel }) => {
    const { setSelectedChannel } = useAppStore()
    return (
        <button onClick={() => { setSelectedChannel(channel) }}
            className='contactBtn'>
            <div className='flex w-full items-center gap-3'>
                <div className='flex items-center justify-center rounded-full transition-all overflow-hidden bg-violet-200 h-9 w-9'>
                    <span className='text-violet-600'>
                        {channel.name.charAt(0).toUpperCase()}
                    </span>
                </div>
                <h2>
                    #{channel.name}
                </h2>
            </div>
        </button>
    );
}

export default ChannelContainer;
