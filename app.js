function getWeather() {
    const city = document.getElementById('cityInput').value;

    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    const weatherData = generateWeatherData(city);
    displayWeather(weatherData);
    displayForecast();
}

// Function to generate random weather data
function generateWeatherData(city) {
    const weatherConditions = ['Clear', 'Cloudy', 'Rain', 'Thunderstorm', 'Snow'];
    const randomCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    const randomTemp = (Math.random() * 20 + 10).toFixed(1); // Random temperature between 10°C and 30°C
    const randomHumidity = Math.floor(Math.random() * 100); // Random humidity percentage
    const randomWindSpeed = (Math.random() * 10).toFixed(1); // Random wind speed between 0 m/s and 10 m/s

    return {
        cityName: city,
        temperature: randomTemp,
        description: randomCondition,
        humidity: randomHumidity,
        windSpeed: randomWindSpeed,
    };
}

// Function to display the current weather data
function displayWeather(data) {
    document.getElementById('cityName').textContent = `Weather in ${data.cityName}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.temperature}°C`;
    document.getElementById('weatherDescription').textContent = `Condition: ${data.description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.humidity}%`;
    document.getElementById('windSpeed').textContent = `Wind Speed: ${data.windSpeed} m/s`;
}

// Function to display the 5-day forecast (simulated)
function displayForecast() {
    const forecastContainer = document.getElementById('forecastContainer');
    forecastContainer.innerHTML = ''; // Clear previous forecast

    const weatherConditions = ['Clear', 'Cloudy', 'Rain', 'Thunderstorm', 'Snow'];

    for (let i = 1; i <= 5; i++) {
        const randomCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
        const randomTemp = (Math.random() * 20 + 10).toFixed(1); // Random temperature between 10°C and 30°C
        const date = new Date();
        date.setDate(date.getDate() + i);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });

        const forecastCard = document.createElement('div');
        forecastCard.classList.add('forecast-day');
        forecastCard.innerHTML = `
            <h4>${dayName}</h4>
            <img src="https://via.placeholder.com/50" alt="${randomCondition}">
            <p>${randomTemp}°C</p>
            <p>${randomCondition}</p>
        `;

        forecastContainer.appendChild(forecastCard);
    }
}