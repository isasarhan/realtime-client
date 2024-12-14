'use client'
import React, { useEffect, useState } from 'react';
import ContactChatContainer from './components/contactChat';
import SearchInput from '@/common/SearchInput';
import useContacts from '@/services/contact';
import { useUserContext } from '@/context/UserProvider';
import { IUser } from '@/types';
import { useTranslation } from 'react-i18next';

type Props = {};

const ChatList = (props: Props) => {
    const [contacts, setContacts] = useState<IUser[]>([])
    const [filteredContacts, setFilteredContacts] = useState<IUser[]>([])
    const { getAllContacts } = useContacts()
    const { token, user } = useUserContext()
    const { t } = useTranslation()

    const handleSearch = (query: string) => {
        if (query === '') return setFilteredContacts(contacts)
        const trimmedQuery = query.toLowerCase().trim()
        const filtered = contacts.filter(contact => contact.firstName.toLowerCase().includes(trimmedQuery)
            || contact.lastName.toLowerCase().includes(trimmedQuery)
            || contact.email.toLowerCase().includes(trimmedQuery)
            || (contact.firstName+" "+contact.lastName).trim().toLowerCase().includes(trimmedQuery)
        )
        setFilteredContacts(filtered)
    }
    useEffect(()=>{},[filteredContacts])
    console.log(token);
    
    useEffect(() => {
        const getAll = async () => {
            const result = await getAllContacts(token)
            const filtered: IUser[] = result.filter((contact: IUser) => contact._id !== user?._id);
            setContacts(filtered)
            setFilteredContacts(filtered)
        }
        getAll()
    }, [token])
    return (
        <>
            <div className='p-5'>
                <h2 className='text-xl text-slate-700 font-bold dark:!text-white'>{t("chats.title")}</h2>
                <SearchInput handleSearch={handleSearch} />
            </div>
            <div className='flex-grow overflow-y-auto p-3'>
                <div className="flex flex-col h-full chatList relative">
                    <div className="text-lg text-slate-700 font-bold mb-2 dark:!text-white">{t("chats.recentTitle")}</div>
                    <div className="flex-grow overflow-y-auto">
                        <ul>
                            {
                                filteredContacts && filteredContacts.map((contact, index) => (
                                    <ContactChatContainer contact={contact} key={index} />
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatList;
