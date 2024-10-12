import React from 'react'

type Props = {}

const ChatList = (props: Props) => {
    return (
        <div className="flex flex-col relative">
            <div className="text-lg text-slate-700 font-bold">Recent</div>
            <div className=" overflow-y-auto border border-gray-300 rounded-md flex-grow h-">
                <ul className="divide-y divide-gray-200">
                    <li className="p-4">Item 1</li>
                    <li className="p-4">Item 2</li>
                    <li className="p-4">Item 3</li>
                    <li className="p-4">Item 4</li>
                    <li className="p-4">Item 5</li>
                    <li className="p-4">Item 6</li>
                    <li className="p-4">Item 7</li>
                    <li className="p-4">Item 8</li>
                    <li className="p-4">Item 9</li>
                    <li className="p-4">Item 10</li>
                    <li className="p-4">Item 11</li>
                    <li className="p-4">Item 12</li>
                </ul>
            </div>
        </div>
    )
}

export default ChatList
