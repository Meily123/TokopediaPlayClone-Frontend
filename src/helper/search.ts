import {serverUrl} from "../shared/constants";

export async function fetchSearchResults(query: string| null) {
    try {
        const response = await fetch(`http://${serverUrl}/videos/search?query=${query}`);
        if (!response.ok) {
            throw new Error('Failed to fetch search results');
        }
        const searchData = await response.json();
        return searchData.data;
    } catch (error) {
        console.error('Error fetching search results:', error);
        return [];
    }
}
