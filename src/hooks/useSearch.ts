/**
 * @fileoverview Custom hook for handling search functionality.
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module useSearch
 * 
 * @description This file contains the `useSearch` custom hook, which manages the search functionality, including querying the API and managing search results.
 */

import { useState } from 'react';
import { searchMovies, searchTVShows } from '../services/api';

/**
 * Custom hook to handle search functionality for movies and TV shows.
 * @returns An object containing the query, setQuery function, search results, loading state, error state, and handleSearch function.
 */
const useSearch = () => {
  const [query, setQuery] = useState<string>(''); // State to store the search query
  const [data, setData] = useState<any>(null); // State to store the search results
  const [loading, setLoading] = useState<boolean>(false); // State to indicate loading status
  const [error, setError] = useState<Error | null>(null); // State to store any errors

  /**
   * Handles the search operation for movies or TV shows based on the query and type.
   * @param type - The type of content to search ('movie' or 'tv').
   */
  const handleSearch = async (type: 'movie' | 'tv') => {
    setLoading(true); // Set loading to true before starting the request
    setError(null); // Reset any previous errors
    try {
      const result = type === 'movie' ? await searchMovies(query) : await searchTVShows(query); // Perform the search based on the type
      setData(result); // Set the search results
    } catch (error) {
      setError(error as Error); // Set the error if the request fails
    } finally {
      setLoading(false); // Set loading to false once the request is complete
    }
  };

  return {
    query, // The search query
    setQuery, // Function to update the search query
    data, // The search results
    loading, // The loading state
    error, // The error state
    handleSearch, // Function to handle the search operation
  };
};

export default useSearch;
