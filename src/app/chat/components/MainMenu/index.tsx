import Navbar from '@/common/Navbar'
import SearchInput from '@/common/SearchInput'
import React from 'react'
import ChatList from '../ChatList'
import ChatContainer from '../chat-container'

type Props = {}

const MainMenu = (props: Props) => {
    return (
        <> {/* Prevent content overflow with overflow-hidden */}
            <Navbar />
            {/* Set height to full with flex-grow */}
            <div className='w-1/4 shadow shadow-slate-300 bg-slate-100  flex flex-col h-full'>
                <div className='p-5'>
                    <h2 className='text-xl text-slate-700 font-bold'>Chats</h2>
                    <SearchInput />
                </div>
                <div className='flex-grow overflow-y-auto p-3'>
                    <ChatList />
                </div>
            </div>
            
        </>
    )
}

export default MainMenu
