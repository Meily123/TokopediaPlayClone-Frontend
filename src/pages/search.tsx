import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchResultsPage from "../components/searchResult";
import handlerGoTo from "../helper/handlerGoTo";

function SearchPage() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    // @ts-ignore
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?query=${encodeURIComponent(searchQuery)}`);
    };

    return (
        <div className="SearchPage text-white">
        <header className="">
            <div className="float-left inline-flex items-center" onClick={() => {handlerGoTo("http://localhost:3000")}}>
                <svg className="h-6 w-6 text-slate-200 mr-2.5 p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>

                <span className="text-xs font-bold">Home</span>
            </div>
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <form className="relative rounded-3xl border-gray-400 border" onSubmit={handleSearch}>
                    <label htmlFor="default-search" className="sr-only ">Search</label>
                    <div className="relative">
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full py-2 pl-10 pr-3 border-gray-400 bg-transparent placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                            placeholder="Search Video Base on It's Title ..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="absolute top-0 right-0 mt-1 mr-2 inline-flex items-center px-3 py-1 border border-transparent rounded-3xl shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </header>
        <SearchResultsPage></SearchResultsPage>
        </div>
    );
}

export default SearchPage;
