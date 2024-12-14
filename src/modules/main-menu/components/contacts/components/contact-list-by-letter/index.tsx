import { Block, Delete, Share } from '@/assets/icons';
import Dropdown, { Direction } from '@/common/Dropdown';
import { IUser } from '@/types';
import React, { FC, useEffect, useState } from 'react';
export interface ContactListByLetterProps {
    contacts: IUser[];
}
const ContactListByLetter: FC<ContactListByLetterProps> = ({ contacts }) => {
    const [contactsMap, setContactsMap] = useState<Map<string, IUser[]>>()


    useEffect(() => {
        const sortContacts = () => {
            const map = new Map<string, IUser[]>()
            contacts.forEach(contact => {
                const key = contact.firstName.charAt(0).toUpperCase(); // Get the first letter of the first name
                const existingContacts = map.get(key) || []; // Get existing or initialize an empty array
                map.set(key, [...existingContacts, contact]); // Add the current contact to the array
            });
            setContactsMap(map)
            console.log(map);

        }
        sortContacts()
    }, [contacts])
    return (
        <div>
            {
                contactsMap && Array.from(contactsMap).map(([key, value]) => (
                    <div key={key} className='m-5'>
                        <p className='text-violet-500'>{key}</p>
                        <br />
                        {value.map(contact => (
                            <div className="flex justify-between">
                                <p className='ps-4'>{contact.firstName + " " + contact.lastName}</p>
                                <Dropdown direction={Direction.Left} className='p-0 m-0'>
                                    <button className='flex justify-between items-center cursor-pointer focus:text-violet-500 focus:font-semibold '>Share <Share /></button>
                                    <button className='flex justify-between items-center cursor-pointer focus:text-violet-500 focus:font-semibold'>Block <Block /></button>
                                    <button className='flex justify-between items-center cursor-pointer focus:text-violet-500 focus:font-semibold'>Remove <Delete /></button>
                                    
                                </Dropdown>
                            </div>
                        ))}
                        <br />
                    </div>
                ))
            }
        </div>
    );
};

export default ContactListByLetter;