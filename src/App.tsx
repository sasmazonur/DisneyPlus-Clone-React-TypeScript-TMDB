/**
 * @fileoverview Main entry point of the Disney+ clone application.
 * 
 * @copyright 2024 Onur Sasmaz
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module App
 * 
 * @description This file sets up routing, lazy loading of components, error boundary handling, and user context.
 */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { UserProvider } from './contexts/UserContext';

// Lazy-loaded components using React's lazy and import() syntax
const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const TVShows = lazy(() => import('./pages/TVShows'));
const Profile = lazy(() => import('./pages/Profile'));
const Search = lazy(() => import('./pages/Search'));
const Watchlist = lazy(() => import("./pages/Watchlist"));
const Originals = lazy(() => import("./pages/Originals"));
const MovieDetail = lazy(() => import('./pages/MovieDetail/MovieDetail'));
const TVShowDetail = lazy(() => import('./pages/TVShowDetail/TVShowDetail'));

const App: React.FC = () => {
  return (
    <UserProvider> {/* Provides user context throughout the app */}
      <Router> {/* Sets up client-side routing */}
        <ErrorBoundary> {/* Catches errors in components */}
          <Header /> {/* Renders the header component */}
          <Suspense fallback={<div>Loading...</div>}> {/* Shows loading message during component loading */}
            <Routes> {/* Declares application routes */}
              <Route path="/" element={<Home />} /> 
              <Route path="/movies" element={<Movies />} /> 
              <Route path="/watchlist" element={<Watchlist />} /> 
              <Route path="/tv-shows" element={<TVShows />} /> 
              <Route path="/originals" element={<Originals />} /> 
              <Route path="/profile" element={<Profile />} /> 
              <Route path="/search" element={<Search />} /> 
              <Route path="/movie/:id" element={<MovieDetail />} />
              <Route path="/tv-show/:id" element={<TVShowDetail />} /> 
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </UserProvider>
  );
};

export default App;
