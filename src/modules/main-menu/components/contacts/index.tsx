import SearchInput from '@/common/SearchInput';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

export interface ContactsListProps { }

const ContactsList: FC<ContactsListProps> = () => {
    const { t } = useTranslation()

    const handleSearch = () => {

    }
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

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactsList;