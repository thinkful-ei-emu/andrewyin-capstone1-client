require('dotenv').config();

export default {
  API_ENDPOINT: process.env.API_ENDPOINT || 'http://localhost:8080/api',
  TOKEN_KEY: process.env.TOKEN_KEY || 'totally-secure-secret'
};