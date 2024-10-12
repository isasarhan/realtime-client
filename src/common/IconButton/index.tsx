import { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import './style.css';
import { IconType } from 'react-icons';

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode;
    className?: string; 
    iconClassName?: string; 
    icon: IconType; 
};

const IconButton: FC<IconButtonProps> = ({ children, icon: Icon, className, iconClassName, ...rest }) => {
    return (
        <button className={`icon-button text-common ${className}`} {...rest}>
            {Icon && <Icon className={`icon ${iconClassName}`} />}
            {children}
        </button>
    );
};

export default IconButton;
