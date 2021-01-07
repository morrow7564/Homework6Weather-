
let city = $("#searchC").val();


// API Key
var api = "&appid=ca4e78b3375f645709261c5f1e72d71f";
let date = new Date();

$("#searchC").keypress(function(event) { 
	  if (event.keyCode === 13) { 
		event.preventDefault();
		$("#buttSearch").click(); 
	} 
});

$("#buttSearch").on("click", function() {
$('#forecastC5').addClass('show');

  // user city search
  city = $("#searchC").val();
  
  // clear input
  $("#searchC").val("");  

  // API CALL
  
  var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + api;

  $.ajax({
    url: queryUrl,
    method: "GET"
  })
  .then(function (response){

    console.log(response)
    console.log(response.name)
    console.log(response.weather[0].icon)

    let tFahr = (response.main.temp - 273.15) * 1.80 + 32;
    console.log(Math.floor(tFahr))
    console.log(response.main.humidity)
    console.log(response.wind.speed)

    weatherConditions(response);
    weatherForecast(response);
    makeList();

})
});
// function for city list
function makeList() {
let citylist = $("<li>").addClass("list-group-item").text(city);
$(".list").append(citylist);
}

// function to get weather conditions
  function weatherConditions (response) {

    // celsius to fahrenheit
    let tFahr = (response.main.temp - 273.15) * 1.80 + 32;
    tFahr = Math.floor(tFahr);
    $('#presentCity').empty();

    // Get and Set Variables
    var card = $("<div>").addClass("card");
    var cardBody = $("<div>").addClass("card-body");
    var city = $("<h4>").addClass("card-title").text(response.name);
    var cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
    var temps = $("<p>").addClass("card-text current-temp").text("Temperature: " + tFahr + " °F");
    var humidity = $("<p>").addClass("card-text current-humidity").text("Humidity: " + response.main.humidity + "%");
    var wind = $("<p>").addClass("card-text current-wind").text("Wind Speed: " + response.wind.speed + " MPH");
    var image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png")

    // append
    city.append(cityDate, image)
    cardBody.append(city, temps, humidity, wind);
    card.append(cardBody);
    $("#presentCity").append(card)
   
  }



// forecast function
function weatherForecast () {
  
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + api,
    method: "GET"
  }).then(function (response){

    console.log(response)
    console.log(response.dt)
    $('#weather').empty();

    // variable to hold response.list
    let results = response.list;
    console.log(results)

    for (let i = 0; i < results.length; i++) {

      let day = Number(results[i].dt_txt.split('-')[2].split(' ')[0]);
      let hour = results[i].dt_txt.split('-')[2].split(' ')[1];
      console.log(day);
      console.log(hour);

      if(results[i].dt_txt.indexOf("12:00:00") !== -1){
        
        // celsius to fahrenheit 
        let temp = (results[i].main.temp - 273.15) * 1.80 + 32;
        let tFahr = Math.floor(temp);

        var card = $("<div>").addClass("card col-md-2 ml-4 bg-primary text-white");
        var cardBody = $("<div>").addClass("card-body p-3 forecastBody")
        var cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
        var temps = $("<p>").addClass("card-text forecastTemp").text("Temperature: " + tFahr + " °F");
        var humidity = $("<p>").addClass("card-text forecastHumidity").text("Humidity: " + results[i].main.humidity + "%");
        var image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + results[i].weather[0].icon + ".png")

        cardBody.append(cityDate, image, temps, humidity);
        card.append(cardBody);
        $("#weather").append(card);

      }
    }
  });

}