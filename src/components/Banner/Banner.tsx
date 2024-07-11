/**
 * @fileoverview Banner component for displaying featured content.
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module Banner
 * 
 * @description This file contains the Banner component, which displays a featured image or video and related information.
 */


import React, { useState, useEffect } from 'react';
import styles from './Banner.module.css';
import useFetch from '../../hooks/useFetch';
import { fetchLatestMovies } from '../../services/api';
import { Movie } from '../../types';

/**
 * Banner component to display the latest movies in a sliding banner.
 * Fetches the latest movies and automatically slides through them every 5 seconds.
 */
const Banner: React.FC = () => {
  const { data, loading, error } = useFetch<{ results: Movie[] }>(fetchLatestMovies);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 5000; // 5 seconds interval for sliding

  const movies = data?.results?.slice(0, 10) || []; // Get the newest 10 movies

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % movies.length); // Slide to the next movie
    }, slideInterval);
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [movies.length]);

  if (loading) return <div className={styles.banner}>Loading...</div>; // Show loading state
  if (error) return <div className={styles.banner}>Error: {error.message}</div>; // Show error state

  return (
    <div className={styles.banner}>
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
        >
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className={styles.bannerImage}
          />
          <div className={styles.bannerContent}>
            <h1 className={styles.bannerTitle}>{movie.title}</h1>
            <p className={styles.bannerOverview}>{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
