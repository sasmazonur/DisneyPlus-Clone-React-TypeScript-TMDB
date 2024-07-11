/**
 * @fileoverview Displays the home page of the Disney+ clone.
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module Home
 * 
 * @description This file defines the Home component, which displays the main home page with featured content, sliders, and navigation links.
 */
import React, { useMemo } from 'react';
import Banner from '../../components/Banner';
import StudioLogos from '../../components/StudioLogos';
import ContentSlider from '../../components/ContentSlider';
import useFetch from '../../hooks/useFetch';
import { fetchMovies, fetchTVShows } from '../../services/api';
import styles from './Home.module.css';

/**
 * Home component to display the homepage of the Disney+ clone.
 * It fetches and displays the latest movies and TV shows along with banners and studio logos.
 */
const Home: React.FC = () => {
  const { data: moviesData, loading: moviesLoading, error: moviesError } = useFetch(fetchMovies);
  const { data: tvShowsData, loading: tvShowsLoading, error: tvShowsError } = useFetch(fetchTVShows);

  // Memoize the movie and TV show items to avoid unnecessary re-renders
  const moviesItems = useMemo(() => {
    return moviesData?.results.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    })) || [];
  }, [moviesData]);

  const tvShowsItems = useMemo(() => {
    return tvShowsData?.results.map((show: any) => ({
      id: show.id,
      title: show.name,
      image: `https://image.tmdb.org/t/p/w500${show.poster_path}`,
    })) || [];
  }, [tvShowsData]);

  return (
    <div className={styles.home}>
      <Banner />
      <StudioLogos />
      <div className={styles.content}>
        {(moviesLoading || tvShowsLoading) && <p className={styles.loading}>Loading...</p>}
        {(moviesError || tvShowsError) && (
          <div className={styles.error}>
            {moviesError && <p>Error loading movies: {moviesError.message}</p>}
            {tvShowsError && <p>Error loading TV shows: {tvShowsError.message}</p>}
          </div>
        )}
        {!moviesLoading && !moviesError && (
          <ContentSlider
            title="Popular Movies"
            items={moviesItems}
          />
        )}
        {!tvShowsLoading && !tvShowsError && (
          <ContentSlider
            title="Popular TV Shows"
            items={tvShowsItems}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
