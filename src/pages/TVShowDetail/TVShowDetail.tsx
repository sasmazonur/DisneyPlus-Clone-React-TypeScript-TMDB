/**
 * @fileoverview Displays detailed information about a selected TV show.
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module TVShowDetail
 * 
 * @description This file defines the TVShowDetail component, which displays detailed information about a selected TV show, including cast, crew, seasons, and episodes.
 */
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTVShowDetails from '../../hooks/useTVShowDetails';
import { Episode } from '../../types';
import styles from './TVShowDetail.module.css';
/**
 * TVShowDetail component to display detailed information about a specific TV show.
 * It fetches and displays the TV show details, episodes, and similar shows.
 */
const TVShowDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    tvShow,
    seasons,
    episodes,
    similarShows,
    selectedSeason,
    setSelectedSeason,
    loading,
    error,
  } = useTVShowDetails(id!);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [activeTab, setActiveTab] = useState<'episodes' | 'suggested' | 'details'>('episodes');
  const episodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (selectedEpisode) {
      episodeRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedEpisode]);

  if (loading) return <div className={styles.loading}>Loading...</div>; // Show loading state
  if (error) return <div className={styles.error}>Error: {error}</div>; // Show error state
  if (!tvShow) return <div>TV Show not found</div>; // Show if no TV show found

  const handleSeasonChange = (seasonNumber: number) => {
    setSelectedSeason(seasonNumber);
    setSelectedEpisode(null);
  };

  const handleEpisodeChange = (episode: Episode) => {
    setSelectedEpisode(episode);
  };

  return (
    <div className={styles.tvShowDetail}>
      <div className={styles.banner}>
        <img
          src={`https://image.tmdb.org/t/p/original${selectedEpisode ? selectedEpisode.still_path : tvShow.backdrop_path}`}
          alt={selectedEpisode ? selectedEpisode.name : tvShow.name}
          className={styles.bannerImage}
        />
        <div className={styles.bannerContent}>
          <h1 className={styles.title}>{tvShow.name}</h1>
          <p className={styles.overview}>{tvShow.overview}</p>
          <div className={styles.actions}>
            <button className={styles.playButton}>Play</button>
            <button className={styles.trailerButton}>Trailer</button>
            <button className={styles.addButton}>+</button>
          </div>
          <p className={styles.subscriptionInfo}>Included with your Onur+ subscription</p>
        </div>
      </div>
      <div className={styles.tabMenu}>
        <button className={styles.tabButton} onClick={() => setActiveTab('episodes')}>Episodes</button>
        <button className={styles.tabButton} onClick={() => setActiveTab('suggested')}>Suggested</button>
        <button className={styles.tabButton} onClick={() => setActiveTab('details')}>Details</button>
      </div>
      <div className={styles.tabContent}>
        {activeTab === 'episodes' && (
          <div className={styles.episodes}>
            <div className={styles.seasonSelect}>
              <h2>Select a Season</h2>
              <select onChange={(e) => handleSeasonChange(Number(e.target.value))} value={selectedSeason || ''} className={styles.dropdown}>
                {seasons.map(season => (
                  <option key={season.id} value={season.season_number}>{season.name}</option>
                ))}
              </select>
            </div>
            <div className={styles.episodeList}>
              {episodes.map(episode => (
                <div key={episode.id} onClick={() => handleEpisodeChange(episode)} className={styles.episodeCard}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${episode.still_path}`}
                    alt={episode.name}
                    className={styles.episodeImage}
                  />
                  <div className={styles.episodeInfo}>
                    <p className={styles.episodeTitle}>{episode.episode_number}. {episode.name}</p>
                    <p className={styles.episodeOverview}>{episode.overview}</p>
                    <p className={styles.episodeRuntime}>{episode.runtime}m</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'suggested' && (
          <div className={styles.suggested}>
            <h2>Suggested Shows</h2>
            <div className={styles.suggestedList}>
              {similarShows.map(show => (
                <div key={show.id} className={styles.suggestedCard}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    alt={show.name}
                    className={styles.suggestedImage}
                  />
                  <p className={styles.suggestedTitle}>{show.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'details' && (
          <div className={styles.details}>
            <h2>Details</h2>
            <p><strong>First Air Date:</strong> {tvShow.first_air_date}</p>
            <p><strong>Rating:</strong> {tvShow.vote_average}</p>
            <p><strong>Genres:</strong> {tvShow.genres.map((genre: any) => genre.name).join(', ')}</p>
            <p><strong>Production Companies:</strong> {tvShow.production_companies.map((company: any) => company.name).join(', ')}</p>
            <p><strong>Number of Seasons:</strong> {tvShow.number_of_seasons}</p>
            <p><strong>Number of Episodes:</strong> {tvShow.number_of_episodes}</p>
          </div>
        )}
      </div>
      {selectedEpisode && (
        <div ref={episodeRef} className={styles.episodeDetails}>
          <img
            src={`https://image.tmdb.org/t/p/original${selectedEpisode.still_path}`}
            alt={selectedEpisode.name}
            className={styles.episodeDetailImage}
          />
          <div className={styles.episodeDetailsContent}>
            <h2>Episode Details</h2>
            <p><strong>Episode Name:</strong> {selectedEpisode.name}</p>
            <p><strong>Air Date:</strong> {selectedEpisode.air_date}</p>
            <p><strong>Rating:</strong> {selectedEpisode.vote_average}</p>
            <p><strong>Overview:</strong> {selectedEpisode.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TVShowDetail;
