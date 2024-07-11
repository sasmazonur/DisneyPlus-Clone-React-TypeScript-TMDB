/**
 * @fileoverview Renders the root component (App.tsx) and the footer of the application.
 * 
 * @copyright 2024 Onur Sasmaz
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module Main
 * 
 * @description This file is responsible for rendering the root component (App.tsx) and the footer of the application.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css';
import Footer from './components/Footer/Footer.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Footer/>
  </React.StrictMode>,
)
