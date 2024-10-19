import { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import './style.css';
import { IconType } from 'react-icons';

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode;
    className?: string;
    iconClassName?: string;
    icon: IconType;
    type?: 'button' | 'submit' | 'reset';
};

const IconButton: FC<IconButtonProps> = ({ children, icon: Icon, className, type = 'button', iconClassName, ...rest }) => {
    return (
        <button type={type} className={`icon-button text-common ${className}`} {...rest}>
            {Icon && <Icon className={`icon ${iconClassName}`} />}
            {children}
        </button>
    );
};

export default IconButton;
