import Navbar from '@/common/Navbar'
import SearchInput from '@/common/SearchInput'
import React from 'react'
import ChatList from '../ChatList'
import ChatContainer from '../chat-container'

type Props = {}

const MainMenu = (props: Props) => {
    return (
        <div className='flex h-screen overflow-hidden'> {/* Prevent content overflow with overflow-hidden */}
            <Navbar />
            {/* Set height to full with flex-grow */}
            <div className='w-1/4 shadow shadow-slate-300 bg-slate-100 p-6 flex flex-col h-full'>
                <div className='mb-4'>
                    <h2 className='text-xl text-slate-700 font-bold'>Chats</h2>
                    <SearchInput />
                </div>
                {/* Ensure this container takes up the remaining space */}
                <div className='flex-grow overflow-y-auto'>
                    <ChatList />
                </div>
            </div>
            <div className='w-full'>
                <ChatContainer />
            </div>
        </div>
    )
}

export default MainMenu
