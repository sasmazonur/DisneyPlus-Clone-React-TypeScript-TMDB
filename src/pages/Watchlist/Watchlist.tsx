/**
 * @fileoverview Displays the user's watchlist of saved movies and TV shows.
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module Watchlist
 * 
 * @description This file defines the Watchlist component, which displays the user's watchlist of saved movies and TV shows, allowing users to manage their personal watchlist.
 */
import React from "react";
import styles from "./Watchlist.module.css";
/**
 * Watchlist component to display the user's watchlist.
 * It shows a message when the watchlist is empty.
 */
const Watchlist: React.FC = () => {
  return (
    <div className={styles.watchlist}>
      <h1 className={styles.title}>Watchlist</h1>
      <p className={styles.message}>Your watchlist is empty</p>
      <p className={styles.description}>
        Your watchlist is empty. Content you add to your watchlist will appear
        here.
      </p>
    </div>
  );
};

export default Watchlist;
