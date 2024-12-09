const apiKey= "a8f0bedcba54f266a47ab0987145255a";
const apiURL= "https://api.openweathermap.org/data/2.5/weather?appid=a8f0bedcba54f266a47ab0987145255a&units=metric&q=";
const searchbox = document.querySelector(".search input")
const searchbutton = document.querySelector(".search button")
const weathericon = document.querySelector(".weather-icon")



async function checkweather(city){
    const response = await fetch(apiURL + city +'&appid=${apiKey}');
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    if(data.weather[0].main == "Clouds"){
        weathericon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "images/rain.png";
    }
   else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "images/mist.png";
    }

}

searchbutton.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})

checkweather()