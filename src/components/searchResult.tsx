import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';
import Videos from "./videos";

function SearchResultsPage() {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('query');
    const { searchResults, } = useSearch(searchQuery);

    return (
        <Videos videos={searchResults}></Videos>
    );
}

export default SearchResultsPage;
