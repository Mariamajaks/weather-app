Weather Forecast App

A simple weather application built with HTML, CSS, and JavaScript using the OpenWeatherMap API.

🔗 Live Demo

👉 https://github.com/Mariamajaks/weather-app



📌 Project Overview

This app allows users to search for the current weather in any city worldwide.
It uses AJAX (Fetch API) to retrieve live data from OpenWeatherMap and updates the UI dynamically without reloading the page.

The project demonstrates:

Live REST API integration

Dynamic DOM manipulation

Loading states & error handling

Clean and responsive UI

Deployment using GitHub Pages

🧠 Features
✔ Search by city

Enter any city name (e.g., Helsinki, London, Tokyo) and retrieve live weather data.

✔ Loading spinner

A loading animation appears while fetching live data.

✔ Error handling

Invalid city → “City not found”

Empty input → “Please enter a city name”

Network/API issues → Friendly error messages

✔ Weather details displayed

Temperature (°C)

Weather description

Humidity (%)

Wind speed (m/s)

✔ Works without page reload

Uses JavaScript’s fetch() method for instant UI updates.

🛠️ Technologies Used

HTML5

CSS3

JavaScript (ES6)

Fetch API / AJAX

OpenWeatherMap API

GitHub Pages for deployment

🚀 Deployment Instructions (GitHub Pages)

Create a GitHub repository

Upload your project files (index.html, style.css, script.js)

Add this README.md

Push to GitHub

Go to:
Settings → Pages → Build and Deployment → Source
Select:

Branch: main
Folder: /


Your live link will appear after ~30 seconds.

🔐 API Key Instructions

To run this locally:

Get your API key from https://openweathermap.org/api

Open script.js

Replace:

const apiKey = "YOUR_API_KEY_HERE";


⚠️ Important:
API keys should NOT be exposed publicly.
For public deployment, use a serverless function (Netlify/Vercel) to hide your key.

▶️ How to Use

Open the live app

Type a city

Click Search

View results instantly

Try an invalid city to test error handling

🧪 Example Queries

Helsinki

London

New York

Oslo

Dubai

📽️ Video Demo

(You will add your video link here)

Example:

👉 Demo Video: https://youtu.be/XXXXXXXXXX

The video contains:

Introduction

Project goal

API explanation

Full demo (search, loading, error handling)

Conclusion and learnings

📄 Self-Assessment / Learning Reflection

This project taught me:

How to use the Fetch API to request live data

Handling API errors such as invalid city names

Updating the DOM dynamically

Deploying a web app on GitHub Pages

Understanding API security and the need for a backend to hide keys

Known limitations:

API key is exposed unless a backend proxy is used

Only current weather (no forecast yet)

👨‍💻 Author

Mariam Ajakaiye
Full-Stack Development Student