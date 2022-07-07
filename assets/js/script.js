var apiKey = "";

//  Submit the form to fetch weather information

    // Fetch the city name from the text <input>

    //  Call the `fetchGeolocation` and pass the city name

// Handle button clickls to fetch weather information

    //  Get the city name from the clicked button's (event.target) data-city data attribute

// Fetch Geolocation Data (Geocoding API)
function fetchGeolocation (cityName) {

    var request = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=ccb1e206c1162d91b5c8a0942ad7ff43`;

    fetch(request) 
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            console.log(data);

            // Access lat and lon from data

            // Call fetchOneCallWeather and pass through the lat and lon
        });
    }


    fetchGeolocation("Santa Rosa");
    fetchGeolocation("Seattle");

    // Fetch Weather Data (Onecall)
    function fetchOneCallWeather(lat, lon) {
        var request = `https://api.openweathermap.org/data/2.5/onecall?appid=ccb1e206c1162d91b5c8a0942ad7ff43&${lat}&${lon}&units=imperial&exclude=minutely,hourly`

        fetch(request) 
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            // Render/Display the weather data 
        });

    }

    fetchOneCallWeather();