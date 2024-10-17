'use client'
import { ThreeDots } from '@/assets/icons';
import { useEffect, useState, type ButtonHTMLAttributes, type FC, type ReactNode } from 'react';
import './style.css'

interface MenuPopUpProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
}


const MenuPopUp: FC<MenuPopUpProps> = ({children}) => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(prev => !prev)
    }
    useEffect(() => { }, [open])
    return (
        <div className='menuPopUp'>
            <button className='menu ' onClick={handleClick}><ThreeDots /></button>
            <div className={`dropDown  ${open ? 'active' : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default MenuPopUp;
