import React, { FC } from 'react';
export interface ModalProps {
    title: string,
    openModal: boolean,
    description: string,
    onConfirm?(): void
    onCancel?(): void
}
const Modal: FC<ModalProps> = ({ title, description, openModal, onConfirm, onCancel }) => {
    return (
        <>
            {
                openModal && <div className='fixed transition-all inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50'>
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                        <h2 className="text-xl font-semibold mb-4">{title}</h2>
                        <p className="text-gray-700 mb-6">{description}</p>
                        <div className="flex justify-end space-x-4">
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded" onClick={onCancel}>Cancel</button>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={onConfirm}>Confirm</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Modal;