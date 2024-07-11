/**
 * @fileoverview Displays the navigation bar of the app.
 * 
 * @copyright 2024 Onur Sasmaz
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module NavBar
 * 
 * @description This file defines the NavBar component, which displays the navigation bar with links to different sections of the app.
 */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaPlus, FaFilm, FaTv, FaStar } from "react-icons/fa";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png"; 
import profilePic from "../../assets/images/profile.png";

/**
 * Header component to display the top navigation bar with links and profile dropdown.
 */
const Header: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Disney+" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navItem}>
          <FaHome className={styles.navIcon} />
          <span className={styles.navText}>Home</span>
        </Link>
        <Link to="/search" className={styles.navItem}>
          <FaSearch className={styles.navIcon} />
          <span className={styles.navText}>Search</span>
        </Link>
        <Link to="/watchlist" className={styles.navItem}>
          <FaPlus className={styles.navIcon} />
          <span className={styles.navText}>Watchlist</span>
        </Link>
        <Link to="/movies" className={styles.navItem}>
          <FaFilm className={styles.navIcon} />
          <span className={styles.navText}>Movies</span>
        </Link>
        <Link to="/tv-shows" className={styles.navItem}>
          <FaTv className={styles.navIcon} />
          <span className={styles.navText}>Series</span>
        </Link>
        <Link to="/originals" className={styles.navItem}>
          <FaStar className={styles.navIcon} />
          <span className={styles.navText}>Originals</span>
        </Link>
      </nav>
      <div className={styles.profileContainer} onClick={toggleDropdown}>
        <img src={profilePic} alt="Profile" className={styles.profileImage} />
      </div>
    </header>
  );
};

export default Header;
