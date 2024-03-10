// apiService.js

// URL for user authentication
const AUTH_API_URL = 'http://localhost:7000/products'; // Update with your authentication backend URL

// URL for courses API
const COURSES_API_URL = 'http://localhost:7000/api/courses'; // Update with your courses backend URL

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${AUTH_API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${AUTH_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

export const getAllCourses = async () => {
  try {
    const response = await fetch(`${COURSES_API_URL}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

export const addCourse = async (newCourse) => {
  try {
    const response = await fetch(`${COURSES_API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCourse),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding course:', error);
    throw error;
  }
};

// Add more functions for updating, deleting courses if needed
