import axios from 'axios';
import Config from './config';

const instance = (contentType) =>
  axios.create({
    baseURL: Config.BASE_URL,
    headers: {
      'Content-Type': `${contentType}`,
    },
  });

export default instance;
