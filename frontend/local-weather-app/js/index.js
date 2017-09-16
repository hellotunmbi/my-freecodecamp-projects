var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var tempUnit = 'C';
var currentTempInCelsius;

$( document ).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  $("#unit").click(function () {
    var currentTempUnit = $("#unit").text();
    var newTempUnit = currentTempUnit == "C" ? "F" : "C";
    $("#unit").text(newTempUnit);
    if (newTempUnit == "F") {
      var fahTemp = Math.round(parseInt($("#temp").text()) * 9 / 5 + 32);
      $("#temp").text(fahTemp + " " + String.fromCharCode(176));
    } else {
      $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
    }
  });
  
})

function getWeather(lat, lon) {
  var urlString = api + lat + "&" + lon;
  $.ajax({
    url: urlString, success: function (result) {
      $("#city").text(result.name + ", ");
      $("#country").text(result.sys.country);
      currentTempInCelsius = Math.round(result.main.temp * 10) / 10;
      $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
      $("#tempunit").text(tempUnit);
      $("#description").text(result.weather[0].main);
      IconGen(result.weather[0].main);
    }
  });
}

function IconGen(description) {
  var description = description.toLowerCase()
  switch (description) {
    case 'drizzle':
      addIcon(description)
      break;
    case 'clouds':
      addIcon(description)
      break;
    case 'rain':
      addIcon(description)
      break;
    case 'snow':
      addIcon(description)
      break;
    case 'clear':
      addIcon(description)
      break;
    case 'thunderstom':
      addIcon(description)
      break;
    default:
      $('div.clouds').removeClass('hide');
  }
}

function addIcon(description) {
  $('div.' + description).removeClass('hide');
}