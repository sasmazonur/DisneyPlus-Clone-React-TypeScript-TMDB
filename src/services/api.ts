/**
 * @fileoverview Provides API service functions for interacting with backend endpoints.
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module api
 * 
 * @description This file contains functions for making API calls to various backend endpoints, handling data fetching, and managing API-related tasks.
 */

import axios from 'axios';
import cache from '../utils/cache';
import { Movie, TVShow, Season } from '../types';
import { logError } from '../utils/logger';


/**
 * Makes an API request and caches the response.
 * @param endpoint - The API endpoint to request.
 * @param params - The query parameters to include in the request.
 * @returns The response data.
 * @throws An error if the request fails.
 */
const request = async (endpoint: string, params: string = ''): Promise<any> => {
  try {
    const cacheKey = `${endpoint}?${params}`;
    const cachedResponse = cache.get(cacheKey);

    if (cachedResponse) {
      return cachedResponse;
    }

    const url = `${API_BASE_URL}${endpoint}?api_key=${API_KEY}&${params}`;
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error('Failed to fetch data');
    }

    cache.set(cacheKey, response.data);
    return response.data;
  } catch (error) {
    logError(error);
    throw new Error(`Error fetching data from ${endpoint}: ${error.message}`);
  }
};

/**
 * Fetches popular movies.
 * @returns A list of popular movies.
 */
export const fetchMovies = async (): Promise<{ results: Movie[] }> => {
  return request('/movie/popular');
};

/**
 * Fetches popular TV shows.
 * @returns A list of popular TV shows.
 */
export const fetchTVShows = async (): Promise<{ results: TVShow[] }> => {
  return request('/tv/popular');
};

/**
 * Fetches the latest movies.
 * @returns A list of the latest movies.
 */
export const fetchLatestMovies = async (): Promise<{ results: Movie[] }> => {
  return request('/movie/now_playing');
};

/**
 * Fetches details of a specific movie.
 * @param movieId - The ID of the movie to fetch details for.
 * @returns The movie details.
 */
export const fetchMovieDetails = async (movieId: number): Promise<Movie> => {
  return request(`/movie/${movieId}`);
};

/**
 * Fetches details of a specific TV show.
 * @param tvShowId - The ID of the TV show to fetch details for.
 * @returns The TV show details.
 */
export const fetchTVShowDetails = async (tvShowId: number): Promise<TVShow> => {
  return request(`/tv/${tvShowId}`);
};

/**
 * Fetches details of a specific season of a TV show.
 * @param tvShowId - The ID of the TV show.
 * @param seasonNumber - The season number to fetch details for.
 * @returns The season details.
 */
export const fetchSeasonDetails = async (tvShowId: number, seasonNumber: number): Promise<Season> => {
  return request(`/tv/${tvShowId}/season/${seasonNumber}`);
};

/**
 * Fetches similar TV shows to a specific TV show.
 * @param tvShowId - The ID of the TV show.
 * @returns A list of similar TV shows.
 */
export const fetchSimilarShows = async (tvShowId: number): Promise<TVShow[]> => {
  const response = await request(`/tv/${tvShowId}/similar`);
  return response.results;
};

/**
 * Fetches similar movies to a specific movie.
 * @param movieId - The ID of the movie.
 * @returns A list of similar movies.
 */
export const fetchSimilarMovies = async (movieId: number): Promise<Movie[]> => {
  const response = await request(`/movie/${movieId}/similar`);
  return response.results;
};

/**
 * Searches for movies based on a query.
 * @param query - The search query.
 * @returns A list of movies that match the query.
 */
export const searchMovies = async (query: string): Promise<{ results: Movie[] }> => {
  return request('/search/movie', `query=${query}`);
};

/**
 * Searches for TV shows based on a query.
 * @param query - The search query.
 * @returns A list of TV shows that match the query.
 */
export const searchTVShows = async (query: string): Promise<{ results: TVShow[] }> => {
  return request('/search/tv', `query=${query}`);
};

/**
 * Fetches TV shows by category.
 * @param category - The category of TV shows to fetch.
 * @returns A list of TV shows in the specified category.
 */
export const fetchTVShowsByCategory = async (category: string): Promise<TVShow[]> => {
  const categoryMap: { [key: string]: string } = {
    "Action/Adventure": "10759",
    "Adult Animation": "16",
    Animation: "16",
    Anime: "16",
    Comedy: "35",
    Docuseries: "99",
    Drama: "18",
    Horror: "27",
    Kids: "10762",
    Music: "10402",
    Reality: "10764",
    Science: "10765",
  };
  const genreId = categoryMap[category] || "10759"; // Default to Action/Adventure if category not found
  const response = await request("/discover/tv", `with_genres=${genreId}`);
  return response.results;
};

/**
 * Fetches movies by category.
 * @param category - The category of movies to fetch.
 * @returns A list of movies in the specified category.
 */
export const fetchMoviesByCategory = async (category: string): Promise<Movie[]> => {
  const categoryMap: { [key: string]: string } = {
    Action: "28",
    Adventure: "12",
    Animation: "16",
    Comedy: "35",
    Crime: "80",
    Documentary: "99",
    Drama: "18",
    Family: "10751",
    Fantasy: "14",
    History: "36",
    Horror: "27",
    Music: "10402",
    Mystery: "9648",
    Romance: "10749",
    "Science Fiction": "878",
    "TV Movie": "10770",
    Thriller: "53",
    War: "10752",
    Western: "37",
  };
  const genreId = categoryMap[category] || "popular"; // Default to popular if category not found
  const response = await request("/discover/movie", `with_genres=${genreId}`);
  return response.results;
};

/**
 * Fetches the latest TV shows.
 * @returns A list of the latest TV shows.
 */
export const fetchLatestTVShows = async (): Promise<{ results: TVShow[] }> => {
  return request("/tv/on_the_air");
};

/**
 * Fetches Disney originals.
 * @returns A list of Disney original movies.
 */
export const fetchDisneyOriginals = async (): Promise<{ results: Movie[] }> => {
  return request("/discover/movie", `with_companies=2`); // Disney company ID is 2 on TMDb
};