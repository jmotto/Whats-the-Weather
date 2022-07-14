var apiKey = "ccb1e206c1162d91b5c8a0942ad7ff43";

var formEl = document.querySelector("#search-form");
var todayContainer = document.querySelector("#today");
var forcastContainer = document.querySelector("#forcast");
var searchHistoryContainer = document.querySelector("#search-history");
var historyCities= [];


// Store search history
if(localStorage.getItem("history")) {
    historyCities = JSON.parse(localStorage.getItem("history"))
}

//  Submit the form to fetch weather information

function getCity() {
  fetch().then(function () {});
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  var value = document.querySelector('#search-input').value;
  console.log(value);
  fetchGeolocation(value)
});



// Fetch Geolocation Data (Geocoding API)

function fetchGeolocation(cityName) {
  var request = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;

  fetch(request)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      fetchOneCallWeather(data[0].lat, data[0].lon)
      console.log(data[0].name)
      historyCities.push(data[0].name)
      localStorage.setItem("history", JSON.stringify(historyCities))
      
    });
}

// Fetch Weather Data (Onecall)

// Access lat and lon from data
function fetchOneCallWeather(lat, lon) {
  var request = `http://api.openweathermap.org/data/2.5/onecall?appid=ccb1e206c1162d91b5c8a0942ad7ff43&lat=${lat}&lon=${lon}&units=imperial`;

     // Call fetchOneCallWeather and pass through the lat and lon
  fetch(request)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      // Render/Display the weather data
      renderCurrentDay(data.current)
      
    });
}

function renderCurrentDay(currentWeather) {
    console.log(currentWeather)
}

