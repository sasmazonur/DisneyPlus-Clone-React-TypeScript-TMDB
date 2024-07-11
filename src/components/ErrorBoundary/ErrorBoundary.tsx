/**
 * @fileoverview Defines styles for the ErrorBoundary component.
 * 
 * @copyright 2024 Onur Sasmaz
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module ErrorBoundaryStyles
 * 
 * @description This file contains CSS styles for the ErrorBoundary component, including error message styling.
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';
import styles from './ErrorBoundary.module.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * ErrorBoundary component to catch JavaScript errors anywhere in the child component tree,
 * log those errors, and display a fallback UI instead of the component tree that crashed.
 */
class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo); // Log the error for debugging purposes
  }

  render() {
    if (this.state.hasError) {
      return <div className={styles.error}>Something went wrong.</div>; // Display fallback UI
    }

    return this.props.children; // Render children components if no error
  }
}

export default ErrorBoundary;
