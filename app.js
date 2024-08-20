const express = require('express');
const { getHolidays, getCountries } = require('./controller/holidaysController');

const app = express();

app.get('/holidays', getHolidays);
app.get('/countries', getCountries);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
