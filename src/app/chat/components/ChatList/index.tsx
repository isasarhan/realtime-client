import React, { useState } from 'react';
import ContactChatContainer from './components/contactChat';

type Props = {};

const ChatList = (props: Props) => {

    return (
        <div className="flex flex-col h-full chatList relative">
            <div className="text-lg text-slate-700 font-bold mb-2">Recent</div>
            <div className="flex-grow overflow-y-auto">
                <ul>
                    <ContactChatContainer />
                    <ContactChatContainer />
                    <ContactChatContainer />
                    <ContactChatContainer />
                    <ContactChatContainer />
                    <ContactChatContainer />
                    <ContactChatContainer />
                    <ContactChatContainer />
                    <ContactChatContainer />
                    <ContactChatContainer />
                </ul>
            </div>
        </div>
    );
};

export default ChatList;
