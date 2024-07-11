/**
 * @fileoverview Handles logging errors to a monitoring service.
 * 
 * @copyright 2024 Onur Sasmaz
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module ErrorHandler
 * 
 * @description This file provides a function to handle and log errors, returning appropriate error messages.
 */

export const handleError = (error: any) => {
    // Log error to monitoring service
    console.error(error);
    return error.response?.data?.message || error.message || 'An error occurred';
  };
  