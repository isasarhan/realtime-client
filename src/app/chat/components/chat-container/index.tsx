import { FC } from 'react'
import ChatHeader from './components/chat-header'
import MessageBar from './components/message-bar'
import MessageContainer from './components/message-container'

interface Props {}

const ChatContainer : FC<Props> = ({}) => {
  return (
    <div>
        <ChatHeader/>
        <MessageContainer/>
        <MessageBar/>
    </div>
  )
}

export default ChatContainer
