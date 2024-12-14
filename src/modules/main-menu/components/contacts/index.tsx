import SearchInput from '@/common/SearchInput';
import useContacts from '@/services/contact';
import { IUser } from '@/types';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactListByLetter from './components/contact-list-by-letter';

export interface ContactsListProps { }

const ContactsList: FC<ContactsListProps> = () => {
    const { t } = useTranslation()
    const { getAllContacts } = useContacts()
    const [contacts, setContacts] = useState<IUser[]>([])

    const handleSearch = () => {

    }
    useEffect(() => {
        const getAll = async () => {
            const result = await getAllContacts()
            const filtered: IUser[] = result.sort((a: IUser, b: IUser) => {
                const nameA = a.firstName.toUpperCase()
                const nameB = b.firstName.toUpperCase()
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            setContacts(filtered)
        }
        getAll()
    }, [])
    return (
        <>
            <div className='p-5'>
                <div className='flex justify-between'>
                    <h2 className='text-xl text-slate-700 font-bold dark:!text-white'>{t("contacts.title")}</h2>
                </div>
                <SearchInput handleSearch={handleSearch} />
            </div>
            <div className='flex-grow overflow-y-auto p-3'>
                <div className="flex flex-col h-full chatList relative">
                    <div className="flex-grow overflow-y-auto m-3">
                        <ul>
                            {
                                contacts && <ContactListByLetter contacts={contacts}/>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactsList;