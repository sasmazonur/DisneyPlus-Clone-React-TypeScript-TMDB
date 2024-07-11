/**
 * @fileoverview Displays detailed information about a selected movie.
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module MovieDetail
 * 
 * @description This file defines the MovieDetail component, which displays detailed information about a selected movie, including cast, crew, and related content.
 */
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useMovieDetails from '../../hooks/useMovieDetails';
import styles from './MovieDetail.module.css';

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { movie, similarMovies, loading, error } = useMovieDetails(id!);
  const movieRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div className={styles.movieDetail} ref={movieRef}>
      <div className={styles.banner}>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className={styles.bannerImage}
        />
        <div className={styles.bannerContent}>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.overview}>{movie.overview}</p>
          <div className={styles.actions}>
            <button className={styles.playButton}>Play</button>
            <button className={styles.trailerButton}>Trailer</button>
            <button className={styles.addButton}>+</button>
          </div>
          <p className={styles.subscriptionInfo}>Included with your Onur+ subscription</p>
        </div>
      </div>
      <div className={styles.movieDetails}>
        <div className={styles.movieDetailsContent}>
          <h2>Movie Details</h2>
          <p><strong>Title:</strong> {movie.title}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
          <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
          <p><strong>Production Companies:</strong> {movie.production_companies.map(company => company.name).join(', ')}</p>
        </div>
      </div>
      <div className={styles.suggested}>
        <h2>Suggested Movies</h2>
        <div className={styles.suggestedList}>
          {similarMovies.map(similarMovie => (
            <div key={similarMovie.id} className={styles.suggestedCard}>
              <img
                src={`https://image.tmdb.org/t/p/w500${similarMovie.poster_path}`}
                alt={similarMovie.title}
                className={styles.suggestedImage}
              />
              <p className={styles.suggestedTitle}>{similarMovie.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
