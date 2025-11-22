const apiKey = '0da8614da8ca24fa4657f04e431f7967';

const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const resultsDiv = document.getElementById('results');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');

function showLoading() {
    loadingDiv.classList.remove('hidden');
    errorDiv.classList.add('hidden');
    resultsDiv.innerHTML = '';
}

function hideLoading() {
    loadingDiv.classList.add('hidden');
}

function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
}

function renderResults(data) {
    const html = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    resultsDiv.innerHTML = html;
}

function fetchWeather(city) {
    showLoading();

    const apiUrl =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log("Fetching URL:", apiUrl);

    fetch(apiUrl)
        .then(response => {
            console.log("Status:", response.status);
            if (!response.ok) {
                throw new Error("City not found or network error");
            }
            return response.json();
        })
        .then(data => {
            console.log("Data received:", data);
            hideLoading();
            renderResults(data);
        })
        .catch(err => {
            hideLoading();
            console.error("Error:", err);
            showError(err.message);
        });
}

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (!city) {
        showError("Please enter a city name");
        return;
    }
    fetchWeather(city);
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchBtn.click();
});
