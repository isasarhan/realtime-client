'use client'
import Accordion from '@/common/Accordion';
import { FC, useState } from 'react';
import ProfileImage from './components/profileImg';


interface SettingsProps {
}

const Settings: FC<SettingsProps> = ({ }) => {
    const accordionData = [
        {
            title: "Personal Info",
            content: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS...",
        },
        {
            title: "Privacy",
            content: <p>"Flowbite is first conceptualized and designed using the Figma software..."</p>,
        },
        {
            title: "Security",
            content: "The main difference is that the core components from Flowbite are open source under the MIT license...",

        },
        {
            title: "Help",
            content: "The main difference is that the core components from Flowbite are open source under the MIT license...",
        }

    ];
    return (
        <div className='h-full flex flex-col'>
            <div className='p-5'>
                <h2 className='text-xl text-slate-700 font-bold dark:text-white'>Setting</h2>
            </div>
            <div className="p-5">
                <ProfileImage />
            </div>
            <div className='flex-grow overflow-y-auto p-2'>
                <Accordion accordionItems={accordionData} />
            </div>
        </div>
    );
};

export default Settings;
