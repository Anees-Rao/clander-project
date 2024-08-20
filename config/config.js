require('dotenv').config();

module.exports = {
  apiKey: process.env.CALENDARIFIC_API_KEY,
  apiUrl: 'https://calendarific.com/api/v2',
  cacheTTL: parseInt(process.env.CACHE_TTL, 10) || 86400,
};
