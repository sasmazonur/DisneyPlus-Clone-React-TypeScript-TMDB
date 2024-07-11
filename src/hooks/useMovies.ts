/**
 * @fileoverview Custom hook for fetching and managing a list of movies.
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module useMovies
 * 
 * @description This file contains the `useMovies` custom hook, which fetches and manages the state of a list of movies from the API.
 */

import { useState, useEffect } from 'react';
import { fetchMoviesByCategory } from '../services/api';
import { Movie } from '../types';

/**
 * Custom hook to fetch movies by a specific category.
 * @param category - The category of movies to fetch.
 * @returns An object containing the movies, loading state, and error state.
 */
const useMovies = (category: string) => {
  const [movies, setMovies] = useState<Movie[]>([]); // State to store movies
  const [loading, setLoading] = useState<boolean>(true); // State to indicate loading status
  const [error, setError] = useState<string | null>(null); // State to store any errors

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true); // Set loading to true before starting the request
        const movies = await fetchMoviesByCategory(category); // Fetch movies by category
        setMovies(movies); // Set the movies
      } catch (err) {
        setError('Failed to fetch movies'); // Set the error message if the request fails
      } finally {
        setLoading(false); // Set loading to false once the request is complete
      }
    };

    fetchMovies(); // Call fetchMovies when the component mounts or category changes
  }, [category]);

  return { movies, loading, error }; // Return the movies, loading, and error states
};

export default useMovies;
