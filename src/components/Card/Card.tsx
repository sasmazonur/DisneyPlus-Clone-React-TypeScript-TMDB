/**
 * @fileoverview Displays an individual movie or TV show as a card.
 * 
 * @copyright 2024 Onur Sasmaz
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module Card
 * 
 * @description This file defines the Card component, a reusable component to display individual movies or TV shows.
 */

import React from 'react';
import styles from './Card.module.css';
import { CardProps } from '../../types';

/**
 * Card component to display an individual movie or TV show.
 * @param title - The title of the movie or TV show.
 * @param image - The URL of the image to display.
 */
const Card: React.FC<CardProps> = ({ title, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default Card;
