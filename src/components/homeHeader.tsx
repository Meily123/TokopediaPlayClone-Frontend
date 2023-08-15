import React from 'react';
import handlerGoTo from "../helper/handlerGoTo";
import {useNavigate} from "react-router-dom";
import {useUserContext} from "../hooks/userProviders";

type NavigationProps = {
    category: string | null;
    onCategoryChange: (category: string | null) => void;
};

const HomeHeader: React.FC<NavigationProps> = ({ category, onCategoryChange }) => {
    const navigate = useNavigate();
    const { user } = useUserContext();

    // @ts-ignore
    const handleGoToSearch = () => {
        navigate(`search`);
    };

    return (
        <header className="text-white fixed z-10 w-full justify-between py-1 bg-base-night pb-3">
            <p className="px-2.5 mb-4 mt-1">
                <div className="float-left inline-flex items-center" onClick={() => {handlerGoTo("https://www.tokopedia.com/")}}>
                    <svg className="h-6 w-6 text-slate-200 mr-2.5 p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"
                              d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>

                    <span className="text-xs font-bold">Play</span>
                </div>
                <div className="float-right">
                    <svg className="h-5 w-5 text-slate-200 font-bold" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" onClick={handleGoToSearch}>
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <circle cx="10" cy="10" r="7"/>
                        <line x1="20" y1="20" x2="15" y2="15"/>
                    </svg>
                </div>
            </p><br/>
            <div className="w-full px-2.5 text-xs">
                <button className="border-gray-500 border p-2 m-0.5 rounded-xl" onClick={() => onCategoryChange(null)}>All</button>
                <button className="border-gray-500 border p-2 m-0.5 rounded-xl" onClick={() => onCategoryChange('Music')}>Music</button>
                <button className="border-gray-500 border p-2 m-0.5 rounded-xl" onClick={() => onCategoryChange('Makanan')}>Makanan</button>
                <button className="border-gray-500 border p-2 m-0.5 rounded-xl" onClick={() => onCategoryChange('Peliharaan')}>Peliharaan</button>
                {user && (
                    <div className="float-right bg-gray-700 border-gray-500 border p-2 m-0.5 rounded-xl">
                        <div className="inline-flex">
                            <img
                                className="h-5 w-5 mr-2 rounded-full cursor-pointer"
                                src={user.imageUrl}
                                alt={`${user.username}'s Profile`}
                            />
                            <div className="">{user.username}</div>
                        </div>

                    </div>
                )}
            </div>
        </header>
    );
};

export default HomeHeader;
