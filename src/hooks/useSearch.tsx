import { useState, useEffect } from 'react';
import { fetchSearchResults } from '../helper/search'; // Adjust the path accordingly

export function useSearch(query:string|null) {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (query) {
            fetchSearchData(query);
        }
    }, [query]);

    const fetchSearchData = async (query:string|null) => {
        try {
            const searchData = await fetchSearchResults(query);
            setSearchResults(searchData);
            console.log("search res", searchResults)
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    return { searchResults, loading };
}
