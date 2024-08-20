
const NodeCache = require('node-cache');
const { fetchHolidays, fetchCountries } = require('../services/calendarificService');
const { cacheTTL } = require('../config/config');

const cache = new NodeCache({ stdTTL: cacheTTL });

const getHolidays = async (req, res) => {
  const { country, year } = req.query;
  const cacheKey = `holidays_${country}_${year}`;

  // Check if data is cached
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return res.json(cachedData);
  }
 
 try {
    const holidays = await fetchHolidays(country, year);
    cache.set(cacheKey, holidays);
    res.json(holidays);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCountries = async (req, res) => {
  const cacheKey = 'countries';

  // Check if data is cached
  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    return res.json(cachedData);
  }
  
  try {
    const countries = await fetchCountries();
    cache.set(cacheKey, countries);
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getHolidays, getCountries };
