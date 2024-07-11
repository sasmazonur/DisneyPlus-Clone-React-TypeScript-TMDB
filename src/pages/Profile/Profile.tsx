/**
 * @fileoverview Profile page component for displaying and managing user profile information.
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module Profile
 * 
 * @description This file contains the Profile page component, which displays user profile information and allows users to manage their personal details and settings.
 */

import React from 'react';
import styles from './Profile.module.css';
import avatar from '../../assets/images/avatar.png';
/**
 * Profile component to display user profile information and options.
 * It provides options for account settings, privacy settings, help center, and signing out.
 */
const Profile: React.FC = () => {
  return (
    <div className={styles.profilePage}>
      <div className={styles.profileHeader}>
        <img src={avatar} alt="User Avatar" className={styles.avatar} />
        <h1 className={styles.username}>John Doe</h1>
      </div>
      <div className={styles.profileOptions}>
        <button className={styles.optionButton}>Account Settings</button>
        <button className={styles.optionButton}>Privacy Settings</button>
        <button className={styles.optionButton}>Help Center</button>
        <button className={styles.optionButton}>Sign Out</button>
      </div>
    </div>
  );
};

export default Profile;
