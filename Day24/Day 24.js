const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

// Task 3: Fetch current weather data
function fetchWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Current Weather Data:", data);
      displayWeather(data);
    })
    .catch((error) => console.error("Error fetching weather data:", error));
}

// Task 4: Display current weather data
function displayWeather(data) {
  const cityName = document.getElementById("cityName");
  const temperature = document.getElementById("temperature");
  const weatherCondition = document.getElementById("weatherCondition");

  cityName.textContent = data.name;
  temperature.textContent = `Temperature: ${data.main.temp}°C`;
  weatherCondition.textContent = `Condition: ${data.weather[0].description}`;
}

// Task 5: Add search functionality
document.getElementById("searchButton").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city) {
    fetchWeather(city);
    fetchForecast(city);
  }
});

// Task 7: Fetch 5-day weather forecast
function fetchForecast(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("5-Day Forecast Data:", data);
      displayForecast(data);
    })
    .catch((error) => console.error("Error fetching forecast data:", error));
}

// Task 8: Display 5-day weather forecast
function displayForecast(data) {
  const forecastContainer = document.getElementById("forecast");
  forecastContainer.innerHTML = "";

  // Extract and display the forecast for each day at noon
  for (let i = 0; i < data.list.length; i += 8) {
    const forecast = data.list[i];
    const forecastDay = document.createElement("div");
    forecastDay.classList.add("forecast-day");

    const date = new Date(forecast.dt_txt).toLocaleDateString();
    const temp = forecast.main.temp;
    const condition = forecast.weather[0].description;
    const icon = forecast.weather[0].icon;

    forecastDay.innerHTML = `
            <p>${date}</p>
            <img src="http://openweathermap.org/img/wn/${icon}.png" alt="${condition}" class="weather-icon">
            <p>${temp}°C</p>
            <p>${condition}</p>
        `;

    forecastContainer.appendChild(forecastDay);
  }
}

// Task 9 & 10: Add icons and animations
// Icons are added using the img tag with the appropriate source URL.
// Animations are handled by the CSS fadeIn keyframes.
