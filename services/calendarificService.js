const Calendarific = require('calendarific');
const { apiKey, apiUrl } = require('../config/config');
const axios = require('axios');

// Initialize Calendarific with your API key
const clapi = new Calendarific(apiKey);

// Fetch holidays for a specific country and year
const fetchHolidays = async (country, year) => {
  return new Promise((resolve, reject) => {
    const parameters = { country, year };

    clapi.holidays(parameters, (data) => {
      if (data && data.response && data.response.holidays) {
        resolve(data.response.holidays);
      } else {
        reject(new Error('No holidays found or API error'));
      }
    });
  });
};

// Fetch the list of supported countries
const fetchCountries = async () => {
    try {
      // Note: Check if the endpoint exists or needs to be updated
      const response = await axios.get(`${apiUrl}/countries`, {
        params: { api_key: apiKey },
      });
      return response.data.response.countries;
    } catch (error) {
      console.error('Error fetching countries:', error.message);
      throw new Error('Failed to fetch countries');
    }
  };
  

module.exports = { fetchHolidays, fetchCountries };
