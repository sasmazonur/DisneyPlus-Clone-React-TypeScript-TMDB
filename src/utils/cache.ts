/**
 * @fileoverview Implements a simple caching mechanism to store and retrieve API responses.
 * 
 * @copyright 2024 Onur Sasmaz
 * 
 * @license Educational Use License
 * 
 * Permission is granted to use, modify, and distribute this project for educational purposes only.
 * Commercial use is strictly prohibited. For commercial use, please contact the author.
 * 
 * @module Cache
 * 
 * @description This file defines a Cache class that stores data with an expiry time and provides methods to set and get cached items.
 */

interface CacheItem {
  data: any;         // Data stored in the cache item
  expiry: number;    // Expiry timestamp for when the item should expire
}

// Define a Cache class to manage the caching logic
class Cache {
  private cache: { [key: string]: CacheItem } = {}; // Private property to store cached items
  private defaultExpiry: number;                   // Private property for default expiry time

  // Constructor initializes the Cache with a default expiry time (default: 15 minutes)
  constructor(defaultExpiry: number = 15 * 60 * 1000) { 
    this.defaultExpiry = defaultExpiry;
  }

  // Method to set a new item in the cache
  set(key: string, data: any, expiry?: number): void {
    this.cache[key] = {
      data,                                           // Store provided data
      expiry: Date.now() + (expiry || this.defaultExpiry), // Calculate expiry timestamp
    };
  }

  // Method to retrieve an item from the cache
  get(key: string): any | null {
    const item = this.cache[key]; // Get the cached item by key
    if (item && item.expiry > Date.now()) { // Check if item exists and not expired
      return item.data;         // Return cached data
    } else {
      delete this.cache[key];   // Delete expired or non-existent item from cache
      return null;              // Return null when item is expired or not found
    }
  }
}


const cache = new Cache();
export default cache;
