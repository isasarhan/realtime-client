import React, { FC } from 'react';
import ChannelHeader from './components/chat-header';
import MessageContainer from './components/message-container';
import MessageBar from './components/message-bar';


export interface ChannelModuleProps { }

const ChannelModule: FC<ChannelModuleProps> = () => {
    return (
        <div className="fixed top-0 h-screen flex flex-col md:static md:flex-1">
            <ChannelHeader />
            <MessageContainer />
            <MessageBar />
        </div>
    );
};

export default ChannelModule;