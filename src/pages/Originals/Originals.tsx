/**
 * @fileoverview Displays a list of original content available on the platform.
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module Originals
 * 
 * @description This file defines the Originals component, which displays a list of original content available on the platform, including exclusive movies and TV shows.
 */
import React, { useEffect, useState } from "react";
import { fetchDisneyOriginals } from "../../services/api";
import { Movie } from "../../types";
import styles from "./Originals.module.css";
/**
 * Originals component to display a list of Disney Originals movies.
 * It fetches and displays the movies produced by Disney.
 */
const Originals: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await fetchDisneyOriginals();
      setMovies(result.results);
    };
    fetchMovies();
  }, []);

  return (
    <div className={styles.originals}>
      <h1 className={styles.title}>Originals</h1>
      <div className={styles.movieList}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movieCard}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className={styles.movieImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Originals;
