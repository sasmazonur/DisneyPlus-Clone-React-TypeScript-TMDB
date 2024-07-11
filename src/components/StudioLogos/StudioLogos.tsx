/**
 * @fileoverview Displays logos of various studios.
 * 
 * @copyright 2024 Onur Sasmaz
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module StudioLogos
 * 
 * @description This file defines the StudioLogos component, which displays logos of various studios.
 */
import React from 'react';
import styles from './StudioLogos.module.css';
import disneyImage from '../../assets/images/disney_logo.png';
import marvelImage from '../../assets/images/marvel_logo.png';
import nationalGImage from '../../assets/images/nationalG_logo.png';
import pixarImage from '../../assets/images/pixar_logo.png';
import huluImage from '../../assets/images/hulu_logo.svg';
import startWarsImage from "../../assets/images/starwars_logo.png";

import disneyVideo from '../../assets/videos/disney.mp4';
import marvelVideo from '../../assets/videos/marvel.mp4';
import nationalGeographicVideo from '../../assets/videos/national-geographic.mp4';
import pixarVideo from '../../assets/videos/pixar.mp4';
import huluVideo from "../../assets/videos/hulu.mp4";
import starWarsVideo from "../../assets/videos/star-wars.mp4";

/**
 * Array of studio logos and their corresponding videos.
 */
const studios = [
  {
    id: 1,
    image: disneyImage,
    video: disneyVideo,
  },
  {
    id: 2,
    image: pixarImage,
    video: pixarVideo,
  },
  {
    id: 3,
    image: marvelImage,
    video: marvelVideo,
  },
  {
    id: 4,
    image: startWarsImage,
    video: starWarsVideo,
  },
  {
    id: 5,
    image: nationalGImage,
    video: nationalGeographicVideo,
  },
  {
    id: 6,
    image: huluImage,
    video: huluVideo,
  },
];

/**
 * StudioLogos component to display studio logos with hover effect to show their corresponding videos.
 */
const StudioLogos: React.FC = () => {
  return (
    <div className={styles.studioLogos}>
      {studios.map(studio => (
        <div key={studio.id} className={styles.studioItem}>
          <video
            src={studio.video}
            autoPlay
            loop
            muted
            className={styles.studioVideo}
          />
          <img src={studio.image} alt="Studio" className={styles.studioImage} />
        </div>
      ))}
    </div>
  );
};

export default StudioLogos;
