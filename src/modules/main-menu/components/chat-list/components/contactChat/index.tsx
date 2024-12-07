import type { FC } from 'react';
import Image from 'next/image';
import './style.css'
import { useAppStore } from '@/store';
import { IUser } from '@/types';


interface ContactContainerProps {
    contact: IUser
}

const ContactContainer: FC<ContactContainerProps> = ({ contact }) => {
    const { setSelectedChat } = useAppStore()
    return (
        <button onClick={() => { setSelectedChat(contact) }}
            className='contactBtn'>
            <span className='me-3'>
                <Image
                    src={'/avatars/me.png'}
                    alt=''
                    className='rounded-full transition-all overflow-hidden'
                    width="45"
                    height="45"
                />
            </span>
            <div className="flex flex-col w-full items-start">
                <div className='flex justify-between items-center w-full'>
                    <div className='font-medium text-base'>{contact.firstName + " " + contact.lastName}</div>
                    <div className='text-xs text-slate-500 dark:!text-slate-300'>02:50 PM</div>
                </div>
                <p className='text-sm font-normal dark:!text-slate-300'>hello issa how are you</p>
            </div>
        </button>
    );
}

export default ContactContainer;
