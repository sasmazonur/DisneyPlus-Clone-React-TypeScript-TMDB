/**
 * @fileoverview ContentSlider component for displaying a horizontal list of content items.
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module ContentSlider
 * 
 * @description This file contains the ContentSlider component, which displays a horizontal scrollable list of content items.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
import styles from './ContentSlider.module.css';
import { ContentSliderProps } from '../../types';

/**
 * ContentSlider component to display a horizontal list of movies or TV shows.
 * @param title - The title of the slider.
 * @param items - The list of items to display in the slider.
 */
const ContentSlider: React.FC<ContentSliderProps> = ({ title, items }) => {
  return (
    <div className={styles.contentSlider}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.slider}>
        {items.map(item => (
          <Link to={`/movie/${item.id}`} key={item.id}>
            <Card key={item.id} title={item.title} image={item.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContentSlider;
