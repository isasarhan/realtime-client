import Navbar from '@/common/Navbar'
import SearchInput from '@/common/SearchInput'
import React from 'react'
import ChatList from '../ChatList'

type Props = {}

const MainMenu = (props: Props) => {
    return (
        <div className='flex '>
            <Navbar />
            <div className='w-1/4 shadow shadow-slate-300 bg-slate-100 p-6'>
                <div className='mb-4'>
                    <h2 className='text-xl text-slate-700 font-bold'>Chats</h2>
                    <SearchInput />
                </div>
                <ChatList />
            </div>
        </div>
    )
}

export default MainMenu
