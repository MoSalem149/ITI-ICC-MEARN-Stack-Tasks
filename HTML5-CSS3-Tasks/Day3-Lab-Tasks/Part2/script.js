// Selectors
const btn = document.querySelector("button");
const cityInput = document.getElementById("city");

btn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) {
    alert("Please enter a city name.");
    return;
  }
  fetchWeather(city);
});

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btn.click();
});

async function fetchWeather(city) {
  btn.textContent = "Loading...";
  btn.disabled = true;

  try {
    // Step 1: Geocoding — city name → lat, lon, country
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`,
    );
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      alert("City not found. Please try another name.");
      return;
    }

    const { name, country, latitude, longitude } = geoData.results[0];

    // Step 2: Weather — lat, lon → temperature, wind speed, time
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
    );
    const weatherData = await weatherRes.json();

    const { temperature, windspeed, time } = weatherData.current_weather;

    // Step 3: Display results
    document.getElementById("cityName").textContent = name;
    document.getElementById("country").textContent = country;
    document.getElementById("temp").textContent = `${temperature} °C`;
    document.getElementById("wind").textContent = `${windspeed} km/h`;
    document.getElementById("time").textContent = time;

    // Show results panel
    document.getElementById("results").style.display = "flex";
  } catch (err) {
    alert("Something went wrong. Please check your connection.");
    console.error(err);
  } finally {
    btn.textContent = "Get Weather";
    btn.disabled = false;
  }
}
