import Image from 'next/image'
import React, { FC } from 'react'
import './style.css'
import Accordion from '@/common/Accordion'
import { ThreeDots } from '@/assets/icons'
export interface ProfileProps { }

const Profile: FC<ProfileProps> = () => {
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
    ]
    return (
        <>
            <div className='profile p-5'>
                <div className="flex items-center justify-between">
                    <h2 className='text-xl text-slate-700 font-bold dark:!text-white'>Profile</h2>
                    <span className=' flex items-center justify-center'><ThreeDots className='menuIcon'/></span>
                </div>
                <div className='flex justify-center items-center flex-col mt-6'>
                    <div className="userImage">
                        <Image src="/avatars/me.png" alt="" width="90" height="90" />
                    </div>
                    <br />
                    <h2>Issa Sarhan</h2>
                    <div className=' flex items-center justify-center gap-2'>
                        <span className='border-4 border-green-400 rounded-full'></span>
                        <span>active</span>
                    </div>
                    <div className="flex-grow border mt-7 m-5 border-slate-200 w-full" />
                    <p className='text-slate-400 p-2'>
                        If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.
                    </p>
                    <div className='flex-grow overflow-y-auto p-2'>
                        <Accordion accordionItems={accordionData} />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Profile