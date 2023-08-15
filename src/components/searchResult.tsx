import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useSearch } from '../hooks/useSearch';
import Gallery from "./gallery";
import Videos from "./videos"; // Adjust the path accordingly

function SearchResultsPage() {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('query');
    const { searchResults, loading } = useSearch(searchQuery);
    console.log(searchResults);

    return (
        <Videos images={searchResults}></Videos>
    );
}

export default SearchResultsPage;
