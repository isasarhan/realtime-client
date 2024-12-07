import { ReactNode } from "react";

export interface IUser {
    _id?: string,
    firstName: string,
    lastName: string,
    email: string,
    password?: string,
    image?: string,
    color?: number,
}

export interface IMessage {
    sender: string,
    receiver?: string,
    messageType: string,
    content: string,
    audioUrl?: string,
    fileUrl?: string,
    timestamp?: Date,
    channelId?: string,
}

export interface AccordionItem {
    title: string;
    content?: string | ReactNode;
    links?: { href: string; label: string }[];
    children?: ReactNode

}


export interface IChannel {
    name: string
    members: string[]
    admins: string[]
    createdAt?: Date
    updatedAt?: Date
    messages: string[]
    description?: string
}
