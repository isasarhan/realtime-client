import React from 'react';
import ContactContainer from './components';

type Props = {};

const ChatList = (props: Props) => {
    return (
        <div className="flex flex-col h-full chatList">
            <div className="text-lg text-slate-700 font-bold mb-2">Recent</div>
            <div className="flex-grow overflow-y-auto"> {/* Allow scrolling for the chat list */}
                <ul>
                    <ContactContainer />
                    <ContactContainer />
                    <ContactContainer />
                    <ContactContainer />
                    <ContactContainer />
                    <ContactContainer />
                    <ContactContainer />
                    <ContactContainer />
                    <ContactContainer />
                    <ContactContainer />
                </ul>
            </div>
        </div>
    );
};

export default ChatList;
