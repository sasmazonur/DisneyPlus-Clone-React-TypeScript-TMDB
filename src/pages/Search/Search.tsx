/**
 * @fileoverview Search page component for displaying search results.
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module Search
 * 
 * @description This file contains the Search page component, which handles user input for searching and displays the search results.
 */

import React, { useEffect, useState } from "react";
import {
  fetchLatestMovies,
  fetchLatestTVShows,
  searchMovies,
  searchTVShows,
} from "../../services/api";
import { Movie, TVShow } from "../../types";
import styles from "./Search.module.css";

/**
 * Search component to allow users to search for movies and TV shows.
 * It displays the search results or the latest movies and TV shows if no search query is entered.
 */
const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [content, setContent] = useState<(Movie | TVShow)[]>([]);

  useEffect(() => {
    const fetchContent = async () => {
      const movies = await fetchLatestMovies();
      const tvShows = await fetchLatestTVShows();
      setContent(movies.results.concat(tvShows.results));
    };
    fetchContent();
  }, []);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim() === "") {
        const movies = await fetchLatestMovies();
        const tvShows = await fetchLatestTVShows();
        setContent(movies.results.concat(tvShows.results));
      } else {
        const movieResults = await searchMovies(searchQuery);
        const tvShowResults = await searchTVShows(searchQuery);
        setContent(movieResults.results.concat(tvShowResults.results));
      }
    };
    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div className={styles.search}>
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Search by title, or character"
          className={styles.searchBar}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <h2 className={styles.title}>Explore</h2>
      <div className={styles.contentGrid}>
        {content.map((item, index) => (
          <div key={index} className={styles.contentCard}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title || item.name}
              className={styles.contentImage}
            />
            <p className={styles.contentTitle}>{item.title || item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
