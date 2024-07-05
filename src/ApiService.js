import axios from 'axios';

const API_URL = 'http://localhost:5000/api/data';

export const getData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (item) => {
  try {
    const response = await axios.post(API_URL, item);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
