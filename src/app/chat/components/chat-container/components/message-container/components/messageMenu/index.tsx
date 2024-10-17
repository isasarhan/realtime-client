'use client'
import { ThreeDots } from '@/assets/icons';
import { useEffect, useState, type ButtonHTMLAttributes, type FC, type ReactNode } from 'react';
import './style.css'

interface MessageMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
}


const MessageMenu: FC<MessageMenuProps> = () => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(prev => !prev)
    }
    useEffect(() => { }, [open])
    return (
        <div className='messageMenu'>
            <button className='menu ' onClick={handleClick}><ThreeDots /></button>
            <div className={`dropDown  ${open ? 'active' : ''}`}>
                <div>Edit</div>
                <div>Delete</div>
            </div>
        </div>
    )
}

export default MessageMenu;
