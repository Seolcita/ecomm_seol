/** @format */

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/ecomm-seol/us-central1/api',
});

export default instance;