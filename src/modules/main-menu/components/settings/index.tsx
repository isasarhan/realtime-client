'use client'
import Accordion from '@/common/Accordion';
import { FC, useState } from 'react';
import ProfileImage from './components/profileImg';
import { useTranslation } from 'react-i18next';


interface SettingsProps {
}

const Settings: FC<SettingsProps> = ({ }) => {
    const { t } = useTranslation()

    const accordionData = [
        {
            title: t("settings.personalInfo.title"),
            content: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS...",
        },
        {
            title: t("settings.privacy.title"),
            content: <p>"Flowbite is first conceptualized and designed using the Figma software..."</p>,
        },
        {
            title: t("settings.security.title"),
            content: "The main difference is that the core components from Flowbite are open source under the MIT license...",

        },
        {
            title: t("settings.help.title"),
            content: "The main difference is that the core components from Flowbite are open source under the MIT license...",
        }

    ];
    return (
        <div className='h-full flex flex-col'>
            <div className='p-5'>
                <h2 className='text-xl text-slate-700 font-bold dark:text-white'>{t("settings.title")}</h2>
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
