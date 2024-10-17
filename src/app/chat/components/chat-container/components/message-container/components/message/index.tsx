import type { FC } from 'react';
import './style.css'
import { Clock, ThreeDots } from '@/assets/icons';
import MenuPopUp from '@/common/menuPopUp';
interface MessageProps {
    message: string,
    date?: string,
    isSender: boolean
}

const Message: FC<MessageProps> = ({ message, isSender }) => {
    return (
        <div className="messageWrapper w-full">
            <div className={`${isSender ? 'sender' : 'receiver'}`}>
                <div className='message relative'>
                    {message}
                    <span className='clock'><Clock className='me-1' /> 10:30</span>
                    <MenuPopUp>
                        <div>Edit</div>
                        <div>Delete</div>
                    </MenuPopUp>
                </div>
                <div className="triangle" />
            </div>
        </div>
    );
}

export default Message;
