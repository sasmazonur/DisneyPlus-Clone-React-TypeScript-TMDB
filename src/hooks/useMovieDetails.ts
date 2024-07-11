/**
 * @fileoverview Custom hook for fetching and managing movie details.
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module useMovieDetails
 * 
 * @description This file contains the `useMovieDetails` custom hook, which fetches and manages the state of movie details from the API.
 */

import { useState, useEffect } from 'react';
import { fetchMovieDetails, fetchSimilarMovies } from '../services/api';
import { Movie } from '../types';

/**
 * Custom hook to fetch details of a specific movie and its similar movies.
 * @param id - The ID of the movie to fetch details for.
 * @returns An object containing the movie details, similar movies, loading state, and error state.
 */
const useMovieDetails = (id: string) => {
  const [movie, setMovie] = useState<Movie | null>(null); // State to store movie details
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]); // State to store similar movies
  const [loading, setLoading] = useState<boolean>(true); // State to indicate loading status
  const [error, setError] = useState<string | null>(null); // State to store any errors

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true); // Set loading to true before starting the request
        const movieDetails = await fetchMovieDetails(Number(id)); // Fetch movie details
        setMovie(movieDetails); // Set the movie details
        const similar = await fetchSimilarMovies(Number(id)); // Fetch similar movies
        setSimilarMovies(similar); // Set the similar movies
      } catch (err) {
        setError('Failed to fetch movie details'); // Set the error message if the request fails
      } finally {
        setLoading(false); // Set loading to false once the request is complete
      }
    };

    fetchDetails(); // Call fetchDetails when the component mounts or id changes
  }, [id]); // Dependency array to re-run the effect when the id changes

  return { movie, similarMovies, loading, error }; // Return the movie details, similar movies, loading, and error states
};

export default useMovieDetails;
