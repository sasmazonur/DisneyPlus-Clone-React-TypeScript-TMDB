/**
 * @fileoverview Displays a list of TV shows available on the platform.
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module TVShows
 * 
 * @description This file defines the TVShows component, which displays a list of TV shows available on the platform, categorized by genre and popularity.
 */
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import useTVShows from '../../hooks/useTVShows';
import styles from './TVShows.module.css';
/**
 * List of TV show categories.
 */
const categories = [
  'Action/Adventure', 'Adult Animation', 'Animation', 'Anime', 
  'Comedy', 'Docuseries', 'Drama', 'Horror', 'Kids', 'Music', 
  'Reality', 'Science'
];
/**
 * TVShows component to display a list of TV shows by selected category.
 * It allows users to select different categories and displays the corresponding TV shows.
 */
const TVShows: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Action/Adventure');
  const { tvShows, loading, error } = useTVShows(selectedCategory);
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
    <div className={styles.tvShows}>
      <h1 className={styles.title}>Series</h1>
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
        <div className={styles.tvShowList}>
          {tvShows.map((tvShow) => (
            <Link to={`/tv-show/${tvShow.id}`} key={tvShow.id} className={styles.tvShowCard}>
              <img
                src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
                alt={tvShow.name}
                className={styles.tvShowImage}
              />
              <p className={styles.tvShowTitle}>{tvShow.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TVShows;
