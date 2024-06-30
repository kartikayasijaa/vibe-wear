import React, { useState } from "react"
import { BiSearch } from "react-icons/bi"

type Props = {
    onSearch: (query: string) => void
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>("")

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (query.trim()) {
            onSearch(query)
        }
    }

    return (
        <div>
            <form
                onSubmit={handleSearch}
                className="flex items-center bg-gray-100 p-2 rounded-full max-md:hidden">
                <button type="submit">
                    <BiSearch size={20} className="opacity-50" />
                </button>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="outline-none bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]"
                    placeholder="Search"
                    autoComplete="off"
                />
            </form>
        </div>
    )
}

export default SearchBar
