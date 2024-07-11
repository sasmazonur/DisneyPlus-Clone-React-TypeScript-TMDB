/**
 * @fileoverview Displays a list of movies available on the platform.
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module Movies
 * 
 * @description This file defines the Movies component, which displays a list of movies available on the platform, categorized by genre and popularity.
 */
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import useMovies from '../../hooks/useMovies';
import styles from './Movies.module.css';
/**
 * List of movie categories.
 */
const categories = [
  'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 
  'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 
  'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 
  'TV Movie', 'Thriller', 'War', 'Western'
];
/**
 * Movies component to display a list of movies by selected category.
 * It allows users to select different categories and displays the corresponding movies.
 */
const Movies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Action');
  const { movies, loading, error } = useMovies(selectedCategory);
  const categoryContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (categoryContainerRef.current) {
      categoryContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (categoryContainerRef.current) {
      categoryContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.movies}>
      <h1 className={styles.title}>Movies</h1>
      <div className={styles.categoryScroll}>
        <button className={styles.scrollButton} onClick={scrollLeft}>
          <FaArrowLeft />
        </button>
        <div className={styles.categoryContainer} ref={categoryContainerRef}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${
                selectedCategory === category ? styles.active : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <button className={styles.scrollButton} onClick={scrollRight}>
          <FaArrowRight />
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className={styles.movieList}>
          {movies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className={styles.movieCard}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={styles.movieImage}
              />
              <p className={styles.movieTitle}>{movie.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
