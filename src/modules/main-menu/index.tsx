'use client'
import Navbar from '@/common/Navbar'
import React from 'react'
import ChatList from './components/chat-list'
import Settings from './components/settings'
import { MenuItems, useAppStore } from '@/store'
import ChannelsList from './components/channels-list'
import Profile from './components/profile'
import ContactsList from './components/contacts'

type Props = {}

const MainMenuModule = (props: Props) => {
    const { selectedMenu } = useAppStore()
    const renderMenu = () => {        
        switch (selectedMenu) {
            case MenuItems.Profile: return <Profile />
            case MenuItems.Chats: return <ChatList />
            case MenuItems.Contacts: return <ContactsList/>
            case MenuItems.Channels: return <ChannelsList />
            case MenuItems.Settings: return <Settings />
            default: <></>
        }
    }
    return (
        <> {/* Prevent content overflow with overflow-hidden */}
            <Navbar />
            {/* Set height to full with flex-grow */}
            <div className='w-1/4 shadow shadow-slate-300 bg-slate-100  flex flex-col h-full dark:bg-slate-600 dark:!text-white'>
                {renderMenu()}
            </div>

        </>
    )
}

export default MainMenuModule
