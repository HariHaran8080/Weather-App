const apiKey = "cb3ee55afc6b26ec3b5222f173ee47d1"; // replace with your actual key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found or invalid API key");
    }

    const data = await response.json();

    document.getElementById("cityName").innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").innerText = `🌡️ Temp: ${data.main.temp}°C`;
    document.getElementById("description").innerText = `☁️ Condition: ${data.weather[0].description}`;
    document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").innerText = `🌬️ Wind: ${data.wind.speed} km/h`;

    resultDiv.classList.remove("hidden");
  } catch (error) {
    alert(error.message);
    resultDiv.classList.add("hidden");
  }
}
