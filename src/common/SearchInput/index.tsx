import { Search } from '@/assets/icons'
import React from 'react'

type Props = {}

const SearchInput = (props: Props) => {
    return (
        <div className="relative mt-4">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="flex items-center border rounded bg-slate-200 p-1.5">
                <span className="flex items-center pl-3 text-gray-500">
                    <Search className='w-5 h-5' />
                </span>
                <input
                    type="text"
                    id="search"
                    placeholder="Search..."
                    className="border-none rounded bg-transparent focus:outline-none ps-3 py-1 w-full transition duration-200 ease-in-out placeholder-gray-400"
                />
            </div>
        </div>

    )
}

export default SearchInput