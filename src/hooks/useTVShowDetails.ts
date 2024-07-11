/**
 * @fileoverview Custom hook for fetching and managing TV show details.
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module useTVShowDetails
 * 
 * @description This file contains the `useTVShowDetails` custom hook, which fetches and manages the state of TV show details from the API.
 */

import { useState, useEffect } from 'react';
import { fetchTVShowDetails, fetchSeasonDetails, fetchSimilarShows } from '../services/api';
import { TVShow, Season, Episode } from '../types';

/**
 * Custom hook to fetch details of a specific TV show, its seasons, episodes, and similar shows.
 * @param id - The ID of the TV show to fetch details for.
 * @returns An object containing the TV show details, seasons, episodes, similar shows, selected season, loading state, and error state.
 */
const useTVShowDetails = (id: string) => {
  const [tvShow, setTVShow] = useState<TVShow | null>(null); // State to store TV show details
  const [seasons, setSeasons] = useState<Season[]>([]); // State to store seasons
  const [episodes, setEpisodes] = useState<Episode[]>([]); // State to store episodes
  const [similarShows, setSimilarShows] = useState<TVShow[]>([]); // State to store similar shows
  const [selectedSeason, setSelectedSeason] = useState<number | null>(null); // State to store the selected season
  const [loading, setLoading] = useState<boolean>(true); // State to indicate loading status
  const [error, setError] = useState<string | null>(null); // State to store any errors

  // Fetch TV show details and similar shows when the component mounts or id changes
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true); // Set loading to true before starting the request
        const tvShowDetails = await fetchTVShowDetails(Number(id)); // Fetch TV show details
        setTVShow(tvShowDetails); // Set the TV show details
        setSeasons(tvShowDetails.seasons); // Set the seasons
        setSelectedSeason(tvShowDetails.seasons[0]?.season_number || null); // Set the selected season to the first season
        const similar = await fetchSimilarShows(Number(id)); // Fetch similar shows
        setSimilarShows(similar); // Set the similar shows
      } catch (err) {
        setError('Failed to fetch TV show details'); // Set the error message if the request fails
      } finally {
        setLoading(false); // Set loading to false once the request is complete
      }
    };

    fetchDetails(); // Call fetchDetails when the component mounts or id changes
  }, [id]); // Dependency array to re-run the effect when the id changes

  // Fetch episodes of the selected season when selectedSeason changes
  useEffect(() => {
    if (selectedSeason !== null) {
      const fetchEpisodes = async () => {
        try {
          const seasonDetails = await fetchSeasonDetails(Number(id), selectedSeason); // Fetch season details
          setEpisodes(seasonDetails.episodes); // Set the episodes
        } catch (err) {
          setError('Failed to fetch season details'); // Set the error message if the request fails
        }
      };

      fetchEpisodes(); // Call fetchEpisodes when the selected season changes
    }
  }, [selectedSeason, id]); // Dependency array to re-run the effect when selectedSeason or id changes

  return {
    tvShow, 
    seasons, 
    episodes,
    similarShows, 
    selectedSeason, 
    setSelectedSeason, // Function to update the selected season
    loading, 
    error, 
  };
};

export default useTVShowDetails;
