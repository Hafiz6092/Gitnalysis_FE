import axios from 'axios';

// Modify the authenticateWithGitHub function to accept an additional 'repo' parameter
export const getAuthenticatedUser = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/me`);
      // const response = await axios.get(`http://localhost:8080/api/users/me`);
      console.log('Authenticated User:', response.data);
    } catch (error) {
      console.error('Error fetching authenticated user:', error);
    }
  };

export const getUserRepos = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/me/repos`);
    // const response = await axios.get(`http://localhost:8080/api/users/me/repos`);
      console.log('Authenticated User Repos:', response.data);
      const repoNames = response.data.map(repo => repo.name);
      return repoNames;
    } catch (error) {
      console.error('Error fetching authenticated user:', error);
    }
  };