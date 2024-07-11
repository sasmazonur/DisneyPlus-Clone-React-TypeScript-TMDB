/**
 * @fileoverview Custom hook for fetching and managing a list of TV shows.
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module useTVShows
 * 
 * @description This file contains the `useTVShows` custom hook, which fetches and manages the state of a list of TV shows from the API.
 */

import { useState, useEffect } from 'react';
import { fetchTVShowsByCategory } from '../services/api';
import { TVShow } from '../types';

/**
 * Custom hook to fetch TV shows by a specific category.
 * @param category - The category of TV shows to fetch.
 * @returns An object containing the TV shows, loading state, and error state.
 */
const useTVShows = (category: string) => {
  const [tvShows, setTVShows] = useState<TVShow[]>([]); // State to store TV shows
  const [loading, setLoading] = useState<boolean>(true); // State to indicate loading status
  const [error, setError] = useState<string | null>(null); // State to store any errors

  useEffect(() => {
    const fetchShows = async () => {
      try {
        setLoading(true); // Set loading to true before starting the request
        const shows = await fetchTVShowsByCategory(category); // Fetch TV shows by category
        setTVShows(shows); // Set the TV shows
      } catch (err) {
        setError('Failed to fetch TV shows'); // Set the error message if the request fails
      } finally {
        setLoading(false); // Set loading to false once the request is complete
      }
    };

    fetchShows(); // Call fetchShows when the component mounts or category changes
  }, [category]);

  return { tvShows, loading, error }; // Return the TV shows, loading, and error states
};

export default useTVShows;
