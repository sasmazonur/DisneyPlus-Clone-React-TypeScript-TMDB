/**
 * @fileoverview Custom hook for fetching data from an API.
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module useFetch
 * 
 * @description This file contains the `useFetch` custom hook, which handles fetching data from a given API endpoint and manages the loading and error states.
 */

import { useState, useEffect } from 'react';
import { logError } from '../utils/logger';
import { FetchResult } from '../types'; 

/**
 * Custom hook to fetch data from an API.
 * This hook handles the data fetching process, including setting loading states and handling errors.
 * @param fetchFunction - The function that performs the API request and returns a promise.
 * @returns An object containing the fetched data, loading state, and error state.
 */
const useFetch = <T,>(fetchFunction: () => Promise<T>): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null); // State to store fetched data
  const [loading, setLoading] = useState<boolean>(true); // State to indicate loading status
  const [error, setError] = useState<Error | null>(null); // State to store any errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFunction(); // Execute the fetch function
        setData(result); // Set the fetched data
      } catch (err) {
        setError(err as Error); // Set any errors that occurred
        logError(err as Error); // Log the error for debugging purposes
      } finally {
        setLoading(false); // Set loading to false once the request is complete
      }
    };

    fetchData(); // Call fetchData when the component mounts
  }, [fetchFunction]);

  return { data, loading, error }; // Return the data, loading, and error states
};

export default useFetch;
