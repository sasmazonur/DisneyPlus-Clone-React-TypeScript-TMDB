/**
 * @fileoverview Provides logging functions for the application.
 * 
 * @copyright 2024 Onur Sasmaz
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module Logger
 * 
 * @description This file provides functions for logging messages and errors to the console.
 */

/**
 * Logs a message to the console.
 * @param message - The message to log.
 */
export const log = (message: string) => {
    console.log(message);
  };
  
  /**
   * Logs an error to the console.
   * @param error - The error to log.
   */
  export const logError = (error: Error) => {
    console.error(error);
  };
  