import React, { FC } from 'react';
import MessageBar from './components/message-bar';
import MessageContainer from './components/message-container';
import ChatHeader from './components/chat-header';

export interface ContactModuleProps {}

const ContactModule: FC<ContactModuleProps> = () => {
  return (
    <div className="fixed top-0 h-screen flex flex-col md:static md:flex-1">
        <ChatHeader/>
        <MessageContainer/>
        <MessageBar/>
    </div>
  );
};

export default ContactModule;