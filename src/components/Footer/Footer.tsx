/**
 * @fileoverview Displays the footer section of the app with links and branding.
 * 
 * @copyright 2024 Onur Sasmaz
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module Footer
 * 
 * @description This file defines the Footer component, which displays the footer section with links and branding.
 */

import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.png"; 

/**
 * Footer component to display the footer section of the app with links and branding.
 */
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Onur+" className={styles.logo} />
      </div>
      <div className={styles.links}>
        <a href="#">Onur+ Terms of Use</a>
        <a href="#">Subscriber Agreement</a>
        <a href="#">Privacy Policy</a>
        <a href="#">US State Privacy Rights Notice</a>
        <a href="#">Do Not Sell or Share My Personal Information</a>
        <a href="#">Help</a>
        <a href="#">Closed Captioning</a>
        <a href="#">Supported Devices</a>
        <a href="#">Gift Onur+</a>
        <a href="#">About Us</a>
        <a href="#">Onur+ Partner Program</a>
        <a href="#">Interest-based Ads</a>
      </div>
      <div className={styles.copyright}>
        ©Onur+. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
