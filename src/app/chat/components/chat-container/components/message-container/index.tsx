import type { FC } from 'react';
import Message from './components/message';
import './style.css'

interface MessageContainerProps { }

const MessageContainer: FC<MessageContainerProps> = () => {
    return (
        <div className='messageContainer flex-grow overflow-y-auto p-4'>
            <Message message='Hey! How have you been?' isSender={true} />
            <Message message='I’m doing good, thanks! How about you?' isSender={false} />
            <Message message='Been busy with work, but all good.' isSender={true} />
            <Message message='I can relate. Work has been hectic here too.' isSender={false} />
            <Message message='Any plans for the weekend?' isSender={true} />
            <Message message='I’m thinking of going hiking. You?' isSender={false} />
            <Message message='Sounds fun! I might just relax and catch up on some reading.' isSender={true} />
            <Message message='That’s a good idea, we all need some downtime.' isSender={false} />
            <Message message='By the way, did you finish that project?' isSender={true} />
            <Message message='Yes! Just submitted it yesterday.' isSender={false} />
            <Message message='Awesome! That must feel great.' isSender={true} />
            <Message message='Definitely! Now onto the next challenge.' isSender={false} />
            <Message message='Always something new! Let me know if you need help.' isSender={true} />
            <Message message='Will do, thanks!' isSender={false} />
            <Message message='Hey, did you hear about the new release?' isSender={true} />
            <Message message='Yes, it looks amazing! Can’t wait to try it out.' isSender={false} />
            <Message message='Same here! Let’s test it together.' isSender={true} />
            <Message message='Good idea! I’ll message you when I’m ready.' isSender={false} />
            <Message message='Cool, looking forward to it.' isSender={true} />
            <Message message='Hey, just wanted to check in and see how you are doing. Hope everything is going well on your end!' isSender={true} />

        </div>
    )
}

export default MessageContainer;
