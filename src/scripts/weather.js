// Function: Displays greeting based on current time
function SetSalutation(){

    // Get salutation container from HTML
    var salutation = document.getElementById("salutation");

    // Get current time
    var now = new Date();
    var hrs = now.getHours();

    // Morning greeting (12 AM – 12 PM)
    if(hrs >= 0 && hrs <= 12){
        salutation.innerHTML = "Good Morning <span class='bi bi-sunrise'></span>";
    }
    // Afternoon greeting (12 PM – 5 PM)
    else if(hrs >= 12 && hrs <= 17){
        salutation.innerHTML = "Good Afternoon <span class='bi bi-sun'></span>";
    }
    // Evening greeting (after 5 PM)
    else{
        salutation.innerHTML = "Good Evening <span class='bi bi-moon'></span>";
    }
}


// Function: Fetch weather data from OpenWeather API and update UI
function LoadWeatherData(cityName){

    // Set greeting message when weather loads
    SetSalutation();

    // OpenWeather API URL (metric units for Celsius)
    var API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=22fe6bc50e4f5055e89c1f337b1c309a&units=metric`;

    // Fetch weather data
    fetch(API_URL)

    // Convert API response to JSON
    .then(function(response){
        return response.json();
    })

    // Update UI with received weather data
    .then(function(weatherObject){

        // Display city name
        document.getElementById("lblCity").textContent = weatherObject.name;

        // Display current temperature
        document.getElementById("lblTemp").innerHTML =
        `${weatherObject.main.temp}<sup>&deg;</sup> C`;

        // Display weather description and feels-like temperature
        document.getElementById("lblDescription").innerHTML =
        `${weatherObject.weather[0].description.toUpperCase()}<br>
        Feels like ${weatherObject.main.feels_like}&deg;`;

        // Display humidity value
        document.getElementById("lblHumidity").innerHTML =
        weatherObject.main.humidity + "%";

        // Update humidity progress bar width
        document.getElementById("progressbar").style.width =
        `${weatherObject.main.humidity}%`;

        // Display wind speed and direction
        document.getElementById("lblWindspeed").innerHTML =
        `${weatherObject.wind.speed} m/s<br> ${weatherObject.wind.deg}&deg;`;

        // Show today's date
        var now = new Date();
        document.getElementById("lblDate").innerHTML = now.toDateString();

        // Convert sunrise & sunset timestamps (seconds → milliseconds)
        let sunrise = new Date(weatherObject.sys.sunrise * 1000)
        .toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});

        let sunset = new Date(weatherObject.sys.sunset * 1000)
        .toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});

        // Display sunrise and sunset times
        document.getElementById("lblSunrise").innerHTML = sunrise;
        document.getElementById("lblSunset").innerHTML = sunset;

        // Display minimum temperature
        document.getElementById("lblTempMin").innerHTML =
        `${weatherObject.main.temp_min}<sup>&deg;</sup> C`;

        // Display maximum temperature
        document.getElementById("lblTempMax").innerHTML =
        `${weatherObject.main.temp_max}<sup>&deg;</sup> C`;
    })

    // Handle API or network errors
    .catch(function(error){
        console.error(error);
    });
}


// Function: Called when user searches for a city
function SearchClick(){

    // Get city name entered by user
    var cityName = document.getElementById("txtCity").value;

    // Load weather data for that city
    LoadWeatherData(cityName);
}