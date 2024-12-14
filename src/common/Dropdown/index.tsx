'use client'
import React, { FC, ReactNode, useEffect, useState } from 'react';
import './style.css'
import { ThreeDots } from '@/assets/icons';
import { IconType } from 'react-icons';

export enum Direction {
    Left = 'left',
    Right = 'right',
    Center = 'center',
}

export interface DropdownProps {
    children: ReactNode
    direction: Direction
    icon?: IconType;
    className?: string;
    iconStyle?: string;

}

const Dropdown: FC<DropdownProps> = ({ children, iconStyle, className, direction, icon:Icon }) => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(prev => !prev)
    }
    return (
        <div className={`${className} menuPopUp relative`}>
            <button className='menu ' onClick={handleClick}>{Icon? <Icon className={iconStyle}/>: <ThreeDots className={iconStyle}/>}</button>
            <div className={`${direction} dropDown  ${open ? 'active' : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default Dropdown;