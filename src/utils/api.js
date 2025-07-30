import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

if (!apiKey) {
  console.error('❌ REACT_APP_API_KEY is undefined. Did you restart the dev server?');
}

export const request = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: apiKey,
  },
});
