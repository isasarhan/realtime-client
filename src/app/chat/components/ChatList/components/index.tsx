import Image from 'next/image';
import React from 'react';
import './style.css'
type Props = {};

const ContactContainer = (props: Props) => {
    return (
        <button className='flex w-full p-2 mb-2 hover:bg-violet-500 rounded focus:bg-violet-500 focus:text-white hover:text-white'>
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
                    <div className='font-medium text-base'>Issa Sarhan</div>
                    <div className='text-xs text-slate-500'>02:50 PM</div>
                </div>
                <p className='text-sm font-normal'>hello issa how are you</p>
            </div>
        </button>
    );
};

export default ContactContainer;
