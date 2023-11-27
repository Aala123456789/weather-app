const apikey = "1b58d133e76b6f04083fe94dcb83512b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const cityName = document.querySelector('#city');
const btn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const weatherSEC = document.querySelector('.weather')
 
async function checkWeather(city){
    var response = await fetch(apiurl + city + `&appid=${apikey}`)
    if(response.status == 404){
        document.querySelector('.error').style.display="block";
        weatherSEC.style.display="none";

    }
    else{
        var data = await response.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp )+ "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed +" km/h";
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
   else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }

    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    weatherSEC.style.display="block";
    document.querySelector('.error').style.display="none";

        
    }
    

}
btn.addEventListener('click',() =>{
    checkWeather(cityName.value)
})

