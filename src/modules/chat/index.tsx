'use client'
import React, { FC } from 'react';
import ContactModule from './contact';
import { MenuItems, useAppStore } from '@/store';
import ChannelModule from './channel';

export interface ChatModuleProps {}

const ChatModule: FC<ChatModuleProps> = () => {
    const { selectedMenu } = useAppStore()
    const renderPage = () => {
        switch (selectedMenu) {
            case MenuItems.Chats: return <ContactModule />
            case MenuItems.Channels: return <ChannelModule />

            default: <></>
        }
    }
    return (
        <>
            {renderPage()}
        </>
    );
};

export default ChatModule;