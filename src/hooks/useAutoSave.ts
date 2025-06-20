import { useEffect } from 'react';

export const useAutoSave = <T>(
  key: string,
  data: T,
  delay: number = 1000 // Default delay of 1 second
): void => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        localStorage.setItem(key, JSON.stringify(data));
        console.log(`Auto-saved data for key: ${key}`);
      } catch (error) {
        console.error('Error auto-saving data:', error);
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [key, data, delay]);
};

// Helper function to load saved data
export const loadSavedData = <T>(key: string, defaultValue: T): T => {
  try {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : defaultValue;
  } catch (error) {
    console.error('Error loading saved data:', error);
    return defaultValue;
  }
}; 