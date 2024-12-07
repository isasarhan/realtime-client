'use client'
import { Close } from '@/assets/icons';
import Accordion from '@/common/Accordion';
import { useUserContext } from '@/context/UserProvider';
import useContacts from '@/services/contact';
import { AccordionItem, IUser } from '@/types';
import React, { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './style.css'
import useChannels from '@/services/channels';
export interface ModalProps {
    title: string,
    openModal: boolean,
    description: string,
    onConfirm?(): void
    onCancel(): void
}
interface FormValues {
    name: string
    members: string[]
    admins: string[]
    messages: string[]
    description?: string
}
const AddChannelModal: FC<ModalProps> = ({ title, openModal, onCancel }) => {
    const [contacts, setContacts] = useState<IUser[]>([])
    const { token, user } = useUserContext()
    const { getAllContacts } = useContacts()
    const { addChannel } = useChannels()
    const { register, handleSubmit } = useForm<FormValues>()

    useEffect(() => {
        const getAll = async () => {
            const result = await getAllContacts(token)
            const filtered: IUser[] = result.filter((contact: IUser) => contact._id !== user?._id);
            setContacts(filtered)
        }
        getAll()
    }, [token])

    const ChannelList = () => {
        return (
            <div className='flex gap-3 flex-col'>
                {contacts &&
                    contacts.map((contact, index) => (
                        <>
                            <div className='flex justify-start items-center  gap-4' key={index}>
                                <input type="checkbox" id={`name-${index}`} value={contact._id} className='contactCheckBox' {...register('members')} />
                                <label htmlFor={`name-${index}`} >{contact.firstName + " " + contact.lastName}</label>
                            </div>
                        </>
                    ))
                }
            </div>
        )
    }
    const items: AccordionItem[] = [
        { title: 'Select Members', children: <ChannelList /> }
    ]

    const onSubmit: SubmitHandler<FormValues> = (values, e) => {
        e?.preventDefault()
        console.log(values);
        addChannel(token, { ...values, admins: [user?._id!], messages: [], members:[...values.members, user?._id!] }).then((response)=>{
            console.log(response);
            
        })
        // onCancel()
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 transition-all duration-300 ease-in-out ${openModal ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full transition-all ease-in-out duration-300" >
                        <div className="flex justify-between">
                            <h2 className="text-xl font-semibold mb-4">{title}</h2>
                            <Close className='h-6 w-6 cursor-pointer' onClick={onCancel} />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="group-name" className='mb-3'>Group Name</label>
                            <input type="text" className='p-1 border border-slate-200 rounded outline-slate-500' id='group-name'  {...register('name')} />
                        </div>
                        <br />
                        <div className='flex flex-col'>
                            <label htmlFor="group-description" className='mb-3'>Description</label>
                            <textarea rows={4} className='p-1 border border-slate-200 rounded outline-slate-500' id='group-description'  {...register('description')} />
                        </div>
                        <br />
                        <div >
                            <label htmlFor="group-members" className='mb-3'>Members</label>
                            <Accordion accordionItems={items} />
                        </div>
                        <br />
                        <div className="flex justify-end space-x-4">
                            <button className=" hover:bg-gray-400 text-gray-700 px-4 py-2 rounded" onClick={onCancel}>Cancel</button>
                            <button type='submit' className="bg-violet-400 hover:bg-blue-600 text-white px-4 py-2 rounded">Confirm</button>
                        </div>
                    </div>
                </div>
            </form>

        </>
    );
};

export default AddChannelModal;