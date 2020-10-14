


// AJAX Call 

$(document).ready(function() {

    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=ca4e78b3375f645709261c5f1e72d71f",
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });


  
//     // Click button

//      $(".button").on("click", function(event) {
       
      
//       var city = $("#sumbit").val().trim();  

//        event.preventDefault();
  
//       var weatherData = $(this).attr("data-weather");
//       var queryURL = "http://api.openweathermap.org/data/2.5/weather?q= "+ city + "&appid=ca4e78b3375f645709261c5f1e72d71f"

      
    
   

//    // Four loop 
//       for (var i = 0; i < cityName + cityWeather.length; i++) {
      
    
//       var city = $("<div>").addclass("weather")
      

      
//       city.append(pOne, pTwo)
     
//       $("#weather").prepend(city);
      
//       }
     
      
//     // Weather card
//       $( "h2" ).text(cityName);
//       $( "p2" ).text("Feels Like: " + cityWeather.feels_like + "°F");
//       $( "p3" ).text("Humidity: " + cityWeather.humidity + " %");
//       $( "p5" ).text("Tempurature: " + cityWeather.temp + "°F");

     

  
//      })


  
    })
    
