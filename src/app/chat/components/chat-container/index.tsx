import { FC } from 'react'
import ChatHeader from './components/chat-header'
import MessageBar from './components/message-bar'
import MessageContainer from './components/message-container'

interface Props {}

const ChatContainer : FC<Props> = ({}) => {
  return (
    <div className="fixed top-0 h-screen flex flex-col md:static md:flex-1">
        <ChatHeader/>
        <MessageContainer/>
        <MessageBar/>
    </div>
  )
}

export default ChatContainer
