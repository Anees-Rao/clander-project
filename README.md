# clanderific
## Overview

This project is a simple RESTful API built with Node.js and Express.js that interacts with the [Calendarific API](https://calendarific.com/) to fetch public holidays for different countries and years. The API also provides a list of supported countries.

## Features

- **Fetch Holidays:** Get public holidays for a specific country and year.
- **List Countries:** Retrieve a list of countries supported by the Calendarific API.


## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- A Calendarific API key (get one from [here](https://calendarific.com/signup))


### Installation
-Run:  npm install
-env: CALENDARIFIC_API_KEY=your_api_key_here
-Run application: npm run dev
-The server will start on http://localhost:3000.
-Test-cases: npm run test

## API endpoints
[GET]localhost:3000/countries
[GET] localhost:3000/holidays?country=PK&year=2024